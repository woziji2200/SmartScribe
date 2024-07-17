import { VueRenderer } from '@tiptap/vue-3'
import tippy from 'tippy.js'
import { request } from '@/axios'
import CommandsList from './CommandsList.vue'
import { useStore } from '@/store'
import { Base64 } from 'js-base64'
export default {
    items: ({ query }) => {
        return [
            {
                title: '一级标题',
                command: ({ editor, range }) => {
                    editor
                        .chain()
                        .focus()
                        .deleteRange(range)
                        .setNode('heading', { level: 1 })
                        .run()
                },
            },
            {
                title: '二级标题',
                command: ({ editor, range }) => {
                    editor
                        .chain()
                        .focus()
                        .deleteRange(range)
                        .setNode('heading', { level: 2 })
                        .run()
                },
            },
            {
                title: '三级标题',
                command: ({ editor, range }) => {
                    editor
                        .chain()
                        .focus()
                        .deleteRange(range)
                        .setNode('heading', { level: 3 })
                        .run()
                },
            },{
                title: '无序列表',
                command: ({ editor, range }) => {
                    editor
                        .chain()
                        .focus()
                        .deleteRange(range)
                        .toggleBulletList()
                        .run()
                }
            },{
                title: '有序列表',
                command: ({ editor, range }) => {
                    editor
                        .chain()
                        .focus()
                        .deleteRange(range)
                        .toggleOrderedList()
                        .run()
                }
            },
            {
                title: 'AI续写',
                command: ({ editor, range }) => {
                    const store = useStore()
                    const qwq = editor.state.doc.textBetween(range.from, range.to, ' ')
                    editor.chain().focus().deleteRange(range).run()
                    store.ctrl = new AbortController()
                    store.isAI = true
                    const { state } = editor;
                    const { from, to } = state.selection;
                    const startPos = state.doc.resolve(from).start();

                    const text = state.doc.textBetween(0, to, '\n')
                    console.log(qwq);
                    request({
                        url: '/api/ai/continue/',
                        method: 'POST',
                        isEventSource: true,
                        signal: store.ctrl.signal, // AbortSignal
                        body: { content: text, goal: '正常续写' },
                        headers: {
                            'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
                            'content-type': 'application/json',
                        },
                        onmessage: (ev) => {
                            if (ev.data != '[DONE]') {
                                editor.chain().focus().insertContent(Base64.decode(ev.data)).run()
                            }
                        },
                        onerror: (ev) => {
                            store.ctrl.abort()
                            store.isAI = false
                            throw ev
                        },
                        onclose: () => {
                            store.isAI = false
                        }
                    })
                },
            },
            {
                title: 'AI全文摘要',
                command: ({ editor, range }) => {
                    const store = useStore()
                    const qwq = editor.state.doc.textBetween(range.from, range.to, ' ')
                    editor.chain().focus().deleteRange(range).run()
                    store.ctrl = new AbortController()
                    store.isAI = true
                    const text = editor.getText()
                    console.log(qwq);
                    request({
                        url: '/api/ai/abstract/',
                        method: 'POST',
                        isEventSource: true,
                        signal: store.ctrl.signal, // AbortSignal
                        body: { content: text},
                        headers: {
                            'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
                            'content-type': 'application/json',
                        },
                        onmessage: (ev) => {
                            if (ev.data != '[DONE]') {
                                editor.chain().focus().insertContent(Base64.decode(ev.data)).run()
                            }
                        },
                        onerror: (ev) => {
                            store.ctrl.abort()
                            store.isAI = false
                            throw ev
                        },
                        onclose: () => {
                            store.isAI = false
                        }
                    })
                },
            },
            // {
            //     title: 'test',
            //     command: ({ editor, range }) => {
            //         const { state } = editor;
            //         const { from, to } = state.selection;
            //         const startPos = state.doc.resolve(from).start();
            //         console.log('Cursor start position:', startPos, to);
            //     },
            // }
        ].filter(item => item.title.toLowerCase().startsWith(query.toLowerCase())).slice(0, 10)
    },

    render: () => {
        let component
        let popup

        return {
            onStart: props => {
                component = new VueRenderer(CommandsList, {
                    // using vue 2:
                    // parent: this,
                    // propsData: props,
                    props,
                    editor: props.editor,
                })

                if (!props.clientRect) {
                    return
                }

                popup = tippy('body', {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: 'manual',
                    placement: 'bottom-start',
                })
            },

            onUpdate(props) {
                component.updateProps(props)

                if (!props.clientRect) {
                    return
                }

                popup[0].setProps({
                    getReferenceClientRect: props.clientRect,
                })
            },

            onKeyDown(props) {
                if (props.event.key === 'Escape') {
                    popup[0].hide()

                    return true
                }

                return component.ref?.onKeyDown(props)
            },

            onExit() {
                popup[0].destroy()
                component.destroy()
            },
        }
    },
}