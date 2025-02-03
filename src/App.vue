<template>
    <div class="appview">
        <div class="title print" :class="route.path == '/' ? 'title-index' : ''">
            <div class="title-left">
                <!-- <img src="./assets/logo2.png" style="width: 32px;height: 32px;" alt="" srcset=""> -->
                <div v-if="route.path != '/'">智慧笔匠 - {{ store.DocTitle }}{{ store.isSave ? '' : '*' }}
                </div>
                <!-- <div v-if="route.path == '/'">智慧笔匠 - 首页</div> -->
                <!-- <test v-model:msg="a"></test> -->
            </div>
            <div class="title-middle">
            </div>
            <div class="title-right">
                <!-- <button class="title-right-login" @click="isLogin = true">
                    <font-awesome-icon :icon="'user'" />
                    <span>{{ store.UserInfo.name === '' ? '匿名用户' : (store.UserInfo.name || '登录') }}</span>
                </button> -->

                <el-dropdown size="large" :hide-timeout="300">
                    <button class="title-right-login" @click="login"
                        :style="{ color: route.path == '/' ? 'rgb(96,96,98)' : 'white' }">
                        <font-awesome-icon :icon="'user'" v-if="!store.UserInfo.avatar" />
                        <img v-else :src="baseUrl + store.UserInfo.avatar" alt=""
                            style="width: 20px;height: 20px;border-radius: 6px;">
                        <span>{{ store.UserInfo.name === '' ? '匿名用户' : (store.UserInfo.name || '登录') }}</span>
                    </button>
                    <template #dropdown v-if="store.UserInfo.name !== undefined">
                        <el-dropdown-menu>
                            <!-- <div>
                                <font-awesome-icon :icon="'user'" v-if="!store.UserInfo.avatar" />
                                <img v-else :src="baseUrl + store.UserInfo.avatar" alt=""
                                    style="width: 50px;height: 50px;border-radius: 6px;">
                                <span>{{ store.UserInfo.name === '' ? '匿名用户' : (store.UserInfo.name || '登录') }}</span>
                            </div> -->
                            <el-dropdown-item @click='logout'>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <button v-if="isElectron2" @click="MinWindow"><font-awesome-icon :icon="'minus'" /></button>
                <button v-if="isElectron2" @click="MaxWindow"><font-awesome-icon :icon="['far', 'square']"
                        v-show="!isMax" /><font-awesome-icon v-show="isMax"
                        :icon="['far', 'window-restore']" /></button>
                <button v-if="isElectron2" @click="CloseWindow"><font-awesome-icon icon="times" /></button>
            </div>
        </div>
        <div style="height: 40px;" class="print"></div>
        <transition>
            <LoginVue v-show="isLogin" @close="isLogin = false" style="position: fixed;z-index: 200;"></LoginVue>
        </transition>
        <router-view></router-view>



        <div class="ai-drawer-button" @click="AIdrawerShow = true">
            <svg t="1723529343126" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="8043" width="200" height="200">
                <path
                    d="M512 21.333333c270.933333 0 490.666667 219.733333 490.666667 490.666667 0 123.733333-46.933333 243.2-130.133334 332.8l-6.4 8.533333 38.4 76.8c10.666667 12.8 12.8 29.866667 8.533334 44.8l-2.133334 4.266667-2.133333 2.133333c-6.4 12.8-21.333333 21.333333-36.266667 23.466667H512C241.066667 1002.666667 21.333333 782.933333 21.333333 512 21.333333 241.066667 241.066667 19.2 512 21.333333z m0 70.4C281.6 91.733333 91.733333 281.6 91.733333 512c0 228.266667 183.466667 416 411.733334 420.266667h296.533333c-19.2-46.933333-21.333333-93.866667 12.8-130.133334 72.533333-76.8 115.2-177.066667 117.333333-281.6V512C932.266667 281.6 742.4 91.733333 512 91.733333zM345.6 341.333333c40.533333 0 72.533333 32 72.533333 72.533334v110.933333c0 40.533333-32 72.533333-72.533333 72.533333s-72.533333-32-72.533333-72.533333v-110.933333c0-40.533333 32-72.533333 72.533333-72.533334z m324.266667 0c40.533333 0 72.533333 32 72.533333 72.533334v110.933333c0 40.533333-32 72.533333-72.533333 72.533333S597.333333 565.333333 597.333333 524.8v-110.933333c0-40.533333 32-72.533333 72.533334-72.533334z"
                    fill="#5577FB" p-id="8044"></path>
            </svg>
        </div>

        <el-drawer class="drawer" size="40%" v-model="AIdrawerShow" modal-class="ai-drawer-modal" title="I am the title"
            :with-header="false">
            <div style="display: flex; height: 100%; flex-direction: column;overflow: hidden;">
                <div class="header">
                    <span class="title5">智能小助手</span>
                    <span class="close">
                        <font-awesome-icon icon="times" @click="AIdrawerShow = false" />
                    </span>
                </div>
                <div class="drawer-main" id="drawer-main">
                    <div class="default">
                        <div class="d-title">您好！我是您的智能创作小助手！有什么可以帮您的吗？</div>
                        <div class="functions">
                            <!-- <div class="function" @click="ChatFunction = '创建文档'">创建文档</div> -->
                            <div class="function" @click="ChatFunction = '制订工作日程'">制订工作日程</div>
                            <div class="function" @click="ChatFunction = '生成今日工作计划'">生成今日工作计划</div>
                            <div class="function" @click="ChatFunction = '查询工作项'">查询工作项</div>
                        </div>
                    </div>
                    <div v-for="(i, index) in ChatList">
                        <div v-if="i.type == 'system'" class="chat-1 chat-system" id="chat">
                            <img src="./assets/logo.png" alt="" srcset="">
                            <span v-if="i.type == 'system' && !i.taskcard" v-html="i.text"></span>
                            <span v-if="i.type == 'system' && i.taskcard">
                                <div v-for="(j, index2) in i.data" class="todo" :class="'task-line-' + j.status"
                                    :key="j.url" @click="windowOpen(j.task_id, j.task_item_id)">
                                    <div class="todo-title">{{ j.task_item_title }}</div>
                                    <div class="todo-status" @click.stop="">
                                        <div v-if="j.status === 'done'">状态：已完成</div>
                                        <div v-if="j.status === 'ongoing'">状态：进行中</div>
                                        <div v-if="j.status === 'failed'">状态：失败</div>
                                        <div v-if="j.status === 'pending'">状态：待处理</div>
                                        <div v-if="j.status === 'prime'">状态：待编辑</div>
                                    </div>
                                    <div class="todo-desc">{{ j.desc }}</div>
                                    <div class="todo-tags">
                                        来源：{{ j.task_title }}
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div v-if="i.type == 'system' && !i.task && !ChatLoading" class="chat-load"
                            :style='{ marginBottom: (index == ChatList.length - 1 ? "40px" : "") }'>
                            <div @click="loadEditor(i.text)">导入到编辑器</div>
                        </div>
                        <div v-if="i.type == 'system' && i.task" class="chat-load-2"
                            :style='{ marginBottom: (index == ChatList.length - 1 ? "40px" : "") }'>
                            <div @click="loadTimeEditor(i.data)">在任务时间轴编辑器中打开</div>
                        </div>
                        <div v-if="i.type == 'user'" class="chat-1 chat-user">
                            <font-awesome-icon class="chat-user-img" :icon="'user'" v-if="!store.UserInfo.avatar" />
                            <img v-else :src="baseUrl + store.UserInfo.avatar" alt="">
                            <span>{{ i.text }}</span>
                        </div>
                    </div>
                    <div class="stop" v-if="ChatLoading" @click="ChatAddUser">停止生成</div>
                </div>
                <div class="input">
                    <div class="input2">
                        <span v-show="ChatFunction">{{ ChatFunction }}</span>
                        <input v-model="ChatValue" @keydown="ChatInput" type="text"
                            :placeholder="placeholder">
                    </div>
                    <div class="send" @click="ChatAddUser">
                        <svg t="1723531168522" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="19719" width="200" height="200">
                            <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#3D93FB"
                                p-id="19720">
                            </path>
                            <path
                                d="M192 536l166.4 99.2 347.2-316.8-286.4 323.2 227.2 76.8L800 224 192 536z m227.2 273.6l76.8-91.2-76.8-38.4v129.6z"
                                fill="#FFFFFF" p-id="19721"></path>
                        </svg>
                    </div>

                </div>
            </div>

        </el-drawer>

        <!-- <Suspense>
            <template #default>
                <router-view  v-slot="{ Component }">
                    <transition name="fade">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </template>
            <template #fallback>
                <h1>加载中......</h1>
            </template>
        </Suspense> -->



    </div>
</template>
<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue'
import { CloseWindow, MinWindow, MaxWindow, isElectron } from './method.js'
import { useStore } from '@/store/index.js'
import { useRoute } from 'vue-router'
import LoginVue from '@/components/Login.vue'
import { getUserInfo, request, baseUrl } from './axios'
import { Base64 } from 'js-base64'
import { marked } from 'marked'
import eventBus from './store/mitt.js'
import router from './router/index.js'

const store = useStore()
// import test from './test.vue'
const route = useRoute()
const isElectron2 = ref(isElectron)
// console.log(store.DocTitle);
// function test() {
//     CloseWindow()
// }

// const ViewList = reactive([{
//     title: '首页',
//     name: 'home',
//     path: '/home'
// }])


let isMax = ref(false)
if (isElectron) {
    window.electron.ipcRendererOn('render', (event, arg) => {
        console.log(arg);
        if (arg.type == "isMax") {
            isMax.value = arg.data
        }
    })
}

const isLogin = ref(false)

function logout() {
    // 弹出确认框
    ElMessageBox.confirm('确定要退出登录吗', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    }).then(() => {
        localStorage.removeItem('login')
        store.UserInfo = {}
    }).catch(() => {
        console.log('取消');
    });

}
function login() {
    if (store.UserInfo.name === undefined) {
        isLogin.value = true
    }
}
const debounce = (callback, delay) => {
    let tid;
    return function (...args) {
        const ctx = self;
        tid && clearTimeout(tid);
        tid = setTimeout(() => {
            callback.apply(ctx, args);
        }, delay);
    };
};

const _ = (window).ResizeObserver;
(window).ResizeObserver = class ResizeObserver extends _ {
    constructor(callback) {
        callback = debounce(callback, 20);
        super(callback);
    }
};

watch(() => store.isLogin, async (newVal) => {
    if (newVal) {
        isLogin.value = true
        store.isLogin = false
    }
})

onMounted(async () => {
    await getUserInfo()
    console.log(store);
})

function loadEditor(text) {
    if (route.path == '/') {
        store.OCRDoc = text;
        eventBus.emit('openMode', { url: '?template=ocr' })
        AIdrawerShow.value = false
        // openMode('?template=ocr')
    } else {
        let to = store.editor.view.state.selection.to
        store.editor.chain().focus().insertContentAt(to, text).run()
        // store.DocTitle = ChatList.value[ChatList.value.length - 1].text
        // store.DocContent = ChatList.value[ChatList.value.length - 2].text
    }
}

function loadTimeEditor(data) {
    if (route.path == '/') {
        // store.localData = data
        localStorage.setItem('localData', JSON.stringify(data))
        router.push('/timeline?template=local')
        AIdrawerShow.value = false
    } else {
        // router新页面打开
        // store.localData = data
        localStorage.setItem('localData', JSON.stringify(data))
        window.open('/timeline?template=local')
        AIdrawerShow.value = false


    }
}

const AIdrawerShow = ref(false)
const ChatList = ref([])
const ChatFunction = ref('')
const ChatValue = ref('')
const ChatLoading = ref(false)
const ChatDataTemp = ref('')
let ChatCtrl = null
function ChatInput(e) {
    if (e.key === 'Enter' && ChatValue.value !== '') {
        ChatAddUser()
    } else if (e.key === 'Backspace' && ChatValue.value === '') {
        ChatFunction.value = ''
    } else if (e.key === 'Backspace' && e.target.selectionStart === 0) {
        // 判断光标是否在最前面
        ChatFunction.value = ''
    } else if (e.key === 'Enter' && ChatFunction.value === '生成今日工作计划') {
        ChatAddUser()
    }

}
function ChatAddUser() {

    if (ChatLoading.value) {
        ChatCtrl.abort()
        ChatLoading.value = false
        return
    }
    if (ChatValue.value === '' && ChatFunction.value !== '生成今日工作计划') {
        return
    }
    ChatDataTemp.value = ''
    ChatLoading.value = true

    if (ChatFunction.value === '') {
        ChatList.value.push({ type: 'user', text: ChatValue.value })
    } else if (ChatFunction.value === '生成今日工作计划') {
        ChatList.value.push({ type: 'user', text: "生成今日工作计划" })
    } else {
        ChatList.value.push({ type: 'user', text: ChatFunction.value + '：' + ChatValue.value })
    }
    let ChatValueTemp = ChatValue.value
    ChatValue.value = ''
    ChatCtrl = new AbortController()
    ChatList.value.push({ type: 'system', text: "..." })
    if (ChatFunction.value == '制订工作日程') {
        ChatFunction.value = ''
        function timestampToYyyyMmDd() {
            const date = new Date();
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
        let args = timestampToYyyyMmDd()
        request({
            url: '/api/ai/mysystem/',
            method: 'POST',
            isEventSource: true,
            AbortController: ChatCtrl,
            
            signal: ChatCtrl.signal, // AbortSignal
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
                content: `我未来的工作任务是：<${ChatValueTemp}>\n请为我按照指定的JSON格式生成未来几天的工作计划。`
            },
            headers: {
                'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
                'content-type': 'application/json',
            },
            onmessage: (ev) => {
                if (ev.data != '[DONE]') {
                    if (ChatList.value[ChatList.value.length - 1].text == '...') {
                        ChatList.value[ChatList.value.length - 1].text = ''
                    }
                    ChatDataTemp.value += Base64.decode(ev.data)
                    const titleRegex = /"title":\s*"([^"]+)"/g;
                    let match;
                    let titles = [];
                    let count = 1;
                    while ((match = titleRegex.exec(ChatDataTemp.value)) !== null) {
                        titles.push(`${count}. ${match[1]}`);
                        count++;
                    }
                    ChatList.value[ChatList.value.length - 1].text = titles.map(i => `<p>${i}</p>`).join('\n')
                    document.getElementById('drawer-main').scrollTop = document.getElementById('drawer-main').scrollHeight
                }
            },
            onerror: (ev) => {
                ChatCtrl.abort()
                ChatLoading.value = false
                console.error(ev);
                throw ev
            },
            onclose: () => {
                ChatLoading.value = false
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
                let tempdata = ChatDataTemp.value.match(/```json(.*)```/s)[1]
                    .replace(/\/\/.*$/gm, '')
                    .replace(/\/\*[\s\S]*?\*\//g, '')
                    .replace(/'([^']*)'/g, '"$1"')
                    .replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":')
                    .replace("```json", "")
                    .replace("```", "")
                console.log(tempdata);

                if (!isValidTaskFormat(tempdata)) {
                    ChatList.value[ChatList.value.length - 1].text = "生成失败，您可以重新尝试"
                    document.getElementById('drawer-main').scrollTop = document.getElementById('drawer-main').scrollHeight
                } else {
                    ChatList.value[ChatList.value.length - 1].task = true
                    ChatList.value[ChatList.value.length - 1].data = JSON.parse(tempdata)
                    // ChatList.value[ChatList.value.length - 1].text += "<p></p><a>生成成功！点击在任务时间轴编辑器中打开！</a>"
                    console.log(ChatList.value);

                    document.getElementById('drawer-main').scrollTop = document.getElementById('drawer-main').scrollHeight


                }
            }
        })
    } else if (ChatFunction.value == '创建文档') {
        ChatFunction.value = ''

    } else if (ChatFunction.value == '生成今日工作计划') {
        ChatFunction.value = ''
        request({
            url: '/api/ai/assistant/',
            method: 'POST',
            isEventSource: true,
            AbortController: ChatCtrl,
            signal: ChatCtrl.signal, // AbortSignal
            body: { type: 'generate_today_plan' },
            headers: {
                'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
                'content-type': 'application/json',
            },
            onmessage: (ev) => {
                if (ev.data != '[DONE]') {
                    if (ChatList.value[ChatList.value.length - 1].text == '...') {
                        ChatList.value[ChatList.value.length - 1].text = ''
                    }
                    ChatDataTemp.value += Base64.decode(ev.data)
                    ChatList.value[ChatList.value.length - 1].text = marked(ChatDataTemp.value)
                    document.getElementById('drawer-main').scrollTop = document.getElementById('drawer-main').scrollHeight
                }
            },
            onerror: (ev) => {
                ChatCtrl.abort()
                ChatLoading.value = false
                console.error(ev);

                throw ev
            },
            onclose: () => {
                ChatLoading.value = false
                document.getElementById('drawer-main').scrollTop = document.getElementById('drawer-main').scrollHeight
            }
        })
    } else if (ChatFunction.value == '查询工作项') {
        ChatFunction.value = ''
        request({
            url: '/api/ai/assistant/',
            method: 'POST',
            signal: ChatCtrl.signal, // AbortSignal
            body: { type: 'search_task_items_by_date', des: ChatValueTemp },
        }).then(res => {
            // ChatList.value.push({ type: 'system', text: res.data })
            ChatLoading.value = false
            ChatList.value[ChatList.value.length - 1].taskcard = true
            ChatList.value[ChatList.value.length - 1].data = res.data
            ChatList.value[ChatList.value.length - 1].text = res.data.map(i => `<p>${i.task_item_title}</p><p>${i.desc}</p>`).join('\n')
        }).catch(err => {
            // ChatList.value.push({ type: 'system', text: '查询失败' })
            ChatList.value[ChatList.value.length - 1].text = '查询失败'
            ChatLoading.value = false
        })

    } else {
        request({
            url: '/api/ai/assistant/',
            method: 'POST',
            isEventSource: true,
            AbortController: ChatCtrl,
            signal: ChatCtrl.signal, // AbortSignal
            body: {
                context: ChatList.value.map(i => {
                    return {
                        role: { 'user': 'user', 'system': 'assistant' }[i.type],
                        content: i.text

                    }
                }).slice(0, -1)
            },
            headers: {
                'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
                'content-type': 'application/json',
            },
            onmessage: (ev) => {
                if (ev.data != '[DONE]') {
                    if (ChatList.value[ChatList.value.length - 1].text == '...') {
                        ChatList.value[ChatList.value.length - 1].text = ''
                    }
                    ChatDataTemp.value += Base64.decode(ev.data)
                    ChatList.value[ChatList.value.length - 1].text = marked(ChatDataTemp.value)
                    document.getElementById('drawer-main').scrollTop = document.getElementById('drawer-main').scrollHeight
                }
            },
            onerror: (ev) => {
                ChatCtrl.abort()
                ChatLoading.value = false
                console.error(ev);

                throw ev
            },
            onclose: () => {
                ChatLoading.value = false
                document.getElementById('drawer-main').scrollTop = document.getElementById('drawer-main').scrollHeight
            }
        })
    }
}
function windowOpen(task_id, task_item_id) {
    window.open(`/timeline?id=${task_id}&task=${task_item_id}`)
}

let a = ``
let b = ''
for(let i of a.split('\n')) {
    if (i) {
        b += Base64.decode(i)
    }
}
let placeholder = computed(() => {
    if(ChatFunction.value == '生成今日工作计划') {
        return '生成今日工作计划'
    } else if(ChatFunction.value == '制订工作日程') {
        return '例如：我希望明天完成文档协作'
    } else if(ChatFunction.value == '查询工作项') {
        return '例如：查询今天的工作项'
    } else {
        return '请输入问题'
    }
})

console.log(1111, b);

</script>
<style>
* {
    outline: none !important;
}

@media print {
    .print {
        display: none;
    }

    .appview {
        overflow: visible !important;
        height: auto !important;
    }
}
</style>
<style scoped lang="scss">
:deep(.ai-drawer-modal) {
    background-color: #0000001c;
}

:deep(.drawer.el-drawer) {
    background-image: linear-gradient(217deg, rgba(211, 223, 255, 0.5), rgba(255, 0, 0, 0) 70.71%),
        linear-gradient(135deg, rgba(240, 208, 255, 0.5), rgba(226, 226, 226, 0) 70.71%),
        linear-gradient(360deg, rgb(255, 255, 255), rgb(255, 255, 255) 70.71%);
}

.appview {
    overflow: hidden;
    /* overflow: overlay; */
    height: 100vh;
}

.title {
    user-select: none;
    display: flex;
    justify-content: space-between;
    height: 40px;
    padding-left: 20px;
    padding-right: 5px;
    /* background-color: rgb(246, 246, 246); */
    /* background-color: #3172ff; */
    background-image: linear-gradient(90deg, #5188ff, #64b5ff);
    /* color: rgb(60, 60, 60); */
    color: white;
    width: calc(100vw - 25px);
    position: fixed;
}

.title-left {
    display: flex;
    align-items: center;
}

.title-left {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.title-middle {
    flex: 1;
    -webkit-app-region: drag;

}

.title-right {
    display: flex;
    align-items: center;
}

.title-right button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    /* color: rgb(60, 60, 60); */
    color: white;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 0.3s
}

.title-right .title-right-login {
    width: auto;
    padding: 0 13px;
}

.title-right .title-right-login span {
    margin-left: 5px;

}

.title-right button:active {
    background-color: rgba(255, 255, 255, 0.1);
}

.title-right button:hover {
    /* color: rgb(0, 0, 0); */
    background-color: rgba(255, 255, 255, 0.1);
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.title-index {
    background-color: rgb(250, 251, 253);
    background-image: none;
    color: rgb(96, 96, 98);
}

.ai-drawer-button {
    position: fixed;
    right: 50px;
    bottom: 50px;
    z-index: 1000;
    cursor: pointer;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 0 0 10px 0 #d8d8d899;
}

.ai-drawer-button svg {
    width: 40px;
    height: 40px;
}

.drawer {
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #d8d8d8;

        .title5 {
            font-size: 20px;
            font-weight: bold;
        }

        .close {
            cursor: pointer;
        }
    }

    .drawer-main {
        flex: 1;
        background-color: #fff;
        margin-bottom: 20px;
        margin-top: 20px;
        border-radius: 10px;
        border: solid 1px #d8d8d8;
        overflow-y: auto;

        .stop {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            cursor: pointer;
            background-color: #f0f0f0;
            border-radius: 10px;
            margin: 10px;
            transition: all 0.3s;
            width: 80px;
            margin: 0 auto;
            font-size: 14px;
            margin-bottom: 20px;
            margin-top: 20px;

            &:hover {
                background-color: #e0e0e0;
            }
        }

        &::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #d8d8d8;
            border-radius: 10px;
        }

        .default {
            padding: 20px;

            .d-title {
                font-size: 14px;
                margin-bottom: 10px;
                color: #666;
            }

            .functions {
                display: flex;
                flex-wrap: wrap;

                .function {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 10px;
                    padding: 10px 15px;
                    font-size: 14px;
                    border-radius: 10px;
                    cursor: pointer;
                    background-image: linear-gradient(135deg, #ab51ff, #db64ff);
                    color: white;
                    transition: all 0.3s;

                    &:hover {
                        background-image: linear-gradient(135deg, #bc75ff, #e48aff);
                    }
                }
            }
        }

        .chat-1 {
            display: flex;
            padding: 10px;
            position: relative;

            img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 10px;
            }

            span {
                background-color: #f0f0f0;
                padding: 10px;
                border-radius: 10px;
                font-size: 14px;
                position: relative;
                max-width: 70%;
                word-break: break-all;

            }
        }

        .chat-system {
            justify-content: flex-start;
            margin-bottom: 0px;
            padding-bottom: 0px;

            span::before {
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                left: -9px;
                top: 15px;
                border-right: 5px solid #e6e6e6;
                border-left: 5px solid transparent;
                border-bottom: 5px solid transparent;
                border-top: 5px solid transparent;
            }

            :deep(p) {
                margin: 0;
            }

        }

        .chat-load-2 {
            margin-top: 10px !important;
            display: flex;
        }

        .chat-load-2 div {
            align-self: flex-end;
            cursor: pointer;
            font-size: 10px;
            margin-left: 60px;
            transition: all 0.3s;
            color: #697fff;
            padding: 3px 6px;
            border: 1px solid #697fff;
            border-radius: 5px;

            &:hover {
                background-color: #697fff;
                color: white;
            }
        }

        .chat-load div {
            align-self: flex-end;
            cursor: pointer;
            font-size: 10px;
            margin-left: 60px;
            opacity: 0;
            transition: all 0.3s;
            color: #666;
        }

        .chat-load:hover div {
            opacity: 1;
        }

        .chat-user {
            justify-content: right;
            flex-direction: row-reverse;
            margin-bottom: 10px;

            img {
                margin-left: 10px;
            }

            span::before {
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                right: -9px;
                top: 15px;
                border-left: 5px solid #e6e6e6;
                border-right: 5px solid transparent;
                border-bottom: 5px solid transparent;
                border-top: 5px solid transparent;
            }
        }
    }

    .input {
        display: flex;
        background-color: #fff;
        border-radius: 20px;
        border: 2px solid transparent;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        background-image: linear-gradient(to right, #ffffff, #ffffff), linear-gradient(90deg, #8F41E9, #578AEF);
        padding-right: 10px;

        .input2 {
            display: flex;
            align-items: center;
            margin: 10px;
            flex: 1;

            span {
                background-color: #f0f0f0;
                padding: 5px 8px;
                color: #333;
                font-size: 14px;
                border-radius: 10px;
            }

            input {
                flex: 1;
                height: 30px;
                border: none;
                border-radius: 5px;
                margin-left: 10px;
            }
        }

        .send {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 50%;

            svg {
                width: 30px;
                height: 30px;
            }
        }
    }
}

#chat {
    .todo {
        /* display: flex; */
        margin: 2px 4px 2px 4px;
        box-shadow: 0px 0px 5px 0px #d8d8d8;
        padding: 20px;
        padding-left: 25px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        transition: all 0.2s;
    }

    .todo:hover {
        box-shadow: 0px 0px 10px 0px #d8d8d8;
    }

    .todo::before {
        content: '';
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
    }


    .todo-title {
        font-size: 16px;
    }

    .todo-desc {
        font-size: 14px;
        color: #666;
        margin-top: 4px;

        display: -webkit-box;
        /* 设置为WebKit内核的弹性盒子模型 */
        -webkit-box-orient: vertical;
        /* 垂直排列 */
        -webkit-line-clamp: 3;
        /* 限制显示两行 */
        overflow: hidden;
        /* 隐藏超出范围的内容 */
        text-overflow: ellipsis;
        /* 使用省略号 */
    }

    .todo-status {
        font-size: 14px;
        color: #666;
        margin-top: 4px;
    }

    .todo-tags {
        margin-top: 10px;
    }

    .task-line-done::before {
        border: solid 3px #09d36e;
    }


    .task-line-ongoing::before {
        border: solid 3px #1c86f0;
    }


    .task-line-failed::before {
        border: solid 3px #f01c1c;
    }

    .task-line-pending::before {
        border: solid 3px #f0a01c;
    }


    .task-line-prime::before {
        border: solid 3px #6b6b6b;
    }
}
</style>