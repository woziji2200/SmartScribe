<template :key="key">
    <node-view-wrapper class="main-mer" @contextmenu.stop>
        <!-- <button @click="test">1</button> -->
        <div>
            <mindmap v-model="data" 
            :branch="rangeList['branch'].value"
            :x-gap="rangeList['x-gap'].value"
            :y-gap="rangeList['y-gap'].value"
            :zoom="checkboxList['zoom'].value"
            :fit-btn="checkboxList['fit-btn'].value"
            :center-btn="checkboxList['center-btn'].value"
            :download-btn="checkboxList['download-btn'].value"
            :drag="checkboxList['drag'].value"
            :edit="checkboxList['edit'].value"
            :add-node-btn="checkboxList['add-node-btn'].value"
            :sharp-corner="checkboxList['sharp-corner'].value"
            :ctm="checkboxList['contextmenu'].value"
            :timetravel="checkboxList['timetravel'].value"
            :locale="locale"
            
            ></mindmap>
        </div>
    </node-view-wrapper>
</template>

<script setup>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'
import { ref, reactive } from 'vue';
import { v4 as uuid } from 'uuid'
import mindmap from 'vue3-mindmap'

function debounce(fn, delay) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}
const data = ref([{
    "name": "如何学习D3",
    "children": [
        {
            "name": "预备知识",
            "children": [
                { "name": "HTML & CSS" },
                { "name": "JavaScript" },

            ]
        },
        {
            "name": "安装",
            "collapse": true,
            "children": [{ "name": "折叠节点" }]
        },
        { "name": "进阶", "left": true },

    ]
}])
const key = ref(0)
const checkboxList = reactive({
    'center-btn': { value: true },
    'fit-btn': { value: true },
    timetravel: { value: true },
    'download-btn': { value: true },
    'add-node-btn': { value: true },
    keyboard: { value: false, disabled: true },
    zoom: { value: true },
    drag: { value: true },
    edit: { value: true },
    contextmenu: { value: true },
    'sharp-corner': { value: false },
    vertical: { value: false, disabled: true }
})
const rangeList = reactive({
    branch: { value: 4, min: 1, max: 6 },
    'x-gap': { value: 84, min: 0, max: 100 },
    'y-gap': { value: 18, min: 0, max: 100 }
})
// import 'vue3-mindmap/dist/style.css'
// export default {
//     name: 'mindmap',
//     components: { NodeViewWrapper, NodeViewContent, mindmap },
//     props: nodeViewProps,
//     data() {
//         return {
//             id: 'm-' + uuid(),
//             data2: [{
//                 "name": "如何学习D3",
//                 "children": [
//                     {
//                         "name": "预备知识",
//                         "children": [
//                             { "name": "HTML & CSS" },
//                             { "name": "JavaScript" },

//                         ]
//                     },
//                     {
//                         "name": "安装",
//                         "collapse": true,
//                         "children": [{ "name": "折叠节点" }]
//                     },
//                     { "name": "进阶", "left": true },

//                 ]
//             }],
//             loading: false,
//             key: 0,
//         }
//     },

//     methods: {

//         edit() {
//             this.isEdit = true;
//         },
//         save() {
//             this.updateAttributes({
//                 data: JSON.stringify(this.data2)
//             })
//         },

//         saveDebounce: debounce(function () {
//             this.save();
//         }, 1000)
//     },

//     async mounted() {
//         // this.data2 = JSON.parse(this.node.attrs.data);
//         // if (this.data2.length === 0) {
//         //     this.data2 = [{
//         //         "name": "如何学习D3",
//         //         "children": [
//         //             {
//         //                 "name": "预备知识",
//         //                 "children": [
//         //                     { "name": "HTML & CSS" },
//         //                     { "name": "JavaScript" },

//         //                 ]
//         //             },
//         //             {
//         //                 "name": "安装",
//         //                 "collapse": true,
//         //                 "children": [{ "name": "折叠节点" }]
//         //             },
//         //             { "name": "进阶", "left": true },

//         //         ]
//         //     }]
//         // }
//         console.log(this.data2);
        

//     },

//     watch: {
//         data2: {
//             handler(val) {
//                 this.key++;
//                 this.saveDebounce();
//             },
//             deep: true
//         }
//     }
// }
</script>
<style>
.Mindmap_container_fgvb6 {
    position: relative;
    height: 100%
}

.Mindmap_container_fgvb6 svg text {
    white-space: pre
}

.Mindmap_container_fgvb6 #Mindmap_svg-wrapper_fgvb6 {
    width: 100%;
    height: 100%
}

.Mindmap_container_fgvb6 .Mindmap_asst-svg_fgvb6 {
    position: absolute;
    width: 0;
    height: 0
}

.Mindmap_svg_fgvb6 {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #eeeef3
}

.Mindmap_svg_fgvb6 path {
    fill: none;
    stroke-linecap: round
}

.Mindmap_svg_fgvb6 text {
    fill: #4b4b4b;
    cursor: default
}

.Mindmap_svg_fgvb6 foreignObject {
    background-color: #fff;
    border: 1px solid #aaa
}

.Mindmap_svg_fgvb6 foreignObject div {
    display: inline-block;
    outline: 0;
    width: max-content;
    min-width: 22px;
    padding: 1px;
    white-space: pre
}

.Mindmap_svg_fgvb6 .Mindmap_trigger_fgvb6 {
    fill: transparent
}

.Mindmap_svg_fgvb6.Mindmap_dragging_fgvb6 .Mindmap_add-btn_fgvb6 {
    visibility: hidden
}

.Mindmap_svg_fgvb6 .Mindmap_add-btn_fgvb6 {
    opacity: 0
}

.Mindmap_svg_fgvb6 .Mindmap_add-btn_fgvb6.Mindmap_hidden_fgvb6 {
    visibility: hidden
}

.Mindmap_svg_fgvb6 .Mindmap_add-btn_fgvb6 rect {
    stroke-width: 1;
    stroke: grey;
    fill: #fff
}

.Mindmap_svg_fgvb6 .Mindmap_add-btn_fgvb6 path {
    fill: #8685ff
}

.Mindmap_svg_fgvb6 .Mindmap_expand-btn_fgvb6 {
    visibility: hidden
}

.Mindmap_svg_fgvb6 .Mindmap_expand-btn_fgvb6:hover rect {
    fill: #fff
}

.Mindmap_svg_fgvb6 .Mindmap_expand-btn_fgvb6:hover circle {
    fill: currentColor
}

.Mindmap_svg_fgvb6 .Mindmap_text_fgvb6>rect {
    opacity: 0;
    fill: rgba(0, 0, 255, .15);
    stroke-width: 1;
    stroke: #fff
}

.Mindmap_svg_fgvb6 .Mindmap_selected_fgvb6>.Mindmap_content_fgvb6>.Mindmap_text_fgvb6>rect {
    opacity: 1
}

.Mindmap_svg_fgvb6 .Mindmap_root_fgvb6.Mindmap_selected_fgvb6>.Mindmap_content_fgvb6>.Mindmap_text_fgvb6>rect {
    stroke-width: 3;
    stroke: rgba(0, 0, 255, .15)
}

.Mindmap_svg_fgvb6 .Mindmap_edited_fgvb6>.Mindmap_content_fgvb6>.Mindmap_text_fgvb6 {
    opacity: 0
}

.Mindmap_svg_fgvb6 .Mindmap_outline_fgvb6>.Mindmap_content_fgvb6>.Mindmap_text_fgvb6>rect {
    opacity: 1;
    fill: transparent;
    stroke-width: 3;
    stroke: rgba(0, 0, 255, .15)
}

.Mindmap_svg_fgvb6 .Mindmap_root_fgvb6>.Mindmap_content_fgvb6>.Mindmap_text_fgvb6>rect {
    opacity: 1;
    fill: #fff
}

.Mindmap_svg_fgvb6 .Mindmap_collapse_fgvb6>.Mindmap_content_fgvb6>.Mindmap_expand-btn_fgvb6 {
    visibility: visible
}

.Mindmap_button-list_fgvb6 {
    position: absolute
}

.Mindmap_button-list_fgvb6.Mindmap_right-bottom_fgvb6 {
    bottom: 0;
    right: 0
}

.Mindmap_button-list_fgvb6.Mindmap_right-top_fgvb6 {
    top: 0;
    right: 0;
    display: flex
}

.Mindmap_button-list_fgvb6 button {
    position: relative;
    cursor: pointer;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    color: #3f51b5
}

.Mindmap_button-list_fgvb6 button::before {
    background-color: currentColor;
    border-radius: inherit;
    content: "";
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: opacity .2s cubic-bezier(.4, 0, .6, 1)
}

.Mindmap_button-list_fgvb6 button:hover::before {
    opacity: .1
}

.Mindmap_button-list_fgvb6 button.Mindmap_disabled_fgvb6 {
    pointer-events: none
}

.Mindmap_button-list_fgvb6 button.Mindmap_disabled_fgvb6 i {
    filter: invert(85%) sepia(20%) saturate(0) hue-rotate(125deg) brightness(86%) contrast(93%)
}

.Mindmap_button-list_fgvb6 button i {
    filter: invert(25%) sepia(40%) saturate(5050%) hue-rotate(227deg) brightness(78%) contrast(74%);
    width: 24px;
    height: 24px
}

.Mindmap_button-list_fgvb6 button i.Mindmap_gps_fgvb6 {
    background-image: url(@/icons/24px/crosshairs-gps.png)
}

.Mindmap_button-list_fgvb6 button i.Mindmap_fit_fgvb6 {
    background-image: url(@/icons/24px/fit-to-page-outline.png)
}

.Mindmap_button-list_fgvb6 button i.Mindmap_download_fgvb6 {
    background-image: url(@/icons/24px/download.png)
}

.Mindmap_button-list_fgvb6 button i.Mindmap_prev_fgvb6 {
    background-image: url(@/icons/24px/prev.png)
}

.Mindmap_button-list_fgvb6 button i.Mindmap_next_fgvb6 {
    background-image: url(@/icons/24px/next.png)
}

.Mindmap_button-list_fgvb6 button i.Mindmap_close_fgvb6 {
    background-image: url(@/icons/24px/close.png)
}

.Contextmenu_container_154ic {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0
}

.Contextmenu_container_154ic>div:first-child {
    width: 100%;
    height: 100%
}

#Contextmenu_menu_154ic {
    position: absolute;
    border-radius: 4px;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
    padding: 4px 4px;
    background-color: #eae9ed;
    color: #3a353d;
    font-weight: 700;
    font-size: small;
    white-space: nowrap
}

#Contextmenu_menu_154ic ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    border-radius: inherit
}

#Contextmenu_menu_154ic ul:not(:last-child)::after {
    display: block;
    content: "";
    background-color: #cbcbcb;
    height: 1px;
    margin: 4px 10px
}

#Contextmenu_menu_154ic ul li {
    position: relative;
    padding: 2px 10px;
    cursor: pointer;
    border-radius: inherit
}

#Contextmenu_menu_154ic ul li::before {
    border-radius: inherit;
    background-color: #000;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: .3s cubic-bezier(.25, .8, .5, 1)
}

#Contextmenu_menu_154ic ul li:not(.Contextmenu_disabled_154ic):hover::before {
    opacity: .09
}

#Contextmenu_menu_154ic ul li.Contextmenu_disabled_154ic {
    color: #aeb2b5;
    pointer-events: none
}
</style>
<style scoped>
.main-mer {
    width: 100%;
    position: relative;
    border: #ccc 1px solid;
    max-height: 500px;
    overflow: auto;
    transform: translateX(0px);
}
</style>
