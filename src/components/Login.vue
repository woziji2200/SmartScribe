<template>
    <div class="login-main-ghost" @click="emits('close')">
        <div class="login-main" @click.stop="">
            <div class="close" @click="emits('close')">
                <font-awesome-icon icon="times" />
            </div>
            <div>
                <img class="login-img" src="../assets/login.png" alt="" srcset="">
            </div>
            <el-tabs class="tabs" v-model="tabs">
                <el-tab-pane class="tabs-1" label="登录" name="first">
                    <InputPlus class="input" v-model:value="username" placeholder="用户名" />
                    <InputPlus type="password" class="input" v-model:value="password" placeholder="密码" />
                    <el-button class="button" type="primary" @click="login">登录</el-button>
                </el-tab-pane>
                <el-tab-pane class="tabs-1" label="注册" name="second">
                    <InputPlus class="input" v-model:value="regusername" placeholder="用户名" />
                    <InputPlus type="password" class="input" v-model:value="regpassword" placeholder="密码" />
                    <InputPlus type="password" class="input" v-model:value="regrepassword" placeholder="确认密码" />
                    <el-button class="button" type="primary" @click="register">注册用户</el-button>

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
import { ElNotification } from 'element-plus';
const emits = defineEmits(['close'])
const username = ref('')
const password = ref('')

const regusername = ref('')
const regpassword = ref('')
const regrepassword = ref('')
const tabs = ref('first')

async function login() {
    request({
        url: '/api/token/',
        method: 'post',
        body: {
            username: username.value,
            password: password.value
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
            message: '用户名或密码错误',
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
.close{
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
}

.tabs .input {
    width: 100%;
    margin-top: 10px;
}

.tabs .button {
    width: 100%;
    margin-top: 20px;
}

.login-img {
    width: 230px;
    height: 230px;
    display: block;
    margin: 0 auto;
    margin: 0 40px;
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