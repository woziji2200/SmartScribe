import { mergeAttributes, Node, VueNodeViewRenderer } from '@tiptap/vue-3'
import Component from './EchartsBar.vue'
export default Node.create({
    name: 'EchartsBar',
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
                tag: 'vue-echarts-bar',
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['vue-echarts-bar', mergeAttributes(HTMLAttributes)]
    },
    addNodeView() {
        return VueNodeViewRenderer(Component)
    },
})