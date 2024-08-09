import { mergeAttributes, Node, VueNodeViewRenderer } from '@tiptap/vue-3'
import Component from './TimelineNode.vue'
export default Node.create({
    name: 'timeline',
    // group: 'block',
    // atom: true,
    // inline: true,
    // atom: true,
    group: "block",
    // draggable: true,
    addAttributes() {
        return {
            data: {
                default: null,
                parseHTML: element => element.getAttribute('data'),
            }
        }
    },
    parseHTML() {
        return [
            {
                tag: 'vue-timeline',
            },
        ]
    },
    // renderHTML({ node, HTMLAttributes }) {
    //     console.log(node, HTMLAttributes);
    //     return ['audio', mergeAttributes(HTMLAttributes)]
    // },
    renderHTML({ HTMLAttributes }) {
        // console.log(this.options.HTMLAttributes, HTMLAttributes);
        return ['vue-timeline', mergeAttributes(HTMLAttributes)];
    },
    addNodeView() {
        return VueNodeViewRenderer(Component)
    }
})