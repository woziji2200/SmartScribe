import { mergeAttributes, Node, VueNodeViewRenderer } from '@tiptap/vue-3'
import Component from './MindMapNode.vue'
export default Node.create({
    name: 'mindmap',
    group: 'block',
    // atom: true,
    // inline: true,
    atom: true,
    // group: "inline",
    draggable: true,
    addAttributes() {
        return {
            data: {
                default: '[]',
            },
        }
    },
    parseHTML() {
        return [
            {
                tag: 'vue-mindmap',
            },
        ]
    },
    renderHTML({ node, HTMLAttributes }) {
        // console.log(node.attrs.data);
        return ['vue-mindmap', mergeAttributes(HTMLAttributes)]
    },
    addNodeView() {
        return VueNodeViewRenderer(Component)
    },
})