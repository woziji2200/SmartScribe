<template>
    <node-view-wrapper class="draw">
        <div class="draw-tools print">
            <el-color-picker v-model="color" size="small" />
            <!-- <span>笔刷粗细：</span>
            <el-input type="number"  min="1" max="10" size="small" v-model="size"></el-input> -->
            <el-button size="small" class="print" @click="clear">
                清空
            </el-button>
        </div>
        <svg viewBox="0 0 500 250" ref="canvas">
            <template v-for="item in lines">
                <path v-if="item.id !== id" :key="item.id" :d="item.path" :id="`id-${item.id}`" :stroke="item.color"
                    :stroke-width="item.size" />
            </template>
        </svg>
    </node-view-wrapper>
</template>

<script>
import PickColors from 'vue-pick-colors'
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'
import * as d3 from 'd3'
import { v4 as uuid } from 'uuid'

const getRandomElement = list => {
    return list[Math.floor(Math.random() * list.length)]
}

export default {
    name: 'Paper',

    components: {
        NodeViewWrapper,
    },

    props: nodeViewProps,

    data() {
        return {
            color: getRandomElement([
                '#A975FF',
            ]),
            size: 2,
            svg: null,
            path: null,
            points: [],
            drawing: false,
            id: uuid(),
            lines: []
        }
    },

    methods: {
        onStartDrawing(event) {
            this.drawing = true
            this.points = []
            this.path = this.svg
                .append('path')
                .data([this.points])
                .attr('id', `id-${this.id}`)
                .attr('stroke', this.color)
                .attr('stroke-width', this.size)

            const moveEvent = event.type === 'mousedown'
                ? 'mousemove'
                : 'touchmove'

            this.svg.on(moveEvent, this.onMove)
        },

        onMove(event) {
            event.preventDefault()
            this.points.push(d3.pointers(event)[0])
            this.tick()
        },

        onEndDrawing() {
            this.svg.on('mousemove', null)
            this.svg.on('touchmove', null)

            if (!this.drawing) {
                return
            }

            this.drawing = false
            this.svg.select(`#id-${this.id}`).remove()
            this.id = uuid()
        },

        tick() {
            requestAnimationFrame(() => {
                this.path.attr('d', points => {
                    const path = d3.line().curve(d3.curveBasis)(points)
                    // const lines = this.node.attrs.lines.filter(item => item.id !== this.id)
                    const lines = this.lines.filter(item => item.id !== this.id)
                    this.lines = [
                        ...lines,
                        {
                            id: this.id,
                            color: this.color,
                            size: this.size,
                            path,
                        },
                    ]
                    // this.debounce(() => {
                    this.updateAttributes({
                        lines: JSON.stringify(this.lines)
                    })
                    // }, 1000)
                    return path
                })
            })
        },

        clear() {
            this.updateAttributes({
                lines: '[]',
            })
            this.lines = []
        },

        debounce(fn, delay) {
            let timer = null
            return function (fn, delay) {
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    fn()
                }, delay)
            }
        }
    },

    mounted() {
        this.svg = d3.select(this.$refs.canvas)

        this.svg
            .on('mousedown', this.onStartDrawing)
            .on('mouseup', this.onEndDrawing)
            .on('mouseleave', this.onEndDrawing)
            .on('touchstart', this.onStartDrawing)
            .on('touchend', this.onEndDrawing)
            .on('touchleave', this.onEndDrawing)
        try {
            // console.log(this.node.attrs.lines);
            this.lines = JSON.parse(this.node.attrs.lines)
        } catch (error) {
            this.lines = []
        }
    },
}
</script>

<style scoped>
.draw {
    margin: 10px;
}

.draw svg {
    background: #f1f3f5;
    cursor: crosshair;
}

.draw path {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.draw-tools {
    display: flex;
    font-size: 12px;
    align-items: center;
    gap: 10px;
    /* justify-content: space-between; */
    /* margin-bottom: 10px; */
}

.draw-tools span {
    margin-right: 10px;
}

.draw-tools .el-input {
    width: 50px;
}
</style>