<template>
    <node-view-wrapper>
        <audio @timeupdate="updateProgress" preload='auto' controls ref="audioRef" style="display: none">
            <source :src="fileurl" type="audio/mpeg" />
            您的浏览器不支持音频播放
        </audio>
        <div class="audio-right">
            <font-awesome-icon v-if="audioStatus !== 'pause'" @click="playAudio" class="dialogAudioPlay"
                :icon="['fas', 'play']" />
            <font-awesome-icon v-if="audioStatus == 'pause'" @click="playAudio" class="dialogAudioPlay"
                :icon="['fas', 'pause']" />
            <div class="progress-bar-bg" :id="'progressBarBg'+id" v-dragto="setAudioIcon">
                <div class="progress-bar" :id="'progressBar'+id"></div>
            </div>
            <div class="audio-time" style="min-height: 10px">
                <span class="audio-length-current" :id="'audioCurTime'+id">
                    {{
                    formatTime(audioStart)
                    }}</span>/
                <span class="audio-length-total">{{ formatTime(duration) }}</span>
            </div>
            <div class="volume">
                <div @click.stop="() => { return false; }
                    " class="volume-progress" v-show="audioHuds">
                    <div class="volume-bar-bg" :id="'volumeBarBg'+id" v-adjuster="handleShowMuteIcon">
                        <div class="volume-bar" :id="'volumeBar'+id"></div>
                    </div>
                </div>
                <!-- <i class="iconfont pl-1" :class="audioIcon" @click.stop="audioHuds = !audioHuds"> </i> -->
                <!-- <img class="audio_high" @click.stop="audioHuds = !audioHuds" src="../assets/img/audio_high.png"
                    alt="" /> -->
                <font-awesome-icon class="audio_high" @click.stop="audioHuds = !audioHuds" icon="volume-high" />
            </div>
        </div>
    </node-view-wrapper>
</template>

<script setup>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'
import { ref, onMounted, reactive, computed } from "vue";
import { v4 as uuid } from 'uuid'
const id = ref(uuid());
const fileurl = ref("");
// fileurl.value = nodeViewProps.node.attrs.data
const props = defineProps(nodeViewProps);
// console.log(props.node.attrs.src, 99);
fileurl.value = props.node.attrs.src || '';
const audioStatus = ref("play");
const audioStart = ref("0:00");
const duration = ref("0:00");
const audioVolume = ref(1);
const audioHuds = ref(false);
const audioRef = ref();
const VDragto = reactive({
    mounted: function (el, binding, vnode) {
        el.addEventListener(
            "click",
            (e) => {
                let wdiv = document.getElementById("progressBarBg" + id.value).clientWidth;
                let audio = vnode.ctx.refs.audioRef;
                // console.log(audio,77);
                // return;
                // 只有音乐开始播放后才可以调节，已经播放过但暂停了的也可以
                let ratemin = e.offsetX / wdiv;
                let rate = ratemin * 100;

                console.log(audio.duration * ratemin);


                document.getElementById("progressBar" + id.value).style.width = rate + "%";
                audio.currentTime = audio.duration * ratemin;
                audio.play();
                binding.value();
            },
            false
        );
    },
});
const VAdjuster = reactive({
    mounted: function (el, binding, vnode) {
        el.addEventListener(
            "click",
            (e) => {
                let hdiv = document.getElementById("volumeBarBg"+id.value).clientHeight;
                let audio = vnode.ctx.refs.audioRef;
                // 只有音乐开始播放后才可以调节，已经播放过但暂停了的也可以
                let ratemin = e.offsetY / hdiv;
                let rate = ratemin * 100;
                document.getElementById("volumeBar"+id.value).style.height = rate + "%";
                audio.volume = ratemin;
                binding.value(rate / 100);
            },
            false
        );
    },
});
onMounted(() => {
    fetch();
});
function fetch() {
    // let that = this;
    var myVid = audioRef.value;
    myVid.loop = false;
    // 监听音频播放完毕
    myVid.addEventListener(
        "ended",
        function () {
            audioStatus.value = "play"; // 显示播放icon
            document.getElementById("progressBar"+id.value).style.width = "0%"; // 进度条初始化
        },
        false
    );
    if (myVid != null) {
        myVid.oncanplay = function () {
            duration.value = transTime(myVid.duration); // 计算音频时长
        };
        myVid.volume = 0.5; // 设置音量50%
    }
}

function formatTime(time) {
    let [minutes, seconds] = time.split(':').map(part => part.padStart(2, '0'));
    // 返回规整后的时间格式
    return `${minutes}:${seconds}`;
}

// 播放暂停控制
function playAudio() {
    let recordAudio = audioRef.value; // 获取audio元素
    if (recordAudio.paused) {
        recordAudio.play();
        audioStatus.value = "pause";
    } else {
        recordAudio.pause();
        audioStatus.value = "play";
    }
}
// 更新进度条与当前播放时间
function updateProgress(e) {
    var value = e.target.currentTime / e.target.duration;
    if (document.getElementById("progressBar"+id.value)) {
        document.getElementById("progressBar"+id.value).style.width = value * 100 + "%";
        if (e.target.currentTime === e.target.duration) {
            audioStatus.value = "pause";
        }
    } else {
        audioStatus.value = "pause";
    }

    audioStart.value = transTime(audioRef.value.currentTime);
}
/**
 * 音频播放时间换算
 * @param {number} value - 音频当前播放时间，单位秒
 */
function transTime(time) {
    var duration = parseInt(time);
    var minute = parseInt(duration / 60);
    var sec = (duration % 60) + "";
    var isM0 = ":";
    if (minute === 0) {
        minute = "00";
    } else if (minute < 10) {
        minute = "0" + minute;
    }
    if (sec.length === 1) {
        sec = "0" + sec;
    }
    return minute + isM0 + sec;
}
function setAudioIcon() {
    // console.log(99);
    audioStatus.value = "pause";
}
function handleShowMuteIcon(val) {
    // console.log(4444);
    audioVolume.value = val;
}
computed(() => {
    function audioIcon() {
        if (audioHuds.value) {
            return audioVolume.value < 0.01
                ? "checked icon-jingyin"
                : "checked icon-shengyin";
        } else {
            return "icon-shengyin";
        }
    }
});
</script>

<style lang="scss" scoped>
.volume {
    display: none;
    position: relative;

    .volume-progress {
        position: absolute;
        top: -150px;
        width: 32px;
        height: 140px;
        background: #f6f6f6;
        border-radius: 4px;
        padding-top: 10px;
    }

    .volume-bar-bg {
        margin: 0 auto;
        width: 6px;
        height: 120px;
        background: #dcdcdc;
        border-radius: 100px;
        flex: 1;
        position: relative;
        transform: rotate(180deg);
        cursor: pointer;

        .volume-bar {
            width: 6px;
            height: 50%;
            background: #56bf8b;
            border-radius: 100px;
        }
    }

    .checked {
        color: #56bf8b;
    }
}

.audio-right {
    width: 100%;
    height: 49px;
    line-height: 49px;
    background: #f6f6f6;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    .dialogAudioPlay {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    .progress-bar-bg {
        background-color: #fff;
        flex: 1;
        position: relative;
        height: 10px;
        // top: 50%;
        // transform: translateY(-50%);
        // margin-top: -1px;
        cursor: pointer;
        margin: 0 20px;
    }

    .progress-bar {
        background-color: #56bf8b;
        width: 0%;
        height: 10px;
        border-radius: 5px;
    }

    .audio-time {
        overflow: hidden;
        font-size: 14px;

        .audio-length-total {
            float: right;
        }

        .audio-length-current {
            float: left;
        }
    }
}

.audio_high {
    width: 50px;
    height: 50px;
}
</style>