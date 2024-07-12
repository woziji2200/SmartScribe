import { mergeAttributes, Node, VueNodeViewRenderer } from '@tiptap/vue-3'

import Component from './Draw.vue'

export default Node.create({
    name: 'paper',

      group: 'block',

    //   atom: true,
    // inline: true,
    atom: true,
    // group: "inline",
    draggable: true,
    addAttributes() {
        return {
            lines: {
                default: [],
            },
        }
    },

    parseHTML() {
        return [
            {
                tag: 'div[data-type="paper"]',
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'paper' })]
    },

    addNodeView() {
        return VueNodeViewRenderer(Component)
    },
})