import Heading from '@tiptap/extension-heading'
import { mergeAttributes } from '@tiptap/core'
import { v4 as uuid } from 'uuid'
const Heading2 = Heading.extend({
    addAttributes() {
        return {
            level: {
                default: 1,
                rendered: false,
            },
            id: {
                default: null,
                // renderHTML: attributes => ({
                //     id: `${attributes.id}`,
                // }),
                parseHTML: element => element.getAttribute('id'),
            }
        }
    },
    // addOptions(){
    //     return {
    //         ...this.parent?.(),
    //         id: null
    //     }
    // },
    renderHTML(a) {
        const { node, HTMLAttributes } = a
        const hasLevel = this.options.levels.includes(node.attrs.level)
        const level = hasLevel
            ? node.attrs.level
            : this.options.levels[0]
        let uuid2 = ''
        if (!node.attrs.id) {
            uuid2 = 'h-' + uuid().substring(0, 8)
            node.attrs.id = uuid2
        } else {
            uuid2 = node.attrs.id
        }

        return [`h${level}`, mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, { id: uuid2 }), 0]
    },
})
export default Heading2