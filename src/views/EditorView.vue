<template>
    <div style="display: flex;flex-direction: column;  position: relative;" class="editview">
        <div class="tools print">
            <transition>
                <div v-show="store.isAI" class='ai-tip'>
                    正在使用AI助手
                    <el-button @click="store.ctrl.abort(); store.isAI = false">停止输出</el-button>
                </div>
            </transition>


            <div class="tools-1">
                <el-dropdown size="large" :hide-timeout="300">
                    <div @click="GotoHome()" class="tools-1-group"><font-awesome-icon icon="home" />首页</div>
                </el-dropdown>
                <el-dropdown size="large" :hide-timeout="300">
                    <div class="tools-1-group"><font-awesome-icon :icon="['far', 'file-alt']" />文件</div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="NewFile" class="tools-1-sec">新建</el-dropdown-item>
                            <el-dropdown-item @click="SaveLocal">保存到本地</el-dropdown-item>
                            <el-dropdown-item @click="SaveServer">保存到云端</el-dropdown-item>
                            <el-dropdown-item @click="OpenLocal">
                                打开本地文件
                                <input type="file" id="OpenLocal2" @change="OpenLocal2" style="display: none;">
                            </el-dropdown-item>
                            <el-dropdown-item @click="SavePDF">导出为PDF</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <el-dropdown size="large" :hide-timeout="300">
                    <div class="tools-1-group"><font-awesome-icon :icon="['far', 'file-alt']" />视图</div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item class="tools-1-sec"
                                @click='ShowTree = !ShowTree'>显示/隐藏文档索引</el-dropdown-item>
                            <el-dropdown-item @click='isAIOpen = !isAIOpen'>显示/隐藏AI助手</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div style="display: none" class="logos">
                <svg t="1716647286389" id="logo-undo" width="12" height='12' viewBox="0 0 1025 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="8242">
                    <path
                        d="M512 64c-141.376 0-269.376 57.312-362.016 149.984l-149.952-149.984 0 384 384 0-143.52-143.52c69.504-69.504 165.504-112.48 271.52-112.48 212.064 0 384 171.936 384 384 0 114.688-50.304 217.632-130.016 288l84.672 96c106.304-93.824 173.344-231.072 173.344-384 0-282.784-229.216-512-512-512z"
                        p-id="8243"></path>
                </svg>
                <svg t="1716647310694" id="logo-redo" width="12" height='12' viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="8404">
                    <path
                        d="M0 576c0 152.928 67.04 290.176 173.344 384l84.672-96c-79.712-70.368-130.016-173.312-130.016-288 0-212.064 171.936-384 384-384 106.048 0 202.048 42.976 271.52 112.48l-143.52 143.52 384 0 0-384-149.984 149.984c-92.64-92.672-220.64-149.984-362.016-149.984-282.784 0-512 229.216-512 512z"
                        p-id="8405"></path>
                </svg>
            </div>
            <div class="tools-2" :style="ShowTools ? 'max-height: 200px' : 'max-height: 35px'">
                <div class="tools-2-1">
                    <span @click="ChangeShowTools" class="tools-show"><font-awesome-icon
                            :icon='ShowTools ? "angle-up" : "angle-down"'></font-awesome-icon></span>
                    <span @click="undo" :disabled="!CanUndo"><font-awesome-icon icon='undo'></font-awesome-icon></span>
                    <span @click="redo" :disabled="!CanRedo"><font-awesome-icon icon='redo'></font-awesome-icon></span>
                    <span @click="bold" :class="!isBold ? '' : 'tools-select'"><font-awesome-icon
                            icon='bold'></font-awesome-icon></span>
                    <span @click="italic" :class="!isItalic ? '' : 'tools-select'"><font-awesome-icon
                            icon='italic'></font-awesome-icon></span>
                    <span @click="underline" :class="!isUnderline ? '' : 'tools-select'"><font-awesome-icon
                            icon='underline'></font-awesome-icon></span>
                    <span @click="strikethrough" :class="!isStrikethrough ? '' : 'tools-select'"><font-awesome-icon
                            icon='strikethrough'></font-awesome-icon></span>
                    <span style="width: 70px;">
                        <el-select @change="SetFontSize()" v-model="FontSize2" placeholder="字体大小" size="small">
                            <el-option v-for="item in FontSizeList" :key="item" :label="item" :value="item" />
                        </el-select>
                    </span>
                    <span style="margin-left: 5px;">
                        <pick-colors @change="SetFontColor" v-model:value="FontColor"
                            :colors="['#000000', '#ff4500', '#ffd700', '#00ced1', '#1e90ff', '#c71585',]" />
                    </span>
                    <span @click="SetLink()" :class="!isLink ? '' : 'tools-select'"><font-awesome-icon
                            icon='link'></font-awesome-icon></span>

                    <span @click="SetTextAlign('left')"
                        :class="TextAlign2 != 'left' ? '' : 'tools-select'"><font-awesome-icon
                            icon='align-left'></font-awesome-icon></span>
                    <span @click="SetTextAlign('center')"
                        :class="TextAlign2 != 'center' ? '' : 'tools-select'"><font-awesome-icon
                            icon='align-center'></font-awesome-icon></span>
                    <span @click="SetTextAlign('right')"
                        :class="TextAlign2 != 'right' ? '' : 'tools-select'"><font-awesome-icon
                            icon='align-right'></font-awesome-icon></span>
                    <span @click="SetTextAlign('justify')"
                        :class="TextAlign2 != 'justify' ? '' : 'tools-select'"><font-awesome-icon
                            icon='align-justify'></font-awesome-icon></span>
                    <span @click="SetSubscript()" :class="!isSubscript ? '' : 'tools-select'"><font-awesome-icon
                            icon='subscript'></font-awesome-icon></span>
                    <span @click="SetSuperscript()" :class="!isSuperscript ? '' : 'tools-select'"><font-awesome-icon
                            icon='superscript'></font-awesome-icon></span>
                    <span @click="SetHeading(1)" :class="Heading2 != 1 ? '' : 'tools-select'">
                        <svg t="1716215843603" class="tools-svg" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="1280" width="200" height="200">
                            <path
                                d="M584.9 445.3V142.6h86.5v735h-86.5V531.7H152.5v345.9H66.1v-735h86.5v302.6l432.3 0.1zM843.7 877.6v-0.3h-79.8V826h79.8V558.6c-22.5 23.4-49.9 40.4-79.8 49.3v-59.1c17.2-5.2 33.8-12.9 49.1-23 16.2-10.6 30.9-23.7 43.9-38.9h39.9V826h61.7v51.3h-61.7v0.3h-53.1z"
                                p-id="1281"></path>
                        </svg>
                    </span>
                    <span @click="SetHeading(2)" :class="Heading2 != 2 ? '' : 'tools-select'">
                        <svg t="1716215857033" class="tools-svg" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="1446" width="200" height="200">
                            <path
                                d="M88 448h400V172c0-24.3 19.7-44 44-44s44 19.7 44 44v680c0 24.3-19.7 44-44 44s-44-19.7-44-44V536H88v316c0 24.3-19.7 44-44 44S0 876.3 0 852V172c0-24.3 19.7-44 44-44s44 19.7 44 44v276z m935.282 448H680c0.479-41.591 10.533-77.923 30.163-108.997 19.63-31.074 46.44-58.084 80.434-81.031 16.279-11.952 33.275-23.544 50.99-34.779 17.714-11.234 33.993-23.305 48.835-36.213 14.842-12.907 27.05-26.89 36.626-41.95 9.576-15.058 14.603-32.388 15.081-51.988 0-9.083-1.077-18.764-3.231-29.042-2.155-10.278-6.344-19.84-12.568-28.683-6.224-8.845-14.842-16.254-25.854-22.23-11.012-5.976-25.375-8.964-43.09-8.964-16.278 0-29.803 3.227-40.576 9.68-10.772 6.455-19.39 15.299-25.854 26.533-6.463 11.235-11.251 24.5-14.363 39.798-3.112 15.298-4.908 31.791-5.386 49.48h-81.87c0-27.728 3.71-53.423 11.13-77.087 7.422-23.664 18.553-44.101 33.395-61.311 14.842-17.21 32.916-30.715 54.222-40.516 21.305-9.8 46.081-14.7 74.33-14.7 30.641 0 56.255 5.02 76.843 15.059 20.587 10.04 37.224 22.707 49.912 38.005 12.688 15.298 21.665 31.91 26.931 49.838 5.267 17.927 7.9 35.018 7.9 51.272 0 20.078-3.112 38.244-9.336 54.498-6.224 16.254-14.603 31.193-25.136 44.818-10.533 13.625-22.502 26.174-35.908 37.647a538.302 538.302 0 0 0-41.653 32.27 1122.27 1122.27 0 0 0-43.09 28.683c-14.364 9.083-27.65 18.166-39.858 27.249-12.209 9.083-22.862 18.525-31.958 28.325-9.097 9.8-15.321 20.198-18.673 31.193h244.894V896z"
                                p-id="1447"></path>
                        </svg> </span>
                    <span @click="SetHeading(3)" :class="Heading2 != 3 ? '' : 'tools-select'">
                        <svg t="1716215866976" class="tools-svg" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="1608" width="200" height="200">
                            <path
                                d="M88 448h400V172c0-24.3 19.7-44 44-44s44 19.7 44 44v680c0 24.3-19.7 44-44 44s-44-19.7-44-44V536H88v316c0 24.3-19.7 44-44 44S0 876.3 0 852V172c0-24.3 19.7-44 44-44s44 19.7 44 44v276zM815.551 597.802c13.128 0.47 26.257-0.469 39.385-2.813 13.129-2.344 24.85-6.447 35.165-12.308 10.316-5.86 18.638-13.948 24.968-24.263 6.33-10.315 9.494-22.975 9.494-37.978 0-21.1-7.15-37.978-21.45-50.638-14.301-12.66-32.704-18.989-55.21-18.989-14.066 0-26.257 2.813-36.572 8.44-10.315 5.626-18.872 13.245-25.67 22.857-6.799 9.612-11.84 20.395-15.121 32.352-3.283 11.956-4.69 24.263-4.22 36.923h-80.177c0.938-23.913 5.392-46.066 13.363-66.462 7.97-20.396 18.872-38.095 32.703-53.099 13.832-15.004 30.594-26.725 50.287-35.165C802.188 388.22 824.459 384 849.31 384c19.223 0 38.095 2.813 56.616 8.44 18.52 5.626 35.165 13.831 49.934 24.615 14.77 10.784 26.609 24.498 35.517 41.143 8.909 16.645 13.363 35.75 13.363 57.318 0 24.85-5.626 46.535-16.88 65.055-11.252 18.52-28.835 32-52.747 40.44v1.407c28.132 5.626 50.052 19.575 65.759 41.846 15.707 22.27 23.56 49.348 23.56 81.23 0 23.444-4.688 44.425-14.065 62.946-9.378 18.52-22.037 34.227-37.979 47.12-15.942 12.894-34.462 22.858-55.561 29.89-21.1 7.034-43.37 10.55-66.814 10.55-28.601 0-53.568-4.103-74.902-12.308-21.334-8.205-39.15-19.81-53.451-34.813-14.3-15.004-25.202-33.055-32.704-54.154-7.502-21.099-11.487-44.542-11.956-70.33h80.177c-0.938 30.008 6.447 54.975 22.154 74.902s39.268 29.89 70.682 29.89c26.726 0 49.114-7.62 67.166-22.857 18.051-15.239 27.077-36.923 27.077-65.055 0-19.224-3.751-34.462-11.253-45.715-7.502-11.252-17.348-19.81-29.539-25.67-12.19-5.86-25.905-9.494-41.143-10.901-15.239-1.407-30.828-1.875-46.77-1.407v-59.78z"
                                p-id="1609"></path>
                        </svg>
                    </span>
                    <span @click="SetHeading(4)" :class="Heading2 != 4 ? '' : 'tools-select'">
                        <svg t="1716215885803" class="tools-svg" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="1770" width="200" height="200">
                            <path
                                d="M88 448h400V172c0-24.3 19.7-44 44-44s44 19.7 44 44v680c0 24.3-19.7 44-44 44s-44-19.7-44-44V536H88v316c0 24.3-19.7 44-44 44S0 876.3 0 852V172c0-24.3 19.7-44 44-44s44 19.7 44 44v276z m936.246 331.56h-63.298v116.748h-75.957V779.56H674v-79.472L884.991 404h75.957v312.264h63.298v63.296zM735.89 716.264h149.1V499.648h-1.406L735.89 716.264z"
                                p-id="1771"></path>
                        </svg>
                    </span>
                    <span @click="SetListul" :class="!isListul ? '' : 'tools-select'"><font-awesome-icon
                            icon='list-ul'></font-awesome-icon></span>
                    <span @click="SetListol" :class="!isListol ? '' : 'tools-select'"><font-awesome-icon
                            icon='list-ol'></font-awesome-icon></span>
                    <span @click="SetTasks" :class="!isTasks ? '' : 'tools-select'"><font-awesome-icon
                            icon='tasks'></font-awesome-icon></span>
                    <span @click="SetCode" :class="!isCode ? '' : 'tools-select'"><font-awesome-icon
                            icon='code'></font-awesome-icon></span>
                    <span @click="InsertGraph"><font-awesome-icon icon='chart-pie'></font-awesome-icon></span>
                    <span @click="InsertDraw"><font-awesome-icon icon='pencil-ruler'></font-awesome-icon></span>
                    <span @click="test"><font-awesome-icon icon='pencil-ruler'></font-awesome-icon></span>



                </div>
                <div class="tools-2-1">
                    <el-dropdown>
                        <span class="tools-2-1-span"><font-awesome-icon icon='table'></font-awesome-icon></span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <div class="tools-table">
                                    <div>
                                        列：<el-input v-model="InsertTableCol" step="1" size="small"
                                            style="width: 50px;"></el-input>
                                    </div>
                                    <div>
                                        行：<el-input v-model="InsertTableRow" size="small"
                                            style="width: 50px;"></el-input>
                                    </div>
                                    <div>
                                        <el-button size="small" @click="InsertTable">插入表格</el-button>
                                    </div>
                                </div>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span @click="InsertTableLine('left')" :disabled="!isTable">
                        <font-awesome-icon icon='arrow-left'></font-awesome-icon>
                    </span>
                    <span @click="InsertTableLine('right')" :disabled="!isTable">
                        <font-awesome-icon icon='arrow-right'></font-awesome-icon>
                    </span>
                    <span @click="InsertTableLine('up')" :disabled="!isTable">
                        <font-awesome-icon icon='arrow-up'></font-awesome-icon>
                    </span>
                    <span @click="InsertTableLine('down')" :disabled="!isTable">
                        <font-awesome-icon icon='arrow-down'></font-awesome-icon>
                    </span>
                    <span @click="DeleteTable('row')" :disabled="!isTable">
                        <svg t="1716644344557" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            p-id="10132">
                            <path
                                d="M819.8 512l102.4-122.9c2.8-3.4 2.4-8.4-1-11.3-1.4-1.2-3.2-1.9-5.1-1.9h-54.7c-2.4 0-4.6 1.1-6.1 2.9L782 466.7l-73.1-87.8c-1.5-1.8-3.8-2.9-6.1-2.9H648c-1.9 0-3.7 0.7-5.1 1.9-3.4 2.8-3.9 7.9-1 11.3L744.2 512 641.8 634.9c-2.8 3.4-2.4 8.4 1 11.3 1.4 1.2 3.2 1.9 5.1 1.9h54.7c2.4 0 4.6-1.1 6.1-2.9l73.1-87.8 73.1 87.8c1.5 1.8 3.8 2.9 6.1 2.9h55c1.9 0 3.7-0.7 5.1-1.9 3.4-2.8 3.9-7.9 1-11.3L819.8 512zM536 464H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h416c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zM452 668h-60c-3.3 0-6 2.7-6 6v166H136c-3.3 0-6 2.7-6 6v60c0 3.3 2.7 6 6 6h292c16.6 0 30-13.4 30-30V674c0-3.3-2.7-6-6-6zM136 184h250v166c0 3.3 2.7 6 6 6h60c3.3 0 6-2.7 6-6V142c0-16.6-13.4-30-30-30H136c-3.3 0-6 2.7-6 6v60c0 3.3 2.7 6 6 6z"
                                p-id="10133"></path>
                        </svg>
                    </span>
                    <span @click="DeleteTable('col')" :disabled="!isTable">
                        <svg t="1716644561178" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            p-id="11130">
                            <path
                                d="M651.1 641.9c-1.4-1.2-3.2-1.9-5.1-1.9h-54.7c-2.4 0-4.6 1.1-6.1 2.9L512 730.7l-73.1-87.8c-1.5-1.8-3.8-2.9-6.1-2.9H378c-1.9 0-3.7 0.7-5.1 1.9-3.4 2.8-3.9 7.9-1 11.3L474.2 776 371.8 898.9c-2.8 3.4-2.4 8.4 1 11.3 1.4 1.2 3.2 1.9 5.1 1.9h54.7c2.4 0 4.6-1.1 6.1-2.9l73.1-87.8 73.1 87.8c1.5 1.8 3.8 2.9 6.1 2.9h55c1.9 0 3.7-0.7 5.1-1.9 3.4-2.8 3.9-7.9 1-11.3L549.8 776l102.4-122.9c2.8-3.4 2.3-8.4-1.1-11.2zM472 544h80c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8zM350 386H184V136c0-3.3-2.7-6-6-6h-60c-3.3 0-6 2.7-6 6v292c0 16.6 13.4 30 30 30h208c3.3 0 6-2.7 6-6v-60c0-3.3-2.7-6-6-6zM906 130h-60c-3.3 0-6 2.7-6 6v250H674c-3.3 0-6 2.7-6 6v60c0 3.3 2.7 6 6 6h208c16.6 0 30-13.4 30-30V136c0-3.3-2.7-6-6-6z"
                                p-id="11131"></path>
                        </svg>
                    </span>
                    <span @click="state.editor.commands.mergeCells();" :disabled="!isTable">
                        <svg t="1716644758298" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="13801" width="200" height="200">
                            <path
                                d="M213.333333 426.666667H128V170.666667h341.333333v85.333333H213.333333v170.666667z m597.333334 341.333333h-256v85.333333h341.333333v-256h-85.333333v170.666667zM213.333333 768v-170.666667H128v256h341.333333v-85.333333H213.333333zM896 170.666667h-341.333333v85.333333h256v170.666667h85.333333V170.666667zM341.333333 554.666667v85.333333l128-128-128-128v85.333333H128v85.333334h213.333333z m341.333334-85.333334V384l-128 128 128 128v-85.333333h213.333333v-85.333334h-213.333333z"
                                p-id="13802"></path>
                        </svg>
                    </span>
                    <span @click="state.editor.commands.splitCell();" :disabled="!isTable">
                        <svg t="1716644784112" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="15809" width="200" height="200">
                            <path
                                d="M810.666667 597.333333h85.333333v256H128v-256h85.333333v170.666667h597.333334v-170.666667M128 170.666667v256h85.333333V256h597.333334v170.666667h85.333333V170.666667H128m341.333333 298.666666v85.333334H341.333333v85.333333l-128-128 128-128v85.333333h128m213.333334 0V384l128 128-128 128v-85.333333h-128v-85.333334h128z"
                                p-id="15810"></path>
                        </svg>
                    </span>
                    <!-- <span @click="AItransition()" class="tools-2-1" style="font-size: 8px;width: 40px;margin-left: 10px">
                        AI工具：
                    </span> -->
                    <span @click="AItransition()">
                        <font-awesome-icon icon='language'></font-awesome-icon>
                    </span>

                    <div id="qwq"></div>
                </div>

            </div>

        </div>

        <div class='main2'>
            <div class="main-left print" v-if='ShowTree'>
                <span @click='ShowTree = false' class='main-left-close'><font-awesome-icon icon="times" /></span>
                <li class="main-left-title"
                    style="color: #333;margin-bottom: 14px;margin-top: 14px;margin-left: 15px;font-size: 16px;cursor:auto;">
                    文档索引
                </li>
                <li v-for="i in TitleList" :key="i" class="main-left-title"
                    :style="{ 'margin-left': (15 + (i.level - 1) * 12) + 'px', 'color': ['#666', '#888', '#999'][i.level - 1] }"
                    @click="GotoTitle(i.id)">{{ i.title }}
                </li>
                <li v-if="TitleList.length == 0" class="main-left-title"
                    :style="{ 'margin-left': '0', 'text-align': 'center', 'color': '#aaa', 'cursor': 'auto' }"> （暂无索引）
                </li>
            </div>
            <div class="main" @keydown.tab.prevent="">
                <div class="main-right">
                    <div style="height: 40px;" class="print main-height"></div>
                    <div class="editor">
                        <!-- <div class="main-sround-tl print"></div>
                        <div class="main-sround-tr print"> </div>
                        <div class="main-sround-bl print"> </div>
                        <div class="main-sround-br print"> </div> -->
                        <editor-content id="pdf" :editor="state.editor" @contextmenu.prevent.stop="EditorContext" />
                        <div @click="EditorActive"
                            @contextmenu.prevent.stop="state.editor.chain().focus('end').run(); EditorContext($event)"
                            class="editor-space"></div>
                    </div>
                    <div style="height: 60px;" class="print main-height"></div>
                </div>
            </div>
            <div class="main-right-ai print" v-if='isAIOpen'>
                <span @click='isAIOpen = false' class='main-right-close'><font-awesome-icon icon="times" /></span>
                <div style="transform:rotateY(180deg);">
                    <div class="main-left-title"
                        style="color: #333;margin-bottom: 14px;margin-top: 14px;margin-left: 15px;font-size: 16px;cursor:auto;">
                        AI助手
                    </div>
                    <div class="bubble-menu2">
                        <el-select v-model="AISelect" placeholder="AI功能" style="margin-bottom: 10px;">
                            <el-option label="翻译选中文本" :value="1" />
                            <el-option label="全文总结" :value="2" />
                            <el-option label="全文摘要" :value="3" />
                            <el-option label="文章续写" :value="4" />
                        </el-select>
                        <div v-if='AISelect == 1'>
                            <span class="ai-title-2">源语言</span>
                            <el-select v-model="AItransitionFrom" placeholder="源语言" style="margin-bottom: 10px;">
                                <el-option v-for="i in ['自动识别']" :label="i" :value='i' />
                            </el-select>
                            <span class="ai-title-2">目标语言</span>
                            <el-select v-model="AItransitionTo" placeholder="源语言" style="margin-bottom: 10px;">
                                <el-option v-for="i in ['中文（简体）', '中文（文言文）', '英语', '日语', '俄语', '德语']" :label="i"
                                    :value='i' />
                            </el-select>
                        </div>
                        <div v-if='AISelect == 4'>
                            <span class="ai-title-2">续写目标</span>
                            <el-input v-model="AIcontiunegoal" placeholder="正常续写"
                                style="margin-bottom: 10px;"></el-input>
                        </div>
                        <div v-loading="isAILoading" element-loading-text="生成中..."
                            element-loading-background="rgba(255, 255, 255, 0.1)">
                            <el-input :readonly='true' placeholder='AI输出...' class="ai-textarea" rows="8"
                                type='textarea' id="scroll_text" v-model="AIData"></el-input>
                        </div>
                        <div class="bubble-menu2-button">
                            <el-button @click="AIAgain" v-if="AIData == '' && !isAILoading"
                                size="small">开始生成</el-button>

                            <el-button @click="AIAgain" v-if="AIData != '' || isAILoading" size="small">{{ isAILoading ?
                                '停止生成'
                                : '重新生成' }}</el-button>
                            <el-button @click="AIInsert" v-if="AIData != '' || isAILoading"
                                size="small">确定使用</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="main-buttom print">
            <div>
                <span>字数：{{ CharacterCount2 }}</span>
                <span style="margin-left: 30px;">单词数：{{ CharacterWordCount }}</span>
            </div>
        </div>

        <bubble-menu id="bubbleMenu" :editor="state.editor" :tippy-options="{ duration: 100 }" v-if="state.editor">
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
                        <span style="margin-left: 5px;padding: 0px 5px;">
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
                </div>
                <div class='bubble-menu-1'>

                </div>
            </div>
        </bubble-menu>
        <!--  -->


    </div>
</template>
<script setup>
import { getCurrentInstance, nextTick, onMounted, reactive, ref } from "vue";
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
import { ElNotification } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import { useStore } from '@/store/index.js'
import BubbleMenu2 from '@tiptap/extension-bubble-menu'
import UniqueID from '@tiptap-pro/extension-unique-id'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { createLowlight, common } from 'lowlight'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import EchartsPie from "@/components/EchartsPie.js";
import { request } from '../axios.js'
import Gapcursor from '@tiptap/extension-gapcursor'
import Commands from '@/components/CommandsList.js'
import suggestion from '@/components/CommandsListSug.js'
import Placeholder from '@tiptap/extension-placeholder'
// import VueEchartsPie from "@/components/EchartsPie.vue";
const lowlight = createLowlight(common)
// lowlight./
// import mermaid from 'mermaid'
const router = useRouter();
const route = useRoute();
const store = useStore()
let Template = ''

// route.query.id
if (route.query.template == 'graph') {
    Template = '<vue-mermaid data="graph TB\n使用mermaid-->创建您的图表"></vue-mermaid>'
} else if (route.query.template == 'blank') {
    Template = ''
} else if (route.query.template == 'doc') {
    Template = `<h1 style="text-align: center" id="h-dc42ebe3">标题111</h1><p><strong>加粗文<span style="font-size: 18pt">字</span><em><span style="font-size: 18pt">斜体文</span>字</em></strong><u><strong><em>下划线<s>删除线</s></em></strong></u></p><p></p><p style="text-align: right"><u><strong><em><s><span style="color: #FF0000">炫</span><span style="color: #0C11C7">彩文</span><span style="color: #00FF40">字哦</span></s></em></strong></u></p><p></p><h2 id="h-3d6be47f"><strong><em><span style="color: #FF0000">二级标题</span></em></strong></h2><ul><li><p>无序列表</p></li><li><p>2222</p></li><li><p>3333</p></li><li><p>4444</p></li></ul><ul data-type="taskList"><li data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>待办事项1</p></div></li><li data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>完成了哦</p></div></li><li data-checked="true" data-type="taskItem"><label><input type="checkbox" checked="checked"><span></span></label><div><p>撒大苏打</p></div></li><li data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>撒大苏打</p></div></li></ul><p>a<sup>2</sup>+b<sup>2</sup>=c<sup>2</sup></p>`
} else if (route.query.template == 'open') {
    Template = ''
    store.isSave = true
    // 打开文件
    nextTick(() => {
        OpenLocal()
    })
}

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

const DocTitle = ref('文档')
console.log(document.getElementById('bubbleMenu1'));
const state = reactive({
    editor: new Editor({
        // content: "",
        extensions: [
            Underline, FontSize, StarterKit, TextStyle, CharacterCount, Superscript, Subscript,
            Color.configure({ types: ["textStyle"], }),
            TextAlign.configure({ types: ['heading', 'paragraph'], }),
            Focus.configure({ className: 'focus', }),
            Link.configure({ autolink: true, linkOnPaste: true, openOnClick: false }),
            Heading.configure({ levels: [1, 2, 3, 4] }),
            TaskList, TaskItem, EchartsPie,
            mermaid, Paper, Gapcursor, Commands.configure({ suggestion }),
            Placeholder.configure({placeholder: 'Write something …',}),
            // BubbleMenu2,
            // BubbleMenu2.config({pluginKey: 'aiMenu', element: document.querySelector('#aiMenu')}), 
            UniqueID.configure({ types: ['heading', 'paragraph'], }),
            CodeBlockLowlight.configure({ lowlight, languageClassPrefix: 'language-', }),
            Table.configure({ resizable: true, }), TableRow, TableHeader, TableCell,
        ],
        autofocus: true,
        editable: true,
        injectCSS: true,
        content: Template,
        // content: `<vue-echarts-pie></vue-echarts-pie>`,
    }),
    result: "",
});

onMounted(() => {
    // state.editor.registerPlugin(BubbleMenu2.config({pluginKey: 'bubbleMenu', element: document.querySelector('#bubbleMenu')}));
})
function test() {
    // document.execCommand('paste')
    // state.editor.commands.deleteSelection()
    state.editor.commands.insertContent('<vue-echarts-pie></vue-echarts-pie>')
}
//设置颜色
const onColor = ($event) => {
    // debugger;
    state.editor.chain().focus().setColor($event.target.value).run();
};
//获取Html
const getHTML = () => {
    state.result = state.editor.getHTML();
};

const ShowTools = ref(true)
function ChangeShowTools() {
    ShowTools.value = !ShowTools.value
}

function GetDocTitle(str) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    console.log(doc.querySelector('body').firstElementChild.textContent);
    return doc.querySelector('body').firstElementChild.textContent
}

function SaveLocal() {
    store.isSave = true
    let html = state.editor.getHTML()
    let blob = new Blob([JSON.stringify({
        content: html
    })], { type: "text/plain;charset=utf-8" });
    // let objectURL = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = (GetDocTitle(html) || '文档') + '.smd';
    store.DocTitle = GetDocTitle(html) || '文档'
    link.click();
}
function SaveServer() {

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
        let reader = new FileReader();
        reader.onloadend = function (e) {
            try {
                console.log(file);
                let html = JSON.parse(e.target.result).content
                state.editor.commands.setContent(html)
                store.DocTitle = file.name.split('.').slice(0, -1).join('.')
                store.isSave = true
                state.editor.state.history$.prevRanges = null;
                state.editor.state.history$.done.eventCount = 0
                CanUndo.value = state.editor.can().undo()
                CanRedo.value = state.editor.can().redo()
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
            state.editor.commands.setContent('')
            store.DocTitle = '文档'
            state.editor.state.history$.prevRanges = null;
            state.editor.state.history$.done.eventCount = 0
            CanUndo.value = state.editor.can().undo()
            CanRedo.value = state.editor.can().redo()
        }).catch(() => {
            console.log('取消');
        });
    } else {
        state.editor.commands.setContent('')
        store.DocTitle = '文档'
    }
}

function SavePDF() {
    setTimeout(() => {
        window.print()
    }, 1000);
}

const EditorActive = () => {
    state.editor.chain().focus().run();
};

function undo() {
    state.editor.chain().undo().run()
}
function redo() {
    state.editor.chain().redo().run()
}
const isBold = ref(false)
const isItalic = ref(false)
const isUnderline = ref(false)
const isStrikethrough = ref(false)

function bold() {
    state.editor.chain().focus().toggleBold().run()
    isBold.value = state.editor.isActive('bold')
    // isBold.value = !isBold.value
}
function italic() {
    state.editor.chain().focus().toggleItalic().run()
    isItalic.value = state.editor.isActive('italic')
    // isItalic.value = !isItalic.value
}
function underline() {
    state.editor.commands.toggleUnderline()
    isUnderline.value = state.editor.isActive('underline')
    // isUnderline.value = !isUnderline.value
}
function strikethrough() {
    state.editor.chain().focus().toggleStrike().run()
    isStrikethrough.value = state.editor.isActive('strike')
    // isStrikethrough.value = !isStrikethrough.value
}

const CanUndo = ref(false)
const CanRedo = ref(false)

const FontSize2 = ref(12)
const FontSizeList = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72]
function SetFontSize() {
    state.editor.chain().focus().setFontSize(FontSize2.value + 'pt').run()
}

const FontColor = ref('#000000')
function SetFontColor() {
    state.editor.chain().focus().setColor(FontColor.value).run()
}

const TextAlign2 = ref('left')
function SetTextAlign(value) {
    state.editor.chain().focus().setTextAlign(value).run()
    // TextAlign2.value = value
    if (state.editor.isActive({ textAlign: 'justify' })) {
        TextAlign2.value = 'justify'
    } else if (state.editor.isActive({ textAlign: 'center' })) {
        TextAlign2.value = 'center'
    } else if (state.editor.isActive({ textAlign: 'right' })) {
        TextAlign2.value = 'right'
    } else {
        TextAlign2.value = 'left'
    }
}
const isSubscript = ref(false)
function SetSubscript() {
    state.editor.chain().focus().toggleSubscript().run()
    isSubscript.value = state.editor.isActive('subscript')

    // isSubscript.value = !isSubscript.value
}
const isSuperscript = ref(false)
function SetSuperscript() {
    state.editor.chain().focus().toggleSuperscript().run()
    // isSuperscript.value = !isSuperscript.value
    isSuperscript.value = state.editor.isActive('superscript')
}
const isLink = ref(false)
function SetLink() {
    if (isLink.value) {
        state.editor.chain().focus().unsetLink().run()
    } else {

    }
}

const isCode = ref(false)
function SetCode() {
    state.editor.chain().focus().toggleCodeBlock().run()
    isCode.value = state.editor.isActive('codeBlock')
}

let TitleList = reactive([])

function extractHeadings() {
    let parser = new DOMParser();
    let doc = parser.parseFromString(state.editor.getHTML(), 'text/html');
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
    TitleList = headings
}

function GotoTitle(id) {
    let element = document.getElementById(id);
    console.log(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

const Heading2 = ref(0)
function SetHeading(value) {
    state.editor.chain().focus().toggleHeading({ level: value }).run()
    // Heading2.value = value
    let flag = false
    for (let i = 1; i <= 4; i++) {
        if (state.editor.isActive('heading', { level: i })) {
            Heading2.value = i
            flag = true
            break
        }
    }
}
const isListol = ref(false)
function SetListol() {
    state.editor.chain().focus().toggleOrderedList().run()
    isListol.value = state.editor.isActive('orderedList')
    isListul.value = state.editor.isActive('bulletList')
}
const isListul = ref(false)
function SetListul() {
    state.editor.chain().focus().toggleBulletList().run()
    isListol.value = state.editor.isActive('orderedList')
    isListul.value = state.editor.isActive('bulletList')
}
const isTasks = ref(false)
function SetTasks() {
    state.editor.chain().focus().toggleTaskList().run()
    isTasks.value = state.editor.isActive('taskList')
}

function InsertGraph() {
    state.editor.chain().focus().insertContent('<vue-mermaid data="graph TB\n使用mermaid-->创建您的图表"></vue-mermaid>').run()
}

function InsertDraw() {
    state.editor.chain().focus().insertContent('<div data-type="paper"></div>').run()
}

function SaveHTML() {
    // state.editor.setHTML('<div data-mermaid>qwq</div>')
    console.log(state.editor.getHTML());
}

const isTable = ref(false)
const InsertTableCol = ref(3)
const InsertTableRow = ref(3)
function InsertTable() {
    state.editor.chain().focus().insertTable({ rows: InsertTableRow.value, cols: InsertTableCol.value }).run()
}
function InsertTableLine(value) {
    if (value == 'left') {
        state.editor.commands.addColumnBefore();
    } else if (value == 'right') {
        state.editor.commands.addColumnAfter();
    } else if (value == 'up') {
        state.editor.commands.addRowBefore();
    } else if (value == 'down') {
        state.editor.commands.addRowAfter();
    }
}

function DeleteTable(value) {
    if (value == 'row') {
        state.editor.commands.deleteRow();
    } else if (value == 'col') {
        state.editor.commands.deleteColumn();
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
                // state.editor.chain().focus().insertContent(clipboard).run()
                const clipboardItems = await navigator.clipboard.read();
                for (const item of clipboardItems) {
                    if (item.types.includes('text/html')) {
                        const blob = await item.getType('text/html');
                        const html = await blob.text();
                        state.editor.chain().focus().insertContent(html).run();
                    } else if (item.types.includes('text/plain')) {
                        const blob = await item.getType('text/plain');
                        const text = await blob.text();
                        state.editor.chain().focus().insertContent(text).run();
                    }
                }
            }
        }, {
            label: '全选',
            onClick: () => {
                state.editor.chain().focus('all').run();
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
                onClick: () => { state.editor.commands.mergeCells() }
            }, {
                label: '拆分单元格',
                onClick: () => { state.editor.commands.splitCell() }
            }]
        }, { divided: true }, {
            label: 'AI工具',
            children: [{
                label: 'AI翻译',
                onClick: () => { AItransition() }
            }, {
                label: 'AI全文总结',
                onClick: () => { AIsummary() }
            }, {
                label: 'AI全文摘要',
                onClick: () => { AIabstract() }
            }, {
                label: 'AI文章续写',
                onClick: () => { AIcontiune() }
            }]
        }]
    })
}
const ShowTree = ref(true)
const isAIOpen = ref(false)
const AIData = ref('')
const AISelect = ref(null)
const isAILoading = ref(false)
const AItransitionFrom = ref('自动识别')
const AItransitionTo = ref('中文')
let ctrl = new AbortController()
function AIInsert() {
    state.editor.chain().focus().insertContent(AIData.value).run()
}
function AItransition() {
    ctrl = new AbortController()
    AISelect.value = 1
    isAIOpen.value = true
    AIData.value = ''
    const view = state.editor.view
    const state2 = state.editor.state
    const { from, to } = view.state.selection
    const text = state2.doc.textBetween(from, to, '')
    console.log(text);
    isAILoading.value = true
    request({
        url: '/api/ai/translate/',
        method: 'POST',
        isEventSource: true,
        signal: ctrl.signal, // AbortSignal
        body: {
            content: text,
            type: AItransitionTo.value
        },
        headers: {
            'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
            'content-type': 'application/json',
        },
        onmessage: (ev) => {
            if (ev.data != '[DONE]') {
                AIData.value += ev.data
                console.log(ev.data, 111);
            }
        },
        onerror: (ev) => {
            ctrl.abort()
            isAILoading.value = false
            throw ev
        },
        onclose: () => {
            isAILoading.value = false
        }
    })
}

function AIsummary() {
    ctrl = new AbortController()
    AISelect.value = 2
    isAIOpen.value = true
    AIData.value = ''
    const text = state.editor.getText()
    isAILoading.value = true
    request({
        url: '/api/ai/summary/',
        method: 'POST',
        isEventSource: true,
        signal: ctrl.signal, // AbortSignal
        body: { content: text },
        headers: {
            'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
            'content-type': 'application/json',
        },
        onmessage: (ev) => {
            if (ev.data != '[DONE]') {
                AIData.value += ev.data
                console.log(ev.data, 111);
            }
        },
        onerror: (ev) => {
            ctrl.abort()
            isAILoading.value = false
            throw ev
        },
        onclose: () => {
            isAILoading.value = false
        }
    })
}

function AIabstract() {
    ctrl = new AbortController()
    AISelect.value = 3
    isAIOpen.value = true
    AIData.value = ''
    const text = state.editor.getText()
    console.log(text);
    isAILoading.value = true
    request({
        url: '/api/ai/abstract/',
        method: 'POST',
        isEventSource: true,
        signal: ctrl.signal, // AbortSignal
        body: { content: text, goal: AIcontiunegoal.value || '' },
        headers: {
            'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
            'content-type': 'application/json',
        },
        onmessage: (ev) => {
            if (ev.data != '[DONE]') {
                AIData.value += ev.data
                console.log(ev.data, 111);
            }
        },
        onerror: (ev) => {
            ctrl.abort()
            isAILoading.value = false
            throw ev
        },
        onclose: () => {
            isAILoading.value = false
        }
    })
}


const AIcontiunegoal = ref('')
function AIcontiune() {
    ctrl = new AbortController()
    AISelect.value = 4
    isAIOpen.value = true
    AIData.value = ''
    const text = state.editor.getText()
    console.log(text);
    isAILoading.value = true
    request({
        url: '/api/ai/continue/',
        method: 'POST',
        isEventSource: true,
        signal: ctrl.signal, // AbortSignal
        body: { content: text, goal: AIcontiunegoal.value || '正常续写' },
        headers: {
            'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
            'content-type': 'application/json',
        },
        onmessage: (ev) => {
            if (ev.data != '[DONE]') {
                nextTick(() => {
                    setTimeout(() => {
                        AIData.value += ev.data
                        const textarea = document.querySelector('#scroll_text');
                        textarea.scrollTop = textarea.scrollHeight;
                    }, 0)
                })

            }
        },
        onerror: (ev) => {
            ctrl.abort()
            isAILoading.value = false
            throw ev
        },
        onclose: () => {
            isAILoading.value = false
        }
    })
}

function AIAgain() {

    if (isAILoading.value) {
        ctrl.abort()
        isAILoading.value = false
        return
    }


    if (AISelect.value == 1) {
        AItransition()
    } else if (AISelect.value == 2) {
        AIsummary()
    } else if (AISelect.value == 3) {
        AIabstract()
    } else if (AISelect.value == 4) {
        AIcontiune()
    }
}

state.editor.on('selectionUpdate', () => {
    isBold.value = state.editor.isActive('bold')
    isItalic.value = state.editor.isActive('italic')
    isStrikethrough.value = state.editor.isActive('strike')
    isUnderline.value = state.editor.isActive('underline')
    let flag = false
    for (let i = 0; i < FontSizeList.length; i++) {
        if (state.editor.isActive('textStyle', { fontSize: FontSizeList[i] + 'pt' })) {
            FontSize2.value = FontSizeList[i]
            flag = true
            break
        }
    }
    if (!flag) { FontSize2.value = 12 }
    FontColor.value = state.editor.getAttributes('textStyle').color || '#000000'
    if (state.editor.isActive({ textAlign: 'justify' })) {
        TextAlign2.value = 'justify'
    } else if (state.editor.isActive({ textAlign: 'center' })) {
        TextAlign2.value = 'center'
    } else if (state.editor.isActive({ textAlign: 'right' })) {
        TextAlign2.value = 'right'
    } else {
        TextAlign2.value = 'left'
    }
    isSubscript.value = state.editor.isActive('subscript')
    isSuperscript.value = state.editor.isActive('superscript')
    isLink.value = state.editor.isActive('link')
    flag = false
    for (let i = 1; i <= 4; i++) {
        if (state.editor.isActive('heading', { level: i })) {
            Heading2.value = i
            flag = true
            break
        }
    }
    if (!flag) { Heading2.value = 0 }
    isListol.value = state.editor.isActive('orderedList')
    isListul.value = state.editor.isActive('bulletList')
    isTasks.value = state.editor.isActive('taskList')
    isCode.value = state.editor.isActive('codeBlock')
    isTable.value = state.editor.isActive('table')
})

const CharacterCount2 = ref(0)
const CharacterWordCount = ref(0)

state.editor.on('update', () => {
    store.isSave = false
    CanUndo.value = state.editor.can().undo()
    CanRedo.value = state.editor.can().redo()
    debounce(extractHeadings, 2000)()
    debounce(() => {
        CharacterCount2.value = state.editor.storage.characterCount.characters()
        CharacterWordCount.value = state.editor.storage.characterCount.words()
    }, 2000)()
})

// state.editor.on('selectionUpdate', () => {
//     debounce(() => {
//         // 选中部分的字数
//         CharacterCount2.value = state.editor.state.doc.textBetween(state.editor.state.selection.from, state.editor.state.selection.to).length
//         CharacterWordCount.value = state.editor.state.doc.textBetween(state.editor.state.selection.from, state.editor.state.selection.to).split(/\s+/).length
//     }, 100)()
// })



</script>
<style>
/* .tiptap p.is-empty:last-child::before {
  color: #adb5bd;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
} */
[contenteditable] {
    outline: 0px solid transparent;
}

p {
    margin: 0;
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
    top: 0;
    left: -20px;
    right: 0;
    bottom: 0;
    border-left: 3px solid #97b8ffad;
    pointer-events: none;
}

ul[data-type="taskList"] {
    list-style: none;
    padding: 0;
}

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
    color: #FFF;
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
}
</style>
<style scoped>
/* .editor {
    margin: 10px 20px;
    min-width: 600px;
    width: 60%;
    height: 500px;
    overflow: hidden;
} */
@media screen and (max-width: 768px) {
    .main-left {
        display: none;
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
    height: calc(100vh - 70px);
}

.tools {
    display: flex;
    background-color: #ffffff;
    flex-direction: column;
    user-select: none;
    border-bottom: solid 1px #ddd;

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
    border: 1px solid #ddd;
    padding-left: 102px;
    padding-right: 102px;
    padding-top: 82px;
    padding-bottom: 82px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    /* overflow: auto; */
    display: flex;
    flex-direction: column;
    min-width: 500px;
    width: 40vw;
    max-width: 40vw;
    min-height: calc(100vh - 80px);
    margin: 0 auto;
    position: relative;
}

.editor-space {
    flex: 1;
    cursor: text;
}

.main {
    margin: 0 auto;
    /* width: 100%; */
    flex: 1;
    overflow: auto;
    overflow-y: auto;
    background-color: #f5f5f5;
    height: calc(100%);
    position: relative;
    /* display: flex; */
    /* justify-content: space-between */
    /* transform: translateZ(0); */
}

.main2 {
    display: flex;
    /* justify-content: space-between; */
    height: calc(100% - 116px);
    position: relative;
    overflow: overlay;
}

.main-left {
    /* margin-top: 40px; */
    /* position: fixed; */
    background-color: #fff;
    /* top: 155px;
    left: 0;
    bottom: 30px; */
    /* height: 100%; */
    z-index: 100;
    border-right: solid 1px #ddd;
    overflow-y: auto;
    width: 200px;
    padding: 10px;
    position: relative;
}

.main-right {
    /* max-height: 100%;
    overflow-y: auto; */
}

.main-right-ai {
    position: relative;
    background-color: #fff;
    /* top: 155px;
    right: 0;
    bottom: 30px; */
    /* height: 100%; */
    z-index: 100;
    border-left: solid 1px #ddd;
    overflow-y: auto;
    width: 200px;
    padding: 10px;
    resize: horizontal;
    transform: rotateY(180deg);
}

.main-right-ai::-webkit-scrollbar {
    width: 200px;
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
    left: 20px;
    cursor: pointer;
    color: #666;
    z-index: 100;
}

.main-left-title {
    padding: 5px 10px;
    cursor: pointer;
    margin-bottom: 5px;
    color: #0151ff;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    margin: 0;
    margin-left: 0;
    margin-top: 5px;
    margin-bottom: 0;
    list-style: none;
    padding: 0;
    font-size: 12px;
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
    padding: 5px 5px;
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
    padding: 5px;
}

.bubble-menu-1 {
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3374ff;
}

.bubble-menu-1 span {
    cursor: pointer;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    display: flex;
    justify-content: right;
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
</style>