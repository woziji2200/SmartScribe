import { mergeAttributes, Node, VueNodeViewRenderer } from '@tiptap/vue-3'
import Component from './AIPlanNode.vue'
export default Node.create({
    name: 'ai-plan',
    // group: 'block',
    // atom: true,
    // inline: true,
    // atom: true,
    group: "block",
    // draggable: true,
    addAttributes() {
        return {
            text: {
                default: null,
                parseHTML: element => element.getAttribute('text')
            },
            type: {
                default: null,
                parseHTML: element => element.getAttribute('type'),
            },
            url: {
                default: null,
                parseHTML: element => element.getAttribute('url'),
            },
            args: {
                default: null,
                parseHTML: element => element.getAttribute('args'),
            },
        }
    },
    parseHTML() {
        return [
            {
                tag: 'ai-plan',
            },
        ]
    },
    // renderHTML({ node, HTMLAttributes }) {
    //     console.log(node, HTMLAttributes);
    //     return ['audio', mergeAttributes(HTMLAttributes)]
    // },
    renderHTML({ HTMLAttributes }) {
        // console.log(this.options.HTMLAttributes, HTMLAttributes);
        return ['ai-plan2'
            // , mergeAttributes(HTMLAttributes)
        ];
    },
    addNodeView() {
        return VueNodeViewRenderer(Component)
    }
})