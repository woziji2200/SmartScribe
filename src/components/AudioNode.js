import { mergeAttributes, Node, VueNodeViewRenderer } from '@tiptap/vue-3'
// import Component from './MermaidNode.vue'
export default Node.create({
    name: 'audio',
    // group: 'block',
    // atom: true,
    inline: true,
    atom: true,
    group: "inline",
    draggable: true,
    addAttributes() {
        return {
            src: {
                default: null,
                parseHTML: element => element.querySelector('source').getAttribute('src'),
            }
        }
    },
    parseHTML() {
        return [
            {
                tag: 'audio',
            },
        ]
    },
    // renderHTML({ node, HTMLAttributes }) {
    //     console.log(node, HTMLAttributes);
    //     return ['audio', mergeAttributes(HTMLAttributes)]
    // },
    renderHTML({ HTMLAttributes }) {
        // console.log(this.options.HTMLAttributes, HTMLAttributes);
        return [
            "audio",
            { controls: true },
            ["source", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)]
        ];
    }
})