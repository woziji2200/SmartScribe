import { Extension } from '@tiptap/core'
import { TextSelection, AllSelection } from '@tiptap/pm/state'
// import { TextSelection, AllSelection } from "prosemirror-state"

export const clamp = (val, min, max) => {
    if (val < min) {
        return min
    }
    if (val > max) {
        return max
    }
    return val
}

const IndentProps = {
    min: 0,
    max: 10,

    more: 2,
    less: -2
}

export function isBulletListNode(node) {
    return node.type.name === 'bullet_list'
}

export function isOrderedListNode(node) {
    return node.type.name === 'order_list'
}

export function isTodoListNode(node) {
    return node.type.name === 'todo_list'
}

export function isListNode(node) {
    return isBulletListNode(node) ||
        isOrderedListNode(node) ||
        isTodoListNode(node)
}

function setNodeIndentMarkup(tr, pos, delta) {
    if (!tr.doc) return tr

    const node = tr.doc.nodeAt(pos)
    if (!node) return tr

    const minIndent = IndentProps.min
    const maxIndent = IndentProps.max

    const indent = clamp(
        (node.attrs.indent || 0) + delta,
        minIndent,
        maxIndent,
    )

    if (indent === node.attrs.indent) return tr

    const nodeAttrs = {
        ...node.attrs,
        indent,
    }

    return tr.setNodeMarkup(pos, node.type, nodeAttrs, node.marks)
}

const updateIndentLevel = (tr, delta) => {
    const { doc, selection } = tr

    if (!doc || !selection) return tr

    if (!(selection instanceof TextSelection || selection instanceof AllSelection)) {
        return tr
    }

    const { from, to } = selection

    doc.nodesBetween(from, to, (node, pos) => {
        const nodeType = node.type

        if (nodeType.name === 'paragraph' || nodeType.name === 'heading') {
            tr = setNodeIndentMarkup(tr, pos, delta)
            return false
        } if (isListNode(node)) {
            return false
        }
        return true
    })

    return tr
}

export const Indent = Extension.create({
    name: 'indent',

    defaultOptions: {
        types: ['heading', 'paragraph'],
        indentLevels: [0, 2, 4, 6, 8, 10],
        defaultIndentLevel: 0,
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    indent: {
                        default: this.options.defaultIndentLevel,
                        renderHTML: attributes => ({
                            style: `text-indent: ${attributes.indent}em !important;`
                        }),
                        parseHTML: element => parseInt(element.style.textIndent) || this.options.defaultIndentLevel,
                    },
                },
            },
        ]
    },

    addCommands() {
        return {
            indent: () => ({ tr, state, dispatch, editor }) => {
                const { selection } = state
                tr = tr.setSelection(selection)
                tr = updateIndentLevel(tr, IndentProps.more)
                console.log(111);

                if (tr.docChanged) {
                    // eslint-disable-next-line no-unused-expressions
                    dispatch && dispatch(tr)
                    return true
                }

                editor.chain().focus().run()

                return false
            },
            outdent: () => ({ tr, state, dispatch, editor }) => {
                const { selection } = state
                tr = tr.setSelection(selection)
                tr = updateIndentLevel(tr, IndentProps.less)

                if (tr.docChanged) {
                    // eslint-disable-next-line no-unused-expressions
                    dispatch && dispatch(tr)
                    return true
                }

                editor.chain().focus().run()

                return false
            },
        }
    },
    addKeyboardShortcuts() {
        return {
            Tab: () => {
                if (!(this.editor.isActive('bulletList') || this.editor.isActive('orderedList'))) {
                    const { state } = this.editor;
                    const { from, to } = state.selection;
                    const startPos = state.doc.resolve(from).start();
                    // console.log(startPos == to);
                    // console.log('Cursor start position:', startPos, to);
                    if (startPos == to)
                        return this.editor.commands.indent()
                }
            },
            'Shift-Tab': () => {
                if (!(this.editor.isActive('bulletList') || this.editor.isActive('orderedList'))) {
                    const { state } = this.editor;
                    const { from, to } = state.selection;
                    const startPos = state.doc.resolve(from).start();
                    // console.log('Cursor start position:', startPos, to);
                    if (startPos == to)
                        return this.editor.commands.outdent()
                }
            },
            Backspace: () => {
                if (!(this.editor.isActive('bulletList') || this.editor.isActive('orderedList'))) {
                    const { state } = this.editor;
                    const { from, to } = state.selection;
                    const startPos = state.doc.resolve(from).start();
                    // console.log('Cursor start position:', startPos, to);
                    if (startPos == to)
                        return this.editor.commands.outdent()
                }
            },
            //   Backspace: () => { if (!(this.editor.isActive('bulletList') || this.editor.isActive('orderedList'))) return this.editor.commands.outdent() },
        }
    },
})
