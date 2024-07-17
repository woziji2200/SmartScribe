<template>
    <div class="login-main-ghost" @click="emits('close')">

        <div class="login-main" @click.stop="">
            <div class="close" style="z-index: 100;" @click="emits('close')">
                <font-awesome-icon icon="times" />
            </div>
            <div>
                <img class="login-img" src="../assets/login.png" alt="" srcset="">
            </div>
            <el-tabs class="tabs" v-model="tabs">
                <el-tab-pane class="tabs-1" label="验证码登录" name="first">
                    <Vcode class="input" :show="isShow" @success="success" @close="close" />

                    <InputPlus class="input" v-model:value="username" placeholder="手机号" />

                    <el-button class="button" style="justify-content: flex-start" type="default"
                        @click="isShow = !loginVerify">
                        <svg v-if="loginVerify" t="1720793483390" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="6693" width="200" height="200">
                            <path
                                d="M422.084923 622.158769l-104.763077-98.225231a29.302154 29.302154 0 0 0-40.841846 0.984616 28.16 28.16 0 0 0 0.630154 40.251077l118.350769 110.946461c0.590769 0.590769 1.457231 0.787692 2.087385 1.299693 1.260308 1.851077 2.205538 3.820308 3.977846 5.435077a30.208 30.208 0 0 0 41.196308-0.630154l304.994461-301.843693a26.899692 26.899692 0 0 0-1.063385-39.227077 30.168615 30.168615 0 0 0-41.196307 0.59077l-283.332923 280.418461z"
                                fill="#3EB46E" p-id="6694"></path>
                            <path
                                d="M512 946.412308C272.462769 946.412308 77.627077 751.458462 77.627077 512 77.627077 272.462769 272.462769 77.587692 512 77.587692S946.372923 272.462769 946.372923 512c0 239.497846-194.835692 434.412308-434.372923 434.412308M512 19.692308C240.561231 19.692308 19.692308 240.521846 19.692308 512c0 271.438769 220.868923 492.307692 492.307692 492.307692S1004.307692 783.438769 1004.307692 512C1004.307692 240.521846 783.438769 19.692308 512 19.692308"
                                fill="#1CD467" p-id="6695"></path>
                        </svg>
                        {{ loginVerify ? '通过验证' : '点击进行人机验证' }}
                    </el-button>

                    <div class="input1">
                        <InputPlus class="input" v-model:value="verifyCode" placeholder="验证码" />
                        <el-button :disabled="time != 0" class="button2" type="primary" @click="getCode">{{ time == 0 ?
                            '获取验证码' : (time +
                                's') }}</el-button>
                    </div>


                    <el-button class="button" type="primary" @click="loginCode">登录</el-button>
                    <div class="tips">
                        未注册的用户将自动注册
                    </div>
                </el-tab-pane>
                <el-tab-pane class="tabs-1" label="密码登录" name="second">
                    <InputPlus class="input" v-model:value="username2" placeholder="手机号" />
                    <InputPlus type="password" class="input" v-model:value="password2" placeholder="密码" />
                    <el-button class="button" style="justify-content: flex-start" type="default"
                        @click="isShow = !loginVerify">
                        <svg v-if="loginVerify" t="1720793483390" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="6693" width="200" height="200">
                            <path
                                d="M422.084923 622.158769l-104.763077-98.225231a29.302154 29.302154 0 0 0-40.841846 0.984616 28.16 28.16 0 0 0 0.630154 40.251077l118.350769 110.946461c0.590769 0.590769 1.457231 0.787692 2.087385 1.299693 1.260308 1.851077 2.205538 3.820308 3.977846 5.435077a30.208 30.208 0 0 0 41.196308-0.630154l304.994461-301.843693a26.899692 26.899692 0 0 0-1.063385-39.227077 30.168615 30.168615 0 0 0-41.196307 0.59077l-283.332923 280.418461z"
                                fill="#3EB46E" p-id="6694"></path>
                            <path
                                d="M512 946.412308C272.462769 946.412308 77.627077 751.458462 77.627077 512 77.627077 272.462769 272.462769 77.587692 512 77.587692S946.372923 272.462769 946.372923 512c0 239.497846-194.835692 434.412308-434.372923 434.412308M512 19.692308C240.561231 19.692308 19.692308 240.521846 19.692308 512c0 271.438769 220.868923 492.307692 492.307692 492.307692S1004.307692 783.438769 1004.307692 512C1004.307692 240.521846 783.438769 19.692308 512 19.692308"
                                fill="#1CD467" p-id="6695"></path>
                        </svg>
                        {{ loginVerify ? '通过验证' : '点击进行人机验证' }}
                    </el-button>
                    <div></div>
                    <el-button class="button" type="primary" @click="login">登录</el-button>
                    <div class="tips">
                        未设置密码的用户只能通过验证码登录
                    </div>

                </el-tab-pane>
            </el-tabs>
        </div>
    </div>

</template>

<script setup>
import { defineEmits } from 'vue';
import InputPlus from './InputPlus.vue';
import { ref, watch } from 'vue';
import { request, setLogin, getUserInfo } from '../axios.js';
import { ElMessage, ElNotification } from 'element-plus';
import Vcode from "vue3-puzzle-vcode";
const emits = defineEmits(['close'])
const username = ref('')
const verifyCode = ref('')
const password = ref('')
const time = ref(0)
let timer = null
function getCode() {
    if (time.value == 0) {
        let phoneregex = /^1[3456789]\d{9}$/;
        if (!phoneregex.test(username.value)) {
            ElMessage.error('请输入正确的手机号')
            return
        }
        if (!loginVerify.value) {
            ElMessage.error('请先进行人机验证')
            return
        }
        request({
            url: '/api/user/phone/?phone=' + username.value,
            method: 'get',
            noLogin: true
        }).then(res => {
            ElMessage.success('验证码发送成功')
            time.value = 60
            timer = setInterval(() => {
                time.value--
                if (time.value == 0) {
                    clearInterval(timer)
                }
            }, 1000)
        }).catch(err => {
            ElMessage.error('验证码发送失败，' + err.response.data.msg)
        })
    }
}

function loginCode() {
    request({
        url: '/api/user/phone/',
        method: 'post',
        body: {
            phone: username.value,
            verification_code: verifyCode.value
        },
        noLogin: true
    }).then(res => {
        setLogin(res.data)
        getUserInfo()
        ElNotification({
            title: '登录成功',
            message: '欢迎回来',
            type: 'success'
        })
        emits('close')
    }).catch(err => {
        ElNotification({
            title: '登录失败',
            message: err.response.data.msg,
            type: 'error'
        })
    })

}

const username2 = ref('')
const password2 = ref('')
const regrepassword = ref('')
const tabs = ref('first')
const isShow = ref(false)
const loginVerify = ref(false)
function success() {
    isShow.value = false
    loginVerify.value = true
}
function close() {
    isShow.value = false
}
async function login() {
    let phoneregex = /^1[3456789]\d{9}$/;
    if (!phoneregex.test(username2.value)) {
        ElMessage.error('请输入正确的手机号')
        return
    }
    if (!loginVerify.value) {
        ElMessage.error('请先进行人机验证')
        return
    }
    request({
        url: '/api/user/login/',
        method: 'post',
        body: {
            username: username2.value,
            password: password2.value
        },
        noLogin: true
    }).then(res => {
        console.log(res)
        setLogin(res.data)
        getUserInfo()
        ElNotification({
            title: '登录成功',
            message: '欢迎回来',
            type: 'success'
        })
        emits('close')
    }).catch(err => {
        ElNotification({
            title: '登录失败',
            message: err.response.data.msg,
            type: 'error'
        })
    })
}

function register() {
    request({
        url: '/api/user/register/',
        method: 'post',
        body: {
            username: regusername.value,
            password: regpassword.value,
            re_password: regrepassword.value
        },
        noLogin: true
    }).then(res => {
        ElNotification({
            title: '注册成功',
            message: '将自动登录',
            type: 'success'
        })
        request({
            url: '/api/token/',
            method: 'post',
            body: {
                username: regusername.value,
                password: regpassword.value
            },
            noLogin: true
        }).then(res => {
            setLogin(res.data)
            getUserInfo()
            emits('close')
        }).catch(err => {
            ElNotification({
                title: '登录失败',
                message: '用户名或密码错误',
                type: 'error'
            })
        })
    }).catch(err => {
        console.log(err.response);
        ElNotification({
            title: '注册失败',
            message: err.response.data.msg,
            type: 'error'
        })
    })
}
</script>

<style scoped>
.close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 20px;
    color: #333;
}

.login-main {
    width: 600px;
    height: 300px;
    position: fixed;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 50px 90px 50px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-main-ghost {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tabs {
    height: 100%;
    width: 100%;
    /* padding: 30px 60px; */
    position: relative;
}

.tabs-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
}

.tabs .input {
    width: 100%;
    margin-top: 10px;
}

.tabs .button {
    width: 100%;
    /* margin-top: 20px; */
}

.button svg {
    height: 16px;
    width: 16px;
    margin-right: 10px;
}

.login-img {
    width: 230px;
    height: 230px;
    display: block;
    margin: 0 auto;
    margin: 0 40px 0 10px;
}

.input1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.button2 {
    width: 100px;
    /* height: 40px; */
}

.tips {
    margin-top: 10px;
    color: #999;
    font-size: 12px;
    display: flex;
    justify-content: flex-start;
}

@media screen and (max-width: 768px) {
    .login-main {
        width: 80%;
        /* height: 70%; */
        padding: 20px;
    }

    .login-img {
        display: none;
    }

}
</style>