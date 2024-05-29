<template>
    <node-view-wrapper class="draw">
        <div :id='id' style="width: 100%; height: 300px;"></div>
        <node-view-content></node-view-content>
    </node-view-wrapper>
</template>

<script>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'
import { v4 as uuid } from 'uuid'
import echarts from './EchartsExport';
export default {
    name: 'Paper',

    components: {
        NodeViewWrapper,NodeViewContent
    },

    props: nodeViewProps,

    data() {
        return {
            id: uuid(),
            data: []
        }
    },

    methods: {

    },

    mounted() {
        try {
            this.data = JSON.parse(this.node.attrs.data)
        } catch (error) {
            this.data = {
                title: 'ECharts 示例',
                legend: ['销量'],
                xAxis: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
                
            }
        }
        const echartsRef = document.getElementById(this.id)
        var myChart = echarts.init(echartsRef);
        myChart.setOption({
            title: {
                text: 'ECharts 示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    },
}
</script>

<style scoped>
.draw:focus{
    /* background-color: rgb(20, 41, 41) */
}
.draw{
    /* background-color: aqua */
}
</style>