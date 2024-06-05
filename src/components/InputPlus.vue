<template>
    <div class="frame">
        <el-input :type="type" @focus="download" @blur="unfocused" :model-value="value" @clear="empty" @input="inputText" clearable>
        </el-input>
        <span :class="[{ 'focusBlur': changeIndex == 1 }, { 'focusBlurTwo': changeIndex == 2 }]">{{ placeholder }}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: '', //input绑定的model
            changeIndex: 0, //定义一个变量;0默认样式，1第二套样式，2第三套样式
        };
    },
    props: {
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        }
    },
    emits: ['update:value'],
    methods: {
        //获得焦点事件
        download() {
            this.changeIndex = 1; //获取焦点等于1，展示第二套样式，文字提示平移到input框上面
        },
        inputText(e) {
            this.changeIndex = 1; //当input值改变时，展示第二套样式，文字提示平移到input框上面
            // console.log(e);
            this.$emit('update:value', e); //将input的值传递给父组件
        },
        //清空事件
        empty() {
            this.changeIndex = 0; //点击清空展示默认的样式
        },
        //失去焦点事件
        unfocused() {
            if (this.value != "") {
                this.changeIndex = 2; //如果框中有值,展示第三套样式
            } else if (this.value == "") {
                this.changeIndex = 0; //失焦等于 0,展示默认样式
            }
        },
    }

};
</script>

<style scoped>
.frame {
    /* 宽高大家可根据自己需求进行调整，调整完后下面的样式也要进行微调 */
    /* width: 20%; */
    height: 40px;
    /* 父元素设置相对定位，这样子元素设置绝对定位后就会在父元素的左上角*/
    position: relative;
}

.frame span {
    /* 默认情况下的样式 */
    position: absolute;
    top: 0;
    left: 3%;
    padding: 0px 7px;
    display: inline-block;
    margin-top: -1.3%;
    color: #9e9e9e;
    font-size: 14px;
    pointer-events: none;
    height: 40px;
    display: flex;
    align-items: center;
    transition: all 0.3s;
    /*平移上方时，添加一个过渡效果让其没有那么的不自然，我这边设置了0.3秒执行完这个上移的操作 */
}

/* 获取焦点后的第一种样式 */
.frame .focusBlur {
    position: absolute;
    font-size: 12px;
    top: -16%;
    height: 16px;
    color: rgb(64, 158, 255);
    background-color: white;
}

/* 如果框中有值顶部文字颜色展示为黑色，第二种样式 */
.frame .focusBlurTwo {
    position: absolute;
    font-size: 12px;
    top: -16%;
    height: 16px;
    background-color: white;
}
</style>