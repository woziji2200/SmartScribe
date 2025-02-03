<template>
    <node-view-wrapper class="border-box" @contextmenu.stop>
        <div class="bubble-menu2" :style="{ maxHeight: isShowAI ? 'none' : '20px' }">
            <div class="close" @click="editor.commands.deleteSelection()">
                <font-awesome-icon icon="times" class="bubble-menu2-close"></font-awesome-icon>
            </div>

            <div class="show" @click="isShowAI = !isShowAI">
                <font-awesome-icon icon="angle-down" :style="{ transform: isShowAI ? 'none' : 'rotate(-90deg)' }"
                    class="bubble-menu2-icon"></font-awesome-icon>
            </div>

            <div>
                <div class="ai-title"><span>AI+ 任务规划</span><span
                        v-if="(AIPlanTodayLoading || AIPlanNextLoading) && !isShowAI" class="loading"></span></div>
                <div v-show="!isShowAI" style="height: 50px"></div>
                <!-- <button @click="test">111</button> -->
                <el-tabs class="demo-tabs" v-model="LayoutTabs">
                    <el-tab-pane label="规划当日日程" name="first">
                        <div v-loading="AIPlanTodayLoading">
                            <textarea v-model="AIPlanTodayGoal" placeholder="今天的工作任务"
                                style="margin-bottom: 10px;width: 98%;" rows="3" class="textarea-plus"></textarea>

                        </div>
                        <span class="button-plus" @click="AIPlanToday()">
                            {{ AIPlanTodayLoading ? '停止生成' : '开始生成' }}
                        </span>
                        <div class="logo" v-if="AIPlanTodayLoading">已生成{{ AIPlanTodayLoadingCount
                            }}个任务项{{ AIPlanTodayLoadingTitle ? '，当前正在生成：' : '' }}{{ AIPlanTodayLoadingTitle }}</div>

                    </el-tab-pane>
                    <el-tab-pane label="规划未来任务" name="second">
                        <div v-loading="AIPlanNextLoading">
                            <textarea v-model="AIPlanNextGoal" placeholder="未来几天的工作计划"
                                style="margin-bottom: 10px;width: 98%;" rows="3" class="textarea-plus"></textarea>

                        </div>
                        <span class="button-plus" @click="AIPlanNext()">
                            {{ AIPlanNextLoading ? '停止生成' : '开始生成' }}
                        </span>
                        <div class="logo" v-if="AIPlanNextLoading">已生成{{ AIPlanNextLoadingCount
                            }}个任务项{{ AIPlanNextLoadingTitle ? '，当前正在生成：' : '' }}{{ AIPlanNextLoadingTitle }}</div>


                    </el-tab-pane>
                </el-tabs>
                <div class="logo">
                    结果由<img src="../assets/wxyy.jpg" alt="" srcset=""><img src="../assets/pd.jpg" alt="" srcset="">提供支持
                </div>
            </div>

        </div>
    </node-view-wrapper>


</template>

<script setup>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'
import { getCurrentInstance, nextTick, onBeforeUnmount, onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { v4 as uuid } from 'uuid'
import { Base64 } from "js-base64";
import * as layout from '@/layout.js'
import { baseUrl, baseUrl2, request } from '../axios.js'
import { ElMessage, ElNotification } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import { useStore } from '@/store/index.js'
import eventBus from '@/store/mitt.js';


const store = useStore()
let editor = store.editor
const CreateEditor = store.CreateEditor
const id = ref(uuid());
const props = defineProps(nodeViewProps);

const AISelect = ref(Number(props.node.attrs.type || '1'))
const url = ref(props.node.attrs.url || '')
const args = props.node.attrs.args || ''
console.log(args);

const AIImgUrl = ref(url)
const AIaudioUrl = ref(url)
const textAll = ref(props.node.attrs.text || '')
const isAIOpen = ref(false)
function test() {
    eventBus.emit('ai-plan', {
        type: 'insert-today',
        data: [{ title: '111', content: '222' }, { title: '1111', content: '2222' }]
    });
}

function QuickLayout(type) {
    let a = layout.layout(editor.getHTML(), type)
    // console.log(a);
    editor.commands.setContent(a)
    // editor.commands.setContent()
    ElNotification({
        title: '成功',
        message: '格式应用成功',
        type: 'success',
    })
}

function AIInsert(data) {
    let to = editor.view.state.selection.to
    editor.chain().focus().insertContentAt(to, data).run()
}


const LayoutTabs = ref('first')
// const AILayoutData = ref('')
// const AILayoutLoading = ref(false)
// let AILayoutCtrl = new AbortController()

const AIPlanTodayGoal = ref('')
const AIPlanTodayLoading = ref(false)
const AIPlanTodayData = ref('')
const AIPlanTodayDataTemp = ref('')
const AIPlanTodayLoadingCount = ref(0)
const AIPlanTodayLoadingTitle = ref('')
let AIPlanTodayCtrl = new AbortController()
function AIPlanToday() {
    if (AIPlanTodayLoading.value) {
        AIPlanTodayCtrl.abort()
        AIPlanTodayLoading.value = false
        return
    }
    const text = AIPlanTodayGoal.value
    if (!text) {
        ElNotification({ title: '错误', message: '请先输入今日任务', type: 'error' })
        AIPlanTodayLoading.value = false
        return
    }
    AIPlanTodayLoadingTitle.value = ''
    AIPlanTodayLoadingCount.value = 0
    AIPlanTodayCtrl = new AbortController()
    AIPlanTodayLoading.value = true
    AIPlanTodayData.value = ''
    AIPlanTodayDataTemp.value = ''

    request({
        url: '/api/ai/mysystem/',
        method: 'POST',
        isEventSource: true,
        AbortController: AIPlanTodayCtrl, // AbortController
        signal: AIPlanTodayCtrl.signal, // AbortSignal
        body: {
            system:
                `- 你是一个专业规划任务日程的AI，你的任务是根据用户输入的任务，生成一个合理的任务日程并以指定的json格式返回。
- 请务必按照以下格式输出日程安排：
\`\`\`json
    [{
        "title": "任务1的标题",
        "desc": "任务1的简介",
        "content": "<h1>任务1的标题</h1><p>任务1的详细内容</p>"
    },
    {
        "title": "任务2的标题",
        "desc": "任务2的简介",
        "content": "<h1>任务2的标题</h1><p>任务2的详细内容</p>"
    }]
\`\`\`
- 请注意，content中的内容是html格式。你只能使用简单的html标签，如h1、h2、h3、p、ul、li等，不支持复杂的html标签，也不支持CSS。
- content的第一个元素必须是h1标签，表示任务的标题
- 请不要输出过多的任务，一般**不超过5个任务**即可。
- 请不要输出过长的任务内容，一般**不超过500个字符**即可。
- 请不要输出任何多余的内容，你只需要输出这个JSON即可，也不需要输出任何提示信息。
- 如果无法生成任务安排，请返回空数组[]。
- 请务必简略的返回内容`,
            content: `我今日的工作计划是：<${text}>\n请按照指定的JSON格式生成今日的工作计划。`
        },
        headers: {
            'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
            'content-type': 'application/json',
        },
        onmessage: (ev) => {
            if (ev.data != '[DONE]') {
                AIPlanTodayDataTemp.value += Base64.decode(ev.data)
                try {
                    AIPlanTodayLoadingCount.value = AIPlanTodayDataTemp.value.match(/"title"/g).length
                    AIPlanTodayLoadingTitle.value = AIPlanTodayDataTemp.value.match(/"title":\s*"([^"]*)"/g).slice(-1)[0]
                        .replace(/"title":\s*"/, '').replace(/"/, '')
                } catch (error) {

                }
            } else {

            }
        },
        onerror: (ev) => {
            AIPlanTodayCtrl.abort()
            AIPlanTodayLoading.value = false
            throw ev
        },
        onclose: () => {
            AIPlanTodayLoading.value = false
            AIPlanTodayData.value = AIPlanTodayDataTemp.value.match(/```json(.*)```/s)[1]
                .replace(/\/\/.*$/gm, '')
                .replace(/\/\*[\s\S]*?\*\//g, '')
                .replace(/'([^']*)'/g, '"$1"')
                .replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":')
                .replace("```json", "")
                .replace("```", "")

            function isValidTaskFormat(jsonString) {
                let json;
                try { json = JSON.parse(jsonString); } catch (e) { return false; }
                if (!Array.isArray(json)) { return false; }
                const isValidTask = (task) => {
                    return (
                        typeof task.title === 'string' &&
                        typeof task.desc === 'string' &&
                        typeof task.content === 'string'
                    );
                };
                return json.every(isValidTask);
            }
            console.log(AIPlanTodayData.value);

            if (!isValidTaskFormat(AIPlanTodayData.value)) {
                ElNotification({ title: '错误', message: '生成失败了，您可以重新尝试', type: 'error' })
                AIPlanTodayData.value = ''
            } else {
                ElNotification({ title: '成功', message: '生成成功！已将日程添加到任务项', type: 'success' })
                eventBus.emit('ai-plan', {
                    type: 'insert-today',
                    data: JSON.parse(AIPlanTodayData.value)
                });
            }
        }
    })
}


const AIPlanNextLoading = ref(false)
const AIPlanNextData = ref('')
const AIPlanNextDataTemp = ref('')
const AIPlanNextLoadingCount = ref(0)
const AIPlanNextLoadingTitle = ref('')
const AIPlanNextGoal = ref('')
let AIPlanNextCtrl = new AbortController()
function AIPlanNext() {

    if (AIPlanNextLoading.value) {
        AIPlanNextCtrl.abort()
        AIPlanNextLoading.value = false
        return
    }
    const text = AIPlanNextGoal.value
    if (!text) {
        ElNotification({ title: '错误', message: '请先输入未来任务', type: 'error' })
        AIPlanNextLoading.value = false
        return
    }
    AIPlanNextLoadingTitle.value = ''
    AIPlanNextLoadingCount.value = 0
    AIPlanNextCtrl = new AbortController()
    AIPlanNextLoading.value = true
    AIPlanNextData.value = ''
    AIPlanNextDataTemp.value = ''

    request({
        url: '/api/ai/mysystem/',
        method: 'POST',
        isEventSource: true,
        AbortController: AIPlanNextCtrl, // AbortController
        signal: AIPlanNextCtrl.signal, // AbortSignal
        body: {
            system:
                `- 你是一个专业规划任务日程的AI，你的任务是根据用户输入的任务，生成一个合理的任务日程并以指定的json格式返回。
- 请根据用户的输入合理的安排任务时间，记住今天的日期是${args}，请从今天开始安排任务。
- 如果用户指定了完成任务所需的时间，请使用用户指定的时间安排任务。如果没有指定时间，请自行合理安排，以天为单位。
- 请务必按照以下格式输出日程安排：
\`\`\`json
[
    {
        "time": "${args}",
        "task": [{
            "title": "第一天任务1的标题",
            "desc": "第一天任务1的简介",
            "content": "<h1>第一天务1的标题</h1><p>第一天任务1的详细内容</p>"
        },
        {
            "title": "第一天任务2的标题",
            "desc": "第一天任务2的简介",
            "content": "<h1>第一天任务2的标题</h1><p>第一天任务2的详细内容</p>"
        }]
    },
    {
        "time": "${new Date(new Date(args).setDate(new Date(args).getDate() + 1)).toISOString().split('T')[0]}", // 注意这里日期并不必须是连续的，只要根据任务合理安排即可
        "task": [{
            "title": "第二天任务1的标题",
            "desc": "第二天任务1的简介",
            "content": "<h1>第二天任务1的标题</h1><p>第二天任务1的详细内容</p>"
        },
        {
            "title": "第二天任务2的标题",
            "desc": "第二天任务2的简介",
            "content": "<h1>第二天任务2的标题</h1><p>第二天任务2的详细内容</p>"
        }]
    }
]
\`\`\`

- 请注意，content中的内容是html格式。你只能使用简单的html标签，如h1、h2、h3、p、ul、li等，不支持复杂的html标签，也不支持CSS。
- content的第一个元素必须是h1标签，表示任务的标题，内容必须简短。
- 如果用户没有指定，则请不要输出过长的天数，一般**不超过5天**即可。
- 在每天的任务中请不要输出过多的任务，一般**不超过3个任务**即可。
- 请不要输出过长的任务内容，一般**不超过500个字符**即可。
- 请不要输出任何多余的内容，你只需要输出这个JSON即可，也不需要输出任何提示信息。
- 如果无法生成任务安排，请返回空数组[]。
- 请务必简略的返回内容`,
            content: `我未来的工作任务是：<${text}>\n请为我按照指定的JSON格式生成未来几天的工作计划。`
        },
        headers: {
            'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
            'content-type': 'application/json',
        },
        onmessage: (ev) => {
            if (ev.data != '[DONE]') {
                AIPlanNextDataTemp.value += Base64.decode(ev.data)
                console.log(AIPlanNextDataTemp.value);
                try {
                    AIPlanNextLoadingCount.value = AIPlanNextDataTemp.value.match(/"title"/g).length
                    AIPlanNextLoadingTitle.value = AIPlanNextDataTemp.value.match(/"title":\s*"([^"]*)"/g).slice(-1)[0]
                        .replace(/"title":\s*"/, '').replace(/"/, '')
                } catch (error) {

                }
            }
        },
        onerror: (ev) => {
            AIPlanNextCtrl.abort()
            AIPlanNextLoading.value = false
            console.log(ev);
            throw ev
        },
        onclose: () => {
            AIPlanNextLoading.value = false
            AIPlanNextData.value = AIPlanNextDataTemp.value.match(/```json(.*)```/s)[1]
                .replace(/\/\/.*$/gm, '')
                .replace(/\/\*[\s\S]*?\*\//g, '')
                .replace(/'([^']*)'/g, '"$1"')
                .replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":')
                .replace("```json", "")
                .replace("```", "")
            function isValidTaskFormat(jsonString) {
                try {
                    const jsonObj = JSON.parse(jsonString);
                    if (!Array.isArray(jsonObj)) { return false; }
                    for (let i = 0; i < jsonObj.length; i++) {
                        const item = jsonObj[i];
                        if (typeof item.time !== "string") { return false; }
                        if (!Array.isArray(item.task)) { return false; }
                        for (let task of item.task) {
                            if (typeof task.title !== "string" ||
                                typeof task.desc !== "string" ||
                                typeof task.content !== "string") { return false; }
                        }
                    }
                    return true;
                } catch (e) { return false; }
            }
            console.log(AIPlanNextData.value);
            if (!isValidTaskFormat(AIPlanNextData.value)) {
                ElNotification({ title: '错误', message: '生成失败了，您可以重新尝试', type: 'error' })
                AIPlanNextData.value = ''
            } else {
                ElNotification({ title: '成功', message: '生成成功！已将日程添加到任务项', type: 'success' })
                eventBus.emit('ai-plan', {
                    type: 'insert-next',
                    data: JSON.parse(AIPlanNextData.value)
                });
            }
        }
    })
}




const isShowAI = ref(true)

</script>

<style lang="scss" scoped>
.border-box {
    user-select: none;
    position: relative;
    border: 2px solid transparent;
    border-radius: 16px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right, #ffffff, #ffffff), linear-gradient(90deg, #8F41E9, #578AEF);
    margin: 10px 0px;
}

textarea::selection {
    background-color: #f4eaff;
    color: #303030;
}

// placeholder
textarea::-webkit-input-placeholder {
    color: #b1b1b1;
}

textarea::-moz-placeholder {
    color: #b1b1b1;
}

textarea:-ms-input-placeholder {
    color: #b1b1b1;
}



.bubble-menu2 {
    padding: 20px 30px;
    overflow: hidden;
    transition: all 0.3s;
    // height: 100px
}

.logo {
    font-size: 12px;
    color: #999;
    text-align: center;
    margin-top: 10px;
    display: flex;
    align-items: center
}

.logo img {
    height: 24px;
}

.ai-title span {
    display: inline-block;
    background: linear-gradient(90deg, rgb(160, 0, 147), rgb(44, 10, 192));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    margin-bottom: 10px;
    margin-left: 30px;
}

.bubble-menu2-button {
    margin-top: 10px;
}

.ai-title-ib {
    font-size: 12px;
    margin: 8px 0;
    color: #555;
    display: flex;
    align-items: center;
}

.ai-title-ib span {
    min-width: 60px;
    margin-right: 10px;
}

.wrong2right-main {
    display: flex;
    width: 100%;
    overflow-y: auto;
    min-height: 100px;
}

.wrong2right {
    border: 1px solid #91b8ff;
    background-image: linear-gradient(90deg, #f6f9ff, #f6f9ff);
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 15px;
    transition: all 0.3s;
    margin-right: 20px;
    min-width: 200px;
}

.wrong2right:hover {
    background-image: linear-gradient(90deg, #e3ecff, #e3ecff);
    /* background-image: linear-gradient(90deg, #f6f9ff, #e5f2ff); */

}

.button-plus {
    display: inline-block;
    height: 24px;
    background: #ffffff;
    border-radius: 4px;
    padding: 0 10px;
    text-align: center;
    line-height: 24px;
    cursor: pointer;
    margin-right: 10px;
    font-size: 12px;
    color: #b600e4;
    transition: all 0.3s;
    border: #af15c4 solid 1px;
}

.button-plus:hover {
    background: #af15c4;
    color: #fff;
    border: #af15c4 solid 1px;
}

.textarea-plus {
    min-width: calc(100% - 20px);
    max-width: calc(100% - 20px);
    min-height: 60px;
    // margin-top: 10px;
    padding: 10px;
    border: 1px solid #af15c4;
    border-radius: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: box-shadow 0.3s;
}

.textarea-plus:focus {
    box-shadow: 0 0 3px 0px #af15c4;
    color: #af15c4
}

.orc-main {
    display: flex;
}

.ai-title-2 {
    font-size: 12px;
    margin-bottom: 10px;
    color: #555;
}

.ocr-left {
    width: 30%;
    margin-right: 30px;
    min-width: 150px;
}

.ocr-right {
    flex: 1;
    font-size: 12px;
    color: #555;
}

.ai-img {
    position: relative;
    width: 100%;
    height: 150px;
    border-radius: 5px;
    border: dashed 1px #313131;
    overflow: hidden;
    background-color: #94949410
}

.ai-img-img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b1b1b1;
}

.ai-img-ghost {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #ffffff;
}

.ai-img-ghost div {
    display: none;
    cursor: pointer;
}

.ai-img-ghost:hover div {
    display: block;
}

.ai-img-ghost:hover {
    background-color: #6d6d6d23;
}


.ocr-result {
    z-index: 150;
    /* position: fixed; */
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    /* background-color: #00000098; */
}

.ocr-ghost {
    z-index: 1000;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #0000005d;
    display: flex;
}

.ocr-pre {
    width: 30%;
    height: 100%;
    position: relative;
    background-color: #00000094;
}

.ocr-pre textarea {
    width: 90%;
    height: calc(100% - 110px);
    overflow: auto;
    border: none;
    background-color: #00000000;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    resize: none;
    /* padding-top: 100px; */
    font-family: 'JetBrainsMono', monospace;
}

.ocr-copy {
    border: solid 1px #fff;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    display: inline-block;
    margin: 10px;
    color: #fff;
    transition: all 0.2s
}

.ocr-copy:hover {
    background-color: #ffffff63;
}

.ocr-close {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #fff;
    z-index: 150;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000005d;
}

.ai-table {
    width: 40%;
    height: 100%;
    overflow: auto;
    margin-top: 10px;
    border-collapse: collapse;
    border: #505cff 1px solid;
    margin-bottom: 10px;
    text-overflow: ellipsis;

}

:deep(.ai-table table) {
    border-collapse: collapse;
    border: #505cff 1px solid;
}

:deep(.ai-table td) {
    white-space: nowrap;
    border: #505cff 1px solid;
    text-overflow: ellipsis;
    overflow: hidden;
    // overflow: hidden;
}

.ai-tables {
    display: flex;
    gap: 10px;
    width: 100%;
    min-height: 100px;
    // max-height: 200px;
    // overflow-y: auto;
}

.close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    color: #83068f;
    z-index: 150;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
}

.dialog-footer {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
}

.show {
    position: absolute;
    top: 20px;
    left: 30px;
    transition: all 0.3s;
    color: #83068f;
    user-select: none;
    cursor: pointer;
}

.loading {
    position: absolute;
    width: 18px;
    height: 18px;
    border: 2px solid #5414bb;
    border-top-color: rgba(46, 43, 218, 0.2);
    border-right-color: rgba(46, 43, 218, 0.2);
    border-bottom-color: rgba(46, 43, 218, 0.2);
    border-radius: 100%;

    animation: circle infinite 0.75s linear;
}

@keyframes circle {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>