import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog,faClipboardList,faBars,faTrashAlt,faPlus, faPen,faParagraph,faHeading,faVolumeHigh,faPause,faPlay,faQuoteLeft,faSearchPlus,faFont, faPlusCircle, faEdit, faFolderTree, faRobot, faColumns, faChartBar, faProjectDiagram, faFilePdf, faFileImport, faFileDownload, faCloudUpload, faFileCirclePlus, faUserEdit, faFileAlt, faUser, faLanguage, faAngleUp, faAngleDown, faHome, faUndo, faRedo, faBold, faItalic, faUnderline, faStrikethrough, faLink, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faSubscript, faSuperscript, faListUl, faListOl, faTasks, faCode, faChartPie, faPencilRuler, faTable, faArrowLeft, faArrowRight,faAngleLeft,faAngleRight, faArrowUp, faArrowDown, faMinus, faSquare, faWindowRestore, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import Chat from 'vue3-beautiful-chat'
const pinia = createPinia()
// app.use(pinia)
library.add(faCog, faClipboardList,faBars,faTrashAlt, faPlus,faAngleLeft,faAngleRight, faPen,faParagraph, faHeading, faVolumeHigh,faPause,faPlay,faQuoteLeft,faSearchPlus, faFont, faPlusCircle, faEdit, faEdit, faFolderTree, faRobot, 
    faColumns, faChartBar, faProjectDiagram, faFilePdf, faFileImport, faFileDownload, 
    faCloudUpload, faFileCirclePlus, faUser, faUserEdit, faLanguage, faAngleUp, faAngleDown,
     faHome, faFileAlt, faUndo, faRedo, faBold, faItalic,
    faUnderline, faStrikethrough, faLink, faAlignLeft, faAlignCenter,
    faAlignRight, faAlignJustify, faSubscript, faSuperscript, faListUl,
    faListOl, faTasks, faCode, faChartPie, faPencilRuler, faTable,
    faArrowLeft, faArrowRight, faArrowUp, faArrowDown, faMinus, faSquare, faWindowRestore, faTimes, faCaretDown)


let app = createApp(App)

app.use(pinia).use(router).use(ContextMenu).use(ElementPlus,{
    locale: zhCn,
  }).use(Chat).component('font-awesome-icon', FontAwesomeIcon)
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