import { mergeAttributes, Node, VueNodeViewRenderer } from '@tiptap/vue-3'
import Component from './EchartsLine.vue'
export default Node.create({
    name: 'EchartsLine',
    group: 'block',
    // atom: true,
    // inline: true,
    atom: true,
    // group: "inline",
    draggable: true,
    addAttributes() {
        return {
            data: {
                default: '{}',
            },
        }
    },
    parseHTML() {
        return [
            {
                tag: 'vue-echarts-line',
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['vue-echarts-line', mergeAttributes(HTMLAttributes)]
    },
    addNodeView() {
        return VueNodeViewRenderer(Component)
    },
})