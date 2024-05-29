<template>
    <div class="login-main-ghost" @click="emits('close')">
        <div class="login-main" @click.stop="">

        </div>
    </div>

</template>

<script setup>
import { defineEmits } from 'vue';
const emits = defineEmits(['close'])

function loginclose() {
    
}
</script>

<style scoped>
.login-main {
    width: 400px;
    height: 300px;
    position: fixed;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
</style>