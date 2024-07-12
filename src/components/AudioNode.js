import { mergeAttributes, Node, VueNodeViewRenderer } from '@tiptap/vue-3'
import Component from './AudioNode.vue'
export default Node.create({
    name: 'audio',
    // group: 'block',
    // atom: true,
    // inline: true,
    // atom: true,
    group: "block",
    // draggable: true,
    addAttributes() {
        return {
            src: {
                default: null,
                parseHTML: element => element.getAttribute('src'),
            }
        }
    },
    parseHTML() {
        return [
            {
                tag: 'vue-audio',
            },
        ]
    },
    // renderHTML({ node, HTMLAttributes }) {
    //     console.log(node, HTMLAttributes);
    //     return ['audio', mergeAttributes(HTMLAttributes)]
    // },
    renderHTML({ HTMLAttributes }) {
        // console.log(this.options.HTMLAttributes, HTMLAttributes);
        return ['vue-audio', mergeAttributes(HTMLAttributes)];
    },
    addNodeView() {
        return VueNodeViewRenderer(Component)
    }
})