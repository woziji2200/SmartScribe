<template>
    <div class="preview-wrap" @mousewheel="handerMousewheel">
        <div class="preview">
            <div class="preview-content" :style="{
                top: imgConfig.imgTop + 'px',
                left: imgConfig.imgLeft + 'px',
                transform: `scale(${imgConfig.imgScale}) rotateZ(${imgConfig.imgRotate}deg)`,
            }" ref="previewContentRefs" @mousedown="handleMoveStart">
                <img :src="src" @load="onImageLoaded($event)" />
                <!-- OCR 识别框 -->
                <template v-if="imgConfig.width && imgConfig.height && ocrInfo?.length">
                    <div class="ocr-box" v-for="item in ocrInfo" :style="handleStyle(item[2])">
                        {{ item[0] }}
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const {src, ocrInfo} = defineProps({
    src: String,
    ocrInfo: Array,
});
// console.log(ocrInfo, src);
const imgConfig = reactive({
    width: 0, // 图片原始宽度
    height: 0, // 图片原始高度
    wrapWidth: 0, // 图片容器宽度
    wrapHeight: 0, // 图片容器高度
    startPageX: 0, // 按下鼠标时当前鼠标所在位置x
    startPageY: 0, // 按下鼠标时当前鼠标所在位置y
    imgTop: 0, // 图片定位置top
    imgLeft: 0, // 图片定位置left
    imgScale: 0.8, // 图片缩放
    imgRotate: 0, // 图片旋转
});
const previewContentRefs = ref(null);

const handleStyle = (axis) => {
    // 这里为什么要处理三角形：因为一些文字是偏转的，需要特殊处理角度。
    // 处理偏斜的文字
    // 三角形的高
    const triangleY = axis[0][1] - axis[1][1];
    // 三角形的底
    const triangleX = axis[1][0] - axis[0][0];
    // 三角形的斜边
    const triangle = Math.sqrt(
        Math.abs(triangleY * triangleY) + Math.abs(triangleX * triangleX),
    );
    // sinA = 对边 / 斜边
    const sinA = triangleY / triangle;
    // 旋转角度 = asin(sinA) / π * 180
    let rotate = Math.asin(sinA) / (Math.PI / 180);
    // console.log(((axis[3][1] - axis[0][1]) / imgConfig.height) * imgConfig.wrapHeight);
    return {
        width: ((axis[1][0] - axis[0][0]) / imgConfig.width) * 100 + '%',
        height: ((axis[3][1] - axis[0][1]) / imgConfig.height) * 100 + '%',
        top: (axis[0][1] / imgConfig.height) * 100 + '%',
        left: (axis[0][0] / imgConfig.width) * 100 + '%',
        fontSize:
            ((axis[3][1] - axis[0][1]) / imgConfig.height) * imgConfig.wrapHeight -3 +
            'px',
        // 注意旋转正负 三角形的高大于0 旋转角度为负数
        transform: `rotate(${triangleY > 0 ? '-' : ''}${rotate}deg)`,
    };
};

// 鼠标滚轮缩放图片
const handerMousewheel = (e) => {
    // 鼠标没有在图片区域内就不缩放（解决多列表下拉问题）
    if (e.target.className !== 'preview') {
        // 火狐浏览器为e.detail 其他浏览器均为e.wheelDelta
        if ((e.wheelDelta > 0 || e.detail > 0) && imgConfig.imgScale < 4) {
            imgConfig.imgScale += 0.1;
        } else if ((e.wheelDelta < 0 || e.detail < 0) && imgConfig.imgScale > 0.5) {
            imgConfig.imgScale += -0.1;
        }
        // 阻止浏览器默认滚动事件
        e.preventDefault();
    }
};

const onImageLoaded = (event) => {
    if (previewContentRefs.value) {
        // 图片加载完成后获取图片容器的宽高
        imgConfig.wrapWidth = previewContentRefs.value.clientWidth;
        imgConfig.wrapHeight = previewContentRefs.value.clientHeight;
    }
    // 获取图片的原始宽高
    const { naturalWidth, naturalHeight } = event.target;
    imgConfig.width = naturalWidth;
    imgConfig.height = naturalHeight;
};

// 按下鼠标开始移动图片
const handleMoveStart = (e) => {
    // 如果不是图片就不拖动
    if (e.target.tagName !== 'IMG') {
        return;
    }
    const { pageX, pageY } = e;
    imgConfig.startPageX = pageX - imgConfig.imgLeft;
    imgConfig.startPageY = pageY - imgConfig.imgTop;
    document.addEventListener('mousemove', handleMore, false);
    document.addEventListener('mouseup', clearEvent, false);
    e.preventDefault();
};

// 移除事件
const clearEvent = () => {
    document.removeEventListener('mousemove', handleMore, false);
};

// 按住鼠标移动时的处理
const handleMore = (e) => {
    const { pageX, pageY } = e;
    imgConfig.imgTop = pageY - imgConfig.startPageY;
    imgConfig.imgLeft = pageX - imgConfig.startPageX;
    e.preventDefault();
};

</script>

<style scoped lang="scss">
.preview-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;

    li {
        list-style: none;
    }

    .preview {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        &-content {
            position: relative;
            transition: 0.2s transform;
            height: 100%;

            >img {
                width: auto;
                height: 100%;
                // 禁止图片拖动
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                // 禁止拖拽
                -webkit-user-drag: none;
                -moz-user-drag: none;
                -ms-user-drag: none;
            }

            .ocr-box {
                position: absolute;
                left: 0;
                top: 0;
                background-color: rgba(255, 240, 108, 0.3);
                color: transparent;
                box-sizing: border-box;
                overflow: hidden;
                line-height: 1;
                text-align: justify; // 两端对齐
                text-align-last: justify; // 两端对齐
                letter-spacing: -3px;

                &::selection {
                    background-color: rgba(49, 140, 238, 0.5);
                }
            }
        }

        &-footer {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);

            &-tools {
                display: flex;
                justify-content: center;

                li {
                    margin-right: 10px;
                    padding: 10px;
                    border-radius: 50%;
                    background: rgba(110, 110, 110, 0.7);
                    cursor: pointer;

                    >img {
                        display: block;
                        width: 30px;
                        height: 30px;
                    }

                    &:hover {
                        i {
                            color: #ef544e;
                        }
                    }
                }
            }

            &-thumbs {
                margin-top: 20px;
                max-width: 700px;
                overflow-x: auto;
                white-space: nowrap;

                .thumb-item {
                    padding: 10px;
                    margin-right: 10px;
                    display: inline-block;
                    background: rgba(102, 102, 102, 0.7);
                    border-radius: 5px;
                    cursor: pointer;

                    img {
                        width: 60px;
                        height: 60px;
                        object-fit: cover;
                    }

                    &.active {
                        background: rgba(239, 84, 78, 0.7);
                    }
                }

                &::-webkit-scrollbar {
                    height: 10px;
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                    background: #d2d2d2;
                    cursor: pointer;
                }

                &::-webkit-scrollbar-track {
                    border-radius: 10px;
                    background: #fff;
                }
            }
        }

        .close-icon {
            padding: 10px;
            position: absolute;
            top: 30px;
            right: 30px;
            border-radius: 50%;
            background: rgba(110, 110, 110, 0.7);
            cursor: pointer;

            >img {
                display: block;
                width: 30px;
                height: 30px;
            }
        }
    }
}
</style>