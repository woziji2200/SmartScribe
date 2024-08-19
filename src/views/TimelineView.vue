<template>
    <div class="timeline-main" v-loading="fileLoading">
        <div class="timeline-top">
            <div class="tools2">
                <span class="top-button2" style="width: auto; flex-direction: row;padding: 0 6px;" @click="GotoHome()">
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
                    回到首页
                </span>

                <span class="top-button2" style="width: auto; flex-direction: row;padding: 0 6px;" @click="SaveServer">
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
                    保存到云端
                </span>

                <span class="top-button2" style="width: auto; flex-direction: row;padding: 0 6px;" @click="SaveLocal">
                    <svg t="1720251915330" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="28593" width="200" height="200">
                        <path d="M896 514.2V896H128V514.2H64V960h896V514.2z" fill="#727272" p-id="28594"></path>
                        <path d="M480 644.4V64h64v580.3l182.8-196.5 46.9 43.7L512 772.6 250.3 491.5l46.9-43.7z"
                            fill="#5280C1" p-id="28595"></path>
                    </svg>
                    保存到本地
                </span>

                <span class="top-button2" style="width: auto; flex-direction: row;padding: 0 6px;" @click="OpenLocal">
                    <svg t="1720251984080" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="39112" width="200" height="200">
                        <path
                            d="M108.251429 0C77.531429 0 51.2 26.331429 51.2 58.514286v904.045714c0 32.182857 26.331429 58.514286 57.051429 58.514286H914.285714c32.182857 0 57.051429-26.331429 57.051429-58.514286V235.52L741.668571 0H108.251429z"
                            fill="#1890FF" opacity=".795" p-id="39113"></path>
                        <path
                            d="M487.131429 365.714286H314.514286c-16.091429 0-29.257143-13.165714-29.257143-29.257143s13.165714-29.257143 29.257143-29.257143h172.617143c16.091429 0 29.257143 13.165714 29.257142 29.257143-1.462857 16.091429-13.165714 29.257143-29.257142 29.257143z m229.668571 177.005714H314.514286c-16.091429 0-29.257143-13.165714-29.257143-29.257143s13.165714-29.257143 29.257143-29.257143h402.285714c16.091429 0 29.257143 13.165714 29.257143 29.257143s-13.165714 29.257143-29.257143 29.257143z m0 177.005714H314.514286c-16.091429 0-29.257143-13.165714-29.257143-29.257143s13.165714-29.257143 29.257143-29.257142h402.285714c16.091429 0 29.257143 13.165714 29.257143 29.257142s-13.165714 29.257143-29.257143 29.257143z"
                            fill="#E4EEFF" p-id="39114"></path>
                        <path
                            d="M972.8 236.982857H800.182857c-32.182857 0-57.051429-26.331429-57.051428-58.514286V0L972.8 236.982857z"
                            fill="#E7F0FF" p-id="39115"></path>
                    </svg>
                    <input type="file" id="OpenLocal2" style="display: none" accept=".smdt" @change="OpenLocal2">

                    打开本地文件
                </span>

            </div>

            <div class="line"></div>

            <div class="preview" id="refpreview">
                <span class="preview-day" v-for="(i, index) in data.value.timeline" :key="i.id">
                    <div class="task" @click="ChangeToTask(i.id)" :class="'preview-' + getStatus(i.task)"
                        v-for="(j, index2) in i.task.slice(0, 1)" :key="j.id">
                        <span v-if="i.task.length == 1">{{ j.title }}</span>
                        <span v-else>{{ j.title }}等{{ i.task.length }}个任务</span>

                    </div>
                </span>
            </div>
            <div class="line"></div>
            <div class="timeline" :id="id" :style="{ height: taskHeight + 'px' }">
                <div class="task" v-for="(i, index) in data.value.timeline" :key="i.id" :id="i.id">
                    <div class="task-line" :class="'task-line-' + getStatus(i.task)"> </div>
                    <div class="task-time">
                        时间：{{ timestampToYyyyMmDd(i.time) }}
                        <div v-if="index != data.value.timeline.length - 1" class="task-line-add2"
                            @click.stop="addDay(i.id)">
                            <font-awesome-icon icon="plus" />
                        </div>
                    </div>
                    <VueDraggable animation="150" ref="el" v-model="i.task" @start="onDragStart" @end="onDragEnd">
                        <TransitionGroup type="transition" :name="!drag ? 'fade' : null">
                            <div class="day-task" 
                                :class="['task-' + j.status, j.id == nowId ? 'task-select-' + j.status : '']"
                                v-for="(j, index2) in i.task" :key="j.id" :id="j.id" @click.stop="ChangeTask(j.id)">
                                <div class="task-add task-add-top" v-if="index2 == 0"
                                    @click.stop="addTask(i.id, 'first')">
                                    <font-awesome-icon icon="plus" />
                                </div>
                                <div class="task-title">
                                    <span>{{ j.title }}</span>
                                    <font-awesome-icon @click.stop="deleteTask(j.id)" class="icon" icon="trash-alt" />
                                </div>
                                <!-- <div class="task-time">{{ j.time }}</div> -->
                                <div class="task-status">
                                    <span v-if="j.status === 'done'">状态：已完成</span>
                                    <span v-if="j.status === 'ongoing'">状态：进行中</span>
                                    <span v-if="j.status === 'failed'">状态：失败</span>
                                    <span v-if="j.status === 'pending'">状态：待处理</span>
                                    <span v-if="j.status === 'prime'">状态：待编辑</span>
                                </div>
                                <div class="task-desc">{{ j.desc }}</div>
                                <div class="task-add" @click.stop="addTask(j.id)">
                                    <font-awesome-icon icon="plus" />
                                </div>

                                <div v-if="index != data.value.timeline.length - 1" class="task-line-add2"
                                    @click.stop="addDay(i.id)">
                                    <font-awesome-icon icon="plus" />
                                </div>
                            </div>
                        </TransitionGroup>
                    </VueDraggable>
                </div>
                <div class="task-line-add" @click.stop="addDay('end')">
                    <font-awesome-icon icon="plus" />
                </div>

            </div>
        </div>

        <div style="height: 6px; cursor: s-resize;" id="taskResizer">
            <div class="line" style=""></div>
        </div>


        <div class="timeline-edit">
            <div class="left" id="refeditleft">
                <div class="item">
                    <div class="title">日期设置</div>
                    <div>
                        <el-date-picker v-model="taskDate" type="date" :editable="false" :clearable="false"
                            placeholder="选择任务日期" />
                    </div>
                </div>

                <div class="input item">
                    <div class="title">任务标题</div>
                    <div>
                        <input type="text" placeholder="请输入任务的标题" v-model="taskTitle">
                    </div>
                </div>

                <div class="item">
                    <div class="title">任务状态</div>
                    <div>
                        <el-radio-group v-model="taskStatus" :fill="handleStatusColor(taskStatus)">
                            <el-radio-button label="已完成" value="done" />
                            <el-radio-button label="进行中" value="ongoing" />
                            <el-radio-button label="失败" value="failed" />
                            <el-radio-button label="待处理" value="pending" />
                            <el-radio-button label="待编辑" value="prime" />
                        </el-radio-group>
                    </div>
                </div>


                <div class="item">
                    <div class="title">任务简介</div>
                    <div v-loading="AIDescLoading">
                        <textarea name="" id="ai1" class="textarea-plus" rows="6" placeholder='任务简介'
                            v-model="taskDesc"></textarea>
                    </div>
                    <span class="button-plus" @click="AIDesc()">{{ AIDescLoading ? "停止生成" : "根据详情AI总结👉" }}</span>
                </div>
            </div>
            <div class="right" id="refedit">
                <div class="top top2" id="refedittools">
                    <div class="top-new" id="reftop1">
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
                                            <span @click="bold" class="top-button-2"
                                                :class="!isBold ? '' : 'tools-select'">
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
                                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1280"
                                                    width="200" height="200">
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
                                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1446"
                                                    width="200" height="200">
                                                    <path
                                                        d="M88 448h400V172c0-24.3 19.7-44 44-44s44 19.7 44 44v680c0 24.3-19.7 44-44 44s-44-19.7-44-44V536H88v316c0 24.3-19.7 44-44 44S0 876.3 0 852V172c0-24.3 19.7-44 44-44s44 19.7 44 44v276z m935.282 448H680c0.479-41.591 10.533-77.923 30.163-108.997 19.63-31.074 46.44-58.084 80.434-81.031 16.279-11.952 33.275-23.544 50.99-34.779 17.714-11.234 33.993-23.305 48.835-36.213 14.842-12.907 27.05-26.89 36.626-41.95 9.576-15.058 14.603-32.388 15.081-51.988 0-9.083-1.077-18.764-3.231-29.042-2.155-10.278-6.344-19.84-12.568-28.683-6.224-8.845-14.842-16.254-25.854-22.23-11.012-5.976-25.375-8.964-43.09-8.964-16.278 0-29.803 3.227-40.576 9.68-10.772 6.455-19.39 15.299-25.854 26.533-6.463 11.235-11.251 24.5-14.363 39.798-3.112 15.298-4.908 31.791-5.386 49.48h-81.87c0-27.728 3.71-53.423 11.13-77.087 7.422-23.664 18.553-44.101 33.395-61.311 14.842-17.21 32.916-30.715 54.222-40.516 21.305-9.8 46.081-14.7 74.33-14.7 30.641 0 56.255 5.02 76.843 15.059 20.587 10.04 37.224 22.707 49.912 38.005 12.688 15.298 21.665 31.91 26.931 49.838 5.267 17.927 7.9 35.018 7.9 51.272 0 20.078-3.112 38.244-9.336 54.498-6.224 16.254-14.603 31.193-25.136 44.818-10.533 13.625-22.502 26.174-35.908 37.647a538.302 538.302 0 0 0-41.653 32.27 1122.27 1122.27 0 0 0-43.09 28.683c-14.364 9.083-27.65 18.166-39.858 27.249-12.209 9.083-22.862 18.525-31.958 28.325-9.097 9.8-15.321 20.198-18.673 31.193h244.894V896z"
                                                        p-id="1447"></path>
                                                </svg> </span>
                                        </el-tooltip>
                                        <el-tooltip content="三级标题" placement="bottom">
                                            <span @click="SetHeading(3)" class="top-button-2"
                                                :class="Heading2 != 3 ? '' : 'tools-select'">
                                                <svg t="1716215866976" class="tools-svg" viewBox="0 0 1024 1024"
                                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1608"
                                                    width="200" height="200">
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
                                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1770"
                                                    width="200" height="200">
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
                                                <svg t="1720442589110" class="icon" viewBox="0 0 1024 1024"
                                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6077"
                                                    width="200" height="200">
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
                                            <span @click="InsertTableLine('up')" :disabled="!isTable"
                                                class="top-button-2">
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
                                                <svg t="1716644758298" class="icon" viewBox="0 0 1024 1024"
                                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13801"
                                                    width="200" height="200">
                                                    <path
                                                        d="M213.333333 426.666667H128V170.666667h341.333333v85.333333H213.333333v170.666667z m597.333334 341.333333h-256v85.333333h341.333333v-256h-85.333333v170.666667zM213.333333 768v-170.666667H128v256h341.333333v-85.333333H213.333333zM896 170.666667h-341.333333v85.333333h256v170.666667h85.333333V170.666667zM341.333333 554.666667v85.333333l128-128-128-128v85.333333H128v85.333334h213.333333z m341.333334-85.333334V384l-128 128 128 128v-85.333333h213.333333v-85.333334h-213.333333z"
                                                        p-id="13802"></path>
                                                </svg>
                                            </span>
                                        </el-tooltip>
                                        <el-tooltip content="拆分单元格" placement="bottom">
                                            <span @click="editor.commands.splitCell();" :disabled="!isTable"
                                                class="top-button-2">
                                                <svg t="1716644784112" class="icon" viewBox="0 0 1024 1024"
                                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15809"
                                                    width="200" height="200">
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
                                            <input type="file" @change="InsertPic" id="uploadImg"
                                                style="display: none;" />
                                            <svg t="1720252852899" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="111649" width="200"
                                                height="200">
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
                                                xmlns="http://www.w3.org/2000/svg" p-id="73702" width="200"
                                                height="200">
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
                                                xmlns="http://www.w3.org/2000/svg" p-id="76794" width="200"
                                                height="200">
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
                                                <path d="M296.421053 512h53.894736v134.736842h-53.894736z"
                                                    fill="#FFFFFF" p-id="76800">
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
                                                xmlns="http://www.w3.org/2000/svg" p-id="80655" width="200"
                                                height="200">
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
                                                xmlns="http://www.w3.org/2000/svg" p-id="82723" width="200"
                                                height="200">
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

                        <div class="top-line"></div>

                        <el-dropdown size="large" :hide-timeout="300">
                            <span class="top-button" :class="''"
                                style="width: auto; flex-direction: row;padding: 0 6px;" @click="isAIOpen = true">
                                <svg t="1721048942688" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="9416" width="200" height="200">
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

                        <el-dropdown size="large" :hide-timeout="300">
                            <span class="top-button" :class="''" style="width: auto; flex-direction: row;padding: 0px;"
                                @click="isAIOpen = true">
                                <svg t="1721050274087" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="13376" width="200" height="200">
                                    <path
                                        d="M921.6 1024H102.4c-58.026667 0-102.4-44.373333-102.4-102.4V102.4c0-58.026667 44.373333-102.4 102.4-102.4h819.2c58.026667 0 102.4 44.373333 102.4 102.4v819.2c0 58.026667-44.373333 102.4-102.4 102.4z"
                                        fill="#5883FF" p-id="13377"></path>
                                    <path
                                        d="M785.066667 317.44H238.933333c-17.066667 0-34.133333 17.066667-34.133333 34.133333v341.333334c0 17.066667 17.066667 34.133333 34.133333 34.133333h546.133334c17.066667 0 34.133333-17.066667 34.133333-34.133333v-341.333334c0-20.48-17.066667-34.133333-34.133333-34.133333z m-17.066667 341.333333c0 10.24-6.826667 17.066667-17.066667 17.066667H273.066667c-10.24 0-17.066667-6.826667-17.066667-17.066667v-273.066666c0-10.24 6.826667-17.066667 17.066667-17.066667h477.866666c10.24 0 17.066667 6.826667 17.066667 17.066667v273.066666z"
                                        fill="#FFFFFF" p-id="13378"></path>
                                    <path d="M232.106667 686.08l136.533333-259.413333 426.666667 259.413333z"
                                        fill="#FFFFFF" p-id="13379">
                                    </path>
                                    <path
                                        d="M641.706667 453.973333m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z"
                                        fill="#FFFFFF" p-id="13380"></path>
                                    <path
                                        d="M153.6 153.6h92.16V102.4H102.4v146.773333h51.2zM153.6 870.4v-88.746667H102.4V921.6h143.36v-51.2zM870.4 870.4h-92.16V921.6H921.6v-139.946667h-51.2zM778.24 102.4v51.2h92.16v95.573333H921.6V102.4z"
                                        fill="#FFFFFF" p-id="13381"></path>
                                </svg>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item
                                        @click="InsertAINode({ type: 7.1, url: editor.getAttributes('image').src, needImage: true })">
                                        图片OCR
                                    </el-dropdown-item>
                                    <el-dropdown-item
                                        @click="InsertAINode({ type: 7.2, url: editor.getAttributes('image').src, needImage: true })">
                                        目标检测
                                    </el-dropdown-item>
                                    <el-dropdown-item
                                        @click="InsertAINode({ type: 7.3, url: editor.getAttributes('image').src, needImage: true })">
                                        图片表格识别
                                    </el-dropdown-item>
                                    <el-dropdown-item
                                        @click="InsertAINode({ type: 9, url: editor.getAttributes('audio').src, needAudio: true })">
                                        语音转文字
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>

                        <el-dropdown size="large" :hide-timeout="300">
                            <span class="top-button" :class="''" style=" flex-direction: row;padding: 0px;"
                                @click="isAIOpen = true">
                                <svg t="1721050336486" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="16283" width="200" height="200">
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
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item @click="InsertAINode({ type: 6 })">
                                        智能排版
                                    </el-dropdown-item>
                                    <el-dropdown-item @click="InsertAINode({ type: 10.1, needSelectText: true })">
                                        文字转流程图
                                    </el-dropdown-item>
                                    <el-dropdown-item @click="InsertAINode({ type: 10.4, needSelectText: true })">
                                        文字转思维导图
                                    </el-dropdown-item>
                                    <el-dropdown-item @click="InsertAINode({ type: 10.2, needSelectText: true })">
                                        文字转表格
                                    </el-dropdown-item>
                                    <el-dropdown-item @click="InsertAINode({ type: 10.3, needSelectText: true })">
                                        文字转图表
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>


                        <el-dropdown size="large" :hide-timeout="300">
                            <span class="top-button" :class="''" style=" flex-direction: row;padding: 0px;" >
                                <svg t="1722755367704" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6088" width="200" height="200"><path d="M273.408 207.36h492.032c38.912 0 70.144 31.232 70.144 70.144v492.032c0 38.912-31.232 70.144-70.144 70.144H273.408c-38.912 0-70.144-31.232-70.144-70.144V277.504c0-38.912 31.232-70.144 70.144-70.144z" fill="#CAE4FF" p-id="6089"></path><path d="M160.768 127.488c-16.896-1.024-31.744 11.776-32.768 29.184v725.504c-1.024 16.896 11.776 31.744 29.184 32.768h725.504c16.896 1.024 31.744-11.776 32.768-29.184V160.256c1.024-16.896-11.776-31.744-29.184-32.768h-3.584-721.92z m0-65.536h721.92c53.76 1.536 97.28 44.544 98.304 98.304v721.92c-1.536 53.76-44.544 97.28-98.304 98.304h-721.92c-53.76-1.536-97.28-44.544-98.304-98.304v-721.92c1.024-53.76 44.544-96.768 98.304-98.304z m393.728 262.656h196.608c16.896-1.024 31.744 11.776 32.768 29.184v3.584c1.024 16.896-11.776 31.744-29.184 32.768h-200.192c-16.896 1.024-31.744-11.776-32.768-29.184v-3.584c-1.024-16.896 11.776-31.744 29.184-32.768h3.584z m-197.12 393.728c17.92 0 32.768-14.848 32.768-32.768 0-17.92-14.848-32.768-32.768-32.768-17.92 0-32.768 14.848-32.768 32.768 0 17.92 14.848 32.768 32.768 32.768z m0 65.536c-54.272 0-98.304-44.032-98.304-98.304s44.032-98.304 98.304-98.304S455.68 631.296 455.68 685.568s-43.52 98.304-98.304 98.304z m-6.144-400.384L279.04 311.296c-13.312-12.288-33.792-11.776-46.08 1.536-11.776 12.288-11.776 31.744 0 44.544l91.648 91.648c7.168 6.656 16.384 11.264 26.112 13.312 9.216 1.024 18.432-1.536 26.112-6.656l137.728-137.728c12.8-12.8 12.8-33.28 0-46.08s-33.28-12.8-46.08 0L351.232 383.488z m203.264 268.8h196.608c17.92 0 32.768 14.848 32.768 32.768 0 17.92-14.848 32.768-32.768 32.768h-196.608c-17.92 0-32.768-14.848-32.768-32.768 0-17.92 14.848-32.768 32.768-32.768z" fill="#0972E7" p-id="6090"></path></svg>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item @click="AIInsert(`<ai-plan args='${timestampToYyyyMmDd(getDayByTaskId(nowId).time)}'></ai-plan>`)">
                                        自动规划任务
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>

                    </div>
                </div>
                <div class="main" v-loading="fileLoading" id="refmain">
                    <div class="main-right">
                        <div class="editor">
                            <div>
                                <template v-for="(i, index) in editors" :key="i.id">
                                    <editor-content id="pdf" v-show="nowId == i.id" :editor="i.editor"
                                        @contextmenu.prevent.stop="EditorContext" />
                                </template>
                            </div>
                            <div @click="EditorActive"
                                @contextmenu.prevent.stop="editor.chain().focus('end').run(); EditorContext($event)"
                                class="editor-space"></div>
                        </div>
                    </div>
                </div>

                <bubble-menu :shouldShow="shouldShowMenu" id="bubbleMenu" :editor="editor"
                    :tippy-options="{ duration: 100 }" v-if="editor">
                    <div class="bubble-menu" @contextmenu.prevent>
                        <div class='bubble-menu-1'>
                            <span @click="bold" :class="!isBold ? '' : 'tools-select'"><font-awesome-icon
                                    icon='bold'></font-awesome-icon></span>
                            <span @click="italic" :class="!isItalic ? '' : 'tools-select'"><font-awesome-icon
                                    icon='italic'></font-awesome-icon></span>
                            <span @click="underline" :class="!isUnderline ? '' : 'tools-select'"><font-awesome-icon
                                    icon='underline'></font-awesome-icon></span>
                            <span @click="strikethrough"
                                :class="!isStrikethrough ? '' : 'tools-select'"><font-awesome-icon
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
            </div>
        </div>

        <el-tour v-model="openTour" @close="closeTour" @finish="closeTour">
            <el-tour-step title="新手引导">
                <div>😊你好~我是笔匠，下面我来带你使用全新的任务时间轴工具吧！</div>
            </el-tour-step>
            <el-tour-step :target="getElementById(id)" title="新手引导#1" description="这里任务时间轴区，可以在这里安排每一天的任务，同一天也可以安排多个工作项哦" />
            <el-tour-step :target="getElementById('refpreview')" title="新手引导#2" description="这里是快速预览区，可以快速查看每天的任务" />
            <el-tour-step :target="getElementById('refeditleft')" title="新手引导#3" placement="right"
                description="这里是工作项编辑区，可以编辑任务标题、状态、简介等内容" />
            <el-tour-step :target="getElementById('refedit')" title="新手引导#4" placement="left"
                description="这里是详情编辑区，编写工作项的具体计划和方案" />
            <el-tour-step :target="getElementById('refedittools')" title="新手引导#5"
            description="这里是编辑区工具栏，同样内置了许多AI工具，甚至可以帮您一键安排任务！" />
            <el-tour-step title="新手引导#5" description="🚀OK！现在开始您的AI创作之旅吧！" />
            <!-- <el-tour-step target="reftop2" title="Other Actions" description="Click to see other" /> -->
        </el-tour>

    </div>
</template>

<script setup>
import InputPlus from "@/components/InputPlus.vue";
import { v4 as uuid } from 'uuid'
import { getCurrentInstance, computed, nextTick, onBeforeUnmount, onMounted, onUnmounted, reactive, ref, watch } from "vue";
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
import Paper from '../components/Draw.js'
import { ElMessage, ElNotification } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import { useStore } from '@/store/index.js'
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
import { Indent } from "@/components/Indent.js";
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
import Document from '@tiptap/extension-document'
import { VueDraggable } from 'vue-draggable-plus'
import AIPlanNode from "@/components/AIPlanNode.js";
import eventBus from "@/store/mitt.js";
import MindMapNode from "@/components/MindMapNode.js";

const lowlight = createLowlight(common)
let Template = ''
const id = ref(uuid());
const data = reactive({ value: undefined });
const editors = ref([]);
let editor = ref(null);
const nowId = ref('');
const store = useStore()
const fileLoading = ref(false)
const openTour = ref(false)
nextTick(() => {
    if (!localStorage.getItem('hasTourTi')) {
        openTour.value = true
    }
})
function closeTour() {
    localStorage.setItem('hasTourTi', 'true')
    openTour.value = false
}
function getElementById(id) {
    return document.getElementById(id)
}


function getTaskById(id){
    for (const timelineItem of data.value.timeline) {
        const task = timelineItem.task.find(task => task.id === id);
        if (task) {
            return task;
        }
    }
    return null;
}

function getDayByTaskId(id){
    for (const timelineItem of data.value.timeline) {
        if (timelineItem.task.find(task => task.id === id)) {
            return timelineItem;
        }
    }
    return null;
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

console.log(data.value);
const router = useRouter();
const route = useRoute();
let fileId = ''
if (route.query.id) {
    fileLoading.value = true
    fileId = route.query.id
    request({
        url: '/api/task/manage/?task_id=' + fileId,
        method: 'get',
    }).then((response) => {
        data.value = JSON.parse(response.data.content)
        // console.log(typeof(data.value));
        
        store.isSave = true
        store.DocTitle = response.data.title
        fileLoading.value = false
        InitEditor()
        if(route.query.task){
            ChangeTask(route.query.task)
        }
    }).catch((error) => {
        fileLoading.value = false
        console.error(error);
        ElNotification({
            title: '错误',
            message: '打开文件失败',
            type: 'error',
        })
    })
}

if(route.query.template == 'open'){
    store.isSave = true
    // fileLoading.value = true
    nextTick(() => {
        OpenLocal()
    })
}else if(route.query.template == 'local'){

    data.value = {timeline: JSON.parse(localStorage.getItem('localData')).map(i => {
        return {
            id: uuid(),
            time: (new Date(i.time).setHours(0, 0, 0, 0)).toString(),
            task: i.task.map(j => {
                return {
                    id: uuid(),
                    title: j.title,
                    status: 'prime',
                    desc: j.desc,
                    content: j.content,
                }
            })
        }
    })}
}
if (!data.value) {
    data.value = {
        timeline: [
            {
                id: uuid(),
                time: (new Date().setHours(0, 0, 0, 0)).toString(),
                task: [
                    {
                        title: '第一天的任务1',
                        status: 'done',
                        desc: '你好！这里是任务简介，可以在这里添加任务的简单描述！',
                        content: `<h1 style=\"text-indent: 0em !important;\" id=\"h-27250198\">智慧笔匠 - 任务时间轴</h1><p style=\"text-indent: 0em !important;\">你好！这里是智慧笔匠的任务时间轴，我可以帮助你安排并管理工作日程！</p><p style=\"text-indent: 0em !important;\"></p><p style=\"text-indent: 0em !important;\">你可以点击上方的日程栏切换每一天的任务项，并在下方修改您的任务标题、任务状态、任务简介和任务详情。</p><p style=\"text-indent: 0em !important;\"></p><p style=\"text-indent: 0em !important;\">你也可以使用AI助手自动规划工作内容并安排工作时间。</p>`,
                        id: uuid(),

                    }, {
                        title: '第一天的任务2',
                        status: 'done',
                        desc: '第一天要做的第二件事...',
                        content: '这里可以编写任务详情',
                        id: uuid(),

                    }
                ]
            }, {
                id: uuid(),
                time: new Date(new Date().setHours(0, 0, 0, 0) + 86400000).setHours(0,0,0,0).toString(),
                task: [
                    {
                        id: uuid(),
                        title: '第二天的任务',
                        status: 'done',
                        desc: '第二天要做的工作简介',
                        content: '<h1>第二天的工作内容</h1><p>...</p>',
                    }
                ]
            }, {
                id: uuid(),
                time: new Date(new Date().setHours(0, 0, 0, 0) + 86400000 * 2).setHours(0,0,0,0).toString(),
                task: [
                    {
                        id: uuid(),
                        title: '第三天的任务1',
                        status: 'ongoing',
                        desc: '第三天要做的第一件事的工作简介',
                        content: '第三天的第一项任务的具体内容',
                    },
                    {
                        id: uuid(),
                        title: '第三天的任务2',
                        status: 'pending',
                        desc: '第三天要做的第二件事的工作简介',
                        content: '第三天的第二项任务的具体内容',
                    }
                ]
            }, {
                id: uuid(),
                time: new Date(new Date().setHours(0, 0, 0, 0) + 86400000 * 3).setHours(0,0,0,0).toString(),
                task: [
                    {
                        id: uuid(),
                        title: '第四天的任务',
                        status: 'prime',
                        desc: '这里是第四天的任务简介',
                        content: '这里是第四天的任务内容',
                    }
                ]
            }
        ]
    }
}
store.isSave = true
store.DocTitle = '新建时间轴'

const taskTitle = computed({
    get() {
        for (const timelineItem of data.value.timeline) {
            const task = timelineItem.task.find(task => task.id === nowId.value);
            if (task) {
                return task.title;
            }
        }
        return '';
    },
    set(newTitle) {
        store.isSave = false
        for (const timelineItem of data.value.timeline) {
            const task = timelineItem.task.find(task => task.id === nowId.value);
            if (task) {
                task.title = newTitle;
                break;
            }
        }
    },
});
const taskDesc = computed({
    get() {
        for (const timelineItem of data.value.timeline) {
            const task = timelineItem.task.find(task => task.id === nowId.value);
            if (task) {
                return task.desc;
            }
        }
        return '';
    },
    set(newDesc) {
        store.isSave = false
        for (const timelineItem of data.value.timeline) {
            const task = timelineItem.task.find(task => task.id === nowId.value);
            if (task) {
                task.desc = newDesc;
                break;
            }
        }
    },
});
const taskStatus = computed({
    get() {
        for (const timelineItem of data.value.timeline) {
            const task = timelineItem.task.find(task => task.id === nowId.value);
            if (task) {
                return task.status;
            }
        }
        return '';
    },
    set(newStatus) {
        store.isSave = false
        for (const timelineItem of data.value.timeline) {
            const task = timelineItem.task.find(task => task.id === nowId.value);
            if (task) {
                task.status = newStatus;
                break;
            }
        }
    },
});
const taskDate = computed({
    get() {
        for (const timelineItem of data.value.timeline) {
            if (timelineItem.task.find(task => task.id === nowId.value)) {
                // 时间戳转日期
                // return timelineItem.time;
                return new Date(Number(timelineItem.time));
            }
        }
        return '';
    },
    set(newDate) {
        store.isSave = false
        for (const timelineItem of data.value.timeline) {
            // 找到含有nowId的timeline
            if (timelineItem.task.find(task => task.id === nowId.value)) {
                // timelineItem.time = newDate;
                timelineItem.time = Date.parse(newDate);
                data.value.timeline.sort((a, b) => a.time - b.time);
                setTimeout(() => {
                    let timelineid = data.value.timeline.find(i => i.task.find(j => j.id === nowId.value)).id
                    ChangeToTask(timelineid)
                }, 20);
                break;
            }
        }
    },
});

function getStatus(tasks) {
    // 失败 > 进行中 > 待处理 > 待编辑 > 已完成
    const statusPriority = {
        'failed': 1,
        'ongoing': 2,
        'pending': 3,
        'prime': 4,
        'done': 5
    };
    // 初始化最高优先级为最大值
    let highestPriority = Infinity;
    let overallStatus = '';

    // 遍历任务数组
    tasks.forEach(task => {
        const taskPriority = statusPriority[task.status];
        if (taskPriority < highestPriority) {
            highestPriority = taskPriority;
            overallStatus = task.status;
        }
    });
    return overallStatus;
}

function addTask(id, position, title='新建任务', status='prime', desc='任务简介', content='') {
    let tempId = uuid();
    const createTask = (tasks, index) => {
        tasks.splice(index, 0, { title,status,desc,content, id: tempId,});
        editors.value.push({ id: tempId, editor: CreateEditor(false, false, content) });
        ChangeTask(tempId);
    };
    data.value.timeline.forEach(i => {
        if (i.id === id && position === 'first') {
            createTask(i.task, 0);
        } else {
            i.task.forEach((j, index) => {
                if (j.id === id && position !== 'first') {
                    createTask(i.task, index + 1);
                }
            });
        }
    });
    return tempId;
}

function addDay(id, title='新建任务', status='prime', desc='任务简介', content='') {
    let tempId = uuid();
    const createNewDay = (index, time) => {
        data.value.timeline.splice(index, 0, {
            id: uuid(),
            time: Date.parse(time),
            task: [{ title,status, desc, content, id: tempId }]});
        editors.value.push({id: tempId,editor: CreateEditor(false, false, content)});
        ChangeTask(tempId);
    };

    if (id === 'end') {
        let lastItem = data.value.timeline[data.value.timeline.length - 1];
        let time = new Date(Number(lastItem.time));
        createNewDay(data.value.timeline.length, time);
    } else {
        data.value.timeline.forEach((i, index) => {
            if (i.id === id) {
                let time = new Date(Number(i.time));
                createNewDay(index + 1, time);
            }
        });
    }
    return tempId;
}

function deleteTask(id) {
    if (data.value.timeline.length === 1 && data.value.timeline[0].task.length === 1) {
        return
    }
    data.value.timeline.forEach((i, indexi) => {
        i.task.forEach((j, index) => {
            if (j.id === id) {
                // 选择上一个任务，如果当前是空的，选择上一task的上一个
                let tempIndex = index - 1
                if (tempIndex < 0) {
                    if (data.value.timeline[indexi - 1]) {
                        ChangeTask(data.value.timeline[indexi - 1].task[data.value.timeline[indexi - 1].task.length - 1].id)
                    }
                    else {
                        if (data.value.timeline[0].task[1]) {
                            ChangeTask(data.value.timeline[0].task[1].id)
                        } else {
                            ChangeTask(data.value.timeline[1].task[0].id)
                        }
                    }
                } else {
                    ChangeTask(i.task[tempIndex].id)
                }
                editors.value.filter(i => i.id === id)[0].editor.destroy()
                i.task.splice(index, 1)

            }
        })
    })
    data.value.timeline = data.value.timeline.filter(i => i.task.length > 0)
}
function ChangeToTask(id) {
    console.log(id);
    ChangeTask(data.value.timeline.find(i => i.id == id).task[0].id)
    document.getElementById(id).scrollIntoView();
}
// 30vh
const taskHeight = ref(document.documentElement.clientHeight * 0.25);
nextTick(() => {
    document.getElementById('taskResizer').onmousedown = (e) => {
        const startY = e.clientY;
        const startHeight = taskHeight.value;
        document.onmousemove = (e) => {
            taskHeight.value = startHeight + e.clientY - startY;
        }
        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
})

function handleStatusColor(status) {
    switch (status) {
        case 'done':
            return '#09d36e';
        case 'ongoing':
            return '#167af7';
        case 'failed':
            return '#f71616';
        case 'pending':
            return '#f77a16';
        case 'prime':
            return '#6b6b6b';
    }
}


function CreateEditor(isCoop = false, useDoc = true, template = '') {
    return new Editor({
        // content: "",
        extensions: [
            hortzontalRule, Blockquote, GlobalDragHandle.configure({ dragHandleSelector: ".drag-handle" }),
            , TrailingNode, Hyperlink.configure({
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
                document: false
            }),
            TextStyle, CharacterCount, Superscript, Subscript,
            Color.configure({ types: ["textStyle"], }),
            TextAlign.configure({ types: ['heading', 'paragraph'], }),
            Focus.configure({ className: 'focus', mode: 'shallowest' }),
            Link.configure({ autolink: true, linkOnPaste: true, openOnClick: false }),
            Heading.configure({ levels: [1, 2, 3, 4] }),
            TaskList, TaskItem, EchartsBar, EchartsPie,MindMapNode,
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
            Placeholder.configure({
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading') { return '任务标题' } return '编辑任务详情'
                }
            }),
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
            Indent, Document.extend({
                content: 'heading block*',
            }),
            AudioNode, EchartsLine, AINode, AIPlanNode
        ],
        autofocus: 'end',
        editable: true,
        injectCSS: true,
        content: template,
    })
}

function timestampToYyyyMmDd(timestamp) {
    const date = new Date(Number(timestamp));
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function InitEditor() {
    store.CreateEditor = CreateEditor
    editors.value.forEach(i => {
        i.editor.destroy()
    })
    editors.value = []
    data.value.timeline.forEach(i => {
        i.task.forEach(j => {
            editors.value.push({
                id: j.id,
                editor: CreateEditor(false, true, j.content),
            })
            editors.value[editors.value.length - 1].editor.on('selectionUpdate', () => {
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
            editors.value[editors.value.length - 1].editor.on('update', () => {
                store.isSave = false
                CanUndo.value = editor.can().undo()
                CanRedo.value = editor.can().redo()
            })
        })
    })
    editor = editors.value[0].editor
    store.editor = editor
    nowId.value = editors.value[0].id
}
InitEditor()

function ChangeTask(id) {
    editors.value.forEach(i => {
        if (i.id === id) {
            editor = i.editor
            store.editor = editor
            nowId.value = id
        }
    })
}


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

}

function GetDocTitle(str) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    console.log(doc.querySelector('body').firstElementChild.textContent);
    return doc.querySelector('body').firstElementChild.textContent
}


const EditorActive = () => {
    editor.chain().focus().run();
};

function shouldShowMenu({ editor, view, state, oldState, from, to }) {
    if (from - to == 0) return false
    const activeStates = [
        'timeline', 'ai','ai-plan', 'image', 'paper',
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

const CharacterCount2 = ref(0)
const CharacterWordCount = ref(0)


window.addEventListener('beforeunload', function (e) {
    if (!store.isSave) {
        e.returnValue = '当前文件还没有保存，确定要离开吗';
    }
});

function getJSON() {
    for (let i = 0; i < editors.value.length; i++) {
        for (let j = 0; j < data.value.timeline.length; j++) {
            for (let k = 0; k < data.value.timeline[j].task.length; k++) {
                if (editors.value[i].id === data.value.timeline[j].task[k].id) {
                    data.value.timeline[j].task[k].content = editors.value[i].editor.getHTML()
                }
            }
        }
    }
    return data.value
}

function SaveLocal() {
    let html = editor.getHTML()
    let blob = new Blob([JSON.stringify(getJSON())], { type: "text/plain;charset=utf-8" });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = ((store.DocTitle === '文档' || store.DocTitle === '') ? (GetDocTitle(html) || '文档') : store.DocTitle) + '.smdt';
    store.DocTitle = (store.DocTitle === '文档' || store.DocTitle === '') ? (GetDocTitle(html) || '文档') : store.DocTitle
    store.isSave = true
    link.click();
}

function SaveServer() {

    if (fileId) {
        request({
            url: '/api/task/manage/',
            method: 'put',
            body: {
                task_id: fileId,
                content: getJSON()
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
        ElMessageBox.prompt('请输入文件名', '保存文件', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /\S/,
            inputErrorMessage: '文件名不能为空',
        }).then(({ value }) => {
            request({
                url: '/api/task/manage/',
                method: 'post',
                body: {
                    content: getJSON(),
                    title: value
                }
            }).then((response) => {
                ElNotification({
                    title: '成功',
                    message: '保存成功',
                    type: 'success',
                })
                store.isSave = true
                store.DocTitle = value
                fileId = response.data.task_id
            })
        }).catch(() => {
            console.log('取消');
        });
    }
}

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
            fileLoading.value = false
        });
    } else {
        document.getElementById('OpenLocal2').click();
    }
}

function OpenLocal2(e) {
    if (!e.target.files.length) {
        fileLoading.value = false
        return
    }
    try {
        fileLoading.value = true
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = function (e) {
            try {
                console.log(file);
                let html = JSON.parse(e.target.result)
                data.value = html
                InitEditor()
                store.DocTitle = file.name.split('.').slice(0, -1).join('.')
                store.isSave = true
                CanUndo.value = editor.can().undo()
                CanRedo.value = editor.can().redo()
                ElNotification({
                    title: '成功',
                    message: '打开文件成功',
                    type: 'success',
                })
                fileLoading.value = false
                fileId = null
            } catch (error) {
                ElNotification({
                    title: '错误',
                    message: '打开文件失败：可能不是所需格式',
                    type: 'error',
                })
                fileLoading.value = false
            }
        }
        reader.readAsText(file);
        fileLoading.value = false
    } catch (error) {
        ElNotification({
            title: '错误',
            message: '打开文件失败：可能不是所需格式',
            type: 'error',
        })
        fileLoading.value = false
    }
}

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

function InsertAINode({ type, url, args, needSelectText, needTextBefore, needImage, needAudio }) {
    let text = ''
    if(needImage && !url){
        ElMessage.error('请先单击选中一张图片')
        return
    }
    if(needAudio && !url){
        ElMessage.error('请先单击选中一段音频')
        return
    }
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

const drag = ref(false)
function onDragStart() {
    drag.value = true
}
function onDragEnd() {
    console.log('onEnd')
    nextTick(() => {
        drag.value = false
    })
}


let AIDescCtrl = new AbortController()
const AIDescLoading = ref(false)
function AIDesc() {
    if (AIDescLoading.value) {
        AIDescCtrl.abort()
        AIDescLoading.value = false
        return
    }
    AIDescCtrl = new AbortController()
    AIDescLoading.value = true
    taskDesc.value = ''
    let text = editor.getText()
    if (!text) {
        ElNotification({
            title: '错误',
            message: '请先输入任务详情',
            type: 'error',
        })
        AIDescLoading.value = false
        return
    }
    request({
        url: '/api/ai/mysystem/',
        method: 'POST',
        isEventSource: true,
        AbortController: AIDescCtrl,
        signal: AIDescCtrl.signal,
        body: {
            system:
                `- 你是一个专门用于总结任务摘要的AI
- 用户将提供一件任务的详细过程或者方案，你要总结这个任务并生成这个任务的摘要
- 输出**必须简洁明了**，**不能超过100字**
- 请勿输出任何多余的内容，你的输出只能是这个任务的摘要
- 以纯文本形式输出，不允许使用markdown语法
- 如果提供的文本不符合一般的任务格式无法生成任务简介，请直接输出 无法生成简介`,
            content: text
        },
        headers: {
            'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
            'content-type': 'application/json',
        },
        onmessage: (ev) => {
            if (ev.data != '[DONE]') {
                taskDesc.value += Base64.decode(ev.data)
            }
        },
        onerror: (ev) => {
            AIDescCtrl.abort()
            AIDescLoading.value = false
            throw ev
        },
        onclose: () => {
            AIDescLoading.value = false
        }
    })
}

eventBus.on('ai-plan', (e) => {
    console.log(e);
    
    if(e.type == 'insert-today'){
        e.data.forEach(i => {
            addTask(nowId.value, undefined, i.title, i.status, i.desc, i.content)
        })
    } else if(e.type=='insert-next'){
        e.data.forEach(i => {            
            let dayid = addDay(getDayByTaskId(nowId.value).id, i.task[0].title, 'prime', i.task[0].desc, i.task[0].content)
            for(let j=1;j<i.task.length;j++){
                addTask(dayid, undefined, i.task[j].title, i.task[j].status, i.task[j].desc, i.task[j].content)
            }
        })
    }
})
</script>
<style lang="scss">
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
    position: absolute;
}

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

    display: flex;
    flex-direction: column;
    min-width: 500px;
    width: 60vw;
    max-width: 60vw;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    height: 100%;
}

.editor-space {
    flex: 1;
    cursor: text;
    min-height: 20vh;
}

.main {
    flex: 1;
    overflow: auto;
    overflow-y: auto;
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



.dialog-footer {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
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
</style>

<style lang="scss" scoped>
.timeline-main {
    // width: 100%;
    // box-shadow: 0px 0px 20px 0px #ececec;
    // margin: 30px 20px;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 40px);
}

.task-done {
    background-color: #f0fff5;

    &::before {
        background-image: linear-gradient(to top, #1cf086, #16f7a1);
    }

    &:hover::before {
        box-shadow: 0 0 10px 0 #1cf086;
    }
}

.task-ongoing {
    background-color: #f0f5ff;

    &::before {
        background-image: linear-gradient(to top, #1c86f0, #167af7);
    }

    &:hover::before {
        box-shadow: 0 0 10px 0 #1c86f0;
    }
}

.task-failed {
    background-color: #fff0f0;

    &::before {
        background-image: linear-gradient(to top, #f01c1c, #f71616);
    }

    &:hover::before {
        box-shadow: 0 0 10px 0 #f01c1c;
    }
}

.task-pending {
    background-color: #fff5f0;

    &::before {
        background-image: linear-gradient(to top, #f0a01c, #f77a16);
    }

    &:hover::before {
        box-shadow: 0 0 10px 0 #f0a01c;
    }
}

.task-prime {
    background-color: #f5f5f5;

    &::before {
        background-image: linear-gradient(to top, #6b6b6b, #6b6b6b);
    }

    &:hover::before {
        box-shadow: 0 0 10px 0 #6b6b6b;
    }
}

.task-select-done {
    box-shadow: 0px 0px 0px 3px rgba(8, 187, 83, 0.6);
    // box-shadow: 0px 0px 8px 0px #1cf086;
}

.task-select-ongoing {
    // box-shadow: 0px 0px 8px 0px #1c86f0;
    box-shadow: 0px 0px 0px 3px rgba(8, 56, 187, 0.6);
}

.task-select-failed {
    // box-shadow: 0px 0px 8px 0px #f01c1c;
    box-shadow: 0px 0px 0px 3px rgba(241, 28, 28, 0.6);
}

.task-select-pending {
    // box-shadow: 0px 0px 8px 0px #f0a01c;
    box-shadow: 0px 0px 0px 3px rgba(240, 160, 28, 0.6);
}

.task-select-prime {
    // box-shadow: 0px 0px 8px 0px #6b6b6b;
    box-shadow: 0px 0px 0px 3px rgba(107, 107, 107, 0.6);
}

.task-line-done {
    &::before {
        border: solid 3px #09d36e;
    }
}

.task-line-ongoing {
    &::before {
        border: solid 3px #1c86f0;
    }
}

.task-line-failed {
    &::before {
        border: solid 3px #f01c1c;
    }
}

.task-line-pending {
    &::before {
        border: solid 3px #f0a01c;
    }
}

.task-line-prime {
    &::before {
        border: solid 3px #6b6b6b;
    }
}

.preview-prime {
    // background-color: #919191;
    border: #919191 solid 1px;
    color: #919191;

    &:hover {
        background-color: #6b6b6b;
        color: #fff;
    }
}

.preview-done {
    // background-color: #21d67c;
    // background-color: #09d36e;
    border: #09d36e solid 1px;
    color: #09d36e;

    &:hover {
        background-color: #09d36e;
        color: #fff;
    }

}

.preview-ongoing {
    // background-color: #1c86f0;
    // background-color: #167af7;
    border: #167af7 solid 1px;
    color: #167af7;

    &:hover {
        background-color: #167af7;
        color: #fff;
    }
}

.preview-failed {
    // background-color: #f01c1c;
    // background-color: #f71616;
    border: #f71616 solid 1px;
    color: #f71616;

    &:hover {
        background-color: #f71616;
        color: #fff;
    }
}

.preview-pending {
    // background-color: #f0a01c;
    // background-color: #f77a16;
    border: #f77a16 solid 1px;
    color: #f77a16;

    &:hover {
        background-color: #f77a16;
        color: #fff;
    }
}

.timeline-top {
    margin: 15px 30px;
    box-shadow: 0px 0px 20px 0px #dfdfdf;

    .tools2 {
        display: flex;
        margin: 0px 40px;
        margin-top: 10px;
        margin-bottom: 8px;

        .top-button2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 12px;
            align-items: center;
            z-index: 100;
            position: relative;
            cursor: pointer;
            color: #505050;
            width: 25px;
            height: 25px;
            margin: 0px 5px;
            white-space: nowrap;
            transition: all 0.1s;

            /* padding: 0px 8px; */
            &:hover {
                background-color: #ececec;
            }

            .icon {
                margin-right: 4px;
            }
        }

        .top-button2 svg {
            width: 18px;
            height: 18px;
            color: #858585;
        }

    }
}

.timeline {
    display: flex;
    overflow-y: scroll;
    justify-content: flex-start;
    padding: 20px;
    max-height: 40vh;
    min-height: 10vh;
    scroll-behavior: smooth;


    .task {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        min-width: 200px;
        width: 30%;
        position: relative;

        .day-task {
            padding: 10px;
            padding-left: 14px;
            margin-bottom: 20px;
            position: relative;
            cursor: pointer;
            transition: all 0.3s;


            &::before {
                content: '';
                width: 2px;
                height: 100%;
                // background-image: linear-gradient(to top, #1cf086, #16f7a1);
                display: inline-block;
                position: absolute;
                left: 0px;
                top: 0px;
                transition: all 0.3s;
            }

            &:hover::before {
                // box-shadow: 0 0 10px 0 #1cf086;
            }
        }

        &:hover .task-line::before {
            // box-shadow: 0 0 10px 0 #1cf086;
        }

        .task-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            // align-items: center;

            width: 100%;

            .icon {
                cursor: pointer;
                color: #8d8d8d7e;
                transition: all 0.3s;
                width: 16px;
                height: 16px;

                // flex-shrink: 0;
                &:hover {
                    color: #666666a4;
                }
            }

            span {
                flex: 1 1 auto;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 10px;
            }
        }

        .task-time {
            font-size: 12px;
            color: #999;
            margin-bottom: 19px;
            background-color: #f5f5f5;
            padding: 5px 10px;
            position: relative;
        }

        .task-status {
            font-size: 12px;
            color: #999;
            margin-bottom: 5px;
        }

        .task-desc {
            font-size: 14px;
            color: #666;
            margin-bottom: 10px;
            display: -webkit-box;
            /* 设置为WebKit内核的弹性盒子模型 */
            -webkit-box-orient: vertical;
            /* 垂直排列 */
            -webkit-line-clamp: 4;
            /* 限制显示两行 */
            overflow: hidden;
            /* 隐藏超出范围的内容 */
            text-overflow: ellipsis;
            /* 使用省略号 */
        }

        .task-add {
            height: 16px;
            background-color: #dbdbdb66;
            cursor: pointer;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s;
            position: absolute;
            right: 0;
            left: 0;
            bottom: -18px;
            transition: all 0.2s;
            opacity: 0;

            &:hover {
                opacity: 1;
                background-color: #a7a7a766;
            }
        }

        .task-add-top {
            top: -18px;
            bottom: auto;
        }
    }

    .task-line {
        height: 2px;
        background-color: transparent;
        position: relative;
        border-top: dashed 2px #cecece;
        margin-bottom: 20px;
        margin-left: 23px;
    }

    .task-line::before {
        content: '';
        width: 15px;
        height: 15px;
        background-color: #ffffff;
        // border: solid 3px #09d36e;
        border-radius: 50%;
        position: absolute;
        top: -11px;
        left: -32px;
        transition: all 0.3s;

    }


    .task-line-add {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #d6d6d6;
        cursor: pointer;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -11px;
        margin-left: -8px;
        transition: all 0.3s;
        flex-shrink: 0;
    }

    .task-line-add2 {
        width: 16px;
        background-color: #d6d6d6;
        cursor: pointer;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;
        flex-shrink: 0;
        position: absolute;
        right: -18px;
        top: 0;
        bottom: 0;
        opacity: 0;
        transition: all 0.2s;

        &:hover {
            opacity: 1;
        }
    }


    .task-line-add:hover {
        background-color: #a7a7a7;
    }

    // 滚动条样式
    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: rgba(228, 228, 228, 0.6);
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(139, 139, 139, 0.6);
        border-radius: 25px;
    }
}

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-track {
    background-color: rgba(228, 228, 228, 0.6);
}

::-webkit-scrollbar-thumb {
    background: rgba(139, 139, 139, 0.6);
    border-radius: 25px;
}

.top2{
    background-color: #fff;
    margin-top: -1px;
    margin-bottom: 10px;
}

.preview {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    margin: 0 20px;
    // border-bottom: 1px solid #eaeaea;
    margin-bottom: -20px;
    margin-top: -10px;

    .preview-day {
        display: flex;
        flex-direction: column;
        margin-right: 24px;
        position: relative;
        margin-bottom: 10px;

        // color: #fff;        
        .task {
            // background-color: #f5f5f5;
            padding: 5px 10px;
            font-size: 14px;
            max-width: 200px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            border-radius: 999px;
            cursor: pointer;
            transition: all 0.2s;
            margin-bottom: 4px;

            &:last-child {
                margin-right: 0;
                margin-bottom: 0;
            }
        }

        &:last-child {
            margin-right: 0;
            margin-bottom: 0;
        }

        &::after {
            content: '';
            width: 0px;
            height: 0px;
            position: absolute;
            top: 10px;
            right: -18px;
            border-left: #6b6b6b 5px solid;
            border-top: transparent 5px solid;
            border-bottom: transparent 5px solid;
            border-right: transparent 5px solid;
        }

        &:last-child::after {
            display: none;
        }


    }
}

.line {
    width: 90%;
    margin: 5px auto;
    height: 1px;
    background-image: linear-gradient(to right, #ccc 0%, #ccc 50%, transparent 50%);
    background-size: 8px 1px;
    background-repeat: repeat-x;
}

.timeline-edit {
    width: 100%;
    flex: 1;
    display: flex;
    position: relative;
    overflow: hidden;

    .left {
        width: 25%;
        min-width: 100px;
        max-width: 300px;
        border-right: #666 1px dashed;
        padding: 10px 20px;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;

        .item {
            margin-bottom: 20px;

            .textarea-plus {
                min-width: calc(100% - 20px);
                max-width: calc(100% - 20px);
                min-height: 60px;
                // margin-top: 10px;
                padding: 10px;
                border: 1px solid #af15c4;
                border-radius: 5px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                transition: box-shadow 0.3s;
            }

            .textarea-plus:focus {
                box-shadow: 0 0 3px 0px #af15c4;
                color: #af15c4
            }

            .button-plus {
                display: inline-block;
                height: 24px;
                background: #ffffff;
                border-radius: 4px;
                padding: 0 10px;
                text-align: center;
                line-height: 24px;
                cursor: pointer;
                margin-right: 10px;
                font-size: 12px;
                color: #b600e4;
                transition: all 0.3s;
                border: #af15c4 solid 1px;
            }

            .button-plus:hover {
                background: #af15c4;
                color: #fff;
                border: #af15c4 solid 1px;
            }
        }

        .title {
            font-size: 12px;
            margin-bottom: 5px;
            color: #666;
        }

        .input {
            position: relative;

            input {
                width: 100%;
                border: none;
                outline: none;
                position: relative;
            }

            &::after {
                position: absolute;
                content: '';
                left: 0px;
                right: 0px;
                height: 1px;
                bottom: -6px;
                background-image: linear-gradient(to right, #b114e0 0%, rgb(65, 31, 187) 100%);
            }
        }
    }

    .right {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: hidden;
        height: 100%;
    }
}
</style>