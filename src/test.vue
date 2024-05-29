<template>
    <input type="text" @input="q" :value="props.msg">
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
let props = defineProps(['msg']);
let emits = defineEmits(['update:msg']);
function q(a) {
    emits('update:msg', a.target.value);
    // console.log(a);
}
</script>