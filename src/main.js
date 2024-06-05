import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faLanguage,faAngleUp,faAngleDown,faHome, faUndo, faRedo, faBold, faItalic, faUnderline, faStrikethrough, faLink, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faSubscript, faSuperscript, faListUl, faListOl, faTasks, faCode, faChartPie, faPencilRuler, faTable, faArrowLeft, faArrowRight, faArrowUp, faArrowDown, faMinus, faSquare, faWindowRestore, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia  } from 'pinia'
const pinia = createPinia()
// app.use(pinia)
library.add(faUser, faLanguage, faAngleUp,faAngleDown,faHome, faFileAlt, faUndo, faRedo, faBold, faItalic,
    faUnderline, faStrikethrough, faLink, faAlignLeft, faAlignCenter,
    faAlignRight, faAlignJustify, faSubscript, faSuperscript, faListUl,
    faListOl, faTasks, faCode, faChartPie, faPencilRuler, faTable,
    faArrowLeft, faArrowRight, faArrowUp, faArrowDown, faMinus, faSquare, faWindowRestore, faTimes, faCaretDown)


createApp(App).use(pinia).use(router).use(ContextMenu).use(ElementPlus).component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

// function solveResizeObserverLoopLimitExceededErr() {
//     const _ResizeObserver = window.ResizeObserver;
//     window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
//         constructor(callback) {
//             callback = debounce(callback, 16);
//             super(callback);
//         }
//     }
// }

// solveResizeObserverLoopLimitExceededErr()