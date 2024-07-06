const { Extension } = require('@tiptap/core');
const { imageUploader, getFileCache } = require('./imageUploader');

// const { imageUploader } = require('prosemirror-image-uploader');

const ImageUploadExtension = Extension.create({
    name: 'imageUploadExtension',

    addOptions() {
        return {
            id: () =>
                Math.random()
                    .toString(36)
                    .substring(7),
            acceptMimes: ['image/jpeg', 'image/gif', 'image/png', 'image/jpg'],
            upload: () => Promise.reject('【ImageUploadExtension】参数 upload 为必填项'),
            ignoreDomains: [],
        };
    },

    addCommands() {
        return {
            uploadImage: options => ({ tr }) => {
                // const plugin = getPluginInstances()
                // plugin?.beforeUpload(options.file, -1)
                tr.setMeta('uploadImages', options.file);
                return true;
            },
            getFileCache: key => () => {
                return getFileCache(key);
            },
        };
    },

    addProseMirrorPlugins() {
        const options = this.options;
        return [imageUploader(options)];
    },
});

module.exports = ImageUploadExtension;
