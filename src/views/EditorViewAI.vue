<template>
    <div style="display: flex;flex-direction: column;  position: relative;" class="editview">
        <div class="tools print">
            <transition>
                <div v-show="store.isAI" class='ai-tip'>
                    正在生成中🚀
                    <el-button @click="store.ctrl.abort(); store.isAI = false">停止输出</el-button>
                </div>
            </transition>
            <input type="file" id="OpenLocal2" style="display: none" accept=".smd" @change="OpenLocal2">

            <div class="top">
                <div class="top-new" id="reftop1">
                    <el-tooltip content="首页" placement="bottom">
                        <span class="top-button" @click="GotoHome()">
                            <svg t="1720251596014" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="12898" width="200" height="200">
                                <path
                                    d="M646.4 992H377.6v-339.2c0-19.2 19.2-32 38.4-32h185.6c19.2 0 38.4 12.8 38.4 32v339.2h6.4z"
                                    fill="#BAD4FF" p-id="12899"></path>
                                <path
                                    d="M672 1011.2H358.4v-358.4c0-32 25.6-51.2 64-51.2h185.6c32 0 64 25.6 64 51.2v358.4z m-268.8-44.8h224v-313.6s-6.4-6.4-19.2-6.4H422.4c-12.8 0-19.2 6.4-19.2 6.4v313.6z"
                                    fill="#4E8CEE" p-id="12900"></path>
                                <path
                                    d="M512 6.4l505.6 454.4-32 32-76.8-70.4v595.2H115.2V428.8l-76.8 64-25.6-32L512 6.4zM857.6 384L512 64 160 384v588.8h704L857.6 384z"
                                    fill="#4E8CEE" p-id="12901"></path>
                                <path
                                    d="M915.2 1024H108.8V441.6l-70.4 64-38.4-44.8 6.4-6.4 492.8-448 6.4-6.4 6.4 6.4 512 454.4-38.4 44.8-70.4-64V1024z m-793.6-12.8H896V409.6l83.2 76.8 19.2-19.2L512 19.2 19.2 460.8l19.2 25.6 83.2-76.8v601.6z m748.8-32H147.2V384L512 51.2l352 320h6.4v608z m-704-12.8h691.2V384L512 76.8 166.4 390.4v576z"
                                    fill="#4E8CEE" p-id="12902"></path>
                                <path
                                    d="M390.4 403.2H217.6c-6.4 0-6.4 0-6.4 6.4v96h179.2c6.4 0 6.4 0 6.4-6.4l-6.4-96c6.4 6.4 6.4 0 0 0z"
                                    fill="#BAD4FF" p-id="12903"></path>
                            </svg>
                        </span>
                    </el-tooltip>

                    <el-tooltip content="保存到云端" placement="bottom">
                        <span class="top-button" @click="SaveServer">
                            <svg t="1720251860839" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="25652" width="200" height="200">
                                <path
                                    d="M137.90231 0C110.10583 0.70144 87.74167 23.10144 87.04023 50.93376V968.3456a48.70656 48.70656 0 0 0 15.27296 35.6352 49.9712 49.9712 0 0 0 35.58912 15.29856h746.33728a48.64 48.64 0 0 0 35.58912-15.29344 50.37056 50.37056 0 0 0 15.27296-35.64032V288.7168L646.72791 0H137.90231z"
                                    fill="#6CCBFF" p-id="25653"></path>
                                <path
                                    d="M935.10167 288.7168h-237.44512c-27.82208-0.6656-50.2272-23.07584-50.92864-50.93376V0l288.37376 288.7168z"
                                    fill="#C4EAFF" p-id="25654"></path>
                                <path
                                    d="M354.16599 542.78656h89.04192v144.3584a17.47456 17.47456 0 0 0 16.9984 17.01888h101.72928a17.47456 17.47456 0 0 0 16.9984-17.01888v-144.3584h89.0368a7.3728 7.3728 0 0 0 7.63904-5.12c1.1776-3.18464 0.512-6.7584-1.72544-9.30816L522.95703 383.86688a19.10784 19.10784 0 0 0-11.88352-5.12 15.39584 15.39584 0 0 0-11.88864 5.12L348.26263 528.22528a7.58784 7.58784 0 0 0-1.72544 9.30816c1.23904 3.1232 4.2752 5.16608 7.63392 5.12v0.13312z m368.9216 220.8256H299.05431a16.99328 16.99328 0 0 0-15.60064 8.17152 17.04448 17.04448 0 0 0 0 17.63328 16.99328 16.99328 0 0 0 15.60064 8.17152h424.03328a17.01376 17.01376 0 0 0 15.93344-16.98816 17.01376 17.01376 0 0 0-15.93344-16.98816z"
                                    fill="#FFFFFF" p-id="25655"></path>
                            </svg>
                        </span>
                    </el-tooltip>

                    <el-tooltip content="保存到本地" placement="bottom">
                        <span class="top-button" @click="SaveLocal">
                            <svg t="1720251915330" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="28593" width="200" height="200">
                                <path d="M896 514.2V896H128V514.2H64V960h896V514.2z" fill="#727272" p-id="28594"></path>
                                <path d="M480 644.4V64h64v580.3l182.8-196.5 46.9 43.7L512 772.6 250.3 491.5l46.9-43.7z"
                                    fill="#5280C1" p-id="28595"></path>
                            </svg>
                        </span>
                    </el-tooltip>

                    <el-tooltip content="打印/导出PDF" placement="bottom">
                        <span class="top-button" @click="SavePDF">
                            <svg t="1720435127098" class="icon" viewBox="0 0 1228 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="5436" width="200" height="200">
                                <path d="M8.533333 0h1024v1024H8.533333z" fill="#D8D8D8" fill-opacity="0" p-id="5437">
                                </path>
                                <path
                                    d="M285.866667 85.333333H648.533333a149.333333 149.333333 0 0 1 149.333334 149.333334V341.333333a42.666667 42.666667 0 0 1-42.666667 42.666667h-469.333333a42.666667 42.666667 0 0 1-42.666667-42.666667V128a42.666667 42.666667 0 0 1 42.666667-42.666667z"
                                    fill="#4A90E2" fill-opacity=".6" p-id="5438"></path>
                                <path
                                    d="M243.2 640m42.666667 0l469.333333 0q42.666667 0 42.666667 42.666667l0 213.333333q0 42.666667-42.666667 42.666667l-469.333333 0q-42.666667 0-42.666667-42.666667l0-213.333333q0-42.666667 42.666667-42.666667Z"
                                    fill="#4A90E2" p-id="5439"></path>
                                <path
                                    d="M833.408 768v-170.666667H207.658667v170.666667H93.866667a42.666667 42.666667 0 0 1-42.666667-42.666667V298.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h113.792v170.666667h625.749333V256H947.2a42.666667 42.666667 0 0 1 42.666667 42.666667v426.666666a42.666667 42.666667 0 0 1-42.666667 42.666667h-113.792z"
                                    fill="#4A90E2" p-id="5440"></path>
                                <path
                                    d="M123.733333 328.533333m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"
                                    fill="#E02020" p-id="5441"></path>
                            </svg>
                        </span>
                    </el-tooltip>

                    <div class="top-line"></div>

                    <el-tooltip content="撤销" placement="bottom">
                        <span @click="undo" :disabled="!CanUndo" class="top-button-2">
                            <font-awesome-icon icon='undo'></font-awesome-icon>
                        </span>
                    </el-tooltip>

                    <el-tooltip content="重做" placement="bottom">
                        <span @click="redo" :disabled="!CanRedo" class="top-button-2">
                            <font-awesome-icon icon='redo'></font-awesome-icon>
                        </span>
                    </el-tooltip>


                    <el-select @change="SetFontSize()" style="width: 50px;" v-model="FontSize2" placeholder="字体大小"
                        size="small">
                        <el-option v-for="item in FontSizeList" :key="item" :label="item" :value="item" />
                    </el-select>

                    <el-tooltip content="字体颜色" placement="bottom">
                        <span style="margin-left: 5px;">
                            <pick-colors @change="SetFontColor" v-model:value="FontColor"
                                :colors="['#000000', '#ff4500', '#ffd700', '#00ced1', '#1e90ff', '#c71585',]" />
                        </span>
                    </el-tooltip>

                    <el-dropdown :hide-on-click="false">
                        <span class="top-button-2">
                            <font-awesome-icon icon='font'></font-awesome-icon>
                        </span>
                        <template #dropdown>
                            <div>
                                <div class="top-button-2-menu">
                                    <el-tooltip content="加粗" placement="bottom">
                                        <span @click="bold" class="top-button-2" :class="!isBold ? '' : 'tools-select'">
                                            <font-awesome-icon icon='bold'></font-awesome-icon>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="斜体" placement="bottom">
                                        <span @click="italic" class="top-button-2"
                                            :class="!isItalic ? '' : 'tools-select'">
                                            <font-awesome-icon icon='italic'></font-awesome-icon>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="下划线" placement="bottom">
                                        <span @click="underline" class="top-button-2"
                                            :class="!isUnderline ? '' : 'tools-select'">
                                            <font-awesome-icon icon='underline'></font-awesome-icon>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="删除线" placement="bottom">
                                        <span @click="strikethrough" class="top-button-2"
                                            :class="!isStrikethrough ? '' : 'tools-select'">
                                            <font-awesome-icon icon='strikethrough'></font-awesome-icon>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="链接" placement="bottom">
                                        <span @click="SetLink()" class="top-button-2"
                                            :class="!isLink ? '' : 'tools-select'">
                                            <font-awesome-icon icon='link'></font-awesome-icon>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="下角标" placement="bottom">
                                        <span @click="SetSubscript()" class="top-button-2"
                                            :class="!isSubscript ? '' : 'tools-select'">
                                            <font-awesome-icon icon='subscript'></font-awesome-icon>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="上角标" placement="bottom">
                                        <span @click="SetSuperscript()" class="top-button-2"
                                            :class="!isSuperscript ? '' : 'tools-select'">
                                            <font-awesome-icon icon='superscript'></font-awesome-icon>
                                        </span>
                                    </el-tooltip>
                                </div>
                            </div>
                        </template>
                    </el-dropdown>

                    <el-dropdown :hide-on-click="false">
                        <span class="top-button-2">
                            <font-awesome-icon icon='heading'></font-awesome-icon>
                        </span>
                        <template #dropdown>
                            <div>
                                <div class="top-button-2-menu">
                                    <el-tooltip content="一级标题" placement="bottom">
                                        <span @click="SetHeading(1)" class="top-button-2"
                                            :class="Heading2 != 1 ? '' : 'tools-select'">
                                            <svg t="1716215843603" class="tools-svg" viewBox="0 0 1024 1024"
                                                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1280" width="200"
                                                height="200">
                                                <path
                                                    d="M584.9 445.3V142.6h86.5v735h-86.5V531.7H152.5v345.9H66.1v-735h86.5v302.6l432.3 0.1zM843.7 877.6v-0.3h-79.8V826h79.8V558.6c-22.5 23.4-49.9 40.4-79.8 49.3v-59.1c17.2-5.2 33.8-12.9 49.1-23 16.2-10.6 30.9-23.7 43.9-38.9h39.9V826h61.7v51.3h-61.7v0.3h-53.1z"
                                                    p-id="1281"></path>
                                            </svg>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="二级标题" placement="bottom">
                                        <span @click="SetHeading(2)" class="top-button-2"
                                            :class="Heading2 != 2 ? '' : 'tools-select'">
                                            <svg t="1716215857033" class="tools-svg" viewBox="0 0 1024 1024"
                                                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1446" width="200"
                                                height="200">
                                                <path
                                                    d="M88 448h400V172c0-24.3 19.7-44 44-44s44 19.7 44 44v680c0 24.3-19.7 44-44 44s-44-19.7-44-44V536H88v316c0 24.3-19.7 44-44 44S0 876.3 0 852V172c0-24.3 19.7-44 44-44s44 19.7 44 44v276z m935.282 448H680c0.479-41.591 10.533-77.923 30.163-108.997 19.63-31.074 46.44-58.084 80.434-81.031 16.279-11.952 33.275-23.544 50.99-34.779 17.714-11.234 33.993-23.305 48.835-36.213 14.842-12.907 27.05-26.89 36.626-41.95 9.576-15.058 14.603-32.388 15.081-51.988 0-9.083-1.077-18.764-3.231-29.042-2.155-10.278-6.344-19.84-12.568-28.683-6.224-8.845-14.842-16.254-25.854-22.23-11.012-5.976-25.375-8.964-43.09-8.964-16.278 0-29.803 3.227-40.576 9.68-10.772 6.455-19.39 15.299-25.854 26.533-6.463 11.235-11.251 24.5-14.363 39.798-3.112 15.298-4.908 31.791-5.386 49.48h-81.87c0-27.728 3.71-53.423 11.13-77.087 7.422-23.664 18.553-44.101 33.395-61.311 14.842-17.21 32.916-30.715 54.222-40.516 21.305-9.8 46.081-14.7 74.33-14.7 30.641 0 56.255 5.02 76.843 15.059 20.587 10.04 37.224 22.707 49.912 38.005 12.688 15.298 21.665 31.91 26.931 49.838 5.267 17.927 7.9 35.018 7.9 51.272 0 20.078-3.112 38.244-9.336 54.498-6.224 16.254-14.603 31.193-25.136 44.818-10.533 13.625-22.502 26.174-35.908 37.647a538.302 538.302 0 0 0-41.653 32.27 1122.27 1122.27 0 0 0-43.09 28.683c-14.364 9.083-27.65 18.166-39.858 27.249-12.209 9.083-22.862 18.525-31.958 28.325-9.097 9.8-15.321 20.198-18.673 31.193h244.894V896z"
                                                    p-id="1447"></path>
                                            </svg> </span>
                                    </el-tooltip>
                                    <el-tooltip content="三级标题" placement="bottom">
                                        <span @click="SetHeading(3)" class="top-button-2"
                                            :class="Heading2 != 3 ? '' : 'tools-select'">
                                            <svg t="1716215866976" class="tools-svg" viewBox="0 0 1024 1024"
                                                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1608" width="200"
                                                height="200">
                                                <path
                                                    d="M88 448h400V172c0-24.3 19.7-44 44-44s44 19.7 44 44v680c0 24.3-19.7 44-44 44s-44-19.7-44-44V536H88v316c0 24.3-19.7 44-44 44S0 876.3 0 852V172c0-24.3 19.7-44 44-44s44 19.7 44 44v276zM815.551 597.802c13.128 0.47 26.257-0.469 39.385-2.813 13.129-2.344 24.85-6.447 35.165-12.308 10.316-5.86 18.638-13.948 24.968-24.263 6.33-10.315 9.494-22.975 9.494-37.978 0-21.1-7.15-37.978-21.45-50.638-14.301-12.66-32.704-18.989-55.21-18.989-14.066 0-26.257 2.813-36.572 8.44-10.315 5.626-18.872 13.245-25.67 22.857-6.799 9.612-11.84 20.395-15.121 32.352-3.283 11.956-4.69 24.263-4.22 36.923h-80.177c0.938-23.913 5.392-46.066 13.363-66.462 7.97-20.396 18.872-38.095 32.703-53.099 13.832-15.004 30.594-26.725 50.287-35.165C802.188 388.22 824.459 384 849.31 384c19.223 0 38.095 2.813 56.616 8.44 18.52 5.626 35.165 13.831 49.934 24.615 14.77 10.784 26.609 24.498 35.517 41.143 8.909 16.645 13.363 35.75 13.363 57.318 0 24.85-5.626 46.535-16.88 65.055-11.252 18.52-28.835 32-52.747 40.44v1.407c28.132 5.626 50.052 19.575 65.759 41.846 15.707 22.27 23.56 49.348 23.56 81.23 0 23.444-4.688 44.425-14.065 62.946-9.378 18.52-22.037 34.227-37.979 47.12-15.942 12.894-34.462 22.858-55.561 29.89-21.1 7.034-43.37 10.55-66.814 10.55-28.601 0-53.568-4.103-74.902-12.308-21.334-8.205-39.15-19.81-53.451-34.813-14.3-15.004-25.202-33.055-32.704-54.154-7.502-21.099-11.487-44.542-11.956-70.33h80.177c-0.938 30.008 6.447 54.975 22.154 74.902s39.268 29.89 70.682 29.89c26.726 0 49.114-7.62 67.166-22.857 18.051-15.239 27.077-36.923 27.077-65.055 0-19.224-3.751-34.462-11.253-45.715-7.502-11.252-17.348-19.81-29.539-25.67-12.19-5.86-25.905-9.494-41.143-10.901-15.239-1.407-30.828-1.875-46.77-1.407v-59.78z"
                                                    p-id="1609"></path>
                                            </svg>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="四级标题" placement="bottom">
                                        <span @click="SetHeading(4)" class="top-button-2"
                                            :class="Heading2 != 4 ? '' : 'tools-select'">
                                            <svg t="1716215885803" class="tools-svg" viewBox="0 0 1024 1024"
                                                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1770" width="200"
                                                height="200">
                                                <path
                                                    d="M88 448h400V172c0-24.3 19.7-44 44-44s44 19.7 44 44v680c0 24.3-19.7 44-44 44s-44-19.7-44-44V536H88v316c0 24.3-19.7 44-44 44S0 876.3 0 852V172c0-24.3 19.7-44 44-44s44 19.7 44 44v276z m936.246 331.56h-63.298v116.748h-75.957V779.56H674v-79.472L884.991 404h75.957v312.264h63.298v63.296zM735.89 716.264h149.1V499.648h-1.406L735.89 716.264z"
                                                    p-id="1771"></path>
                                            </svg>
                                        </span>
                                    </el-tooltip>
                                </div>
                            </div>
                        </template>
                    </el-dropdown>

                    <el-dropdown :hide-on-click="false">
                        <span class="top-button-2">
                            <font-awesome-icon icon='align-justify'></font-awesome-icon>
                        </span>
                        <template #dropdown>
                            <div>
                                <div class="top-button-2-menu">
                                    <el-tooltip content="左对齐" placement="bottom">
                                        <span @click="SetTextAlign('left')" class="top-button-2"
                                            :class="TextAlign2 != 'left' ? '' : 'tools-select'"><font-awesome-icon
                                                icon='align-left'></font-awesome-icon></span>
                                    </el-tooltip>
                                    <el-tooltip content="居中对齐" placement="bottom">
                                        <span @click="SetTextAlign('center')" class="top-button-2"
                                            :class="TextAlign2 != 'center' ? '' : 'tools-select'"><font-awesome-icon
                                                icon='align-center'></font-awesome-icon></span>
                                    </el-tooltip>
                                    <el-tooltip content="右对齐" placement="bottom">
                                        <span @click="SetTextAlign('right')" class="top-button-2"
                                            :class="TextAlign2 != 'right' ? '' : 'tools-select'"><font-awesome-icon
                                                icon='align-right'></font-awesome-icon></span>
                                    </el-tooltip>
                                    <el-tooltip content="两端对齐" placement="bottom">
                                        <span @click="SetTextAlign('justify')" class="top-button-2"
                                            :class="TextAlign2 != 'justify' ? '' : 'tools-select'"><font-awesome-icon
                                                icon='align-justify'></font-awesome-icon></span>
                                    </el-tooltip>
                                </div>
                            </div>
                        </template>
                    </el-dropdown>

                    <el-dropdown :hide-on-click="false">
                        <span class="top-button-2">
                            <font-awesome-icon icon='paragraph'></font-awesome-icon>
                        </span>
                        <template #dropdown>
                            <div>
                                <div class="top-button-2-menu">
                                    <el-tooltip content="无序列表" placement="bottom">
                                        <span @click="SetListul" class="top-button-2"
                                            :class="!isListul ? '' : 'tools-select'"><font-awesome-icon
                                                icon='list-ul'></font-awesome-icon></span>
                                    </el-tooltip>
                                    <el-tooltip content="有序列表" placement="bottom">
                                        <span @click="SetListol" class="top-button-2"
                                            :class="!isListol ? '' : 'tools-select'"><font-awesome-icon
                                                icon='list-ol'></font-awesome-icon></span>
                                    </el-tooltip>
                                    <el-tooltip content="待办事项" placement="bottom">
                                        <span @click="SetTasks" class="top-button-2"
                                            :class="!isTasks ? '' : 'tools-select'"><font-awesome-icon
                                                icon='tasks'></font-awesome-icon></span>
                                    </el-tooltip>
                                    <el-tooltip content="代码块" placement="bottom">
                                        <span @click="SetCode" class="top-button-2"
                                            :class="!isCode ? '' : 'tools-select'"><font-awesome-icon
                                                icon='code'></font-awesome-icon></span>
                                    </el-tooltip>

                                    <el-tooltip content="分割线" placement="bottom">
                                        <span @click="editor.commands.setHorizontalRule()" class="top-button-2">
                                            <svg t="1720442589110" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="6077" width="200" height="200">
                                                <path
                                                    d="M213.333333 554.666667a42.666667 42.666667 0 0 1 0-85.333334h597.333334a42.666667 42.666667 0 0 1 0 85.333334H213.333333z"
                                                    p-id="6078"></path>
                                            </svg>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="引言" placement="bottom">
                                        <span @click="editor.commands.toggleBlockquote()" class="top-button-2"
                                            :class="!editor.isActive('blockquote') ? '' : 'tools-select'"><font-awesome-icon
                                                icon='quote-left'></font-awesome-icon></span>
                                    </el-tooltip>
                                </div>
                            </div>
                        </template>
                    </el-dropdown>

                    <div class="top-line"></div>

                    <el-dropdown :hide-on-click="false">
                        <span class="top-button">
                            <svg t="1720252237657" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="55324" width="200" height="200">
                                <path d="M0 0h1024v292.571429H0z" fill="#4185F4" p-id="55325"></path>
                                <path d="M0 365.714286h292.571429v292.571428H0z" fill="#A0C2F9" p-id="55326"></path>
                                <path d="M0 731.428571h292.571429v292.571429H0z" fill="#A0C2F9" p-id="55327"></path>
                                <path
                                    d="M365.714286 365.714286h292.571428v292.571428H365.714286zM365.714286 731.428571h292.571428v292.571429H365.714286z"
                                    fill="#A0C2F9" p-id="55328"></path>
                                <path d="M731.428571 365.714286h292.571429v292.571428h-292.571429z" fill="#A0C2F9"
                                    p-id="55329">
                                </path>
                                <path d="M731.428571 731.428571h292.571429v292.571429h-292.571429z" fill="#4185F4"
                                    p-id="55330">
                                </path>
                            </svg>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu class="tools-2-1" style="flex-direction: column;">
                                <div class="top-button-2-menu">
                                    列:<el-input v-model="InsertTableCol" step="1" size="small"
                                        style="width: 40px;margin-left: 3px; margin-right: 10px;"></el-input>

                                    行:<el-input v-model="InsertTableRow" size="small"
                                        style="width: 40px;margin-left: 3px; margin-right: 10px;"></el-input>
                                    <el-button class="button" size="small" @click="InsertTable">插入</el-button>
                                </div>

                                <div class="top-button-2-menu">
                                    <el-tooltip content="向左插入" placement="bottom">
                                        <span @click="InsertTableLine('left')" :disabled="!isTable"
                                            class="top-button-2">
                                            <font-awesome-icon icon='arrow-left'></font-awesome-icon>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="向右插入" placement="bottom">
                                        <span @click="InsertTableLine('right')" :disabled="!isTable"
                                            class="top-button-2">
                                            <font-awesome-icon icon='arrow-right'></font-awesome-icon>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="向上插入" placement="bottom">
                                        <span @click="InsertTableLine('up')" :disabled="!isTable" class="top-button-2">
                                            <font-awesome-icon icon='arrow-up'></font-awesome-icon>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="向下插入" placement="bottom">
                                        <span @click="InsertTableLine('down')" :disabled="!isTable"
                                            class="top-button-2">
                                            <font-awesome-icon icon='arrow-down'></font-awesome-icon>
                                        </span>
                                    </el-tooltip>

                                    <el-tooltip content="删除行" placement="bottom">
                                        <span @click="DeleteTable('row')" :disabled="!isTable" class="top-button-2">
                                            <svg t="1716644344557" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="10132">
                                                <path
                                                    d="M819.8 512l102.4-122.9c2.8-3.4 2.4-8.4-1-11.3-1.4-1.2-3.2-1.9-5.1-1.9h-54.7c-2.4 0-4.6 1.1-6.1 2.9L782 466.7l-73.1-87.8c-1.5-1.8-3.8-2.9-6.1-2.9H648c-1.9 0-3.7 0.7-5.1 1.9-3.4 2.8-3.9 7.9-1 11.3L744.2 512 641.8 634.9c-2.8 3.4-2.4 8.4 1 11.3 1.4 1.2 3.2 1.9 5.1 1.9h54.7c2.4 0 4.6-1.1 6.1-2.9l73.1-87.8 73.1 87.8c1.5 1.8 3.8 2.9 6.1 2.9h55c1.9 0 3.7-0.7 5.1-1.9 3.4-2.8 3.9-7.9 1-11.3L819.8 512zM536 464H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h416c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zM452 668h-60c-3.3 0-6 2.7-6 6v166H136c-3.3 0-6 2.7-6 6v60c0 3.3 2.7 6 6 6h292c16.6 0 30-13.4 30-30V674c0-3.3-2.7-6-6-6zM136 184h250v166c0 3.3 2.7 6 6 6h60c3.3 0 6-2.7 6-6V142c0-16.6-13.4-30-30-30H136c-3.3 0-6 2.7-6 6v60c0 3.3 2.7 6 6 6z"
                                                    p-id="10133"></path>
                                            </svg>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="删除列" placement="bottom">
                                        <span @click="DeleteTable('col')" :disabled="!isTable" class="top-button-2">
                                            <svg t="1716644561178" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="11130">
                                                <path
                                                    d="M651.1 641.9c-1.4-1.2-3.2-1.9-5.1-1.9h-54.7c-2.4 0-4.6 1.1-6.1 2.9L512 730.7l-73.1-87.8c-1.5-1.8-3.8-2.9-6.1-2.9H378c-1.9 0-3.7 0.7-5.1 1.9-3.4 2.8-3.9 7.9-1 11.3L474.2 776 371.8 898.9c-2.8 3.4-2.4 8.4 1 11.3 1.4 1.2 3.2 1.9 5.1 1.9h54.7c2.4 0 4.6-1.1 6.1-2.9l73.1-87.8 73.1 87.8c1.5 1.8 3.8 2.9 6.1 2.9h55c1.9 0 3.7-0.7 5.1-1.9 3.4-2.8 3.9-7.9 1-11.3L549.8 776l102.4-122.9c2.8-3.4 2.3-8.4-1.1-11.2zM472 544h80c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8zM350 386H184V136c0-3.3-2.7-6-6-6h-60c-3.3 0-6 2.7-6 6v292c0 16.6 13.4 30 30 30h208c3.3 0 6-2.7 6-6v-60c0-3.3-2.7-6-6-6zM906 130h-60c-3.3 0-6 2.7-6 6v250H674c-3.3 0-6 2.7-6 6v60c0 3.3 2.7 6 6 6h208c16.6 0 30-13.4 30-30V136c0-3.3-2.7-6-6-6z"
                                                    p-id="11131"></path>
                                            </svg>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="合并单元格" placement="bottom">
                                        <span @click="editor.commands.mergeCells();" :disabled="!isTable"
                                            class="top-button-2">
                                            <svg t="1716644758298" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="13801" width="200"
                                                height="200">
                                                <path
                                                    d="M213.333333 426.666667H128V170.666667h341.333333v85.333333H213.333333v170.666667z m597.333334 341.333333h-256v85.333333h341.333333v-256h-85.333333v170.666667zM213.333333 768v-170.666667H128v256h341.333333v-85.333333H213.333333zM896 170.666667h-341.333333v85.333333h256v170.666667h85.333333V170.666667zM341.333333 554.666667v85.333333l128-128-128-128v85.333333H128v85.333334h213.333333z m341.333334-85.333334V384l-128 128 128 128v-85.333333h213.333333v-85.333334h-213.333333z"
                                                    p-id="13802"></path>
                                            </svg>
                                        </span>
                                    </el-tooltip>
                                    <el-tooltip content="拆分单元格" placement="bottom">
                                        <span @click="editor.commands.splitCell();" :disabled="!isTable"
                                            class="top-button-2">
                                            <svg t="1716644784112" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="15809" width="200"
                                                height="200">
                                                <path
                                                    d="M810.666667 597.333333h85.333333v256H128v-256h85.333333v170.666667h597.333334v-170.666667M128 170.666667v256h85.333333V256h597.333334v170.666667h85.333333V170.666667H128m341.333333 298.666666v85.333334H341.333333v85.333333l-128-128 128-128v85.333333h128m213.333334 0V384l128 128-128 128v-85.333333h-128v-85.333334h128z"
                                                    p-id="15810"></path>
                                            </svg>
                                        </span>
                                    </el-tooltip>
                                </div>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>

                    <el-dropdown :hide-on-click="false">
                        <span class="top-button">
                            <font-awesome-icon style="color:#3172ff" icon='circle-plus'></font-awesome-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu class="tools-2-1" style="flex-direction: column;">
                                <div class="top-button-2-menu">
                                    <span class="top-button-2-menu-button" @click="InsertPic2()">
                                        <input type="file" @change="InsertPic" id="uploadImg" style="display: none;" />
                                        <svg t="1720252852899" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="111649" width="200" height="200">
                                            <path
                                                d="M758.848 487.36L1024 713.28v196.928C1024 972.8 972.8 1024 910.208 1024H113.792C51.2 1024 0 972.8 0 910.208v-50.944l218.944-218.88 155.072 147.968c11.52 10.24 34.496 10.24 45.952 0l338.88-300.992zM910.208 0C972.8 0 1024 51.2 1024 113.792v529.408l-247.936-211.904c-15.104-8.96-30.144-10.048-41.408-3.392l-4.544 3.392-338.816 300.928L230.4 584.32c-11.52-15.36-34.432-10.24-45.952 0L0 779.456V113.792C0 51.2 51.2 0 113.792 0h796.416z"
                                                fill="#5BA4EB" p-id="111650"></path>
                                            <path
                                                d="M358.976 370.048c40.832 0 76.48-35.712 76.48-76.48 0-40.832-35.648-76.544-76.48-76.544s-76.544 35.712-76.544 76.544c0 40.768 35.712 76.48 76.544 76.48z m0 51.008a126.272 126.272 0 0 1-127.552-127.488c0-71.424 56.128-127.552 127.552-127.552S486.4 222.144 486.4 293.568A126.272 126.272 0 0 1 359.04 421.056z"
                                                fill="#FFFFFF" p-id="111651"></path>
                                        </svg>
                                        插入图片
                                    </span>
                                </div>
                                <div class="top-button-2-menu">
                                    <span class="top-button-2-menu-button" @click="InsertAudio2()">
                                        <input type="file" @change="InsertAudio" id="uploadAudio"
                                            style="display: none;" />
                                        <svg t="1720709269986" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="5284" width="200" height="200">
                                            <path
                                                d="M136.533333 0C123.733333 0 110.08 5.12 100.693333 15.36 91.306667 25.6 85.333333 38.4 85.333333 51.2v921.6c0 12.8 5.12 26.453333 15.36 35.84 10.24 10.218667 23.04 15.36 35.84 15.36h750.933334c12.8 0 26.453333-5.141333 35.84-15.36 10.24-10.24 15.36-23.04 15.36-35.84v-682.666667L648.533333 0h-512z"
                                                fill="#63C8FF" p-id="5285"></path>
                                            <path
                                                d="M498.88 442.282667l-92.586667 70.549333h-61.034666c-21.056 2.133333-25.258667 25.664-25.258667 25.664v124.010667c0 21.376 27.349333 25.664 27.349333 25.664h63.146667s96.810667 72.704 98.922667 72.704c14.72 4.266667 14.72-12.842667 14.72-12.842667V442.282667c-2.090667-17.109333-25.258667 0-25.258667 0z m134.698667 145.386666c-4.202667-49.173333-44.181333-79.104-46.293334-81.258666-8.426667-6.4-23.146667-4.266667-29.461333 4.266666-6.314667 8.576-4.224 23.530667 4.202667 29.952 0 0 25.258667 21.376 29.461333 51.328 2.112 21.376-8.405333 47.04-31.573333 70.549334a20.906667 20.906667 0 0 0 0 29.930666c4.224 4.266667 8.426667 6.4 14.741333 6.4 6.314667 0 10.517333-2.133333 14.72-6.4 33.685333-36.352 46.293333-70.549333 44.202667-104.746666z"
                                                fill="#FFFFFF" p-id="5286"></path>
                                            <path
                                                d="M655.488 453.269333c-8.405333-8.682667-21.013333-6.506667-29.397333 2.176-8.405333 8.682667-6.314667 21.717333 2.090666 30.4 4.202667 4.330667 119.744 108.565333-2.090666 254.037334-8.405333 8.682667-6.314667 21.717333 2.090666 30.4 4.202667 4.352 8.405333 4.352 14.72 4.352 6.293333 0 12.586667-2.176 16.789334-6.528 48.32-56.448 69.333333-117.248 65.109333-175.872-8.384-84.693333-67.2-136.789333-69.312-138.965334z"
                                                fill="#FFFFFF" p-id="5287"></path>
                                            <path
                                                d="M938.666667 290.368H699.52c-12.8 0-26.453333-5.141333-35.84-15.381333a49.152 49.152 0 0 1-15.381333-35.882667V0L938.666667 290.368z"
                                                fill="#ADE2FF" p-id="5288"></path>
                                        </svg>
                                        音频
                                    </span>
                                </div>
                                <div class="top-button-2-menu">
                                    <span class="top-button-2-menu-button" @click="InsertDraw">
                                        <svg t="1720252335695" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="73702" width="200" height="200">
                                            <path
                                                d="M48.24103438 392.304575C115.98810594 133.42064564 376.97830063-20.7366025 630.023345 48.61016375c241.28728781 66.17403843 412.21466905 303.91533657 348.30686438 548.00208937-19.46295281 74.33248125-66.94722469 137.70705469-132.05479969 176.17971282a277.76032781 277.76032781 0 0 1-215.15894063 28.95447375l-81.79772343-22.39572563a27.83468812 27.83468812 0 0 0-34.12682063 20.10283031c-1.78632562 6.53208656-1.06646343 13.49075906 1.99961813 19.48961438l0.18663093 0.45324656 0.37326281 0.77318531 0.23995407 0.4532475c6.13216313 13.06417312 18.15653531 44.41819031 7.99847344 83.29077187a118.00414781 118.00414781 0 0 1-53.93637375 72.03958595 113.31171001 113.31171001 0 0 1-87.92988657 11.78441718C131.10522125 918.31086219-19.53269875 651.26849001 48.24103438 392.304575z m649.07613468 113.41835625c-2.95943531 10.87792406-1.41306375 22.50237281 4.31917594 32.26051031 5.75890125 9.7581375 15.1971 16.87677938 26.28831656 19.80955313l22.76898843 5.9988553c14.93048438 3.9192525 30.87410812-0.26661562 41.80535532-11.01123186 10.93124718-10.74461625 15.1971-26.39496281 11.19786375-41.05883157a42.92514187 42.92514187 0 0 0-30.58083093-30.04759968l-22.76898844-5.99885532a43.99160531 43.99160531 0 0 0-32.84706469 4.23919125c-9.94476844 5.62559344-17.19671813 14.93048438-20.18281594 25.80840844z m-86.54348437-212.4927825c-2.98609687 10.87792406-1.41306375 22.47571125 4.31917594 32.26051031 5.73223969 9.7581375 15.1971 16.87677938 26.28831656 19.78289157l22.74232687 5.99885531c23.08892719 6.07884 46.84439344-7.3852575 53.02987969-30.04759969a42.44523376 42.44523376 0 0 0-30.6074925-52.07006344l-22.7689875-5.99885531a43.99160531 43.99160531 0 0 0-32.84706562 4.26585281c-9.94476844 5.59893187-17.19671813 14.90382281-20.15615344 25.78174688zM393.24186406 223.430135c-2.98609687 10.93124718-1.4397253 22.52903437 4.29251438 32.28717187 5.75890125 9.78479906 15.1971 16.90344094 26.31497811 19.83621469l22.76898751 5.94553219c23.08892719 6.07884 46.81773187-7.3852575 53.00321907-30.04759875a42.44523376 42.44523376 0 0 0-30.58083094-52.07006344l-22.76898844-5.99885531a43.99160531 43.99160531 0 0 0-32.84706469 4.26585281c-9.94476844 5.59893187-17.19671813 14.90382281-20.182815 25.78174594z m-173.11363125 170.02088813c-2.98609687 10.90458562-1.4397253 22.50237281 4.29251438 32.26051031 5.73223969 9.78479906 15.1971 16.9301025 26.31497813 19.83621469l22.74232687 5.97219375c14.93048438 3.9192525 30.87410812-0.26661562 41.83201687-11.01123187 10.93124718-10.74461625 15.1971-26.39496281 11.19786282-41.05883158a42.92514187 42.92514187 0 0 0-30.6074925-30.04759968l-22.7689875-5.9988553a43.99160531 43.99160531 0 0 0-32.84706563 4.23919124c-9.94476844 5.62559344-17.19671813 14.93048438-20.15615344 25.80840844z"
                                                fill="#1c82ff" p-id="73703"></path>
                                        </svg>
                                        画板
                                    </span>
                                </div>

                                <div class="top-button-2-menu">
                                    <span class="top-button-2-menu-button" @click="InsertGraph(1)">
                                        <svg t="1720252375725" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="76794" width="200" height="200">
                                            <path
                                                d="M0 0m107.789474 0l808.421052 0q107.789474 0 107.789474 107.789474l0 808.421052q0 107.789474-107.789474 107.789474l-808.421052 0q-107.789474 0-107.789474-107.789474l0-808.421052q0-107.789474 107.789474-107.789474Z"
                                                fill="#5899EA" p-id="76795"></path>
                                            <path
                                                d="M377.263158 242.526316m26.947368 0l215.578948 0q26.947368 0 26.947368 26.947368l0 107.789474q0 26.947368-26.947368 26.947368l-215.578948 0q-26.947368 0-26.947368-26.947368l0-107.789474q0-26.947368 26.947368-26.947368Z"
                                                fill="#FFFFFF" p-id="76796"></path>
                                            <path
                                                d="M188.631579 619.789474m26.947368 0l215.578948 0q26.947368 0 26.947368 26.947368l0 107.789474q0 26.947368-26.947368 26.947368l-215.578948 0q-26.947368 0-26.947368-26.947368l0-107.789474q0-26.947368 26.947368-26.947368Z"
                                                fill="#FFFFFF" p-id="76797"></path>
                                            <path
                                                d="M565.894737 619.789474m26.947368 0l215.578948 0q26.947368 0 26.947368 26.947368l0 107.789474q0 26.947368-26.947368 26.947368l-215.578948 0q-26.947368 0-26.947368-26.947368l0-107.789474q0-26.947368 26.947368-26.947368Z"
                                                fill="#FFFFFF" p-id="76798"></path>
                                            <path d="M296.421053 485.052632h404.210526v53.894736H296.421053z"
                                                fill="#FFFFFF" p-id="76799"></path>
                                            <path d="M296.421053 512h53.894736v134.736842h-53.894736z" fill="#FFFFFF"
                                                p-id="76800">
                                            </path>
                                            <path d="M673.684211 485.052632h53.894736v134.736842h-53.894736z"
                                                fill="#FFFFFF" p-id="76801"></path>
                                            <path d="M485.052632 377.263158h53.894736v107.789474h-53.894736z"
                                                fill="#FFFFFF" p-id="76802"></path>
                                        </svg>
                                        Mermaid
                                    </span>
                                </div>

                                <div class="top-button-2-menu">
                                    <span class="top-button-2-menu-button" @click="InsertGraph(2)">
                                        <svg t="1720252428469" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="80655" width="200" height="200">
                                            <path
                                                d="M34.133333 34.133333h68.266667v955.733334h-68.266667V34.133333z m0 955.733334v-68.266667h955.733334v68.266667H34.133333z m409.6-409.6h68.266667v409.6h-68.266667v-409.6z m136.533334 0h68.266666v409.6h-68.266666v-409.6z m-136.533334 341.333333v-341.333333h204.8v341.333333h-204.8z"
                                                fill="#4185F4" p-id="80656"></path>
                                            <path d="M170.666667 921.6v-204.8h204.8v204.8h-204.8z" fill="#4185F4"
                                                opacity=".5" p-id="80657"></path>
                                            <path d="M716.8 989.866667v-614.4h204.8v614.4h-204.8z" fill="#4185F4"
                                                opacity=".5" p-id="80658"></path>
                                        </svg>
                                        柱状图
                                    </span>
                                </div>

                                <div class="top-button-2-menu">
                                    <span class="top-button-2-menu-button" @click="InsertGraph(3)">
                                        <svg t="1720252444107" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="82723" width="200" height="200">
                                            <path
                                                d="M538.4 504.4l280.9 144.3c9.9 5.1 22.2 0.5 26-10 14.3-38.7 22.1-80.6 22.1-124.3 0-186.2-141.6-339.3-323-357.5-7.9-0.8-14.7 5.3-14.7 13.3v320.1c0 5.9 3.4 11.4 8.7 14.1z"
                                                fill="#64B5F6" p-id="82724"></path>
                                            <path
                                                d="M492.5 514.5V172.3c0-9.3-8-16.6-17.3-15.8C289 173.4 143.7 332.3 148.7 524.1c5 190.9 161.5 346.1 352.4 349.7 131.3 2.5 246.8-65.5 311.5-168.7 4.6-7.3 2-17-5.7-21L499.8 526.4c-4.5-2.3-7.3-6.9-7.3-11.9z"
                                                fill="#1E88E5" p-id="82725"></path>
                                        </svg>
                                        饼图
                                    </span>
                                </div>

                                <div class="top-button-2-menu">
                                    <span class="top-button-2-menu-button" @click="InsertGraph(4)">
                                        <svg t="1720874483387" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="7807" width="200" height="200">
                                            <path
                                                d="M341.75 422.02m-70.11 0a70.11 70.11 0 1 0 140.22 0 70.11 70.11 0 1 0-140.22 0Z"
                                                fill="#0839FF" p-id="7808"></path>
                                            <path
                                                d="M341.75 422.02m-50.08 0a50.08 50.08 0 1 0 100.16 0 50.08 50.08 0 1 0-100.16 0Z"
                                                fill="#AFC1FF" p-id="7809"></path>
                                            <path
                                                d="M702.3 622.01m-70.11 0a70.11 70.11 0 1 0 140.22 0 70.11 70.11 0 1 0-140.22 0Z"
                                                fill="#0839FF" p-id="7810"></path>
                                            <path
                                                d="M82.58 837.53a10 10 0 1 0 17.56 9.63l192-350a90.71 90.71 0 0 1-15.63-13.15zM927.37 203a10 10 0 0 0-13.56 4l-178 331.37a89.94 89.94 0 0 1 17.64 9.48l178-331.38a10 10 0 0 0-4.08-13.47zM629.82 568.65l-203-117.09a89.66 89.66 0 0 1-8.69 18.11L619.74 586a90 90 0 0 1 10.08-17.35z"
                                                fill="#0839FF" p-id="7811"></path>
                                            <path
                                                d="M702.3 622.01m-50.08 0a50.08 50.08 0 1 0 100.16 0 50.08 50.08 0 1 0-100.16 0Z"
                                                fill="#AFC1FF" p-id="7812"></path>
                                            <path
                                                d="M932.66 842.35H101.38V171.64a10 10 0 0 0-20 0v690.74h851.28a10 10 0 0 0 10-10 10 10 0 0 0-10-10.03z"
                                                fill="#979797" p-id="7813"></path>
                                        </svg>
                                        折线图
                                    </span>
                                </div>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>


                    <el-tooltip content="文档索引" placement="bottom">
                        <span class="top-button-2" @click="ShowTree = !ShowTree">
                            <svg t="1720252147624" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="48899" width="200" height="200">
                                <path
                                    d="M976 464a48 48 0 1 1 0 96H48a48 48 0 0 1 0-96h928z m0-336a48 48 0 1 1 0 96H48a48 48 0 0 1 0-96h928z"
                                    fill="#0084FF" p-id="48900"></path>
                                <path
                                    d="M384 800m48 0l544 0q48 0 48 48l0 0q0 48-48 48l-544 0q-48 0-48-48l0 0q0-48 48-48Z"
                                    fill="#0084FF" fill-opacity=".598" p-id="48901"></path>
                            </svg>
                        </span>
                    </el-tooltip>



                    <el-dropdown size="large" :hide-timeout="300">
                        <span class="top-button" @click="isAIOpen = true">
                            <svg t="1720252191818" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="53218" width="200" height="200">
                                <path
                                    d="M424.703646 886.186782H32.55464A32.255973 32.255973 0 0 1 0 853.930808V508.16043c0-17.919985 14.506655-32.255973 32.55464-32.255973h392.106339c18.090652 0 32.55464 14.335988 32.55464 32.255973v345.770378c0.554666 17.407985-14.463988 32.255973-32.511973 32.255974z m-359.594367-65.023946H392.10634v-280.746433H65.109279v280.746433z m926.335228 65.023946h-392.10634a32.255973 32.255973 0 0 1-32.554639-32.255974V508.16043c0-17.919985 14.463988-32.255973 32.511973-32.255973h392.149006c18.090652 0 32.55464 14.335988 32.55464 32.255973v99.41325c0 17.919985-14.506655 32.213306-32.55464 32.213307a32.255973 32.255973 0 0 1-32.554639-32.255973v-67.114611H631.892807v280.746433h327.039727v-89.642592c0-17.919985 14.506655-32.29864 32.55464-32.29864 18.090652 0 32.55464 14.335988 32.554639 32.29864v122.410564c0 17.407985-14.506655 32.255973-32.554639 32.255974zM228.863809 540.416403a34.346638 34.346638 0 0 1-13.951988-3.071997 31.999973 31.999973 0 0 1-15.487987-43.007965L286.719761 310.955261a32.511973 32.511973 0 0 1 43.434631-15.359987 31.999973 31.999973 0 0 1 15.487987 43.007964l-87.338594 183.38118a32.810639 32.810639 0 0 1-29.439976 18.431985z m544.554213 0a31.701307 31.701307 0 0 1-29.439975-18.431985l-87.295928-183.89318a32.29864 32.29864 0 0 1 15.487988-43.050631 32.853306 32.853306 0 0 1 43.391963 15.359988l87.295928 183.423847a32.29864 32.29864 0 0 1-15.487987 43.007964 27.007977 27.007977 0 0 1-13.951989 3.583997zM228.863809 1015.808007a32.255973 32.255973 0 0 1-32.554639-32.255973v-129.621226c0-17.919985 14.506655-32.255973 32.554639-32.255973 18.090652 0 32.55464 14.335988 32.55464 32.255973v129.621226c0 17.919985-14.463988 32.255973-32.55464 32.255973z m566.271528 0a32.255973 32.255973 0 0 1-32.554639-32.255973v-129.621226c0-17.919985 14.463988-32.255973 32.554639-32.255973s32.55464 14.335988 32.55464 32.255973v129.621226c0.512 17.919985-14.506655 32.255973-32.55464 32.255973z m196.30917 8.191993H32.55464a32.255973 32.255973 0 1 1 0-64.554613h958.889867a32.255973 32.255973 0 1 1 0 64.554613z"
                                    fill="#4571F6" p-id="53219"></path>
                                <path
                                    d="M511.999573 0.000853c60.970616 0 118.314568 23.55198 161.706532 66.559945a224.213146 224.213146 0 0 1 67.157278 160.383866c0 60.41595-23.765314 117.290569-67.157278 160.3412a228.053143 228.053143 0 0 1-161.706532 66.559944 228.053143 228.053143 0 0 1-161.706532-66.559944 224.213146 224.213146 0 0 1-67.157277-160.3412c0-60.458616 23.765314-117.333236 67.157277-160.3412A228.053143 228.053143 0 0 1 511.999573 0.000853z m0 65.066613c-89.898592 0-163.242531 72.746606-163.24253 161.877198S422.100982 389.333862 511.999573 389.333862s163.242531-72.746606 163.242531-161.877198c0-89.173259-73.343939-162.389198-163.242531-162.389198z"
                                    fill="#1AC4BF" p-id="53220"></path>
                            </svg>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item :disabled="isCoop" @click='startCoop'>开启协同编辑</el-dropdown-item>
                                <el-dropdown-item :disabled="!isCoop" @click='getCoop'>查看协作码</el-dropdown-item>
                                <el-dropdown-item :disabled="!isCoop" @click='stopCoop'>退出协同编辑</el-dropdown-item>
                                <el-dropdown-item :disabled="isCoop"
                                    @click='showCoopCode = true'>加入协同编辑</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>

                    <el-tooltip content="切换到经典模式" placement="bottom">
                        <span class="top-button-2" @click="ChangeMode">
                            <svg t="1721126872909" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="8951" width="200" height="200">
                                <path
                                    d="M213.333333 815.407407A213.333333 213.333333 0 0 1 0 602.074074V474.074074h85.333333v128a128 128 0 0 0 128 128h768a42.666667 42.666667 0 0 1 24.746667 77.406815l-298.666667 213.333333-49.493333-69.480296 190.293333-135.945482H213.238519z"
                                    fill="#188AFA" p-id="8952"></path>
                                <path
                                    d="M810.666667 205.387852A213.333333 213.333333 0 0 1 1024 418.721185v128h-85.333333v-128a128 128 0 0 0-128-128H42.666667A42.666667 42.666667 0 0 1 17.92 213.333333L316.491852 0l49.493333 69.461333-190.27437 135.945482h634.88z"
                                    p-id="8953"></path>
                            </svg>
                        </span>
                    </el-tooltip>

                </div>

                <div class="top-new" id="reftop2">
                    <el-dropdown size="large" :hide-timeout="300">
                        <span class="top-button" :class="''" style="width: auto; flex-direction: row;padding: 0 6px;"
                            @click="isAIOpen = true">
                            <svg t="1721048942688" style="margin-right: 8px;" class="icon" viewBox="0 0 1024 1024"
                                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9416" width="200" height="200">
                                <path
                                    d="M0.09999 1024l98.590372-295.771116 565.644762-565.644761 197.180744 197.180744-565.644762 565.644761L0.09999 1024z m125.587736-225.877942L87.091495 914.310712l22.797774 22.797773 117.188555-37.596328"
                                    fill="#2868F0" p-id="9417"></path>
                                <path
                                    d="M882.313837 337.367054L686.732936 141.786154 828.4191 0.09999l195.5809 195.580901-141.686163 141.686163z"
                                    fill="#043EB8" p-id="9418"></path>
                                <path
                                    d="M183.213108 766.736123L644.127097 305.823134l33.724707 33.725707L216.938815 800.46183z"
                                    fill="#8FB3FF" p-id="9419"></path>
                            </svg>
                            妙笔生花
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item @click='InsertAINode({ type: 1, needSelectText: true })'>
                                    翻译文本
                                </el-dropdown-item>
                                <el-dropdown-item @click='InsertAINode({ type: 2 })'>
                                    全文总结
                                </el-dropdown-item>
                                <el-dropdown-item @click='InsertAINode({ type: 3 })'>
                                    全文摘要
                                </el-dropdown-item>
                                <el-dropdown-item @click='InsertAINode({ type: 4, needTextBefore: true })'>
                                    文章续写
                                </el-dropdown-item>
                                <el-dropdown-item @click='InsertAINode({ type: 8, needSelectText: true })'>
                                    文章润色
                                </el-dropdown-item>
                                <el-dropdown-item @click='InsertAINode({ type: 5, needSelectText: true })'>
                                    修改病句
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>

                    <span class="top-button" :class="editor.isActive('image') ? '' : 'disable'"
                        style="width: auto; flex-direction: row;padding: 0 6px;"
                        @click="InsertAINode({ type: 7.1, url: editor.getAttributes('image').src })">
                        <svg t="1721050274087" style="margin-right: 8px;" class="icon" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13376" width="200" height="200">
                            <path
                                d="M921.6 1024H102.4c-58.026667 0-102.4-44.373333-102.4-102.4V102.4c0-58.026667 44.373333-102.4 102.4-102.4h819.2c58.026667 0 102.4 44.373333 102.4 102.4v819.2c0 58.026667-44.373333 102.4-102.4 102.4z"
                                fill="#5883FF" p-id="13377"></path>
                            <path
                                d="M785.066667 317.44H238.933333c-17.066667 0-34.133333 17.066667-34.133333 34.133333v341.333334c0 17.066667 17.066667 34.133333 34.133333 34.133333h546.133334c17.066667 0 34.133333-17.066667 34.133333-34.133333v-341.333334c0-20.48-17.066667-34.133333-34.133333-34.133333z m-17.066667 341.333333c0 10.24-6.826667 17.066667-17.066667 17.066667H273.066667c-10.24 0-17.066667-6.826667-17.066667-17.066667v-273.066666c0-10.24 6.826667-17.066667 17.066667-17.066667h477.866666c10.24 0 17.066667 6.826667 17.066667 17.066667v273.066666z"
                                fill="#FFFFFF" p-id="13378"></path>
                            <path d="M232.106667 686.08l136.533333-259.413333 426.666667 259.413333z" fill="#FFFFFF"
                                p-id="13379">
                            </path>
                            <path d="M641.706667 453.973333m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z"
                                fill="#FFFFFF" p-id="13380"></path>
                            <path
                                d="M153.6 153.6h92.16V102.4H102.4v146.773333h51.2zM153.6 870.4v-88.746667H102.4V921.6h143.36v-51.2zM870.4 870.4h-92.16V921.6H921.6v-139.946667h-51.2zM778.24 102.4v51.2h92.16v95.573333H921.6V102.4z"
                                fill="#FFFFFF" p-id="13381"></path>
                        </svg>
                        图片OCR
                    </span>

                    <span class="top-button" :class="editor.isActive('image') ? '' : 'disable'"
                        style="width: auto; flex-direction: row;padding: 0 6px;"
                        @click="InsertAINode({ type: 7.2, url: editor.getAttributes('image').src })">
                        <svg t="1721050336486" style="margin-right: 8px;" class="icon" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16283" width="200" height="200">
                            <path
                                d="M634.510565 726.64262l84.19504-84.19504 216.100603 216.100603a59.534884 59.534884 0 1 1-84.19504 84.19504l-216.100603-216.100603z"
                                fill="#A2BEF8" p-id="16284"></path>
                            <path
                                d="M186.570082 759.987107a396.033984 399.915659 44 1 0 555.60952-575.350501 396.033984 399.915659 44 1 0-555.60952 575.350501Z"
                                fill="#5C8EF2" p-id="16285"></path>
                            <path
                                d="M513.213578 672.836377c12.090408-2.997343 17.316113-17.114045 10.221278-27.610361l-135.2453-200.07548L663.164944 514.050144c15.862346 3.974006 28.11553-13.184943 19.342407-27.088351L573.901363 314.883971l89.100804-89.100805c7.016253-7.016253 6.881541-18.545361-0.308715-25.735617-7.184643-7.184643-18.702525-7.319355-25.724391-0.297489L537.764851 298.954269c-5.910492 5.910492-6.870315 15.222463-2.295718 22.457624L627.932126 467.928101 350.885541 398.506484c-16.148609-4.046975-28.390567 13.706953-19.01124 27.576682l147.060669 217.559984-132.399506 32.824839a17.654078 17.654078 0 0 0-8.239888 4.647566l-48.417761 48.417761c-7.016253 7.016253-6.887154 18.528522 0.303102 25.718779 7.184643 7.184643 18.708138 7.324968 25.724391 0.308715l44.954538-44.954539 152.348119-37.775507z"
                                fill="#FFFFFF" p-id="16286"></path>
                            <path d="M0 7.937984h1016.062016v1016.062016H0z" fill="#D8D8D8" fill-opacity="0"
                                p-id="16287"></path>
                        </svg>
                        目标检测
                    </span>




                    <span class="top-button" :class="editor.isActive('image') ? '' : 'disable'"
                        style="width: auto; flex-direction: row;padding: 0 6px;"
                        @click="InsertAINode({ type: 7.3, url: editor.getAttributes('image').src })">
                        <svg t="1721050365324" style="margin-right: 8px;" class="icon" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18342" width="200" height="200">
                            <path
                                d="M648.533333 819.2H85.333333c-8.533333 0-17.066667-3.413333-23.893333-10.24S51.2 793.6 51.2 785.066667V187.733333c0-18.773333 15.36-34.133333 34.133333-34.133333h853.333334c18.773333 0 34.133333 15.36 34.133333 34.133333v426.666667c0 10.24-6.826667 17.066667-17.066667 17.066667s-17.066667-6.826667-17.066666-17.066667V187.733333H85.333333v597.333334h563.2c10.24 0 17.066667 6.826667 17.066667 17.066666s-6.826667 17.066667-17.066667 17.066667z"
                                fill="#125CEA" p-id="18343"></path>
                            <path
                                d="M805.546667 793.6c-1.706667 0-3.413333 0-5.12-1.706667l-46.08-42.666666c-3.413333-3.413333-3.413333-8.533333 0-11.946667 3.413333-3.413333 8.533333-3.413333 11.946666 0l39.253334 37.546667 68.266666-71.68c3.413333-3.413333 8.533333-3.413333 11.946667 0 3.413333 3.413333 3.413333 8.533333 0 11.946666l-73.386667 76.8c-1.706667 1.706667-5.12 1.706667-6.826666 1.706667zM878.933333 324.266667h-153.6c-5.12 0-8.533333-3.413333-8.533333-8.533334s3.413333-8.533333 8.533333-8.533333h153.6c5.12 0 8.533333 3.413333 8.533334 8.533333s-3.413333 8.533333-8.533334 8.533334zM878.933333 409.6h-153.6c-5.12 0-8.533333-3.413333-8.533333-8.533333s3.413333-8.533333 8.533333-8.533334h153.6c5.12 0 8.533333 3.413333 8.533334 8.533334s-3.413333 8.533333-8.533334 8.533333zM878.933333 494.933333h-153.6c-5.12 0-8.533333-3.413333-8.533333-8.533333s3.413333-8.533333 8.533333-8.533333h153.6c5.12 0 8.533333 3.413333 8.533334 8.533333s-3.413333 8.533333-8.533334 8.533333zM361.813333 512c-63.146667 0-112.64-51.2-112.64-112.64s51.2-112.64 112.64-112.64 112.64 51.2 112.64 112.64-51.2 112.64-112.64 112.64z m0-209.92c-52.906667 0-95.573333 42.666667-95.573333 95.573333S307.2 494.933333 361.813333 494.933333s95.573333-42.666667 95.573334-95.573333-42.666667-97.28-95.573334-97.28z"
                                fill="#125CEA" p-id="18344"></path>
                            <path
                                d="M520.533333 665.6c-5.12 0-8.533333-3.413333-8.533333-8.533333 0-83.626667-76.8-134.826667-150.186667-134.826667-80.213333 0-139.946667 56.32-139.946666 134.826667 0 5.12-3.413333 8.533333-8.533334 8.533333s-8.533333-3.413333-8.533333-8.533333c0-87.04 66.56-151.893333 157.013333-151.893334 93.866667 0 167.253333 66.56 167.253334 151.893334 0 5.12-3.413333 8.533333-8.533334 8.533333zM488.106667 525.653333c-5.12 0-8.533333-3.413333-8.533334-8.533333s3.413333-8.533333 8.533334-8.533333c40.96 0 75.093333-34.133333 75.093333-75.093334 0-40.96-34.133333-75.093333-75.093333-75.093333-5.12 0-8.533333-3.413333-8.533334-8.533333s3.413333-8.533333 8.533334-8.533334c51.2 0 92.16 40.96 92.16 92.16-1.706667 49.493333-42.666667 92.16-92.16 92.16z"
                                fill="#125CEA" p-id="18345"></path>
                            <path
                                d="M605.866667 648.533333c-5.12 0-8.533333-3.413333-8.533334-8.533333 0-61.44-49.493333-112.64-109.226666-112.64-5.12 0-8.533333-3.413333-8.533334-8.533333s3.413333-8.533333 8.533334-8.533334c69.973333 0 126.293333 58.026667 126.293333 129.706667 0 5.12-3.413333 8.533333-8.533333 8.533333zM824.32 890.88c-78.506667 0-143.36-64.853333-143.36-143.36s64.853333-143.36 143.36-143.36 143.36 64.853333 143.36 143.36-64.853333 143.36-143.36 143.36z m0-252.586667c-59.733333 0-109.226667 49.493333-109.226667 109.226667 0 59.733333 49.493333 109.226667 109.226667 109.226667s109.226667-49.493333 109.226667-109.226667c0-59.733333-49.493333-109.226667-109.226667-109.226667z"
                                fill="#125CEA" p-id="18346"></path>
                        </svg>
                        图片表格识别
                    </span>

                    <span class="top-button" style="width: auto; flex-direction: row;padding: 0 6px;"
                        @click="InsertAINode({ type: 6 })">
                        <svg t="1721050336486" style="margin-right: 8px;" class="icon" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16283" width="200" height="200">
                            <path
                                d="M634.510565 726.64262l84.19504-84.19504 216.100603 216.100603a59.534884 59.534884 0 1 1-84.19504 84.19504l-216.100603-216.100603z"
                                fill="#A2BEF8" p-id="16284"></path>
                            <path
                                d="M186.570082 759.987107a396.033984 399.915659 44 1 0 555.60952-575.350501 396.033984 399.915659 44 1 0-555.60952 575.350501Z"
                                fill="#5C8EF2" p-id="16285"></path>
                            <path
                                d="M513.213578 672.836377c12.090408-2.997343 17.316113-17.114045 10.221278-27.610361l-135.2453-200.07548L663.164944 514.050144c15.862346 3.974006 28.11553-13.184943 19.342407-27.088351L573.901363 314.883971l89.100804-89.100805c7.016253-7.016253 6.881541-18.545361-0.308715-25.735617-7.184643-7.184643-18.702525-7.319355-25.724391-0.297489L537.764851 298.954269c-5.910492 5.910492-6.870315 15.222463-2.295718 22.457624L627.932126 467.928101 350.885541 398.506484c-16.148609-4.046975-28.390567 13.706953-19.01124 27.576682l147.060669 217.559984-132.399506 32.824839a17.654078 17.654078 0 0 0-8.239888 4.647566l-48.417761 48.417761c-7.016253 7.016253-6.887154 18.528522 0.303102 25.718779 7.184643 7.184643 18.708138 7.324968 25.724391 0.308715l44.954538-44.954539 152.348119-37.775507z"
                                fill="#FFFFFF" p-id="16286"></path>
                            <path d="M0 7.937984h1016.062016v1016.062016H0z" fill="#D8D8D8" fill-opacity="0"
                                p-id="16287"></path>
                        </svg>
                        智能排版
                    </span>

                    <span class="top-button" :class="editor.isActive('audio') ? '' : 'disable'"
                        style="width: auto; flex-direction: row;padding: 0 6px;"
                        @click="InsertAINode({ type: 9, url: editor.getAttributes('audio').src })">
                        <svg style="margin-right: 8px;" t="1721050385519" class="icon" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19465" width="200" height="200">
                            <path
                                d="M331.12 568h-13.68a128 128 0 0 1-128-128V213.36a128 128 0 0 1 128-128h13.68a128 128 0 0 1 128 128v227.76a128 128 0 0 1-128 128z m0 0"
                                fill="#1296db" p-id="19466"></path>
                            <path
                                d="M539.36 583.44a33.44 33.44 0 0 0-41.92 1.28 230.72 230.72 0 0 1-158.8 58.4c-117.92 0-214.4-83.04-214.4-184a27.76 27.76 0 0 0-29.76-25.36 27.52 27.52 0 0 0-29.6 25.36C64.88 580.16 172 680 309.04 692.56v102.56a24.88 24.88 0 0 0 26.48 22.96h4.96a24.88 24.88 0 0 0 26.48-22.96v-102.4a280 280 0 0 0 172.96-72.96 22.96 22.96 0 0 0-1.44-36.48z m0 0"
                                fill="#1296db" p-id="19467"></path>
                            <path
                                d="M948.4 480.48a36.48 36.48 0 0 0-25.84-10.72l-395.44 0.72a36.64 36.64 0 0 0-36.48 36.48v394.88a36.64 36.64 0 0 0 36.48 36.56h395.44a36.64 36.64 0 0 0 36.56-36.56V506.24a36.56 36.56 0 0 0-10.72-25.76z m-87.52 168.64h-12s-23.04-56.72-50.4-61.84A139.76 139.76 0 0 0 752 585.6v237.28s7.28 16 19.92 17.12h28.24v16H649.6v-16h24s18.24-5.12 18.24-19.12V587.84a160 160 0 0 0-45.44 0A74.24 74.24 0 0 0 600 648h-12V555.92h273.12zM751.2 370.32c-24-129.92-190.32-218.96-192-218.96l27.36-52.56c7.44 5.04 193.6 102.88 222.8 260.56z m0 0"
                                fill="#1296db" p-id="19468"></path>
                            <path d="M831.36 355.12l-34.72 96.56-66.56-77.76z m0 0" fill="#1296db" p-id="19469"></path>
                        </svg>
                        语音转文字
                    </span>

                    <span class="top-button" :class="''" style="width: auto; flex-direction: row;padding: 0 6px;"
                        @click="InsertAINode({ type: 10.1, needSelectText: true })">
                        <svg t="1721050414242" style="margin-right: 8px;" class="icon" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21618" width="200" height="200">
                            <path
                                d="M1024 938.665984C1024 985.812992 985.812992 1024 938.665984 1024H85.334016C38.187008 1024 0 985.812992 0 938.665984V85.334016C0 38.187008 38.187008 0 85.334016 0h853.331968C985.812992 0 1024 38.187008 1024 85.334016v853.331968z"
                                fill="#687BF7" p-id="21619"></path>
                            <path
                                d="M615.936 801.531904c-10.799104 0-14.8992-1.200128-24.100864-5.89824l-0.299008-0.200704-189.200384-97.601536c-17.299456-8.298496-28.499968-25.899008-28.499968-45.19936 0-19.2 11.200512-36.900864 28.499968-45.19936l189.50144-97.800192c10.799104-5.400576 18.098176-5.900288 24.098816-5.900288 6.00064 0 13.299712 0.499712 24.100864 5.89824l0.299008 0.200704 189.50144 97.800192c17.39776 8.800256 28.198912 26.001408 28.198912 45.000704s-10.801152 36.200448-28.20096 45.000704l-186.90048 96.499712c-9.699328 7.399424-19.99872 7.399424-26.998784 7.399424z m-0.299008-53.100544l0.299008 0.1024 0.100352-0.1024 185.6-95.799296-185.401344-95.700992-0.299008-0.098304-0.299008 0.098304-185.401344 95.700992 185.401344 95.799296zM768.835584 459.931648H463.036416c-48.300032 0-87.601152-39.30112-87.601152-87.599104V311.13216c0-48.300032 39.30112-87.601152 87.601152-87.601152h305.89952c48.300032 0 87.599104 39.30112 87.599104 87.601152v61.200384c0 48.300032-39.399424 87.599104-87.699456 87.599104z m-305.799168-183.5008c-19.099648 0-34.701312 15.601664-34.701312 34.701312v61.200384c0 19.099648 15.601664 34.699264 34.701312 34.699264h305.89952c19.099648 0 34.699264-15.599616 34.699264-34.699264V311.13216c0-19.099648-15.599616-34.699264-34.699264-34.699264H463.036416zM303.036416 679.131136h-108.40064c-14.600192 0-26.50112-11.798528-26.50112-26.499072 0-14.600192 11.800576-26.50112 26.50112-26.50112h108.500992c14.600192 0 26.50112 11.800576 26.50112 26.50112-0.1024 14.700544-11.900928 26.50112-26.60352 26.50112zM275.33312 369.031168H194.635776c-14.600192 0-26.50112-11.798528-26.50112-26.499072 0-14.600192 11.800576-26.50112 26.50112-26.50112h80.699392c14.60224 0 26.50112 11.800576 26.50112 26.50112-0.100352 14.600192-11.89888 26.50112-26.50112 26.50112z"
                                fill="#FFFFFF" p-id="21620"></path>
                            <path
                                d="M194.635776 679.131136c-14.600192 0-26.50112-11.798528-26.50112-26.499072V348.532736c0-14.60224 11.800576-26.50112 26.50112-26.50112 14.600192 0 26.50112 11.800576 26.50112 26.50112v304.19968c-0.1024 14.600192-11.900928 26.39872-26.50112 26.39872z m79.29856-252.299264v-167.19872l83.601408 83.59936-83.59936 83.59936z"
                                fill="#FFFFFF" p-id="21621"></path>
                        </svg>
                        文字转流程图
                    </span>

                    <span class="top-button" :class="''" style="width: auto; flex-direction: row;padding: 0 6px;"
                        @click="InsertAINode({ type: 10.2, needSelectText: true })">
                        <svg style="margin-right: 8px;" t="1721050431940" class="icon" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22687" width="200" height="200">
                            <path
                                d="M960 672H64a32 32 0 0 1-32-32v-256a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zM96 608h832v-192H96z"
                                fill="#4A8BFE" p-id="22688"></path>
                            <path
                                d="M896 928H128a32 32 0 0 1-32-32v-256a32 32 0 0 1 64 0v224h704v-224a32 32 0 0 1 64 0v256a32 32 0 0 1-32 32zM896 416a32 32 0 0 1-32-32V160H160v224a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z"
                                fill="#4A8BFE" p-id="22689"></path>
                            <path
                                d="M448 288H256a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64zM768 288h-192a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64zM448 800H256a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64zM768 800h-192a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64zM448 544H192a32 32 0 0 1 0-64h256a32 32 0 0 1 0 64zM832 544h-256a32 32 0 0 1 0-64h256a32 32 0 0 1 0 64z"
                                fill="#4A8BFE" p-id="22690"></path>
                        </svg>
                        文字转表格
                    </span>

                    <span class="top-button" :class="''" style="width: auto; flex-direction: row;padding: 0 6px;"
                        @click="InsertAINode({ type: 10.3, needSelectText: true })">
                        <svg t="1721050469563" style="margin-right: 8px;" class="icon" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23737" width="200" height="200">
                            <path
                                d="M109.53216 730.97216h118.272v147.968h-118.272zM346.07616 494.42816h118.272v384.512h-118.272zM553.43616 612.70016h118.272v266.24h-118.272zM819.16416 346.46016h118.272v502.784h-118.272z"
                                fill="#CAE4FF" p-id="23738"></path>
                            <path
                                d="M169.92256 631.40864c34.304 0 62.464-28.16 61.952-62.464 0-8.192-1.536-15.872-4.608-23.552l147.968-147.968c7.68 3.072 15.36 4.608 23.552 4.608 14.848 0 28.672-5.632 39.936-15.36l128 64c0 1.536-1.024 2.56-1.024 4.096 0 34.304 27.648 62.464 61.952 62.464 34.304 0 62.464-27.648 62.464-61.952 0-8.192-1.536-16.384-4.608-24.064l148.992-186.368c31.744 12.8 68.096-2.56 80.896-34.304 9.216-23.04 4.096-49.664-13.824-67.072-24.576-23.552-63.488-23.552-88.064 0-17.92 17.92-23.04 44.544-13.312 68.096l-148.992 186.368c-20.992-7.68-45.056-4.096-62.464 10.752l-128.512-64c0-1.536 1.024-2.56 1.024-4.096 0-16.384-6.656-32.256-17.92-44.032-24.576-23.552-63.488-23.552-88.064 0-17.408 17.92-23.04 44.544-13.312 67.584l-148.48 148.48c-23.04-9.216-49.152-3.584-67.584 13.312-24.576 24.064-24.576 63.488-0.512 88.064 12.288 11.264 28.16 17.92 44.544 17.408z m677.888-454.144c5.632-5.12 14.848-5.12 19.968 1.024 5.12 5.632 5.12 13.824 0 19.456-5.632 5.12-14.336 5.12-19.968 0-5.632-6.144-5.632-14.848 0-20.48z m-229.376 267.264c5.632-5.632 14.336-5.632 19.968 0s5.632 14.336 0 19.968c-5.632 5.12-14.336 5.12-19.968 0-5.632-5.632-5.632-14.336 0-19.968z m-229.376-114.688c5.632-5.632 14.336-5.632 19.968 0s5.632 14.336 0 19.968c-5.632 5.12-14.336 5.12-19.968 0-4.608-5.12-4.608-14.336 0-19.968z m-228.864 229.376c5.632-5.632 14.336-5.632 19.968 0s5.632 14.848 0 19.968-14.336 5.12-19.968 0c-4.608-5.12-3.584-13.824 0-19.968z"
                                fill="#0972E7" p-id="23739"></path>
                            <path
                                d="M953.28256 851.05664h-14.336v-510.976c0-13.312-10.752-24.064-24.064-24.064h-114.688c-13.312 0-24.064 10.752-24.064 24.064v510.976h-66.56v-243.712c0-13.312-10.752-24.064-24.064-24.064h-114.688c-13.312 0-24.064 10.752-24.064 24.064v243.712h-66.048v-357.888c0-13.312-10.752-24.064-24.064-24.064h-114.688c-13.312 0-24.064 10.752-24.064 24.064v357.888h-66.56v-129.024c0-13.312-10.752-24.064-24.064-24.064h-114.688c-13.312 0-24.064 10.752-24.064 24.064v129.024h-14.336c-13.312 0-24.064 10.752-24.064 24.064s10.752 24.064 24.064 24.064h878.592c13.312 0 24.064-10.752 24.064-24.064 0.512-13.312-10.24-24.064-23.552-24.064z m-816.64 0v-104.96h66.56v104.96h-66.56z m229.376 0v-334.336h66.56v334.336h-66.56z m229.376 0v-219.648h66.56v219.648h-66.56z m229.376 0v-486.912h66.56v486.912h-66.56z"
                                fill="#0972E7" p-id="23740"></path>
                        </svg>
                        文字转图表
                    </span>
                </div>
            </div>
        </div>


        <div class='main2'>
            <div class="main-left print large" v-if='ShowTree' id="reftree">
                <span @click='ShowTree = false' class='main-left-close'><font-awesome-icon icon="arrow-left" /></span>
                <li class="main-left-title main-left-title-2"
                    style="color:#555;margin-bottom: 14px;margin-top: 10px;margin-left: 15px;font-size: 16px;cursor:auto;">
                    {{ store.DocTitle }}
                </li>
                <li v-for="i in TitleList.data" :key="i" class="main-left-title"
                    :style="{ 'margin-left': (5 + (i.level - 1) * 20) + 'px' }" @click="GotoTitle(i.id)">{{ i.title }}
                </li>
                <li v-if="TitleList.data.length == 0" class="main-left-title"
                    :style="{ 'margin-left': '0', 'text-align': 'center', 'color': '#aaa', 'cursor': 'auto' }"> （暂无索引）
                </li>
            </div>

            <Transition>
                <div class="small main-left-2-ghost" v-if='ShowTree' @click.stop="ShowTree = false">
                    <div class="main-left print small main-left-small" v-if='ShowTree'>
                        <span @click='ShowTree = false' class='main-left-close'><font-awesome-icon
                                icon="times" /></span>
                        <li class="main-left-title"
                            style="color: #333;margin-bottom: 14px;margin-top: 14px;margin-left: 15px;font-size: 20px;cursor:auto;">
                            文档索引
                        </li>
                        <li v-for="i in TitleList.data" :key="i" class="main-left-title"
                            :style="{ 'margin-left': (30 + (i.level - 1) * 30) + 'px', 'color': ['#666', '#888', '#999'][i.level - 1] }"
                            @click="GotoTitle(i.id)">{{ i.title }}
                        </li>
                        <li v-if="TitleList.data.length == 0" class="main-left-title"
                            :style="{ 'margin-left': '0', 'text-align': 'center', 'color': '#aaa', 'cursor': 'auto', 'width': '100%', 'max-width': '100%' }">
                            （暂无索引）
                        </li>
                    </div>
                </div>
            </Transition>



            <div class="main" v-loading="fileLoading" id="refmain">
                <div class="main-right">
                    <!-- <div style="height: 40px;" class="print main-height"></div> -->
                    <div class="editor">
                        <!-- <div class="main-sround-tl print"></div>
                        <div class="main-sround-tr print"> </div>
                        <div class="main-sround-bl print"> </div>
                        <div class="main-sround-br print"> </div> -->
                        <div>
                            <editor-content id="pdf" :editor="editor" @contextmenu.prevent.stop="EditorContext" />
                        </div>
                        <div @click="EditorActive"
                            @contextmenu.prevent.stop="editor.chain().focus('end').run(); EditorContext($event)"
                            class="editor-space"></div>
                    </div>
                    <!-- <div style="height: 60px;" class="print main-height"></div> -->
                </div>
            </div>
        </div>
        <!-- <el-image-viewer v-if="ImageViewer" @close="CloseImageViewer" :url-list="ImageViewerImg" /> -->



        <!-- <div class="main-buttom print">
            <div>
                <span>字数：{{ CharacterCount2 }}</span>
                <span style="margin-left: 30px;">单词数：{{ CharacterWordCount }}</span>
                <span style="margin-left: 30px;" v-if="isCoop">当前有 {{ CoopCount }} 人正在协同编辑</span>
            </div>
        </div> -->

        <bubble-menu :shouldShow="shouldShowMenu" id="bubbleMenu" :editor="editor" :tippy-options="{ duration: 100 }"
            v-if="editor">
            <div class="bubble-menu" @contextmenu.prevent>
                <div class='bubble-menu-1'>
                    <span @click="bold" :class="!isBold ? '' : 'tools-select'"><font-awesome-icon
                            icon='bold'></font-awesome-icon></span>
                    <span @click="italic" :class="!isItalic ? '' : 'tools-select'"><font-awesome-icon
                            icon='italic'></font-awesome-icon></span>
                    <span @click="underline" :class="!isUnderline ? '' : 'tools-select'"><font-awesome-icon
                            icon='underline'></font-awesome-icon></span>
                    <span @click="strikethrough" :class="!isStrikethrough ? '' : 'tools-select'"><font-awesome-icon
                            icon='strikethrough'></font-awesome-icon></span>
                    <span style="width: 50px;">
                        <el-select @change="SetFontSize()" v-model="FontSize2" placeholder="字体大小" size="small">
                            <el-option v-for="item in FontSizeList" :key="item" :label="item" :value="item" />
                        </el-select>
                    </span>
                    <span style="margin-left: 5px;">
                        <pick-colors @change="SetFontColor" v-model:value="FontColor"
                            :colors="['#000000', '#ff4500', '#ffd700', '#00ced1', '#1e90ff', '#c71585',]" />
                    </span>
                    <el-dropdown>
                        <span style="margin-left: 0px;padding: 0px 5px;">
                            <font-awesome-icon
                                :icon='TextAlign2 == "center" ? "align-center" : TextAlign2 == "left" ? "align-left" : TextAlign2 == "right" ? "align-right" : "align-justify"'></font-awesome-icon>
                            <font-awesome-icon style="margin-left: 3px;" icon='caret-down'></font-awesome-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>
                                    <span @click="SetTextAlign('left')"
                                        :class="TextAlign2 != 'left' ? '' : 'tools-select'"><font-awesome-icon
                                            icon='align-left'></font-awesome-icon></span>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <span @click="SetTextAlign('center')"
                                        :class="TextAlign2 != 'center' ? '' : 'tools-select'"><font-awesome-icon
                                            icon='align-center'></font-awesome-icon></span>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <span @click="SetTextAlign('right')"
                                        :class="TextAlign2 != 'right' ? '' : 'tools-select'"><font-awesome-icon
                                            icon='align-right'></font-awesome-icon></span>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <span @click="SetTextAlign('justify')"
                                        :class="TextAlign2 != 'justify' ? '' : 'tools-select'"><font-awesome-icon
                                            icon='align-justify'></font-awesome-icon></span>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>

                    <el-dropdown>
                        <span
                            style="margin-left: 0px;padding: 0px 5px;width: 80px;color: blueviolet;text-shadow: #FF76FA 0px 0px 3px;">
                            <!-- <svg t="1719580485285" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="25402">
                                <path
                                    d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334a341.333333 341.333333 0 1 0 0 682.666666 341.333333 341.333333 0 0 0 0-682.666666z m-40.405333 156.586666l121.856 369.706667h-83.968l-27.050667-89.685333H361.898667l-27.648 89.685333H256L378.453333 327.253333h93.141334z m256.213333 0v369.706667h-78.549333V327.253333h78.506666z m-303.36 75.562667H420.693333l-43.306666 144.64h89.898666L424.448 402.773333z"
                                    p-id="25403"></path>
                            </svg> -->
                            AI Tools✨
                            <!-- <font-awesome-icon style="margin-left: 3px;" icon='caret-down'></font-awesome-icon> -->
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item @click="InsertAINode({ type: 1, needSelectText: true })">
                                    <span style="font-size: 12px">翻译选中文本</span>
                                </el-dropdown-item>
                                <el-dropdown-item @click="InsertAINode({ type: 2 })">
                                    <span style="font-size: 12px">全文总结</span>
                                </el-dropdown-item>
                                <el-dropdown-item @click="InsertAINode({ type: 3 })">
                                    <span style="font-size: 12px">全文摘要</span>
                                </el-dropdown-item>
                                <el-dropdown-item @click="InsertAINode({ type: 4, needTextBefore: true })">
                                    <span style="font-size: 12px">文章续写</span>
                                </el-dropdown-item>
                                <el-dropdown-item @click="InsertAINode({ type: 8, needSelectText: true })">
                                    <span style="font-size: 12px">文章润色</span>
                                </el-dropdown-item>
                                <el-dropdown-item @click="InsertAINode({ type: 5, needSelectText: true })">
                                    <span style="font-size: 12px">修改病句</span>
                                </el-dropdown-item>
                                <!-- <el-dropdown-item @click="isAIOpen = true; AISelect = 6">
                                    <span style="font-size: 12px">智能排版</span>
                                </el-dropdown-item> -->
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>


                </div>
                <div class='bubble-menu-1'>

                </div>
            </div>
        </bubble-menu>
        <!--  -->


        <div class="ocr-ghost" v-if="store.showOCRResult" @contextmenu.stop="">
            <OCRResult :key="store.OCRResultUrl" :src="store.OCRResultUrl"
                :ocrInfo="store.OCRResultDataToOcrInfo(store.OCRResultData)" class="ocr-result"></OCRResult>
            <div class="ocr-close" @click="store.showOCRResult = false">
                <font-awesome-icon icon="times" />
            </div>
            <div class="ocr-pre">
                <div style="height: 80px;"></div>
                <!-- <div class="ocr-copy" @click="copy">复制全部</div> -->
                <textarea :value="store.OCRResultToPretext(store.OCRResultData)" name="" id=""></textarea>
            </div>
        </div>

        <el-dialog align-center v-model="showCoopCode" title="加入协同编辑" width="500">
            <span></span>
            <template #footer>
                <div style="display: flex; align-items: flex-start; flex-direction: column;">
                    <div style="margin-bottom: 20px;">请输入协同码：</div>
                    <el-input v-model="coopCode"></el-input>
                </div>
                <div style="display: flex; justify-content: right; margin-top: 20px;">
                    <el-button type="primary" @click="joinCoop(); centerDialogVisible = false">
                        加入
                    </el-button>
                </div>
            </template>
        </el-dialog>


        <el-tour v-model="openTour" @close="closeTour" @finish="closeTour">
            <el-tour-step title="新手引导">
                <div>😊你好~我是笔匠，下面我来带你使用全新的AI编辑器吧！</div>
            </el-tour-step>
            <el-tour-step :target="getElementById('reftop1')" title="新手引导#1" description="这里是工具栏，可以使用基础的文档编辑功能" />
            <el-tour-step :target="getElementById('reftop2')" title="新手引导#2" description="这里是AI工具，可以选择AI功能在文章中使用" />
            <el-tour-step :target="getElementById('reftree')" title="新手引导#3" placement="right"
                description="这里是文档索引，可以便捷查看和跳转整个文档结构" />
            <el-tour-step :target="getElementById('refmain')" title="新手引导#4" placement="left"
                description="这里是编辑区，可以结合AI功能快速处理您的文档" />
            <el-tour-step title="新手引导#5" description="🚀OK！现在开始您的AI创作之旅吧！" />
            <!-- <el-tour-step target="reftop2" title="Other Actions" description="Click to see other" /> -->
        </el-tour>


    </div>
</template>
<script setup>
import { getCurrentInstance, nextTick, onBeforeUnmount, onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { useRouter, useRoute } from 'vue-router';
import { Editor, EditorContent, BubbleMenu } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import FontSize from 'tiptap-extension-font-size'
import ContextMenu from '@imengyu/vue3-context-menu'
import Underline from '@tiptap/extension-underline'
import PickColors from 'vue-pick-colors'
import TextAlign from '@tiptap/extension-text-align'
import CharacterCount from '@tiptap/extension-character-count'
import Focus from '@tiptap/extension-focus'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'
import Link from '@tiptap/extension-link'
// import Heading from '@tiptap/extension-heading'
import Heading from '@/components/Heading2.js'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import mermaid from '@/components/MermaidNode.js'
import VueMermaid from '@/components/MermaidNode.vue'
import Paper from '../components/Draw.js'
import { ElMessage, ElNotification } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import { useStore } from '@/store/index.js'
import BubbleMenu2 from '@tiptap/extension-bubble-menu'
import UniqueID from '@tiptap-pro/extension-unique-id'
import CodeBlock from "@tiptap/extension-code-block";
import CodeBlockLowlight from './../components/CodeBlockLowlight.js'
import { createLowlight, common } from 'lowlight'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import EchartsBar from "@/components/EchartsBar.js";
import EchartsPie from "@/components/EchartsPie.js";
import { baseUrl, baseUrl2, request } from '../axios.js'
// import Gapcursor from '@tiptap/extension-gapcursor'
import Commands from '@/components/CommandsList.js'
import suggestion from '@/components/CommandsListSug.js'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'
import ImageResize from 'tiptap-extension-resize-image';
import { SearchAndReplace } from "@sereneinserenade/tiptap-search-and-replace";
import ImageUploadExtension from "@/components/uploadImage/imageUploadExtension";
// import ImageUploadExtension from "tiptap-extension-image-upload";
import { ImagePlaceholder } from "@/components/uploadImage/imagePlaceholder.js";
import Collaboration from '@tiptap/extension-collaboration'
import * as Y from 'yjs'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import { HocuspocusProvider } from '@hocuspocus/provider'
import { Indent } from "@/components/Indent.js";
import { Node, mergeAttributes, nodeInputRule } from '@tiptap/core';
import Dropcursor from '@tiptap/extension-dropcursor'
import Blockquote from "@tiptap/extension-blockquote";
import hortzontalRule from "@tiptap/extension-horizontal-rule";
import OCRResult from '@/components/OCRResult.vue'
import AudioNode from "@/components/AudioNode.js";
import { Base64 } from "js-base64";
import { Plugin as Plugin2, PluginKey } from "@tiptap/pm/state";
import EchartsLine from "@/components/EchartsLine.js";
import AINode from "@/components/AINode.js";
import GlobalDragHandle from 'tiptap-extension-global-drag-handle'
import { TrailingNode } from "@/components/TrailingNode.js";
import { Hyperlink, previewHyperlinkModal, setHyperlinkModal } from "@docs.plus/extension-hyperlink";
import { getEditor, setEditor } from "./editor.js";
// import TimelineNode from "@/components/TimelineNode.js";
// console.log(common.map(item => { return function(hljs){
//     return hljs.highlight('javascript', item).value
// } }));
console.log(common);
const lowlight = createLowlight(common)
console.log(lowlight.highlight('javascript', 'console.log("hello world")'));
// lowlight./
// import mermaid from 'mermaid'
const router = useRouter();
const route = useRoute();
const store = useStore()
let Template = ''
store.DocTitle = '文档'
// route.query.id
if (route.query.template == 'graph') {
    Template =
        "<h1 style=\"text-indent: 0em !important;\" id=\"h-a66ebc5c\">创建图表</h1><h2 style=\"text-indent: 0em !important;\" id=\"h-fd84d82e\">手动创建</h2><p style=\"text-indent: 0em !important;\">您可以在编辑器中插入图表</p><p style=\"text-indent: 0em !important;\">点击编辑您可以自由修改您的图表</p><p style=\"text-indent: 0em !important;\"></p><p style=\"text-indent: 0em !important;\"></p><vue-echarts-bar data=\"{&quot;title&quot;:&quot;图表示例&quot;,&quot;legend&quot;:[&quot;1月销量&quot;,&quot;2月销量&quot;],&quot;xAxis&quot;:[&quot;衬衫&quot;,&quot;羊毛衫&quot;,&quot;雪纺衫&quot;,&quot;裤子&quot;,&quot;高跟鞋&quot;,&quot;袜子&quot;],&quot;series&quot;:[{&quot;name&quot;:&quot;1月销量&quot;,&quot;data&quot;:[5,20,36,10,10,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},{&quot;name&quot;:&quot;2月销量&quot;,&quot;data&quot;:[&quot;12&quot;,&quot;14&quot;,&quot;25&quot;,&quot;13&quot;,&quot;31&quot;,&quot;13&quot;,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}]}\"></vue-echarts-bar><vue-echarts-pie data=\"{&quot;title&quot;:&quot;销售量占比统计&quot;,&quot;data&quot;:[{&quot;name&quot;:&quot;第一季度&quot;,&quot;value&quot;:100},{&quot;name&quot;:&quot;第二季度&quot;,&quot;value&quot;:50},{&quot;name&quot;:&quot;第三季度&quot;,&quot;value&quot;:120},{&quot;name&quot;:&quot;第四季度&quot;,&quot;value&quot;:60},{&quot;name&quot;:&quot;&quot;,&quot;value&quot;:null},{&quot;name&quot;:null,&quot;value&quot;:null}]}\"></vue-echarts-pie><vue-echarts-line data=\"{&quot;title&quot;:&quot;温度变化折线图&quot;,&quot;xAxis&quot;:[&quot;一月&quot;,&quot;二月&quot;,&quot;三月&quot;,&quot;四月&quot;,&quot;五月&quot;],&quot;series&quot;:[[&quot;7&quot;,&quot;12&quot;,&quot;18&quot;,&quot;25&quot;,&quot;29&quot;,null,null],[&quot;-1&quot;,&quot;4&quot;,&quot;10&quot;,&quot;17&quot;,&quot;20&quot;,null,null]]}\"></vue-echarts-line><h2 style=\"text-indent: 0em !important;\" id=\"h-761e8d85\">AI制图</h2><p style=\"text-indent: 0em !important;\">您还可以选择一段文字自动生成图表，例如：</p><p style=\"text-indent: 0em !important;\"></p><p style=\"text-indent: 0em !important;\">一月 12</p><p style=\"text-indent: 0em !important;\">二月 14</p><p style=\"text-indent: 0em !important;\">三月 19</p><p style=\"text-indent: 0em !important;\">四月 18</p><p style=\"text-indent: 0em !important;\"></p><p style=\"text-indent: 0em !important;\">生成图表后点击插入，将自动转换成您想要的图表</p><p style=\"text-indent: 0em !important;\"></p>"
} else if (route.query.template == 'blank') {
    Template = ''
} else if (route.query.template == 'doc') {
    Template =
        "<h1 style=\"text-indent: 0em !important;\" id=\"h-e43fab94\">智慧笔匠在线文档</h1><h2 style=\"text-indent: 0em !important;\" id=\"h-dfeb91ba\">快速使用</h2><p style=\"text-indent: 0em !important;\">你好，我是笔匠！点击上方菜单栏开始使用吧！</p><p style=\"text-indent: 0em !important;\"></p><p style=\"text-indent: 0em !important;\">Tips：支持Markdown语法！您可以通过Markdown语法快速开始编辑！</p><p style=\"text-indent: 0em !important;\"></p><h2 style=\"text-indent: 0em !important;\" id=\"h-3d79b4f4\">我可以做...</h2><p style=\"text-indent: 0em !important;\">我可以做这些：</p><ul><li><p style=\"text-indent: 0em !important;\">妙笔生花：文字编辑辅助</p></li><li><p style=\"text-indent: 0em !important;\">图片识别：智能识别图片信息</p></li><li><p style=\"text-indent: 0em !important;\">智能排版：按照您的要求自动进行排版</p></li><li><p style=\"text-indent: 0em !important;\">自动图表：根据文字自动生成各种图表</p></li><li><p style=\"text-indent: 0em !important;\">……</p></li></ul><h2 style=\"text-indent: 0em !important;\" id=\"h-e4a4d03a\">体验AI功能</h2><p style=\"text-indent: 0em !important;\">您可以选择一段文字或者右键选择一张图片/音频，在AI助手或者上方AI工具栏中选择您希望使用的AI小工具。让AI帮助您完成您的任务！</p><h2 style=\"text-indent: 0em !important;\" id=\"h-093af14a\">开始创作吧！</h2><p style=\"text-indent: 0em !important;\">现在请开始您的创作之旅吧！</p><p style=\"text-indent: 0em !important;\"></p>"
} else if (route.query.template == 'open') {
    Template = ''
    store.isSave = true
    // 打开文件
    nextTick(() => {
        OpenLocal()
    })
} else if (route.query.template == 'mermaid') {
    Template = "<h1 style=\"text-indent: 0em !important;\" id=\"h-a01f7420\">流程图示例</h1><h2 style=\"text-indent: 0em !important;\" id=\"h-f77345bf\">手动绘制流程图</h2><p style=\"text-indent: 0em !important;\">借助强大的mermaid语法，您可以创建各种各样的流程图</p><vue-mermaid data=\"graph LR\n    A --单连接声明--> B\n    B --多连接声明--> C --多连接声明--> D\n    D --多节点聚合--> E &amp; F --多节点聚合--> A\"></vue-mermaid><p style=\"text-indent: 0em !important;\"></p><vue-mermaid data=\"mindmap\n  root((mindmap))\n    Origins\n      Long history\n      ::icon(fa fa-book)\n      Popularisation\n        British popular psychology author Tony Buzan\n    Research\n      On effectiveness<br/>and features\n      On Automatic creation\n        Uses\n    Tools\n      Pen and paper\n      Mermaid\n\n\"></vue-mermaid><p style=\"text-indent: 0em !important;\"></p><p style=\"text-indent: 0em !important;\">凡是Mermaid所支持的图表类型，都可以进行绘制</p><p style=\"text-indent: 0em !important;\"></p><h2 style=\"text-indent: 0em !important;\" id=\"h-dfefb382\">AI生成流程图</h2><p style=\"text-indent: 0em !important;\">您可以选中一段文字，例如：</p><p style=\"text-indent: 0em !important;\"></p><p style=\"text-indent: 0em !important;\">明天早上我先起床，再去吃饭，再去上班</p><p style=\"text-indent: 0em !important;\"></p><p style=\"text-indent: 0em !important;\">然后点击AI助手的智能生成或者AI工具栏的文字转流程图，就可以由AI自动绘制流程图！生成的流程图以mermaid语法表示，插入文章后将会自动转换成流程图。</p><p style=\"text-indent: 0em !important;\"></p>"
}
let timer = undefined
const openTour = ref(false)
nextTick(() => {
    if (!localStorage.getItem('hasTourAi')) {
        openTour.value = true
    }
})
function closeTour() {
    localStorage.setItem('hasTourAi', 'true')
    openTour.value = false
}
function getElementById(id) {
    return document.getElementById(id)
}


function CreateEditor(isCoop = false, useDoc = true) {
    let cc = isCoop ?
        [CollaborationCursor.configure({
            provider: provider,
            user: {
                name: store.UserInfo.name,
            },
        })] : []
    let ccdoc = useDoc ? [Collaboration.configure({ document: doc })] : []
    return new Editor({
        // content: "",
        extensions: [
            hortzontalRule, Blockquote, GlobalDragHandle.configure({ dragHandleSelector: ".drag-handle" }),
            ...ccdoc, TrailingNode, Hyperlink.configure({
                hyperlinkOnPaste: false,
                openOnClick: true,
                modals: {
                    previewHyperlink: previewHyperlinkModal,
                    setHyperlink: setHyperlinkModal,
                },
            }),
            Dropcursor.configure({ class: 'drop-cursor' }),
            Underline, FontSize,
            StarterKit.configure({
                dropcursor: false,
                gapcursor: false,
            }),
            TextStyle, CharacterCount, Superscript, Subscript,
            Color.configure({ types: ["textStyle"], }),
            TextAlign.configure({ types: ['heading', 'paragraph'], }),
            Focus.configure({ className: 'focus', mode: 'shallowest' }),
            Link.configure({ autolink: true, linkOnPaste: true, openOnClick: false }),
            Heading.configure({ levels: [1, 2, 3, 4] }),
            TaskList, TaskItem, EchartsBar, EchartsPie,
            Image.configure({
                inline: true,
            })
            , ImageResize.extend({
                addAttributes() {
                    return {
                        src: {
                            default: null,
                        },
                        alt: {
                            default: null,
                        },
                        style: {
                            default: 'width: 100%; height: auto; cursor: pointer;',
                            parseHTML: element => {
                                const width = element.style.getPropertyValue('width')
                                // console.log(element.style.getPropertyValue('width'));
                                return `${element.style.cssText};width: ${width}; height: auto; cursor: pointer;`
                            },
                        },
                        title: {
                            default: null,
                        },
                        loading: {
                            default: null,
                        },
                        srcset: {
                            default: null,
                        },
                        sizes: {
                            default: null,
                        },
                        crossorigin: {
                            default: null,
                        },
                        usemap: {
                            default: null,
                        },
                        ismap: {
                            default: null,
                        },
                        width: {
                            default: null,
                        },
                        height: {
                            default: null,
                        },
                        referrerpolicy: {
                            default: null,
                        },
                        longdesc: {
                            default: null,
                        },
                        decoding: {
                            default: null,
                        },
                        class: {
                            default: null,
                        },
                        id: {
                            default: null,
                        },
                        name: {
                            default: null,
                        },
                        draggable: {
                            default: true,
                        },
                        tabindex: {
                            default: null,
                        },
                        'aria-label': {
                            default: null,
                        },
                        'aria-labelledby': {
                            default: null,
                        },
                        'aria-describedby': {
                            default: null,
                        },
                    };
                },
            }),
            ImageUploadExtension.configure({
                acceptMimes: ['image/jpeg', 'image/gif', 'image/png', 'image/jpg'],
                upload: uploadImage,
            }),
            ImagePlaceholder.configure({
                inline: false
            }),
            mermaid, Paper,
            Commands.configure({ suggestion }),
            Placeholder.configure({ placeholder: '输入正文 或 按下 "/" 键快速开始', }),
            CodeBlockLowlight.configure({ lowlight, languageClassPrefix: 'language-', }),
            CodeBlock.extend({
                addProseMirrorPlugins() {
                    return [
                        new Plugin2({
                            props: {
                                handleKeyDown: (view, event) => {
                                    if (editor.isActive('codeBlock')) {
                                        if (event.key === 'Enter') {
                                            if (AIcodeData.value) {
                                                AIcodeSugClear()
                                            } else {
                                                AIcodeSugDebouce()
                                            }

                                        } else if (event.key === 'Tab') {
                                            if (AIcodeData.value) {
                                                const { from, to } = editor.view.state.selection
                                                editor.commands.deleteRange({
                                                    from: from,
                                                    to: from + AIcodeData.value.length + 2
                                                })
                                                let temp = AIcodeData.value
                                                AIcodeData.value = ''
                                                editor.commands.setSearchTerm('')
                                                editor.commands.insertContentAt(to, `${temp}`)
                                                return editor.commands.setTextSelection(from + temp.length)
                                            } else {
                                                return this.editor.commands.insertContent('    ');
                                            }
                                        } else if (event.key === ' ') {
                                            AIcodeSugDebouce()
                                        } else {
                                            if (AIcodeData.value) {
                                                AIcodeSugClear()
                                            }
                                        }
                                    }

                                },
                                handleClick: (view, pos) => {
                                    if (AIcodeData.value) {
                                        editor.commands.deleteRange({
                                            from: from2,
                                            to: to2
                                        })
                                        AIcodeData.value = ''
                                        editor.commands.setSearchTerm('')
                                    }
                                }
                            }
                        })
                    ]
                }
            }),
            Table.configure({ resizable: true, }), TableRow, TableHeader, TableCell,
            SearchAndReplace.configure({
                searchResultClass: "search-result"
            }),
            // ...cc,
            Indent,
            //  Gapcursor, 
            AudioNode, EchartsLine, AINode
        ],
        autofocus: true,
        editable: true,
        injectCSS: true,
        content: Template,
    })
}
store.CreateEditor = CreateEditor

let fileId = ''
let fileLoading = ref(false)
if (route.query.id) {
    fileLoading.value = true
    // 获取文件
    fileId = route.query.id
    console.log(111);
    request({
        url: '/api/file/text/',
        method: 'get',
        params: {
            text_id: route.query.id
        }
    }).then((response) => {
        Template = JSON.parse(response.data.content).content
        // console.log(Template);
        store.isSave = true
        store.DocTitle = response.data.name
        editor.commands.setContent(Template)
        fileLoading.value = false
        extractHeadings()
    }).catch((error) => {
        fileLoading.value = false
        ElNotification({
            title: '错误',
            message: '打开文件失败',
            type: 'error',
        })
    })
}
console.log(222);
function GotoHome() {
    if (store.isSave) {
        router.push('/')
    } else {
        ElMessageBox.confirm('当前文件还没有保存，确定要返回首页吗', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }).then(() => {
            setTimeout(() => {
                router.push('/')
            }, 0);
        }).catch(() => {
            console.log('取消');
        });
    }
}


console.log(document.getElementById('bubbleMenu1'));
let doc = new Y.Doc()
let provider = undefined
const isCoop = ref(false)
const coopCode = ref('')
const showCoopCode = ref(false)
// startCoop()
if (route.query.coopcode) {
    showCoopCode.value = true
    coopCode.value = route.query.coopcode
}
// const state = reactive({
let editor = CreateEditor()
store.editor = editor

function startCoop() {
    if (!store.UserInfo.name) {
        ElNotification({
            title: '错误',
            message: '请先登录',
            type: 'error',
        })
        return
    }
    function randomCode() {
        return Math.random().toString(36).substring(2, 8)
    }
    coopCode.value = randomCode().toUpperCase()
    isCoop.value = true
    let temp = editor.getHTML()

    provider = new HocuspocusProvider({
        url: baseUrl2,
        name: coopCode.value.toUpperCase(),
        document: doc,
        onSynced() {
            if (!doc.getMap('config').get('initialContentLoaded') && editor) {
                doc.getMap('config').set('initialContentLoaded', true)
                // editor.commands.setContent()
            }
            ElNotification({
                title: '成功',
                message: '已开启协同编辑，您的协同码是' + coopCode.value.toUpperCase(),
                type: 'success',
            })
            // editor.destroy()
            console.log(editor);
            editor = CreateEditor(true)
            console.log(editor);
            editor.commands.setContent(temp)
            store.editor = editor
            console.log(editor);
        },
    })

    // }, 200);

    // GetDocTitle(temp)
    // editor
    // editor.registerPlugin(CollaborationCursor.configure({
    //     provider: provider,
    //     user: {
    //         name: store.UserInfo.name,
    //     },
    //     // PluginKey: 'collaborationCursor',
    // }))
    // console.log(editor.registerPlugin);

}
const TopTabs = ref()
const CoopCount = ref(0)
setInterval(() => {
    if (isCoop.value) {
        request({
            baseUrl: baseUrl2,
            url: '/get_doc_num?doc=' + coopCode.value.toUpperCase(),
            method: 'GET',
        }).then((response) => {
            CoopCount.value = response.data.num
        })
    }
}, 2000);

function stopCoop() {
    isCoop.value = false
    provider.destroy()
    ElNotification({
        title: '成功',
        message: '已退出协同编辑',
        type: 'success',
    })
    let temp = editor.getHTML()
    // editor.destroy()
    editor = CreateEditor(false)

    editor.commands.setContent(temp)
    store.editor = editor
    // editor.unregisterPlugin('collaborationCursor')
}

function getCoop() {
    console.log(coopCode.value);
    //再写一个复制按钮，点击复制协同码
    ElMessageBox.alert(`您的协同码是${coopCode.value.toUpperCase()}。\n复制链接https://editor.funny233.xyz/editor?coopcode=${coopCode.value.toUpperCase()} 邀请加入协作。`, '协同码', {
        confirmButtonText: '确定',
        type: 'info',
    }).then(() => {

    }).catch(() => {

    });
}

function joinCoop() {
    console.log(store.UserInfo.name);
    if (!store.UserInfo.name) {
        ElNotification({
            title: '错误',
            message: '请先登录',
            type: 'error',
        })
        return
    }
    function joinCoop2() {
        console.log(coopCode.value);
        request({
            baseUrl: baseUrl2,
            url: '/check_doc?doc=' + coopCode.value.toUpperCase(),
            method: 'GET',
        }).then((response) => {
            if (response.data.type) {
                editor.commands.setContent('')
                provider = undefined
                provider = new HocuspocusProvider({
                    url: baseUrl2,
                    name: coopCode.value,
                    document: doc,
                    onSynced() {
                        if (!doc.getMap('config').get('initialContentLoaded') && editor) {
                            doc.getMap('config').set('initialContentLoaded', true)

                        }
                        showCoopCode.value = false
                        ElNotification({
                            title: '成功',
                            message: '已加入协同编辑',
                            type: 'success',
                        })
                        isCoop.value = true
                    },
                })
                // editor.destroy()
                editor = CreateEditor(true)
                store.editor = editor
            } else {
                ElNotification({
                    title: '错误',
                    message: '协同码不存在',
                    type: 'error',
                })
            }
        })
    }
    if (!store.isSave) {
        ElMessageBox.confirm('当前文件还没有保存，确定要加入协同编辑吗', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }).then(() => {
            setTimeout(() => {
                joinCoop2()
            }, 0);
        }).catch(() => {
            console.log('取消');
        });
    } else {
        joinCoop2()
    }



}

onMounted(() => {

    // editor.registerPlugin(BubbleMenu2.config({pluginKey: 'bubbleMenu', element: document.querySelector('#bubbleMenu')}));
})


function uploadImage(file) {
    console.log(111);
    var formData = new FormData();
    formData.append("photo", file);
    return request({
        url: '/api/file/photo/',
        body: formData,
        method: 'post',
        headers: {
            'Content-Type': 'application/form-data'
        }
    }).then((response) => {
        return baseUrl + response.data.photo_path
    }).catch((error) => {
        return false
    })
}

function uploadImage2() {
    document.getElementById('uploadImg2').click()
}

const AIImgUrlLoading = ref(false)
function InsertPic3({ target }) {
    AIImgUrlLoading.value = true
    const file = target.files[0]
    target.value = ''
    var formData = new FormData();
    formData.append("photo", file);
    request({
        url: '/api/file/photo/',
        body: formData,
        method: 'post',
        headers: {
            'Content-Type': 'application/form-data'
        }
    }).then((response) => {
        AIImgUrl.value = baseUrl + response.data.photo_path
        AIImgUrlLoading.value = false
    }).catch((error) => {
        AIImgUrlLoading.value = false
        return false
    })
}

function InsertPic2() {
    document.getElementById('uploadImg').click()
}
function InsertPic({ target }) {
    const file = target.files[0]
    target.value = ''
    editor.commands.uploadImage({ file })
}
async function test() {
    // document.execCommand('paste')
    // editor.commands.deleteSelection()
    // let audio = fetch('https://editor.funny233.xyz/static/audio/1.mp3')
    // request
}



function GetDocTitle(str) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    console.log(doc.querySelector('body').firstElementChild.textContent);
    return doc.querySelector('body').firstElementChild.textContent
}

function SaveLocal() {
    store.isSave = true
    let html = editor.getHTML()
    let blob = new Blob([JSON.stringify({
        content: html
    })], { type: "text/plain;charset=utf-8" });
    // let objectURL = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = ((store.DocTitle === '文档' || store.DocTitle === '') ? (GetDocTitle(html) || '文档') : store.DocTitle) + '.smd';
    store.DocTitle = (store.DocTitle === '文档' || store.DocTitle === '') ? (GetDocTitle(html) || '文档') : store.DocTitle
    link.click();
}
function SaveServer() {
    let html = editor.getHTML()
    if (fileId) {
        request({
            url: '/api/file/text/',
            method: 'put',
            body: {
                text_id: fileId,
                update_type: 'content',
                content: JSON.stringify({ content: editor.getHTML() })
            }
        }).then((response) => {
            ElNotification({
                title: '成功',
                message: '保存成功',
                type: 'success',
            })
            store.isSave = true
        })
    } else {
        request({
            url: '/api/file/text/',
            method: 'post',
            body: {
                content: JSON.stringify({ content: editor.getHTML() }),
                name: ((store.DocTitle === '文档' || store.DocTitle === '') ? (GetDocTitle(html) || '文档') : store.DocTitle).substring(0, 15),
                location_type: 0
            }
        }).then((response) => {
            ElNotification({
                title: '成功',
                message: '保存成功',
                type: 'success',
            })
            store.isSave = true
            store.DocTitle = ((store.DocTitle === '文档' || store.DocTitle === '') ? (GetDocTitle(html) || '文档') : store.DocTitle).substring(0, 15)
            fileId = response.data.id
        })
    }
}

window.addEventListener('beforeunload', function (e) {
    if (!store.isSave) {
        e.returnValue = '当前文件还没有保存，确定要离开吗';
    }
});

function OpenLocal() {
    if (!store.isSave) {
        ElMessageBox.confirm('当前文件还没有保存，确定要打开新文件吗', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }).then(() => {
            setTimeout(() => {
                store.isSave = true
                document.getElementById('OpenLocal2').click();
            }, 0);
        }).catch(() => {
            console.log('取消');
        });
    } else {
        document.getElementById('OpenLocal2').click();
    }
}

function OpenLocal2(e) {
    if (!e.target.files.length) return
    try {
        let file = e.target.files[0];
        let reader = new FileReader(); // 筛选后缀为smd格式


        reader.onloadend = function (e) {
            try {
                console.log(file);
                let html = JSON.parse(e.target.result).content
                editor.commands.setContent(html)
                store.DocTitle = file.name.split('.').slice(0, -1).join('.')
                store.isSave = true
                editor.state.history$.prevRanges = null;
                editor.state.history$.done.eventCount = 0
                CanUndo.value = editor.can().undo()
                CanRedo.value = editor.can().redo()
                ElNotification({
                    title: '成功',
                    message: '打开文件成功',
                    type: 'success',
                })
            } catch (error) {
                ElNotification({
                    title: '错误',
                    message: '打开文件失败：可能不是所需格式',
                    type: 'error',
                })
            }
        }
        reader.readAsText(file);
    } catch (error) {
        ElNotification({
            title: '错误',
            message: '打开文件失败：可能不是所需格式',
            type: 'error',
        })
    }
}

function NewFile() {
    if (!store.isSave) {
        ElMessageBox.confirm('当前文件还没有保存，确定要新建文件吗', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }).then(() => {
            store.isSave = true
            editor.commands.setContent('')
            store.DocTitle = '文档'
            editor.state.history$.prevRanges = null;
            editor.state.history$.done.eventCount = 0
            CanUndo.value = editor.can().undo()
            CanRedo.value = editor.can().redo()
        }).catch(() => {
            console.log('取消');
        });
    } else {
        editor.commands.setContent('')
        store.DocTitle = '文档'
    }
}

function SavePDF() {
    setTimeout(() => {
        window.print()
    }, 1000);
}

const EditorActive = () => {
    editor.chain().focus().run();
};

function shouldShowMenu({ editor, view, state, oldState, from, to }) {
    if (from - to == 0) return false
    const activeStates = [
        'timeline', 'ai', 'image', 'paper',
        'EchartsBar', 'EchartsPie', 'EchartsLine', 'mermaid'
    ]
    return !activeStates.some(stateName => editor.isActive(stateName))
}

function undo() {
    editor.chain().undo().run()
}
function redo() {
    editor.chain().redo().run()
}
const isBold = ref(false)
const isItalic = ref(false)
const isUnderline = ref(false)
const isStrikethrough = ref(false)

function bold() {
    editor.chain().focus().toggleBold().run()
    isBold.value = editor.isActive('bold')
    // isBold.value = !isBold.value
}
function italic() {
    editor.chain().focus().toggleItalic().run()
    isItalic.value = editor.isActive('italic')
    // isItalic.value = !isItalic.value
}
function underline() {
    editor.commands.toggleUnderline()
    isUnderline.value = editor.isActive('underline')
    // isUnderline.value = !isUnderline.value
}
function strikethrough() {
    editor.chain().focus().toggleStrike().run()
    isStrikethrough.value = editor.isActive('strike')
    // isStrikethrough.value = !isStrikethrough.value
}

const CanUndo = ref(false)
const CanRedo = ref(false)

const FontSize2 = ref(12)
const FontSizeList = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72]
function SetFontSize() {
    editor.chain().focus().setFontSize(FontSize2.value + 'pt').run()
}

const FontColor = ref('#000000')
function SetFontColor() {
    editor.chain().focus().setColor(FontColor.value).run()
}

const TextAlign2 = ref('left')
function SetTextAlign(value) {
    editor.chain().focus().setTextAlign(value).run()
    // TextAlign2.value = value
    if (editor.isActive({ textAlign: 'justify' })) {
        TextAlign2.value = 'justify'
    } else if (editor.isActive({ textAlign: 'center' })) {
        TextAlign2.value = 'center'
    } else if (editor.isActive({ textAlign: 'right' })) {
        TextAlign2.value = 'right'
    } else {
        TextAlign2.value = 'left'
    }
}
const isSubscript = ref(false)
function SetSubscript() {
    editor.chain().focus().toggleSubscript().run()
    isSubscript.value = editor.isActive('subscript')

    // isSubscript.value = !isSubscript.value
}

const isSuperscript = ref(false)
function SetSuperscript() {
    editor.chain().focus().toggleSuperscript().run()
    // isSuperscript.value = !isSuperscript.value
    isSuperscript.value = editor.isActive('superscript')
}
const isLink = ref(false)
function SetLink() {
    if (isLink.value) {
        // editor.chain().focus().unsetLink().run()
        this.editor.commands.unsetHyperlink();
    } else {
        this.editor.commands.setHyperlink({
            href: '',
            target: '_blank'
        });
    }
}

const isCode = ref(false)
function SetCode() {
    editor.chain().focus().toggleCodeBlock().run()
    isCode.value = editor.isActive('codeBlock')
}

let TitleList = reactive({ data: [] })

function extractHeadings() {
    let parser = new DOMParser();
    let doc = parser.parseFromString(editor.getHTML(), 'text/html');
    let headings = [];
    let headingElements = doc.querySelectorAll('h1, h2, h3');
    headingElements.forEach(element => {
        let level;
        switch (element.tagName.toLowerCase()) {
            case 'h1':
                level = 1;
                break;
            case 'h2':
                level = 2;
                break;
            case 'h3':
                level = 3;
                break;
        }
        headings.push({
            title: element.textContent.trim(),
            level: level,
            id: element.id
        });
    });
    TitleList.data = headings
    // console.log(TitleList);
}

function GotoTitle(id) {
    let element = document.getElementById(id);
    console.log(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

const Heading2 = ref(0)
function SetHeading(value) {
    editor.chain().focus().toggleHeading({ level: value }).run()
    // Heading2.value = value
    let flag = false
    for (let i = 1; i <= 4; i++) {
        if (editor.isActive('heading', { level: i })) {
            Heading2.value = i
            flag = true
            break
        }
    }
}
const isListol = ref(false)
function SetListol() {
    editor.chain().focus().toggleOrderedList().run()
    isListol.value = editor.isActive('orderedList')
    isListul.value = editor.isActive('bulletList')
}
const isListul = ref(false)
function SetListul() {
    editor.chain().focus().toggleBulletList().run()
    isListol.value = editor.isActive('orderedList')
    isListul.value = editor.isActive('bulletList')
}
const isTasks = ref(false)
function SetTasks() {
    editor.chain().focus().toggleTaskList().run()
    isTasks.value = editor.isActive('taskList')
}

function InsertGraph(type) {
    if (type == 1) {
        let to = editor.view.state.selection.to
        editor.chain().focus().insertContentAt(to, '<vue-mermaid data="graph TB\n使用mermaid-->创建您的图表"></vue-mermaid>').run()
    } else if (type == 2) {
        let to = editor.view.state.selection.to
        editor.commands.insertContentAt(to, '<vue-echarts-bar></vue-echarts-bar>')
    } else if (type == 3) {
        let to = editor.view.state.selection.to
        editor.commands.insertContentAt(to, '<vue-echarts-pie></vue-echarts-pie>')
    } else if (type == 4) {
        let to = editor.view.state.selection.to
        editor.commands.insertContentAt(to, '<vue-echarts-line></vue-echarts-line>')
    }
}

function InsertDraw() {
    let to = editor.view.state.selection.to
    editor.chain().focus().insertContentAt(to, '<div data-type="paper"></div>').run()
}


const isTable = ref(false)
const InsertTableCol = ref(3)
const InsertTableRow = ref(3)
function InsertTable() {
    editor.chain().focus().insertTable({ rows: InsertTableRow.value, cols: InsertTableCol.value }).run()
}
function InsertTableLine(value) {
    if (value == 'left') {
        editor.commands.addColumnBefore();
    } else if (value == 'right') {
        editor.commands.addColumnAfter();
    } else if (value == 'up') {
        editor.commands.addRowBefore();
    } else if (value == 'down') {
        editor.commands.addRowAfter();
    }
}

function DeleteTable(value) {
    if (value == 'row') {
        editor.commands.deleteRow();
    } else if (value == 'col') {
        editor.commands.deleteColumn();
    }
}

function debounce(func, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// 右键编辑器
const contextMenu = ref(null)
const contextMenuData = ref(null)
const contextMenuStyle = ref({
    display: 'none',
    left: '0px',
    top: '0px',
})
function EditorContext(event) {
    console.log(editor.isActive('audio'));
    let isAudio = editor.isActive('audio') ? [{
        label: '语音转文字',
        onClick: () => {
            InsertAINode({ type: 9, url: editor.getAttributes('audio').src })
        }
    }] : []
    let isImage = editor.isActive('image') ? [{
        label: '图片OCR', onClick: () => {
            InsertAINode({ type: 7.1, url: editor.getAttributes('image').src })
        }
    }, {
        label: '目标检测', onClick: () => {
            InsertAINode({ type: 7.2, url: editor.getAttributes('image').src })
        }
    }, {
        label: '图片表格识别', onClick: () => {
            InsertAINode({ type: 7.3, url: editor.getAttributes('image').src })
        }
    }] : []
    let isText = (!editor.isActive('audio') && !editor.isActive('image') && !editor.isActive('paper') && !editor.isActive('EchartsBar') && !editor.isActive('EchartsPie') && !editor.isActive('mermaid'))
        ? [{
            label: '翻译选中文本',
            onClick: () => { InsertAINode({ type: 1, needSelectText: true }) }
        }, {
            label: '全文总结',
            onClick: () => { InsertAINode({ type: 2 }) }
        }, {
            label: '全文摘要',
            onClick: () => { InsertAINode({ type: 3 }) }
        }, {
            label: '文章续写',
            onClick: () => { InsertAINode({ type: 4, needTextBefore: true }) }
        }, {
            label: '文章润色',
            onClick: () => { InsertAINode({ type: 8, needSelectText: true }) }
        }, {
            label: '修改病句',
            onClick: () => { InsertAINode({ type: 5, needSelectText: true }) }
        }] : []
    ContextMenu.showContextMenu({
        preserveIconWidth: false,
        x: event.x, y: event.y, theme: 'flat',
        items: [{
            label: '剪切',
            onClick: () => { document.execCommand('cut') }
        }, {
            label: '复制',
            onClick: () => {
                document.execCommand('copy')

            }
        }, {
            label: '粘贴',
            onClick: async (event) => {
                // const clipboard = await navigator.clipboard.readText()
                // editor.chain().focus().insertContent(clipboard).run()
                const clipboardItems = await navigator.clipboard.read();
                for (const item of clipboardItems) {
                    if (item.types.includes('text/html')) {
                        const blob = await item.getType('text/html');
                        const html = await blob.text();
                        editor.chain().focus().insertContent(html).run();
                    } else if (item.types.includes('text/plain')) {
                        const blob = await item.getType('text/plain');
                        const text = await blob.text();
                        editor.chain().focus().insertContent(text).run();
                    }
                }
            }
        }, {
            label: '全选',
            onClick: () => {
                editor.chain().focus('all').run();
            }
        }, { divided: true }, {
            label: '撤销',
            disabled: !CanUndo.value,
            onClick: () => { undo() }
        }, {
            label: '重做',
            disabled: !CanRedo.value,
            onClick: () => { redo() }
        }, { divided: true }, {
            label: '表格',
            disabled: !isTable.value,
            children: [{
                label: '向后插入一列',
                onClick: () => { InsertTableLine('right') }
            }, {
                label: '向前插入一列',
                onClick: () => { InsertTableLine('left') }
            }, {
                label: '向下插入一行',
                onClick: () => { InsertTableLine('down') }
            }, {
                label: '向上插入一行',
                onClick: () => { InsertTableLine('up') }
            }, { divided: true }, {
                label: '删除行',
                onClick: () => { DeleteTable('row') }
            }, {
                label: '删除列',
                onClick: () => { DeleteTable('col') }
            }, { divided: true }, {
                label: '合并单元格',
                onClick: () => { editor.commands.mergeCells() }
            }, {
                label: '拆分单元格',
                onClick: () => { editor.commands.splitCell() }
            }]
        }, { divided: true }, {
            label: 'AI工具',
            children: [...isText, ...isImage, ...isAudio]
        }]
    })
}
const ShowTree = ref(window.innerWidth >= 768)
const isAIOpen = ref(true)
// const AIData = ref('')
const AISelect = ref(1)
function AIInsert(data) {
    let to = editor.view.state.selection.to
    editor.chain().focus().insertContentAt(to, data).run()
}



editor.on('selectionUpdate', () => {
    isBold.value = editor.isActive('bold')
    isItalic.value = editor.isActive('italic')
    isStrikethrough.value = editor.isActive('strike')
    isUnderline.value = editor.isActive('underline')
    let flag = false
    for (let i = 0; i < FontSizeList.length; i++) {
        if (editor.isActive('textStyle', { fontSize: FontSizeList[i] + 'pt' })) {
            FontSize2.value = FontSizeList[i]
            flag = true
            break
        }
    }
    if (!flag) { FontSize2.value = 12 }
    FontColor.value = editor.getAttributes('textStyle').color || '#000000'
    if (editor.isActive({ textAlign: 'justify' })) {
        TextAlign2.value = 'justify'
    } else if (editor.isActive({ textAlign: 'center' })) {
        TextAlign2.value = 'center'
    } else if (editor.isActive({ textAlign: 'right' })) {
        TextAlign2.value = 'right'
    } else {
        TextAlign2.value = 'left'
    }
    isSubscript.value = editor.isActive('subscript')
    isSuperscript.value = editor.isActive('superscript')
    isLink.value = editor.isActive('hyperlink')
    flag = false
    for (let i = 1; i <= 4; i++) {
        if (editor.isActive('heading', { level: i })) {
            Heading2.value = i
            flag = true
            break
        }
    }
    if (!flag) { Heading2.value = 0 }
    isListol.value = editor.isActive('orderedList')
    isListul.value = editor.isActive('bulletList')
    isTasks.value = editor.isActive('taskList')
    isCode.value = editor.isActive('codeBlock')
    isTable.value = editor.isActive('table')
})

const CharacterCount2 = ref(0)
const CharacterWordCount = ref(0)

editor.on('update', () => {
    store.isSave = false
    CanUndo.value = editor.can().undo()
    CanRedo.value = editor.can().redo()
    debounce(() => {
        extractHeadings()
    }, 2000)()
    // extractHeadings()
    debounce(() => {
        CharacterCount2.value = editor.storage.characterCount.characters()
        CharacterWordCount.value = editor.storage.characterCount.words()
    }, 2000)()
})


//截获ctrl+s
function saveAsKeydown(e) {
    if (e.ctrlKey && e.key === 's') {
        if (store.UserInfo.name) {
            e.preventDefault()
            SaveServer()
        } else {
            e.preventDefault()
            SaveLocal()
        }
    }
}
document.addEventListener('keydown', saveAsKeydown)
onBeforeUnmount(() => {
    document.removeEventListener('keydown', saveAsKeydown)
})



async function InsertAudio2() {
    document.getElementById('uploadAudio').click()
}
function InsertAudio({ target }) {
    const file = target.files[0]
    if (!file) return
    let formData = new FormData()
    fileLoading.value = true
    formData.append('audio', file)
    request({
        url: '/api/file/audio/',
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(res => {
        let to = editor.view.state.selection.to
        editor.chain().focus().insertContentAt(to, `<vue-audio src="${baseUrl + res.data.audio_path}"></vue-audio>`).run()
        ElMessage.success('上传成功')
        fileLoading.value = false
    }).catch(err => {
        console.log(err);
        ElMessage.error('上传失败：' + err.response.data.msg)
        fileLoading.value = false
    })
}

function InsertAINode({ type, url, args, needSelectText, needTextBefore }) {
    let text = ''
    if (needSelectText) {
        const view = editor.view
        const state2 = editor.state
        const { from, to } = view.state.selection
        text = state2.doc.textBetween(from, to, '\n')
        if (!text) {
            ElMessage.error('请先选中一段文本')
            return
        }
    }
    if (needTextBefore) {
        const view = editor.view
        const state2 = editor.state
        const { from, to } = view.state.selection
        text = state2.doc.textBetween(0, to, '\n')
    }
    AIInsert(`<ai type="${type}" url="${url}" args="${args}" text="${text}"></ai>`)
}


const AIcodeData = ref('')
let from2, to2
let isAIcodeSug = false
let AIcodeSugCtrl = new AbortController()
let AIcodeSugCount = 0
function AIcodeSug() {
    if (!store.UserInfo.name) {
        return
    }
    if (isAIcodeSug) {
        AIcodeSugCtrl.abort()
        AIcodeSugCtrl = new AbortController()
    }

    function closure(count) {
        let AIcodeSugCount2 = count
        return function () {
            const { state } = editor;
            const { from, to } = state.selection;
            const startPos = state.doc.resolve(from).start();
            let code = state.doc.textBetween(startPos, to, '\n')
            AIcodeSugCount++
            request({
                url: '/api/ai/codecompletion1/',
                method: 'POST',
                body: {
                    s: code,
                    eol: ' '
                },
                signal: AIcodeSugCtrl.signal
            }).then((res) => {
                if (!editor.isActive('codeBlock')) return
                console.log(res.data.s);
                console.log(code);
                const { state } = editor;
                const { from, to } = state.selection;
                const startPos = state.doc.resolve(from).start();
                if (res.data.s != state.doc.textBetween(startPos, to, '\n')) return
                console.log(111);
                AIcodeData.value = res.data.generated_code
                editor.commands.setSearchTerm(`\u200D${AIcodeData.value}\u200D`)
                // const { from, to } = editor.view.state.selection
                from2 = from
                to2 = to + AIcodeData.value.length + 2
                editor.commands.insertContentAt(to, `\u200D${AIcodeData.value}\u200D`)
                editor.commands.setTextSelection(to)
            })
        }
    }

    let req = closure(AIcodeSugCount)
    req()
}
const AIcodeSugDebouce = debounce(AIcodeSug, 10)

function AIcodeSugClear() {
    clearTimeout(timer)
    const { from, to } = editor.view.state.selection
    editor.commands.deleteRange({
        from: from,
        to: from + AIcodeData.value.length + 2
    })
    AIcodeData.value = ''
    editor.commands.setSearchTerm('')
}
function AIcodeSugUse() {

    // editor.commands.insertContentAt(to,`<span style="color: red;">${AIcodeData.value}</span>`)
}


function ChangeMode() {
    function change() {
        if (fileId) {
            console.log(fileId, route.query.id);
            router.push('/editor?template=blank&id=' + fileId)
        } else {
            router.push({ path: '/editor?template=doc' })
        }
    }
    if (!store.isSave) {
        ElMessageBox.confirm('当前文件还没有保存，切换模式后文件将不会保存，确定要切换模式吗', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }).then(() => {
            change()
        }).catch(() => {
        });
    } else {
        change()
    }
}

</script>
<style lang="scss">
.resize {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0px;
    width: 5px;
    /* height: 100000%; */
    /* height: 100%; */
    background-color: #ffffff00;
    border-left: 1px dashed #aaaaaa;
    cursor: ew-resize;
}

.resize:hover {
    border-left: 1px solid #5188ff;
}

.search-result {
    background-color: rgba(172, 229, 255, 0.5);

    &-current {
        background-color: rgba(13, 255, 0, 0.5);
    }
}

code .search-result {
    background-color: transparent !important;
    font-style: italic !important;
    color: gray !important;

}

.tippy-box {

    .hyperlink-preview-modal,
    .hyperlink-set-modal,
    .hyperlink-edit-modal {
        background-color: #fff;
        border-radius: 10px;
        border: 1px solid #dadce0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 6px;
        box-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.15);
        margin-top: -6px;

        &__metadata {
            width: 200px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-direction: row-reverse;

            a {
                font-size: 0.9rem;
                margin-right: 6px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            img {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                margin-right: 8px;
            }
        }

        &__remove-button,
        &__edit-button,
        &__copy-button,
        &__apply-button {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin: 0 0.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.1s ease-in-out;
            border: none;
            background-color: #fff;

            &:hover {
                background-color: #eee;
            }

            >svg {
                width: 16px;
                height: 16px;
            }
        }

        form {
            display: flex;
            align-items: flex-end;
            width: 100%;

            input {
                border: 1px solid #dadce0;
                border-radius: 6px;
                padding: 0.4rem 0.8rem;
                margin-bottom: 0.2rem;
                width: 80%;

                &:last-of-type {
                    margin-bottom: 0;
                }
            }



            .hyperlink-set-modal__buttons-wrapper,
            .hyperlink-edit-modal__buttons-wrapper {
                margin-left: 8px;

                button {
                    border-radius: 6px;
                    padding: 4px 14px;
                    width: 60px;
                    margin-bottom: 0.2rem;
                    color: #1a73e8;
                    border: none;
                    background-color: #fff;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:hover {
                        background: rgba(26, 115, 232, 0.04);
                        color: #174ea6;
                    }
                }
            }
        }
    }

    .tippy-svg-arrow {
        top: -6px !important;
    }
}

/* .tiptap p.is-empty:last-child::before {
  color: #adb5bd;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
} */
.drag-handle {
    position: fixed;
    opacity: 1;
    transition: opacity ease-in 0.2s;
    border-radius: 0.25rem;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10' style='fill: rgba(0, 0, 0, 0.5)'%3E%3Cpath d='M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: calc(0.5em + 0.375rem) calc(0.5em + 0.375rem);
    background-repeat: no-repeat;
    background-position: center;
    width: 1.2rem;
    height: 1.5rem;
    z-index: 50;
    cursor: grab;
    transform: translateX(-40px);

    &:hover {
        background-color: var(--novel-stone-100);
        transition: background-color 0.2s;
    }

    &:active {
        background-color: var(--novel-stone-200);
        transition: background-color 0.2s;
        cursor: grabbing;
    }

    &.hide {
        opacity: 0;
        pointer-events: none;
    }

    @media screen and (max-width: 768px) {
        display: none;
        pointer-events: none;
    }
}

.dark .drag-handle {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10' style='fill: rgba(255, 255, 255, 0.5)'%3E%3Cpath d='M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z'%3E%3C/path%3E%3C/svg%3E");
}

.tiptap p.is-empty::before {
    color: #c4c4c4;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    margin-left: 20px;
    pointer-events: none;
    position: absolute;
    width: 100%;
}

[contenteditable] {
    outline: 0px solid transparent;
}

.ProseMirror-selectednode {
    outline: 3px solid purple;
}

p {
    margin: 0;
    line-height: 1.5;
}

.tiptap blockquote {
    border-left: 3px solid #adb5bd;
    margin: 1.5rem 0;
    padding-left: 1rem;
}

/* 消除小三角 */
.el-popper {
    overflow: auto;
}

.el-color-picker__icon {
    display: none !important;
}

.el-color-dropdown__link-btn-qingkong {
    display: none;
}

.focus::before {
    content: ' ';
    position: absolute;
    top: 2px;
    left: -20px;
    right: 0;
    bottom: 2px;
    /* border-left: 3px solid #c897ffad; */
    /* background-color: #c897ffad; */
    background-image: linear-gradient(180deg, #c897ff, #97b3ff);
    box-shadow: 0 0 10px 0 #c897ffad;
    pointer-events: none;
    width: 2px;
}

ul[data-type="taskList"] {
    list-style: none;
    padding: 0;
}

.focus {
    /* background-color: #e6e6e62d;
    border-radius: 5px; */
    position: relative;
    /* --glow-color: currentColor;
    text-shadow: 0 0 3px var(--glow-color);
    transition: all 0.2s; */
}

/* .focus::before {
    content: ' ';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background-color: #e8efff83;
    pointer-events: none;
    z-index: -1;
} */

ul[data-type="taskList"] li {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
}

ul[data-type="taskList"] li input {
    margin-right: 5px;
}

ul[data-type="taskList"] li p {
    margin: 0;
}

.tiptap pre {
    background: #2b2b2b;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
}

.tiptap *::selection {
    background: #79b8ebad;
    /* color: #FFF; */
    /* color: #ab15d8; */
}

.tiptap ::selection img {
    opacity: 0.5;
}

.tiptap code {
    color: inherit;
    padding: 0;
    background: none;
    font-size: 0.8rem;
}

.tiptap .hljs-comment,
.tiptap .hljs-quote {
    color: #616161;
}

.tiptap .hljs-variable,
.tiptap .hljs-template-variable,
.tiptap .hljs-attribute,
.tiptap .hljs-tag,
.tiptap .hljs-name,
.tiptap .hljs-regexp,
.tiptap .hljs-link,
.tiptap .hljs-name,
.tiptap .hljs-selector-id,
.tiptap .hljs-selector-class {
    color: #F98181;
}

.tiptap .hljs-number,
.tiptap .hljs-meta,
.tiptap .hljs-built_in,
.tiptap .hljs-builtin-name,
.tiptap .hljs-literal,
.tiptap .hljs-type,
.tiptap .hljs-params {
    color: #FBBC88;
}

.tiptap .hljs-string,
.tiptap .hljs-symbol,
.tiptap .hljs-bullet {
    color: #B9F18D;
}

.tiptap .hljs-title,
.tiptap .hljs-section {
    color: #FAF594;
}

.drop-cursor::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #5188ff;
    box-shadow: 0 0 10px 0 #5188ff;
}

.tiptap .hljs-keyword,
.tiptap .hljs-selector-tag {
    color: #70CFF8;
}

.tiptap .hljs-emphasis {
    font-style: italic;
}

.tiptap .hljs-strong {
    font-weight: 700;
}

.ProseMirror table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;
}

.ProseMirror table .focus::before {
    content: none;
}

.ProseMirror table td,
.ProseMirror table th {
    min-width: 1em;
    border: 2px solid #ced4da;
    padding: 3px 5px;
    vertical-align: top;
    box-sizing: border-box;
    position: relative;
}

.ProseMirror table td>*,
.ProseMirror table th>* {
    margin-bottom: 0;
}

.ProseMirror table th {
    font-weight: bold;
    text-align: left;
    background-color: #f1f3f5;
}

.ProseMirror table .selectedCell:after {
    z-index: 2;
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(200, 200, 255, 0.4);
    pointer-events: none;
}

.ProseMirror table .column-resize-handle {
    position: absolute;
    right: -2px;
    top: 0;
    bottom: -2px;
    width: 4px;
    background-color: #adf;
    pointer-events: none;
}

.ProseMirror table p {
    margin: 0;
}

.tableWrapper {
    padding: 1rem 0;
    overflow-x: auto;
}

.resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
}

.mx-context-menu-item .icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logos svg {
    margin: 0 auto;
}

.top {
    margin-top: -1px;
    background-color: #f8f8f8;
}

.top .el-tabs__nav-wrap {
    background-image: linear-gradient(90deg, #5188ff, #64b5ff);
}

.top .el-tabs--border-card {
    border: none;

}

.top .el-tabs__nav:first-child {
    margin-left: 20px;
}

.top .el-tabs__nav {
    /* height: 30px; */
}

.top .el-tabs--border-card>.el-tabs__header .el-tabs__item {
    height: 30px;
    color: white;
    transition: 0.1s all;
    /* line-height: 30px; */
}

.top .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover {
    color: white;
}

.top .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #5188ff;
}

.top .el-tabs__content {
    padding: 5px 20px;
    height: 60px;
}

.top .el-tabs__nav-prev,
.top .el-tabs__nav-next {
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.collaboration-cursor__caret {
    border-left: 1px solid #0d0d0d;
    border-right: 1px solid #0d0d0d;
    margin-left: -1px;
    margin-right: -1px;
    pointer-events: none;
    position: relative;
    word-break: normal;
}

/* Render the username above the caret */
.collaboration-cursor__label {
    border-radius: 3px 3px 3px 0;
    color: #0d0d0d;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    left: -1px;
    line-height: normal;
    padding: 0.1rem 0.3rem;
    position: absolute;
    top: -1.4em;
    user-select: none;
    white-space: nowrap;
}

/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.top-new {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    overflow-y: auto;
}

@media print {
    .print {
        display: none !important;
    }

    .main {
        height: auto !important;
        overflow: visible !important;
        overflow-x: hidden !important;
        width: 90% !important;
        min-width: 90% !important;
        max-width: 90% !important;
        position: relative !important;
    }

    .editor {
        padding: 0 !important;
        border: none !important;
        box-shadow: none !important;
        height: auto !important;
        overflow: visible !important;
        width: 100% !important;
        min-width: 100% !important;
        max-width: 100% !important;
        /* padding-left: 70px !important;
        padding-right: 70px !important; */
    }

    .editor-space {
        display: none !important;

    }

    .editview {
        height: auto !important;
    }

    .tiptap p.is-empty::before {
        content: '';
    }
}

@media screen and (max-width: 768px) {
    .top .el-tabs__content {
        height: 30px;
        width: auto;
        padding: 0px 5px;
    }

}
</style>
<style scoped>
.top-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    align-items: center;
    /* width: 40px; */
    /* height: 60px; */
    z-index: 100;
    position: relative;
    /* border: solid 1px #ddd; */
    /* margin-right: 10px; */
    cursor: pointer;
    color: #505050;
    width: 25px;
    height: 25px;
    margin: 0px 5px;
    white-space: nowrap;
    transition: all 0.1s;
    /* padding: 0px 8px; */
}

.top-line {
    height: 70%;
    width: 1px;
    background-color: #ddd;
    margin: 0px 10px;
}

.top-button:hover {
    background-color: #dfdfdf;
}

.top-button svg {
    width: 18px;
    height: 18px;
    color: #858585;
}

.top-button-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    align-items: center;
    /* width: 40px; */
    /* height: 60px; */
    z-index: 100;
    position: relative;
    /* border: solid 1px #ddd; */
    /* margin-right: 10px; */
    cursor: pointer;
    color: #505050;
    width: 25px;
    height: 25px;
    margin: 0px 5px;
}

.top-button-2 svg {
    width: 15px;
    height: 15px;
}

.top-button-2:hover {
    background-color: #f5f5f5;
}

.top-button-2[disabled="true"] {
    color: #ccc;
}

.top-button-2[disabled="true"] svg {
    color: #ccc;
}

.top-button-2[disabled="true"]:hover {
    background-color: #fff;
}

.top-item {
    display: flex;
    justify-content: left;
    align-items: center;
    color: #3374ff;
    height: 50px;
    z-index: 100;
    position: relative;
    height: 100%;
}

/* .editor {
    margin: 10px 20px;
    min-width: 600px;
    width: 60%;
    height: 500px;
    overflow: hidden;
} */
@media screen and (max-width: 768px) {
    .main-left {
        /* display: none; */
        position: fixed;
    }

    .editor {
        padding-left: 0px !important;
        padding-right: 0px !important;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
        width: 100% !important;
        min-width: 100% !important;
        max-width: none !important;
    }

    .main-right {
        width: 100%;
    }

    .main-sround-tr {
        display: none;
    }

    .main-sround-tl {
        display: none;
    }

    .main-sround-bl {
        display: none;
    }

    .main-sround-br {
        display: none;
    }

    #pdf {
        margin: 0px 15px !important;
    }

    .main-height {
        display: none;
    }

    .tools-show {
        display: flex !important;
    }
}

@media screen and (min-width: 768px) {
    .tools-show {
        display: none !important;
    }
}

.editview {
    height: calc(100vh - 40px);
}

.tools {
    display: flex;
    background-color: #ffffff;
    flex-direction: column;
    user-select: none;
    border-bottom: dashed 1px #ddd;

}

.tools-1 {
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
    /* padding-top: 15px;
    padding-bottom: 15px; */
    /* background-color: rgb(255, 255, 255); */
    /* background-color: #4a83ff; */
    background-image: linear-gradient(90deg, #5188ff, #64b5ff);
}

.tools-1 button {
    background-color: transparent;
    /* border: rgb(166, 166, 166) solid 1px; */
    cursor: pointer;
    padding: 5px 20px;
    border: none
}

.tools-1 button:hover {
    background-color: #f5f5f5;
}

.editor {
    /* border: 1px solid #ddd; */
    padding-left: 102px;
    padding-right: 102px;
    padding-top: 62px;
    padding-bottom: 82px;
    /* border-radius: 5px; */
    /* background-color: #fff; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, .1); */
    /* overflow: auto; */
    display: flex;
    flex-direction: column;
    min-width: 500px;
    width: 60vw;
    max-width: 60vw;
    min-height: calc(100vh - 80px);
    margin: 0 auto;
    position: relative;
}

.editor-space {
    flex: 1;
    cursor: text;
    min-height: 20vh;
}

.main {
    margin: 0 auto;
    /* width: 100%; */
    flex: 1;
    overflow: auto;
    overflow-y: auto;
    /* background-color: #f5f5f5; */
    height: calc(100%);
    position: relative;
    /* display: flex; */
    /* justify-content: space-between */
    /* transform: translateZ(0); */
}

.main2 {
    display: flex;
    /* justify-content: space-between; */
    /* height: calc(100% - 96px); */
    position: relative;
    overflow: overlay;
}

.main-left-title-2 {
    text-overflow: ellipsis;
    white-space: nowrap;
}

.main-left-title-2:hover {
    background-color: transparent !important;
}

.main-left {
    z-index: 100;
    border-right: dashed 1px #ddd;
    overflow-y: auto;
    width: 250px;
    padding: 10px;
    position: relative;
    background-color: #f9f9f9;
}

.main-right {
    background-color: #fff;

}

.main-right-ai {
    position: relative;
    background-color: #fff;
    /* top: 155px;
    right: 0;
    bottom: 30px; */
    /* height: 100%; */
    z-index: 100;
    /* border-left: solid 1px #ddd; */
    overflow-y: auto;
    width: 200px;
    padding: 10px;
    /* resize: horizontal; */
    /* transform: rotateY(180deg); */
}

.main-right-ai::-webkit-scrollbar {
    /* width: 200px; */
    height: 200px;
}


.main-left-close {
    position: absolute;
    top: 25px;
    right: 20px;
    cursor: pointer;
    color: #666;
}

.main-right-close {
    position: absolute;
    top: 25px;
    right: 20px;
    cursor: pointer;
    color: #666;
    z-index: 100;
}

.main-left-title {
    padding: 5px 10px;
    cursor: pointer;
    margin-bottom: 5px;
    color: #505050;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    margin: 0;
    margin-left: 0;
    margin-top: 5px;
    margin-bottom: 5px;
    list-style: none;
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 12px;
}

.main-left-title:hover {
    background-color: #e6e6e6;
}

.ai-disable {
    color: #ccc;
}

.ai-disable path {
    fill: #ccc;
}

.ai-disable:hover {
    background-color: transparent;
}

.main-sround-tl {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50px;
    left: 70px;
    border-bottom: #b0b0b0 1px solid;
    border-right: #b0b0b0 1px solid;
}

.main-sround-tr {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50px;
    right: 70px;
    border-bottom: #b0b0b0 1px solid;
    border-left: #b0b0b0 1px solid;
}

.main-sround-bl {
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 50px;
    left: 70px;
    border-top: #b0b0b0 1px solid;
    border-right: #b0b0b0 1px solid;
}

.main-sround-br {
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 50px;
    right: 70px;
    border-top: #b0b0b0 1px solid;
    border-left: #b0b0b0 1px solid;
}

.tools-1-sec {
    padding: 5px 20px;
}

.ai-tip {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 50px;
    background-color: #fafcff;
    border: 1px solid #ddd;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    font-size: 14px;
}

.tools-1-group {
    cursor: pointer;
    padding: 10px 20px;
    margin-right: 5px;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    /* color: #1850c8; */
    outline: none;
    color: #fff;
}

.tools-1-group:hover {
    background-color: #fff;
    border: none;

    color: #3172ff
}

.main-buttom {
    height: 30px;
    background-color: #3172ff;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    color: #fff;
    user-select: none;
    font-size: 14px;
}

.tools-2 {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    background-color: rgb(255, 255, 255);
    color: #3374ff;
    transition: all 0.3s;
}

.tools-2-1 {
    display: flex;
    align-items: center;
    /* padding: 5px 5px; */
    flex-wrap: wrap;
    /* border-right: 1px solid #ddd; */
    /* gap: 5px; */
}

.tools-2-1 span {
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2px;
    color: #3172ff;
}

.top-item-class {
    display: flex;
    position: relative;
    margin-right: 20px;
}

.top-item-class::after {
    content: '';
    width: 1px;
    height: 60px;
    background-color: #ddd;
    position: absolute;
    right: -10px;
    top: 0;
}

.tools-2-1 span:hover {
    color: #3172ff;
    background-color: #f7fdff;
}

.tools-2-1 span[disabled='true'] {
    color: #ddd;
    cursor: default;
    pointer-events: none;
}

.tools-2-1 span[disabled='true']:hover {
    color: #ddd;
    background-color: #fff;
    cursor: default;
}

.tools-2-1 span svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
}

.tools-table {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    color: #666;
    font-size: 12px;
    flex-wrap: wrap;
    height: 60px;
}

.tools-table button {
    background-color: transparent;
    /* border: none; */
    word-wrap: break-word;
    /* 文字换行 */
    white-space: normal;
    /* 强制换行 */
    text-align: center;
    width: 44px;
    height: 54px;
    font-size: 10px;
}


.tools-2-1-span {
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2px;
}

.tools-2-1-span:hover {
    color: #3172ff;
    background-color: #f7fdff;
}

.tools-disabled {
    color: #ddd;
    cursor: default;
}

.tools .tools-disabled:hover {
    color: #ddd;
    background-color: #fff;
    cursor: default;
}

.tools-select {
    background-color: #bbbbbb;
    color: #000000;
}

.tools-select:hover {
    background-color: #bbbbbb;
    color: #000000;
}

.top-button-2-menu {
    display: flex;
    padding: 5px 10px;
}

.top-button-2-menu .top-button-2 {
    margin: 2px 2px;
}

.tools .tools-select,
.bubble-menu-1 .tools-select {
    background-color: #c1efff;
    color: #3172ff;
}


.tools .tools-select:hover,
.bubble-menu-1 .tools-select:hover {
    background-color: #c1efff;
    color: #3172ff;
}

.tools-svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.tools-svg path {
    fill: currentColor;
}

.bubble-menu {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 10px;
    width: 370px;
}

.bubble-menu-1 {
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #535353;
    gap: 5px;
}

.bubble-menu-1 span {
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}

.bubble-menu-1 span:hover {
    color: #3172ff;
    background-color: #f7fdff;
}

.bubble-menu2 {
    display: flex;
    flex-direction: column;
    padding: 5px;
}

.bubble-menu2-button {
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    /* justify-content: right; */
    align-items: center;
}

.aiMenu {
    width: 80vw;
    left: 50vw;
    transform: translateX(-50%);
    bottom: 30px;
    position: fixed;
    background-color: #fff;
    border: 1px solid #ddd;
}

.tools-2-1-nologo:hover {
    /* background-color: #ffffff; */
}

.ai-title-2 {
    font-size: 11px;
    margin-bottom: 10px;
    position: relative;
    display: flex;
    text-wrap: nowrap;
    align-items: center;
    color: #0a99ff;
}

.ai-title-2::after {
    content: '';
    margin-left: 6px;
    width: 100%;
    height: 1px;
    background-color: #0a99ff;
}

.ai-title-2::before {
    content: '';
    width: 20px;
    height: 1px;
    margin-right: 6px;
    background-color: #0a99ff;
}

.wrong2right {
    border: 1px solid #91b8ff;
    background-image: linear-gradient(90deg, #f6f9ff, #e5f2ff);
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 15px;
    transition: all 0.3s;
}

.dialog-footer {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
}

.wrong2right:hover {
    background-image: linear-gradient(90deg, #e3ecff, #cee7ff);
    /* background-image: linear-gradient(90deg, #f6f9ff, #e5f2ff); */

}

.coopcode-ghost {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
    z-index: 100;
    display: none;
}

.coopcode {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 300px;
    background-color: #fff;
    z-index: 101;
    display: none;
}

.top-item-ai {
    display: flex;
    position: relative;
    flex-direction: column;

    height: 60px;
    flex-wrap: wrap;
}

.top-item-ai span {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #505050;
    font-size: 12px;
    height: 30px;
    width: 80px;
}

.top-item-ai span:hover {
    background-color: #f5f5f5;
}

.top-item-svg {
    width: 18px;
    height: 18px;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
}

.top-item-svg path {
    fill: currentColor;
}

.large {
    display: block;
}

.small {
    display: none;
}

.large-flex {
    display: flex !important;
}

.small-flex {
    display: none !important;
}

.disable {
    pointer-events: none;
    /* cursor: not-allowed; */
    color: #ccc;
}

.disable svg {
    filter: grayscale(100%);
}

.tools-span {
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 2px; */
    color: #3172ff;
}

.temp-edit {
    min-height: 600px;
    height: 80vh;
    overflow: auto;
}

.ai-img {
    position: relative;
    width: 100%;
    height: 140px;
    border-radius: 5px;
    border: dashed 1px #313131;
    overflow: hidden;
    background-color: #00000010
}

.ai-img-img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #505050;
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
    background-color: #00000023;
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
    z-index: 149;
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

:deep(.ai-table table) {
    border-collapse: collapse;
    border: #505050 1px solid;
}

:deep(.ai-table td) {
    white-space: nowrap;
    border: #505050 1px solid;

}


.top-button-2-menu .top-button-2-menu-button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    width: 100px;
    height: 30px;
    color: #505050;
}

.top-button-2-menu .top-button-2-menu-button svg {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    margin-left: 5px;
}

@media screen and (max-width: 768px) {
    .top-item-class::after {
        display: none;
    }

    .top-button svg {
        width: 14px;
        height: 14px;
        margin-bottom: 0px;
        margin-right: 5px;
    }

    .top-button {
        flex-direction: row;
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        /* width: 60px; */
        /* //文字不换行 */
        white-space: nowrap;
    }

    .top-item {
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        /* justify-content: center; */
        align-items: center;
    }

    .large {
        display: none;
    }

    .small {
        display: block;
    }

    .large-flex {
        display: none !important;
    }

    .small-flex {
        display: flex !important;
    }

    .main2 {
        height: calc(100% - 60px);
    }

    .main-left-small {
        width: 100%;
        /* position: ; */
        bottom: 100px;
        height: 50vh;
        border-top: solid 1px #ddd;
        /* bottom: 0px; */
        background-color: #fff;
        position: absolute;
    }

    .main-left-small .main-left-close {
        top: 26px;
        right: 50px;
    }

    .main-left-title {
        font-size: 16px;
    }

    .main-left-2-ghost {
        height: 100%;
        width: 100%;
        position: fixed;
        background-color: #0000005d;
        z-index: 1150;
    }

    .tools-table {
        display: none
    }

    .tools-table2 {
        display: flex;
        align-items: center;
    }

    .top-item-ai {
        flex-direction: row;
        flex-wrap: nowrap;
        height: 100%
    }

    .tools-select {
        background-color: #c1efff
    }

    .top-new {
        justify-content: flex-start;
    }
}
</style>