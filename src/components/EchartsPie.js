import { mergeAttributes, Node, VueNodeViewRenderer } from '@tiptap/vue-3'
import Component from './EchartsPie.vue'
export default Node.create({
    name: 'EchartsPie',
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
                tag: 'vue-echarts-pie',
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['vue-echarts-pie', mergeAttributes(HTMLAttributes)]
    },
    addNodeView() {
        return VueNodeViewRenderer(Component)
    },
})