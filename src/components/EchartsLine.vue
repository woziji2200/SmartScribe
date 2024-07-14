<template>
    <node-view-wrapper class="draw" @contextmenu.stop>

        <div :id='id' v-show="!isEdit" style="width: 100%; height: 300px;"></div>
        <div v-show="isEdit" class="table" style="width: 100%; height: 280px;">
            <div style="display: flex; align-items: baseline">
                <span style="font-size: 12px">图表标题：</span>
                <el-input v-model="data.title" style="width: 100px; margin-bottom: 10px;" size="small"
                    placeholder="图表标题"></el-input>
            </div>

            <hot-table :settings="hotSettings" ref="hotTableComponent"></hot-table>
        </div>
        <button class="button print" @click="edit" v-show="!isEdit">编辑</button>
        <button class="button print" @click="save" v-show="isEdit">保存</button>

        <node-view-content></node-view-content>
    </node-view-wrapper>
</template>

<script>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'
import { v4 as uuid } from 'uuid'
import echarts from './EchartsExport';
import { HotTable } from "@handsontable/vue3";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.css";
import "handsontable/languages/zh-CN"; //中文包
import { shallowReactive, shallowRef } from 'vue';


registerAllModules();

export default {
    name: 'Paper',

    components: {
        NodeViewWrapper, NodeViewContent, HotTable
    },

    props: nodeViewProps,
    setup() {
        const myChart = shallowReactive(null)
    },
    data() {
        return {
            id: uuid(),
            isEdit: false,
            data: {
                title: '',
                xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                series: [[150, 230, 224, 218, 135, 147, 260]]
            },
            // myChart: null,
            hotSettings: {
                data: [],
                contextMenu: ['row_above', 'row_below', 'remove_row', 'clear_column', 'undo', 'redo', 'copy', 'cut'], //自定义选项右键菜单
                height: "250px", //表格高度
                width: '100%',
                rowHeaders: true, //显示行头
                colHeaders: true, //显示列头
                // rowHeights: "30px", //设置行高
                // colWidths: "50px", //设置列宽
                className: "htCenter htMiddle", // 水平垂直居中
                manualColumnMove: true, //列可拖动
                manualRowMove: true, //行可拖动
                manualColumnResize: true, //列可拖拽 调大小
                manualRowResize: true, //行可拖拽 调大小
                autoColumnSize: true, //当值为true且列宽未设置时，自适应列大小
                columnSorting: false, // 排序
                contextMenu: true, //右键菜单
                copyable: true, // 允许键盘复制
                licenseKey: "non-commercial-and-evaluation", //设置许可
                language: "zh-CN",  //设置语言

            }, // 表格设置
        }
    },

    methods: {
        edit() {
            this.isEdit = true;
        },
        save() {
            this.data.xAxis = this.$refs.hotTableComponent.hotInstance.getDataAtRow(0).filter(item => item !== null)
            // 跳过全空行
            // console.log(this.data.series = this.$refs.hotTableComponent.hotInstance.getData());
            this.data.series = this.$refs.hotTableComponent.hotInstance.getData().slice(1).filter(item => item.some(i => i !== null)).map(item => {
                return item
            })
            // this.data.legend = this.$refs.hotTableComponent.hotInstance.getData().map(item => item[0]).filter(item => item !== null)
            console.log(this.$refs.hotTableComponent.hotInstance.getData());
            // console.log(this.data.series);



            this.updateAttributes({
                data: JSON.stringify(this.data)
            })
            this.myChart.setOption({
            title: {
                text: this.data.title
            },
            xAxis: {
                type: 'category',
                data: this.data.xAxis
            },
            yAxis: {
                type: 'value'
            },
            series: this.data.series.map(item => {
                return {
                    type: 'line',
                    data: item
                }
            })
        }, true);
            this.isEdit = false;
        },
        getTableData() {
            let dataCopy = structuredClone(this.data)
            //填充表格，以this.data.xAxis第一行，this.data.series第二行开始
            this.hotSettings.data[0] = dataCopy.xAxis
            for (let i = 0; i < dataCopy.series.length; i++) {
                this.hotSettings.data[i + 1] = dataCopy.series[i]
            }
            // console.log(dataCopy,[dataCopy.xAxis, ...dataCopy.series], this.hotSettings.data);
        }
    },

    mounted() {
        try {
            console.log(this.node.attrs.data);
            this.data = JSON.parse(this.node.attrs.data)
        } catch (error) {
            this.data = {
                title: '',
                xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                series: [[150, 230, 224, 218, 135, 147, 260]]
            }
        }
        // 判断是否有数据
        if (!this.data.xAxis) {
            this.data = {
                title: '',
                xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                series: [[150, 230, 224, 218, 135, 147, 260]]
            }
        }


        const echartsRef = document.getElementById(this.id)
        this.myChart = echarts.init(echartsRef);
        console.log(this.data);
        this.myChart.setOption({
            title: {
                text: this.data.title
            },
            xAxis: {
                type: 'category',
                data: this.data.xAxis
            },
            yAxis: {
                type: 'value'
            },
            series: this.data.series.map(item => {
                return {
                    type: 'line',
                    data: item
                }
            })
        }, true);

        setTimeout(() => {
            const resizeOb = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    echarts.getInstanceByDom(entry.target).resize();
                }
            });
            resizeOb.observe(echartsRef);
        });

        this.getTableData()
    },
}
</script>

<style scoped>
.draw:focus {
    /* background-color: rgb(20, 41, 41) */
}

.draw {
    /* background-color: aqua */
    position: relative;
    width: 100%;
}


.button {
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 5px 10px;
    background-color: #409eff;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.table {
    /* margin-top: 30px; */
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    width: 100%;
    height: 300px;
    border: 1px solid #ccc;
    /* overflow: auto; */
    position: relative;
}
</style>