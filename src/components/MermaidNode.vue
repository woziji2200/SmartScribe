<template>
    <node-view-wrapper class="main-mer" @contextmenu.stop>
        <button class="button print" @click="edit" v-show="!isEdit">编辑</button>
        <button class="button print" @click="save" v-show="isEdit">保存</button>
        <div v-loading="loading" v-show="!isEdit" :id="id" v-html="svg" class="mermaid"></div>
        <textarea v-model="data2" v-show="isEdit" class="edit" name="" id="" cols="30" rows="10"></textarea>
        <!-- <button @click="test">1</button> -->
    </node-view-wrapper>
</template>

<script>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'
import { v4 as uuid } from 'uuid'
import mermaid from 'mermaid'
export default {
    name: 'mermaid',
    components: { NodeViewWrapper, NodeViewContent },
    props: nodeViewProps,
    data() {
        return {
            id: 'm-' + uuid(),
            isEdit: false,
            data2: '',
            svg: null,
            loading: false
        }
    },

    methods: {
        // qwq() {
        //     this.updateAttributes({
        //         data: this.node.attrs.data + 1
        //     })
        // },
        edit() {
            this.isEdit = true;
        },
        async save() {
            this.updateAttributes({
                data: this.data2
            })
            this.isEdit = false;
            this.loading = true;
            try {
                this.svg = (await mermaid.render(this.id + '2', this.data2)).svg;
                this.loading = false;
            } catch (error) {
                document.getElementById(this.id).innerHTML = `<div style="height: 80px; color: #aaa; display: flex; justify-content: center; align-items: center;">渲染失败</div>`;
                this.loading = false;
            }
            // const { svg } = await mermaid.render('graphDiv', this.data2);
            // document.getElementById(`m-${this.id}`).innerHTML = svg;
        },
        test() {
            console.log(this.svg);
        }
    },

    async mounted() {
        // const graphDefinition = 'graph TB\n使用mermaid-->创建您的图表';
        const graphDefinition = this.node.attrs.data;
        this.data2 = graphDefinition;
        this.loading = true;
        setTimeout(() => {
            mermaid.render(this.id + '2', graphDefinition).then(({ svg }) => {
                this.svg = svg;
                this.loading = false;
            }).catch(() => {
                document.getElementById(this.id).innerHTML = `<div style="height: 80px; color: #aaa; display: flex; justify-content: center; align-items: center;">渲染失败</div>`;
                this.loading = false;
            })
        }, 1000);

        // this.$forceUpdate();

        // this.$nextTick(() => {
        //     console.log(document.getElementById(this.id));
        //     document.getElementById(this.id).innerHTML = svg;
        // })
        // document.getElementById(this.id).innerHTML = svg;
        // console.log(this.id);
    },
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

.main-mer:focus {
    /* background-color: #409eff */
}

.edit {
    width: calc(100% - 80px);
    height: 100%;
    resize: none;
    margin: 0 auto;
    padding: 5px;
    /* border: 1px solid #ccc; */
    border: none
}

.edit:focus {
    outline: none;
    border: none;
}

.button {
    position: fixed;
    right: 10px;
    top: 10px;
    padding: 5px 10px;
    background-color: #409eff;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

:deep(svg) {
    /* min-width: 900px; */
    /* max-height: 500px; */
    /* min-width: 900px; */
    font-size: 16px;
    /* 调整字体大小 */
}

.mermaid {
    /* width: 900px; */
    /* margin: 500px; */
    height: 100%;
    min-height: 150px;
    max-width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    /* overflow: scroll; */
}
</style>
