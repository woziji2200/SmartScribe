<template>
    <node-view-wrapper>
        <div class="timeline-main">
            <div class="preview">
                <span class="preview-day"  v-for="(i, index) in data.value.timeline" :key="i.id">
                    <div class="task" :class="'preview-'+j.status" v-for="(j, index2) in i.task" :key="j.id">
                        {{ j.title }}
                    </div>
                </span>
            </div>
            <div class="timeline"  :id="id">
                <div class="task" v-for="(i, index) in data.value.timeline" :key="i.id">
                    <div class="task-line" :class="'task-line-' + getStatus(i.task)">
                        <div v-if="index != data.value.timeline.length - 1" class="task-line-add task-line-add2" @click="addDay(i.id)">
                            <font-awesome-icon icon="plus" />
                        </div>
                    </div>
                    <div class="day-task" :class="'task-' + j.status" v-for="(j, index2) in i.task" :key="j.id">
                        <div class="task-add task-add-top" v-if="index2 == 0" @click="addTask(i.id, 'first')">
                            <font-awesome-icon icon="plus" />
                        </div>
                        <div class="task-title">
                            <span>{{ j.title }}</span>
                            <font-awesome-icon @click="deleteTask(j.id)" class="icon" icon="trash-alt" />
                        </div>
                        <div class="task-time">{{ j.time }}</div>
                        <div class="task-status">
                            <span v-if="j.status === 'done'">状态：已完成</span>
                            <span v-if="j.status === 'ongoing'">状态：进行中</span>
                            <span v-if="j.status === 'failed'">状态：失败</span>
                            <span v-if="j.status === 'pending'">状态：待处理</span>
                            <span v-if="j.status === 'prime'">状态：等待中</span>
                        </div>
                        <div class="task-desc">{{ j.desc }}</div>
                        <div class="task-add" @click="addTask(j.id)">
                            <font-awesome-icon icon="plus" />
                        </div>
                    </div>
                </div>
                <div class="task-line-add" @click="addDay('end')">
                    <font-awesome-icon icon="plus" />
                </div>

            </div>

            <div>

            </div>
        </div>
    </node-view-wrapper>
</template>

<script setup>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'
import { ref, onMounted, reactive, computed } from "vue";
import { v4 as uuid } from 'uuid'
const id = ref(uuid());
const data = reactive({ value: undefined });
const props = defineProps(nodeViewProps);
data.value = props.node.attrs.data || '';
if (!data.value) {
    data.value = {
        timeline: [
            {
                id: uuid(),
                task: [
                    {
                        title: '任务1111111111111111111111111111111',
                        time: '2021-09-011111111111111111111111111111111111111',
                        status: 'done',
                        desc: '任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务简介',
                        content: '任务内容富文本富文本',
                        id: uuid(),

                    }, {
                        title: '任务1',
                        time: '2021-09-01',
                        status: 'prime',
                        desc: '任务简介',
                        content: '任务内容富文本富文本',
                        id: uuid(),

                    }
                ]
            }, {
                id: uuid(),
                task: [
                    {
                        id: uuid(),
                        title: '任务1',
                        time: '2021-09-01',
                        status: 'ongoing',
                        desc: '任务简介',
                        content: '任务内容富文本富文本',
                    }
                ]
            }, {
                id: uuid(),
                task: [
                    {
                        id: uuid(),
                        title: '任务1',
                        time: '2021-09-01',
                        status: 'failed',
                        desc: '任务简介',
                        content: '任务内容富文本富文本',
                    }
                ]
            }, {
                id: uuid(),
                task: [
                    {
                        id: uuid(),
                        title: '任务1',
                        time: '2021-09-01',
                        status: 'pending',
                        desc: '任务简介',
                        content: '任务内容富文本富文本',
                    }
                ]
            }, {
                id: uuid(),
                task: [
                    {
                        id: uuid(),
                        title: '任务1',
                        time: '2021-09-01',
                        status: 'prime',
                        desc: '任务简介',
                        content: '任务内容富文本富文本',
                    }
                ]
            }
        ],
        comments: [
            {
                time: '2021-09-01',
                content: '评论内容富文本富文本',
            }
        ]
    }
}
console.log(data.value);

function getStatus(task) {
    // 优先级 > 待处理 > 进行中 > 失败 > 已完成
    let status = 'prime';
    task.forEach(i => {
        if (i.status === 'done') {
            status = 'done';
        } else if (i.status === 'ongoing' && status !== 'done') {
            status = 'ongoing';
        } else if (i.status === 'failed' && status !== 'done' && status !== 'ongoing') {
            status = 'failed';
        } else if (i.status === 'pending' && status !== 'done' && status !== 'ongoing' && status !== 'failed') {
            status = 'pending';
        }
    })
    return status;
}

function addTask(id, position){
    if(position == 'first'){
        data.value.timeline.forEach(i => {
            if(i.id == id){
                i.task.unshift({
                    title: '任务1',
                    time: '2021-09-01',
                    status: 'prime',
                    desc: '任务简介',
                    content: '任务内容富文本富文本',
                    id: uuid(),
                })
            }
        })
        return 
    }
    data.value.timeline.forEach(i => {
        i.task.forEach((j, index) => {
            if (j.id === id) {
                i.task.splice(index + 1, 0, {
                    title: '任务1',
                    time: '2021-09-01',
                    status: 'prime',
                    desc: '任务简介',
                    content: '任务内容富文本富文本',
                    id: uuid(),
                })
            }
        })
    })
}
function addDay(id){
    if(id == 'end'){
        data.value.timeline.push({
            id: uuid(),
            task: [
                {
                    title: '任务1',
                    time: '2021-09-01',
                    status: 'prime',
                    desc: '任务简介',
                    content: '任务内容',
                    id: uuid(),
                }
            ]
        })
        return 
    }
    // add day after id
    data.value.timeline.forEach((i, index) => {
        if (i.id === id) {
            data.value.timeline.splice(index + 1, 0, {
                id: uuid(),
                task: [
                    {
                        title: '任务1',
                        time: '2021-09-01',
                        status: 'prime',
                        desc: '任务简介',
                        content: '任务内容富文本富文本',
                        id: uuid(),
                    }
                ]
            })
        }
    })
}

function deleteTask(id){
    data.value.timeline.forEach(i => {
        i.task.forEach((j, index) => {
            if (j.id === id) {
                i.task.splice(index, 1)
            }
        })
    })
    data.value.timeline = data.value.timeline.filter(i => i.task.length > 0)
}

</script>

<style lang="scss" scoped>
.timeline-main {
    // width: 100%;
    box-shadow: 0px 0px 20px 0px #ececec;
    margin: 30px 20px;
}

.task-done {
    background-color: #f0fff5;

    &::before {
        background-image: linear-gradient(to top, #1cf086, #16f7a1);
    }

    &:hover::before {
        box-shadow: 0 0 10px 0 #1cf086;
    }
}

.task-ongoing {
    background-color: #f0f5ff;

    &::before {
        background-image: linear-gradient(to top, #1c86f0, #167af7);
    }

    &:hover::before {
        box-shadow: 0 0 10px 0 #1c86f0;
    }
}

.task-failed {
    background-color: #fff0f0;

    &::before {
        background-image: linear-gradient(to top, #f01c1c, #f71616);
    }

    &:hover::before {
        box-shadow: 0 0 10px 0 #f01c1c;
    }
}

.task-pending {
    background-color: #fff5f0;

    &::before {
        background-image: linear-gradient(to top, #f0a01c, #f77a16);
    }

    &:hover::before {
        box-shadow: 0 0 10px 0 #f0a01c;
    }
}

.task-prime {
    background-color: #f5f5f5;

    &::before {
        background-image: linear-gradient(to top, #6b6b6b, #6b6b6b);
    }

    &:hover::before {
        box-shadow: 0 0 10px 0 #6b6b6b;
    }
}

.task-line-done {
    &::before {
        border: solid 3px #09d36e;
    }
}

.task-line-ongoing {
    &::before {
        border: solid 3px #1c86f0;
    }
}

.task-line-failed {
    &::before {
        border: solid 3px #f01c1c;
    }
}

.task-line-pending {
    &::before {
        border: solid 3px #f0a01c;
    }
}

.task-line-prime {
    &::before {
        border: solid 3px #6b6b6b;
    }
}

.preview-prime {
    // background-color: #919191;
    border: #919191 solid 1px;
    color: #919191;
    &:hover {
        background-color: #6b6b6b;
        color: #fff;
    }
}
.preview-done {
    // background-color: #21d67c;
    // background-color: #09d36e;
    border: #09d36e solid 1px;
    color: #09d36e;
    &:hover {
        background-color: #09d36e;
        color: #fff;
    }

}
.preview-ongoing {
    // background-color: #1c86f0;
    // background-color: #167af7;
    border: #167af7 solid 1px;
    color: #167af7;
    &:hover {
        background-color: #167af7;
        color: #fff;
    }
}
.preview-failed {
    // background-color: #f01c1c;
    // background-color: #f71616;
    border: #f71616 solid 1px;
    color: #f71616;
    &:hover {
        background-color: #f71616;
        color: #fff;
    }
}
.preview-pending {
    // background-color: #f0a01c;
    // background-color: #f77a16;
    border: #f77a16 solid 1px;
    color: #f77a16;
    &:hover {
        background-color: #f77a16;
        color: #fff;
    }
}


.timeline {
    display: flex;
    overflow-y: auto;
    justify-content: flex-start;
    padding: 20px;


    .task {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        min-width: 200px;
        width: 30%;
        position: relative;

        .day-task {
            // background-color: #f0fff5;
            padding: 10px;
            padding-left: 14px;
            margin-bottom: 20px;
            position: relative;

            &::before {
                content: '';
                width: 2px;
                height: 100%;
                // background-image: linear-gradient(to top, #1cf086, #16f7a1);
                display: inline-block;
                position: absolute;
                left: 0px;
                top: 0px;
                transition: all 0.3s;
            }

            &:hover::before {
                // box-shadow: 0 0 10px 0 #1cf086;
            }
        }

        &:hover .task-line::before {
            // box-shadow: 0 0 10px 0 #1cf086;
        }

        .task-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            // align-items: center;

            width: 100%;
            
            .icon {
                cursor: pointer;
                color: #bdbdbd;
                transition: all 0.3s;
                width: 16px;
                height: 16px;
                // flex-shrink: 0;
                &:hover {
                    color: #666;
                }
            }
            span {
                flex: 1 1 auto;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 10px;
            }
        }

        .task-time {
            font-size: 12px;
            color: #999;
            margin-bottom: 5px;
        }

        .task-status {
            font-size: 12px;
            color: #999;
            margin-bottom: 5px;
        }

        .task-desc {
            font-size: 14px;
            color: #666;
            margin-bottom: 10px;
        }

        .task-add {
            height: 16px;
            background-color: #dbdbdb66;
            cursor: pointer;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s;
            position: absolute;
            right: 0;
            left: 0;
            bottom: -18px;
            transition: all 0.2s;
            opacity: 0;
            &:hover {
                opacity: 1;
                background-color: #a7a7a766;
            }
        }

        .task-add-top {
            top: -16px;
            bottom: auto;
        }
    }

    .task-line {
        height: 2px;
        background-color: transparent;
        position: relative;
        border-top: dashed 2px #cecece;
        margin-bottom: 20px;
        margin-left: 23px;
    }

    .task-line::before {
        content: '';
        width: 15px;
        height: 15px;
        background-color: #ffffff;
        // border: solid 3px #09d36e;
        border-radius: 50%;
        position: absolute;
        top: -11px;
        left: -32px;
        transition: all 0.3s;

    }


    .task-line-add {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #d6d6d6;
        cursor: pointer;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -11px;
        margin-left: -8px;
        transition: all 0.3s;
        flex-shrink: 0;
    }
    .task-line-add2{
        position: absolute;
        right: 0;
        margin-top: -13px;
        opacity: 0;
        transition: all 0.2s;
        &:hover {
            opacity: 1;
        }
    }


    .task-line-add:hover {
        background-color: #a7a7a7;
    }

    // 滚动条样式
    &::-webkit-scrollbar {
        width: 20px;
        height: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: rgb(228, 228, 228);
    }

    &::-webkit-scrollbar-thumb {
        background: #6b6b6b;
        border-radius: 25px;
    }
}

.preview {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    margin: 0 20px;
    border-bottom: 1px solid #eaeaea;
    .preview-day {
        display: flex;
        flex-direction: column;
        margin-right: 24px;
        position: relative;
        margin-bottom: 10px;
        // color: #fff;        
        .task {
            // background-color: #f5f5f5;
            padding: 5px 10px;
            font-size: 14px;
            max-width: 150px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            border-radius: 999px;
            cursor: pointer;
            transition: all 0.2s;
            margin-bottom: 4px;
            &:last-child {
                margin-right: 0;
                margin-bottom: 0;
            }
        }
        &:last-child {
            margin-right: 0;
            margin-bottom: 0;
        }
        &::after {
            content: '';
            width: 0px;
            height: 0px;
            position: absolute;
            top: 8px;
            right: -18px;
            border-left: #6b6b6b 5px solid;
            border-top: transparent 5px solid;
            border-bottom: transparent 5px solid;
            border-right: transparent 5px solid;
        }
        &:last-child::after {
            display: none;
        }


    }
}
</style>