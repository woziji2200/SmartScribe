import { Fragment, Node, Slice } from 'prosemirror-model';
import 'prosemirror-replaceattrs'; /// register it
import { Plugin, PluginKey } from '@tiptap/pm/state';
// import { EditorView } from 'prosemirror-view';
// Assuming you have a corresponding JavaScript module for this import
// import { ImageUploaderPluginOptions } from './imageUploadExtension'

let plugin = null;
let fileCache = {};

export function imageUploader(options) {
  plugin = new ImageUploaderPlugin(options);
  const dummy = {};

  return new Plugin({
    // key: new PluginKey('imageUploader'),
    props: {
      handleDOMEvents: {
        keydown(view) {
          return !plugin?.setView(view);
        },
        drop(view) {
          return !plugin?.setView(view);
        },
        focus(view) {
          return !plugin?.setView(view);
        }
      },
      handlePaste(view, event) {
        return plugin?.setView(view).handlePaste(event) || false;
      },
      transformPasted(slice) {
        /// Workaround for missing view is provided above.
        return plugin?.transformPasted(slice) || slice;
      },
      handleDrop(view, event) {
        return plugin?.setView(view).handleDrop(event) || false;
      }
    },
    state: {
      init() {
        return dummy;
      },
      apply(tr, _value, _oldState, newState) {
        const filesOrUrls = tr.getMeta('uploadImages');

        if (filesOrUrls) {
          const arr =
            typeof filesOrUrls === 'string' || filesOrUrls instanceof File
              ? [filesOrUrls]
              : Array.from(filesOrUrls); /// Probably a FileList or an array of files/urls

          // give some time for editor, otherwise history plugin forgets history
          setTimeout(() => {
            arr.forEach((item, i) =>
              plugin?.beforeUpload(item, newState.selection.from + i)
            )
            tr.setMeta('uploadImages', undefined);
          }, 10);
        }

        return dummy;
      }
    }
  });
}

export class ImageUploaderPlugin {
  constructor(config) {
    this.config = config;
  }

  handleDrop(event) {
    if (!event.dataTransfer?.files.length) return;

    const coordinates = this.view.posAtCoords({
      left: event.clientX,
      top: event.clientY
    });
    if (!coordinates) return;

    const imageFiles = Array.from(event.dataTransfer.files).filter(file =>
      this.config.acceptMimes.includes(file.type)
    );
    if (!imageFiles.length) return;

    imageFiles.forEach((file, i) => {
      this.beforeUpload(file, coordinates.pos + i);
    });

    return true;
  }

  transformPasted(slice) {
    const imageNodes = [];

    const children = [];
    slice.content.forEach(child => {
      let newChild = child;

      /// if the node itself is image
      if (child.type.name === 'image' && !this.isOurOwnPic(child.attrs)) {
        newChild = this.newUploadingImageNode(child.attrs);
        imageNodes.push({
          id: newChild.attrs.uploadId,
          url: child.attrs.src || child.attrs['data-src']
        });
      } else {
        child.descendants((node, pos) => {
          if (node.type.name === 'image' && !this.isOurOwnPic(node.attrs)) {
            const imageNode = this.newUploadingImageNode(node.attrs);
            newChild = newChild.replace(
              pos,
              pos + 1,
              new Slice(Fragment.from(imageNode), 0, 0)
            );
            imageNodes.push({
              id: imageNode.attrs.uploadId,
              url: node.attrs.src || node.attrs['data-src']
            });
          }
        });
      }

      children.push(newChild);
    });

    imageNodes.forEach(({ url, id }) => this.uploadImageForId(url, id));

    return new Slice(
      Fragment.fromArray(children),
      slice.openStart,
      slice.openEnd
    );
  }

  handlePaste(event) {
    const items = Array.from(event.clipboardData?.items || []);

    /// Clipboard may contain both html and image items (like when pasting from ms word, excel)
    /// in that case (if there is any html), don't handle images.
    if (items.some(x => x.type === 'text/html')) {
      return false;
    }

    const image = items.find(item => this.config.acceptMimes.includes(item.type));

    if (image) {
      this.beforeUpload(image.getAsFile(), this.view.state.selection.from);
      return true;
    }

    return false;
  }

  beforeUpload(fileOrUrl, at) {
    const tr = this.view.state.tr;
    if (!tr.selection.empty) {
      tr.deleteSelection();
    }

    if (at < 0) {
      at = this.view.state.selection.from;
    }

    /// insert image node.
    const node = this.newUploadingImageNode({ src: fileOrUrl });
    tr.replaceWith(at, at, node);
    this.view.dispatch(tr);

    /// upload image for above node
    this.uploadImageForId(fileOrUrl, node.attrs.uploadId);
  }

  newUploadingImageNode(attrs = {}) {
    const uploadId = this.config.id();
    fileCache[uploadId] = attrs.src || attrs['data-src'];
    return this.view.state.schema.nodes.imagePlaceholder.create({
      ...attrs,
      src: '',
      uploadId
    });
  }

  async uploadImageForId(fileOrUrl, id) {
    const getImagePositions = () => {
      const positions = [];
      this.view.state.doc.descendants((node, pos) => {
        if (node.type.name === 'imagePlaceholder' && node.attrs.uploadId === id) {
          positions.push({ node, pos });
        }
      });

      return positions;
    };

    let file = fileOrUrl;
    if (typeof file === 'string') {
      file = await webImg2File(file);
    }

    const url = file && (await this.config
      .upload(file, id)
      .catch(console.warn));

    const imageNodes = getImagePositions();
    if (!imageNodes.length) {
      return;
    }

    /// disallow user from undoing back to 'uploading' state.
    let tr = this.view.state.tr;

    imageNodes.forEach(({ node, pos }) => {
      const newNode = this.view.state.schema.nodes.image.create({
        ...node.attrs,
        width: node.attrs.width,
        src: url || ''
      });
      tr.replaceWith(pos, pos + 1, newNode);
    });

    this.view.dispatch(tr);
    fileCache[id] = '';
  }

  setView(view) {
    this.view = view;
    return this;
  }

  isOurOwnPic(attrs) {
    const src = attrs.src || attrs['data-src'] || '';
    return (this.config.ignoreDomains || []).some((domain) => src.includes(domain));
  }
}


function webImg2File(imgUrl) {
  function imgToBase64(url) {
    let canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d'),
      img = new Image;

    img.crossOrigin = 'Anonymous';
    img.setAttribute('referrerpolicy', 'no-referrer');
    img.src = url;
    return new Promise((resolve, reject) => {
      img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        ctx?.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL('image/png');
        resolve(dataURL);
        canvas = null;
      };
      img.onerror = reject;
    });
  }

  function base64toFile(base, filename) {
    var arr = base.split(',');
    var mime = arr[0].match(/:(.*?);/)[1];
    var suffix = mime.split("/")[1];
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    //转换成file对象
    return new File([u8arr], `${filename}.${suffix}`, { type: mime });
  }

  return imgToBase64(imgUrl).then(base => {
    return base64toFile(base, '网络图片');
  }).catch(() => {
    return null;
  });
}


// export function getPluginInstances() {
//   return plugin
// }
export function getFileCache(key) {
  return fileCache[key];
}
