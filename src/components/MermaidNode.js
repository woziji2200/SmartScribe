import { mergeAttributes, Node, VueNodeViewRenderer } from '@tiptap/vue-3'
import Component from './MermaidNode.vue'
export default Node.create({
    name: 'mermaid',
    group: 'block',
    // atom: true,
    // inline: true,
    atom: true,
    // group: "inline",
    draggable: true,
    addAttributes() {
        return {
            data: {
                default: 'graph TB\n使用mermaid-->创建您的图表',
            },
        }
    },
    parseHTML() {
        return [
            {
                tag: 'vue-mermaid',
            },
        ]
    },
    renderHTML({ node, HTMLAttributes }) {
        // console.log(node.attrs.data);
        return ['vue-mermaid', mergeAttributes(HTMLAttributes)]
    },
    addNodeView() {
        return VueNodeViewRenderer(Component)
    },
})