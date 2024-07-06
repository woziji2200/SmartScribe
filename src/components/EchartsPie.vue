<template>
    <node-view-wrapper class="draw" @contextmenu.stop>

        <div :id='id' v-show="!isEdit" style="width: 100%; height: 350px;"></div>
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

registerAllModules();

export default {
    name: 'Paper',

    components: {
        NodeViewWrapper, NodeViewContent, HotTable
    },

    props: nodeViewProps,

    data() {
        return {
            id: uuid(),
            isEdit: false,
            data: {
                title: '',
                legend: [],
                xAxis: [],
                series: [{ name: '', data: [] }]
            },
            myChart: null,
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
            console.log(this.$refs.hotTableComponent.hotInstance.getData()); // 这是个二维数组，第一行是name，第二行是value，把第一行第i个元素和第二行第i个元素组成一个对象
            this.data.data = []
            for(let i = 0; i < this.$refs.hotTableComponent.hotInstance.getData()[0].length; i++) {
                this.data.data.push({
                    name: this.$refs.hotTableComponent.hotInstance.getData()[0][i],
                    value: this.$refs.hotTableComponent.hotInstance.getData()[1][i]
                })
            }
            console.log(this.data.data);


            this.updateAttributes({
                data: JSON.stringify(this.data)
            })
            this.myChart.setOption({
            title: {
                text: this.data.title,
                left: 'center'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    type: 'pie',
                    radius: '50%',
                    data: this.data.data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }, true);
            this.isEdit = false;
        },
        getTableData() {
            let dataCopy = structuredClone(this.data)
            // 获取name作为第一行，value作为第二行，并填充到hotSettings.data
            let name = dataCopy.data.map(item => item.name)
            let value = dataCopy.data.map(item => item.value)

            this.hotSettings.data[0] = name
            this.hotSettings.data[1] = value

            console.log(this.hotSettings);


        
        }
    },

    mounted() {
        this.data = JSON.parse(this.node.attrs.data)
        // 判断是否有数据
        if (!this.data.data) {
            this.data = {
                title: '图表示例',
                data: [
                    { value: 100, name: '数据项1' },
                    { value: 50, name: '数据项2' },
                    { value: 120, name: '数据项3' },
                    { value: 60, name: '数据项4' },
                    { value: 150, name: '数据项5' }
                ],
            }
        }

        const echartsRef = document.getElementById(this.id)
        this.myChart = echarts.init(echartsRef);
        this.myChart.setOption({
            title: {
                text: this.data.title,
                left: 'center'
            },
            // tooltip: {
            //     trigger: 'item'
            // },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    type: 'pie',
                    radius: '50%',
                    data: this.data.data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }, true);

        // document.getElementById(this.id + 1).addEventListener('resize', () => {
        //     this.myChart.resize()
        // })

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