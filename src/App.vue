<template>
    <div class="appview">
        <div class="title print">
            <div class="title-left">
                <div v-if="route.path != '/'">智慧笔匠 - {{$store.state.DocTitle}}{{ $store.state.isSave ? '' : '*' }}</div>
                <div v-if="route.path == '/'">智慧笔匠 - 首页</div>
                <!-- <test v-model:msg="a"></test> -->
            </div>
            <div class="title-middle">
            </div>
            <div class="title-right">
                <button class="title-right-login"  @click="isLogin = true"><font-awesome-icon :icon="'user'" /><span>{{ '登录' }}</span></button>
                <button v-if="isElectron2" @click="MinWindow"><font-awesome-icon :icon="'minus'" /></button>
                <button v-if="isElectron2" @click="MaxWindow"><font-awesome-icon :icon="['far', 'square']" v-show="!isMax" /><font-awesome-icon v-show="isMax":icon="['far', 'window-restore']" /></button>
                <button v-if="isElectron2" @click="CloseWindow"><font-awesome-icon icon="times" /></button>
            </div>
        </div>
        <div style="height: 40px;" class="print"></div>
        <transition>
            <LoginVue v-show="isLogin" @close="isLogin = false" style="position: fixed;z-index: 200;"></LoginVue>
        </transition>
        <router-view></router-view>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue'
import { CloseWindow, MinWindow, MaxWindow, isElectron } from './method.js'
import { useRoute } from 'vue-router'
import LoginVue from '@/components/Login.vue'
// import test from './test.vue'
const route = useRoute()
const isElectron2 = ref(isElectron)

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

onMounted(() => {

})
</script>
<style>
@media print {
    .print {
        display: none;
    }
    .appview{
        overflow: visible !important;
        height: auto !important;
    }
}
</style>
<style scoped>
.appview{
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
.title-right .title-right-login{
    width: auto;
    padding: 0 13px;
}
.title-right .title-right-login span{
    margin-left: 5px;

}
.title-right button:active {
    background-color: rgba(255, 255, 255, 0.1);
}

.title-right button:hover {
    /* color: rgb(0, 0, 0); */
    background-color: rgba(255, 255, 255, 0.1);
}
.v-enter-active,.v-leave-active {
  transition: opacity 0.2s ease;
}
.v-enter-from,.v-leave-to {
  opacity: 0;
}

</style>