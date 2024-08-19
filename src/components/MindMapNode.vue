<template>
    <node-view-wrapper class="main-mer" @contextmenu.stop>
        <!-- <button @click="test">1</button> -->
        <div :style="{ height: divH + 'px' }">
            <mindmap :key="key" v-model="data2" :branch="rangeList['branch'].value" :x-gap="rangeList['x-gap'].value"
                :y-gap="rangeList['y-gap'].value" :zoom="checkboxList['zoom'].value"
                :fit-btn="checkboxList['fit-btn'].value" :center-btn="checkboxList['center-btn'].value"
                :download-btn="checkboxList['download-btn'].value" :drag="checkboxList['drag'].value"
                :edit="checkboxList['edit'].value" :add-node-btn="checkboxList['add-node-btn'].value"
                :sharp-corner="checkboxList['sharp-corner'].value" :ctm="checkboxList['contextmenu'].value"
                :timetravel="checkboxList['timetravel'].value" style="height: 100%;" @update:model-value="onChange">
            </mindmap>
            <div class="line" id="changeHeight"></div>
        </div>
    </node-view-wrapper>
</template>

<script>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'
import { ref, reactive, defineComponent } from 'vue';
import { v4 as uuid } from 'uuid'
import mindmap from '../components/mindmap/dist/vue3-mindmap.umd'
import '../components/mindmap/dist/style.css'

function debounce(fn, delay) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}

export default {
    name: 'mindmap',
    components: { NodeViewWrapper, NodeViewContent, mindmap },
    props: nodeViewProps,
    data() {
        return {
            id: 'm-' + uuid(),
            data2: [{
                "name": "如何学习D3",
            }],
            rangeList: {
                branch: { value: 4, min: 1, max: 6 },
                'x-gap': { value: 84, min: 0, max: 100 },
                'y-gap': { value: 18, min: 0, max: 100 }
            },
            checkboxList: {
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
            },
            loading: false,
            divH: 300,
            key: 0
        }
    },

    methods: {

        edit() {
            this.isEdit = true;
        },
        save() {
            this.updateAttributes({
                data: JSON.stringify(this.data2)
            })
        },

        saveDebounce: debounce(function () {
            this.save();
        }, 1000),
        onChange(val) {
            this.save()
        }
// 
    },

    async mounted() {
        this.data2 = JSON.parse(this.node.attrs.data);
        this.key++
        console.log(this.data2, 111);
        
        if (this.data2.length === 0) {
            console.log('data2', this.data2);
            
            this.data2 = [{
                "name": "创建流程图",
                "children": [
                    {
                        "name": "第一步...",
                        "children": [
                            { "name": "1. xxxx" },
                            { "name": "2. xxxx" },
                        ]
                    },
                    {
                        "name": "第二步...",
                    }
                ]
            }]
            this.key++
        }
        this.$nextTick(()=>{
            // let line = document.getElementById('changeHeight')
            // line.addEventListener('mousedown', (e) => {
            //     let y = e.clientY
            //     let h = this.divH
            //     document.onmousemove = (e) => {
            //         let move = e.clientY - y
            //         this.divH = h + move
            //     }
            //     document.onmouseup = () => {
            //         document.onmousemove = null
            //         document.onmouseup = null
            //     }
            // })

        })
        console.log(this.data2);


    }
}
</script>

<style scoped>
.main-mer {
    width: 100%;
    position: relative;
    border: #ccc 1px solid;
    max-height: 500px;
    overflow: auto;
    transform: translateX(0px);
}
/* .line {
    width: 100%;
    height: 10px;
    background: #f0f0f0;
    cursor: ns-resize;
} */
</style>
