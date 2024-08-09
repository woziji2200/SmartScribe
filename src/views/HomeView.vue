<template>
    <div class="home-main">

        <div class="home-main-left">
            <div class="home-main-left-title">
                <img style="" src="../assets/logo.png" alt="" srcset="">
                <div>智慧笔匠</div>
            </div>
            <span @click="cardSelected = 'home'" :class="cardSelected == 'home' ? 'left-span-select' : ''">
                <font-awesome-icon style="margin-right: 10px;" icon="file-alt" />
                我的文件
            </span>

            <span @click="cardSelected = 'profile'" :class="cardSelected == 'profile' ? 'left-span-select' : ''">
                <font-awesome-icon style="margin-right: 10px;" icon="user" />
                个人中心
            </span>

            <span @click="cardSelected = 'about'" :class="cardSelected == 'about' ? 'left-span-select' : ''">
                <font-awesome-icon style="margin-right: 10px;" icon="file-import" />
                关于我们
            </span>
        </div>
        <div v-if="cardSelected == 'home'" key="home" class="home-main-right">

            <!-- <div style="display: flex;">
                <span class="open" @click="LeftClick('open')">打开本地文件</span>
                <span class="open" style="width: 120px;margin-left: 20px;" @click="linkto('https://home.editor.funny233.xyz/')">访问完整版页面</span>
            </div> -->
            <div class="home-top-task">
                <div style="">
                    <div class="home-main-right-title2">新建文档</div>
                    <div class="home-main-right-content-2">
                        <a class="link" @click="openMode('?template=doc')">
                            <div class="link-image">
                                <svg t="1716992970392" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="12401">
                                    <path
                                        d="M967.111111 281.6V910.222222c0 62.862222-50.915556 113.777778-113.777778 113.777778H170.666667c-62.862222 0-113.777778-50.915556-113.777778-113.777778V113.777778c0-62.862222 50.915556-113.777778 113.777778-113.777778h514.844444L967.111111 281.6z"
                                        fill="#6D9FE5" p-id="12402"></path>
                                    <path
                                        d="M685.511111 167.822222V0L967.111111 281.6H799.288889c-62.862222 0-113.777778-50.915556-113.777778-113.777778"
                                        fill="#4B80CB" p-id="12403"></path>
                                    <path
                                        d="M344.177778 485.575111h312.888889V426.666667h-312.888889zM471.153778 770.019556h58.908444v-284.444445h-58.908444z"
                                        fill="#FFFFFF" p-id="12404"></path>
                                </svg>
                            </div>
                            <div class="link-title">示例-文档</div>
                        </a>
                        <a class="link" @click="openMode('?template=graph')">
                            <div class="link-image">
                                <svg t="1716992993022" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="13569">
                                    <path
                                        d="M778.069333 161.621333L582.314667 142.677333a17.066667 17.066667 0 0 0-13.312 4.437334 17.066667 17.066667 0 0 0-5.461334 13.141333l9.557334 254.976a17.066667 17.066667 0 0 0 10.922666 15.36L707.072 477.866667a19.285333 19.285333 0 0 0 6.144 1.024 16.042667 16.042667 0 0 0 6.314667-1.194667l72.533333-28.501333a17.066667 17.066667 0 0 0 10.752-14.165334l21.162667-217.770666a51.2 51.2 0 0 0-45.909334-55.637334z"
                                        fill="#FFC670" p-id="13570"></path>
                                    <path
                                        d="M563.541333 796.586667L783.291733 576.853333l64.324267 64.324267-219.767467 219.7504z"
                                        fill="#FFDEAD" p-id="13571"></path>
                                    <path
                                        d="M847.650133 641.024l-64.341333-64.324267 20.8896-20.872533a39.424 39.424 0 0 1 55.7568 0l8.567467 8.567467a39.424 39.424 0 0 1 0 55.7568l-20.872534 20.872533z"
                                        fill="#F6716F" p-id="13572"></path>
                                    <path
                                        d="M627.882667 861.013333l-96.597334 32.085334 32.085334-96.426667h0.170666l64.341334 64.341333z"
                                        fill="#FFDEAD" p-id="13573"></path>
                                    <path
                                        d="M690.517333 261.632h-102.4a5.632 5.632 0 0 1-5.632-5.632V153.6a39.765333 39.765333 0 0 0-39.936-39.765333h-307.2a51.2 51.2 0 0 0-51.2 51.2v693.930666a51.2 51.2 0 0 0 51.2 51.2h167.594667a17.066667 17.066667 0 0 0 16.042667-11.605333l29.013333-86.528L725.333333 534.528a17.066667 17.066667 0 0 0 4.949334-12.117333V301.568a39.765333 39.765333 0 0 0-39.765334-39.936z"
                                        fill="#FFF6E6" p-id="13574"></path>
                                    <path
                                        d="M380.928 241.322667H201.386667v261.632h179.541333a39.765333 39.765333 0 0 0 39.765333-39.765334V281.088a39.765333 39.765333 0 0 0-39.765333-39.765333zM705.024 283.989333a22.016 22.016 0 0 0-14.506667-5.290666h-102.4A22.698667 22.698667 0 0 1 565.418667 256V153.6a22.528 22.528 0 0 0-6.656-16.042667z"
                                        fill="#FFDEAD" p-id="13575"></path>
                                    <path d="M280.917333 545.28l90.965334 0 0 90.965333-90.965334 0 0-90.965333Z"
                                        fill="#79DEB4" p-id="13576"></path>
                                    <path d="M144.384 226.645333l227.498667 0 0 227.498667-227.498667 0 0-227.498667Z"
                                        fill="#79DEB4" p-id="13577"></path>
                                    <path
                                        d="M402.944 876.032h-167.594667a17.066667 17.066667 0 0 1-17.066666-17.066667V471.210667h130.901333a39.765333 39.765333 0 0 0 39.765333-39.765334V249.344a39.765333 39.765333 0 0 0-39.765333-39.765333h-130.901333V165.034667a17.066667 17.066667 0 0 1 17.066666-17.066667h307.2a5.802667 5.802667 0 0 1 5.802667 5.632v102.4a39.765333 39.765333 0 0 0 39.765333 39.765333h102.4a5.632 5.632 0 0 1 5.632 5.802667v221.866667a17.066667 17.066667 0 0 0 34.133334 0v-221.866667A39.594667 39.594667 0 0 0 716.8 273.066667l-90.624-90.624 148.309333 14.336a17.066667 17.066667 0 0 1 15.189334 18.773333l-20.821334 216.405333a17.066667 17.066667 0 0 0 15.36 18.773334 17.066667 17.066667 0 0 0 18.602667-15.36l21.162667-217.770667a51.2 51.2 0 0 0-45.909334-55.978667L588.458667 143.189333l-17.066667-17.066666a39.594667 39.594667 0 0 0-28.16-11.605334h-307.2a51.2 51.2 0 0 0-51.2 51.2v44.544h-17.066667a39.936 39.936 0 0 0-39.765333 39.765334v181.418666a39.765333 39.765333 0 0 0 39.765333 39.765334h17.066667v387.754666a51.2 51.2 0 0 0 51.2 51.2h167.594667a17.066667 17.066667 0 0 0 0-34.133333z m179.541333-690.688l76.117334 76.288h-70.485334a5.632 5.632 0 0 1-5.632-5.632zM161.450667 431.445333V249.344a5.632 5.632 0 0 1 5.632-5.632h182.101333a5.632 5.632 0 0 1 5.632 5.632v182.101333a5.632 5.632 0 0 1-5.632 5.632H167.082667a5.632 5.632 0 0 1-5.632-5.632z"
                                        fill="#3D3D63" p-id="13578"></path>
                                    <path
                                        d="M290.133333 529.066667a26.112 26.112 0 0 0-26.282666 26.112v72.874666A26.282667 26.282667 0 0 0 290.133333 653.312h72.704a26.112 26.112 0 0 0 26.112-26.112v-72.874667A25.941333 25.941333 0 0 0 362.837333 529.066667z m64.682667 90.965333h-56.832V563.2h56.832zM605.184 625.322667a17.066667 17.066667 0 0 0-17.066667-17.066667h-136.533333a17.066667 17.066667 0 0 0 0 34.133333h136.533333a17.066667 17.066667 0 0 0 17.066667-17.066666zM451.584 539.136a17.066667 17.066667 0 0 0 0 34.133333h56.832a17.066667 17.066667 0 0 0 0-34.133333zM582.485333 397.312a17.066667 17.066667 0 0 0-17.066666-17.066667h-113.834667a17.066667 17.066667 0 0 0 0 34.133334h113.834667a17.066667 17.066667 0 0 0 17.066666-17.066667zM451.584 345.088h56.832a17.066667 17.066667 0 0 0 0-34.133333h-56.832a17.066667 17.066667 0 0 0 0 34.133333zM290.133333 296.96l-51.2 51.2-14.677333-14.677333a17.066667 17.066667 0 0 0-24.064 0 17.066667 17.066667 0 0 0 0 24.234666l26.624 26.624a17.066667 17.066667 0 0 0 12.117333 5.12 17.066667 17.066667 0 0 0 12.117334-5.12l62.805333-62.634666A17.066667 17.066667 0 0 0 290.133333 296.96zM880.128 552.96l-8.704-8.704a56.490667 56.490667 0 0 0-79.872 0L551.424 785.066667a15.018667 15.018667 0 0 0-4.096 6.656L515.072 887.466667a17.066667 17.066667 0 0 0 21.504 21.504l96.597333-31.744a17.066667 17.066667 0 0 0 6.656-4.266667l240.298667-240.128a56.490667 56.490667 0 0 0 0-79.872zM558.250667 866.133333l12.629333-37.888L596.138667 853.333333zM627.882667 836.266667l-40.277334-40.106667 153.6-153.6L781.482667 682.666667z m177.834666-177.322667l-40.277333-40.106667 17.066667-17.066666 40.106666 40.277333z m50.176-51.2l-8.192 8.362667-40.277333-39.253334 8.362667-8.362666a22.357333 22.357333 0 0 1 31.573333 0l8.533333 8.533333a22.357333 22.357333 0 0 1 0 31.573333z"
                                        fill="#3D3D63" p-id="13579"></path>
                                </svg>
                            </div>
                            <div class="link-title">示例-图表</div>
                        </a>
                        <a class="link" @click="openMode('?template=mermaid')">
                            <div class="link-image">
                                <svg t="1716992936124" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="10308">
                                    <path d="M512 512m-414 0a414 414 0 1 0 828 0 414 414 0 1 0-828 0Z" fill="#F0C48A"
                                        p-id="10309"></path>
                                    <path d="M228.2 11.8h567.6v1000.6H228.2z" fill="#D3E6F8" p-id="10310"></path>
                                    <path
                                        d="M512 917.2c-6.4 0-11.8-5.2-11.8-11.8V125c0-6.4 5.2-11.8 11.8-11.8 6.4 0 11.8 5.2 11.8 11.8v780.6c0 6.4-5.4 11.6-11.8 11.6z"
                                        fill="#4C4372" p-id="10311"></path>
                                    <path d="M698.4 512L512 585.6 325.6 512l186.4-73.6z" fill="#FD919E" p-id="10312"></path>
                                    <path d="M642.6 490l-184.2 76.8 53.6 18.8 186.4-73.6z" fill="#E8677D" p-id="10313">
                                    </path>
                                    <path
                                        d="M731.8 15.8h63v996.6h-63zM618 188H406c-34.8 0-63.2-28.4-63.2-63.2 0-34.8 28.4-63.2 63.2-63.2h212c34.8 0 63.2 28.4 63.2 63.2 0 34.8-28.4 63.2-63.2 63.2zM618 836H406c-34.8 0-63.2 28.4-63.2 63.2 0 34.8 28.4 63.2 63.2 63.2h212c34.8 0 63.2-28.4 63.2-63.2 0-34.8-28.4-63.2-63.2-63.2z"
                                        fill="#A4CFF2" p-id="10314"></path>
                                    <path d="M342.8 251.8h338.4V378H342.8zM342.8 646h338.4v126.2H342.8z" fill="#FFFFFF"
                                        p-id="10315"></path>
                                    <path
                                        d="M795.8 1024H228.2c-6.4 0-11.8-5.2-11.8-11.8V11.8c0-6.4 5.2-11.8 11.8-11.8h567.6c6.4 0 11.8 5.2 11.8 11.8v1000.6c0 6.4-5.4 11.6-11.8 11.6zM240 1000.6h544V23.4H240v977.2z"
                                        fill="#4C4372" p-id="10316"></path>
                                    <path
                                        d="M512 597.4c-1.4 0-3-0.2-4.4-0.8l-186.4-73.6c-4.4-1.8-7.4-6-7.4-11s3-9.2 7.4-11l186.4-73.6c2.8-1 5.8-1 8.6 0l186.4 73.6c4.4 1.8 7.4 6 7.4 11s-3 9.2-7.4 11l-186.4 73.6c-1.2 0.4-2.8 0.8-4.2 0.8zM357.6 512l154.4 61 154.4-61-154.4-61-154.4 61z"
                                        fill="#4C4372" p-id="10317"></path>
                                    <path
                                        d="M635.6 188H392c-21 0-37.8-17-37.8-37.8h319.2c0 20.8-16.8 37.8-37.8 37.8zM635.6 962.2H392c-21 0-37.8-17-37.8-37.8h319.2c0 20.8-16.8 37.8-37.8 37.8z"
                                        fill="#7BABF1" p-id="10318"></path>
                                    <path
                                        d="M618 199.8H406c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8h212c41.2 0 74.8 33.6 74.8 74.8S659.4 199.8 618 199.8zM406 73.6c-28.4 0-51.4 23-51.4 51.4s23 51.4 51.4 51.4h212c28.4 0 51.4-23 51.4-51.4S646.4 73.6 618 73.6H406zM618 973.8H406c-41.2 0-74.8-33.6-74.8-74.8 0-41.2 33.6-74.8 74.8-74.8h212c41.2 0 74.8 33.6 74.8 74.8 0.2 41.4-33.4 74.8-74.8 74.8z m-212-126.2c-28.4 0-51.4 23-51.4 51.4s23 51.4 51.4 51.4h212c28.4 0 51.4-23 51.4-51.4s-23-51.4-51.4-51.4H406z"
                                        fill="#4C4372" p-id="10319"></path>
                                    <path d="M342.8 733.8h338.4v38.4H342.8zM342.8 337h338.4v38.4H342.8z" fill="#D3E6F8"
                                        p-id="10320"></path>
                                    <path
                                        d="M681.2 784H342.8c-6.4 0-11.8-5.2-11.8-11.8V646c0-6.4 5.2-11.8 11.8-11.8h338.4c6.4 0 11.8 5.2 11.8 11.8v126.2c0 6.6-5.4 11.8-11.8 11.8z m-326.6-23.4h315v-102.8H354.6v102.8zM681.2 389.6H342.8c-6.4 0-11.8-5.2-11.8-11.8v-126.2c0-6.4 5.2-11.8 11.8-11.8h338.4c6.4 0 11.8 5.2 11.8 11.8V378c0 6.4-5.4 11.6-11.8 11.6z m-326.6-23.4h315v-102.8H354.6v102.8z"
                                        fill="#4C4372" p-id="10321"></path>
                                </svg>
                            </div>
                            <div class="link-title">示例-流程图</div>
                        </a>
                        <a class="link" @click="openTimeline('?template=mermaid')">
                            <div class="link-image">
                                <svg t="1722600857596" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="11174" width="200" height="200">
                                    <path
                                        d="M307.2 170.496h614.4v102.4H307.2v-102.4z m0 171.008h341.504v102.4H307.2v-102.4z m0 238.592h614.4v102.4H307.2v-102.4z m0 171.008h341.504v102.4H307.2v-102.4z"
                                        fill="#1890FF" p-id="11175"></path>
                                    <path d="M136.704 119.808H204.8v784.896H136.704z" fill="#24D5E6" p-id="11176"></path>
                                    <path d="M102.4 648.704h136.704v136.704H102.4zM102.4 239.104h136.704v136.704H102.4z"
                                        fill="#FEC549" p-id="11177"></path>
                                </svg>
                            </div>
                            <div class="link-title">任务时间轴</div>
                        </a>
                    </div>
                    <div class="home-main-right-title2" style="margin-top: 50px;">打开本地文件</div>
                    <div class="home-main-right-content-2">
                        <a class="link" @click="openMode('?template=doc')">
                            <div class="link-image">
                                <svg t="1716992970392" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="12401">
                                    <path
                                        d="M967.111111 281.6V910.222222c0 62.862222-50.915556 113.777778-113.777778 113.777778H170.666667c-62.862222 0-113.777778-50.915556-113.777778-113.777778V113.777778c0-62.862222 50.915556-113.777778 113.777778-113.777778h514.844444L967.111111 281.6z"
                                        fill="#6D9FE5" p-id="12402"></path>
                                    <path
                                        d="M685.511111 167.822222V0L967.111111 281.6H799.288889c-62.862222 0-113.777778-50.915556-113.777778-113.777778"
                                        fill="#4B80CB" p-id="12403"></path>
                                    <path
                                        d="M344.177778 485.575111h312.888889V426.666667h-312.888889zM471.153778 770.019556h58.908444v-284.444445h-58.908444z"
                                        fill="#FFFFFF" p-id="12404"></path>
                                </svg>
                            </div>
                            <div class="link-title">打开本地文档</div>
                        </a>

                        <a class="link" @click="openMode('?template=doc')">
                            <div class="link-image">
                                <svg t="1722600857596" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="11174" width="200" height="200">
                                    <path
                                        d="M307.2 170.496h614.4v102.4H307.2v-102.4z m0 171.008h341.504v102.4H307.2v-102.4z m0 238.592h614.4v102.4H307.2v-102.4z m0 171.008h341.504v102.4H307.2v-102.4z"
                                        fill="#1890FF" p-id="11175"></path>
                                    <path d="M136.704 119.808H204.8v784.896H136.704z" fill="#24D5E6" p-id="11176"></path>
                                    <path d="M102.4 648.704h136.704v136.704H102.4zM102.4 239.104h136.704v136.704H102.4z"
                                        fill="#FEC549" p-id="11177"></path>
                                </svg>
                            </div>
                            <div class="link-title">任务时间轴</div>
                        </a>
                    </div>
                </div>
                <div style="width: 30%;">
                    <div class="home-main-right-title2">最近的任务</div>
                    <div style="margin-top: 20px;" class="home-main-right-content-2 recent-task">

                    </div>
                </div>

            </div>




            <div class="home-main-right-title2" style="margin-top: 50px;">我的文件</div>
            <div v-loading="isLoadingFiles" class="file">
                <div class="nologin" v-if="!store.UserInfo.name">
                    <span @click="store.isLogin = true">请登录后查看</span>
                </div>

                <div class="home-main-right-file">

                    <div class="home-main-right-file-1"
                        style="margin-top: 20px; color: #666;font-size: 16px;font-weight: bold">
                        <div>文件名</div>
                        <div>最后修改时间</div>
                        <div>操作</div>
                    </div>
                    <div v-for="(i, index) in filesShow.files" class="home-main-right-file-1">
                        <div class="file-name" @click="openFile(i.id)">{{ i.name }}</div>
                        <div>{{ formatDate(i.time) }}</div>
                        <div>
                            <button @click="openFile(i.id)">打开</button>
                            <button
                                @click="renameDialogVisible = true; renameId = i.id; renameName = i.name">重命名</button>
                            <el-popover style="overflow-y: hidden" trigger="click" :visible="i.visible" placement="top">
                                <p style="margin-bottom: 10px;">确认删除吗</p>
                                <div style="text-align: right; margin: 0">
                                    <el-button size="small" @click="i.visible = false">取消</el-button>
                                    <el-button size="small" type="primary" @click="deleteFile(i.id); i.visible = false">
                                        删除
                                    </el-button>
                                </div>
                                <template #reference>
                                    <button @click="i.visible = true">删除</button>
                                </template>
                            </el-popover>
                        </div>
                    </div>
                    <div v-if="files.files.length == 0"
                        style="display: flex; justify-content: center; color: #999; margin: 20px;">
                        <span>没有文件</span>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; margin-bottom: 20px;">
                    <el-pagination layout="prev, pager, next" :total="files.files.length" :page-size="filesPageSize"
                        v-model:current-page="filesPage" />
                </div>
            </div>

            <div class="home-main-right-title2">我的任务项</div>
            <div v-loading="isLoadingTasks" class="file">
                <div class="nologin" v-if="!store.UserInfo.name">
                    <span @click="store.isLogin = true">请登录后查看</span>
                </div>

                <div class="home-main-right-file">

                    <div class="home-main-right-file-1"
                        style="margin-top: 20px; color: #666;font-size: 16px;font-weight: bold">
                        <div>文件名</div>
                        <div>最后修改时间</div>
                        <div>操作</div>
                    </div>
                    <div v-for="(i, index) in tasksShow.tasks" class="home-main-right-file-1">
                        <div class="file-name" @click="openTask(i.task_id)">{{ i.title }}</div>
                        <div>{{ formatDate(i.updated_at) }}</div>
                        <div>
                            <button @click="openTask(i.task_id)">打开</button>
                            <button
                                @click="renameDialogVisible = true; renameMode = 'task'; renameId = i.task_id; renameName = i.title">重命名</button>
                            <el-popover style="overflow-y: hidden" trigger="click" :visible="i.visible" placement="top">
                                <p style="margin-bottom: 10px;">确认删除吗</p>
                                <div style="text-align: right; margin: 0">
                                    <el-button size="small" @click="i.visible = false">取消</el-button>
                                    <el-button size="small" type="primary"
                                        @click="deleteTask(i.task_id); i.visible = false">
                                        删除
                                    </el-button>
                                </div>
                                <template #reference>
                                    <button @click="i.visible = true">删除</button>
                                </template>
                            </el-popover>
                        </div>
                    </div>
                    <div v-if="tasks.tasks.length == 0"
                        style="display: flex; justify-content: center; color: #999; margin: 20px;">
                        <span>没有文件</span>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; margin-bottom: 20px;">
                    <el-pagination layout="prev, pager, next" :total="tasks.tasks.length" :page-size="tasksPageSize"
                        v-model:current-page="tasksPage" />
                </div>
            </div>

            <el-dialog v-model="renameDialogVisible" title="重命名" width="500" align-center>
                <span>请输入新的文件名：</span>
                <el-input style="margin-top: 10px" v-model="renameName" placeholder="请输入新的文件名"></el-input>
                <template #footer>
                    <div class="dialog-footer">
                        <el-button @click="renameDialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="rename()">确认</el-button>
                    </div>
                </template>
            </el-dialog>


            <el-dialog v-model="showEditorMode" title="选择编辑模式" width="60%" align-center>
                <div class="mode">
                    <div class="mode-1" @click="OpenTr()">
                        <img src="./../assets/tr.png" alt="" srcset="">
                        <div class="mode-name">传统模式</div>
                        <div class="mode-des">传统编辑器形态，操作简单易上手，右侧AI助手随时待命</div>
                    </div>
                    <div class="mode-1" @click="OpenAi()">
                        <img src="./../assets/ai.png" alt="" srcset="">
                        <div class="mode-name">AI模式</div>
                        <div class="mode-des">创新AI编辑器形态，简洁明了，AI助手嵌入编辑区即刻使用</div>
                    </div>
                </div>
                <el-checkbox style="margin-left: 40px;" v-model="RemMode" label="记住我的选择" size="large" />
            </el-dialog>


            <transition>
                <ChangePwd v-if="showChangePwd" @close="showChangePwd = false"></ChangePwd>
            </transition>



        </div>


        <div v-if="cardSelected == 'profile'" key="profile" class="home-main-right">
 

            <div class="home-main-right-title2">个人中心</div>
            <div class="profile">
                <div class="nologin" v-if="!store.UserInfo.name">
                    <span @click="store.isLogin = true">请登录后查看</span>
                </div>
                <div style="height: 150px;" v-if="!store.UserInfo.name"></div>


                <div class="profile-1" v-if="store.UserInfo.name">
                    <div v-show="!isChangeProfile" class="profile-1-1">
                        <font-awesome-icon :icon="'user'" v-if="!store.UserInfo.avatar" />
                        <img v-else :src="baseUrl + store.UserInfo.avatar" alt="" class="avatar">
                    </div>
                    <div v-show="isChangeProfile" class="profile-1-1">
                        <font-awesome-icon :icon="'user'" v-if="!NewAvatar" />
                        <img v-else :src="NewAvatar" alt="" class="avatar">
                    </div>
                    <div class="profile-1-2">
                        <span v-show="!isChangeProfile" class="profile-1-2-name">{{ store.UserInfo.name === '' ? '匿名用户'
                            :
                            (store.UserInfo.name || '登录') }}</span>
                        <!-- <span class="profile-1-2-name">{{ store.UserInfo.name === '' ? '匿名用户' : (store.UserInfo.name || '登录') }}</span> -->
                        <el-input style="min-width: 200px; width: 50%;" v-model="NewName" v-show="isChangeProfile"
                            placeholder="请输入昵称"></el-input>
                        <div v-show="isChangeProfile" style="color: #666; font-size: 12px">
                            *昵称不是登录的用户名哦，修改后只会影响协同编辑时显示的名称，不会影响登录所需的用户名哦</div>
                        <div>
                            <el-button v-show="!isChangeProfile" @click="clearMode">清空模式偏好</el-button>
                            <el-button v-show="!isChangeProfile" @click="ChangeProfile">修改个人信息</el-button>
                            <span></span>
                            <el-button class="button-pwd" v-show="!isChangeProfile"
                                @click="showChangePwd = true">修改密码</el-button>
                        </div>


                        <div style="margin-top: 10px;">
                            <input type="file" id="file1" @change="ChangeAvatar" style="display: none">
                            <el-button v-show="isChangeProfile" @click="UploadAvatar">上传头像</el-button>
                            <el-button v-show="isChangeProfile" @click="Cancle">取消</el-button>
                            <el-button v-show="isChangeProfile" @click="Save">保存</el-button>
                        </div>

                    </div>
                </div>
            </div>


            <div class="home-main-right-title2">关于我们</div>
            <div class="about">
                <div style="margin-top: 20px;">
                    智慧笔匠SmartScribe是一个在线AI编辑平台，支持多人同时编辑文档、流程图等文件。
                </div>
                <div style="margin-top: 5px;">
                    前端 <a href="https://github.com/woziji2200">@woziji2200</a>，
                    后端 <a href="https://github.com/dx2331lxz">@dx2331lxz</a>
                </div>
            </div>

            <el-dialog v-model="renameDialogVisible" title="重命名" width="500" align-center>
                <span>请输入新的文件名：</span>
                <el-input style="margin-top: 10px" v-model="renameName" placeholder="请输入新的文件名"></el-input>
                <template #footer>
                    <div class="dialog-footer">
                        <el-button @click="renameDialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="rename()">确认</el-button>
                    </div>
                </template>
            </el-dialog>


            <el-dialog v-model="showEditorMode" title="选择编辑模式" width="60%" align-center>
                <div class="mode">
                    <div class="mode-1" @click="OpenTr()">
                        <img src="./../assets/tr.png" alt="" srcset="">
                        <div class="mode-name">传统模式</div>
                        <div class="mode-des">传统编辑器形态，操作简单易上手，右侧AI助手随时待命</div>
                    </div>
                    <div class="mode-1" @click="OpenAi()">
                        <img src="./../assets/ai.png" alt="" srcset="">
                        <div class="mode-name">AI模式</div>
                        <div class="mode-des">创新AI编辑器形态，简洁明了，AI助手嵌入编辑区即刻使用</div>
                    </div>
                </div>
                <el-checkbox style="margin-left: 40px;" v-model="RemMode" label="记住我的选择" size="large" />
            </el-dialog>


            <transition>
                <ChangePwd v-if="showChangePwd" @close="showChangePwd = false"></ChangePwd>
            </transition>



        </div>



        <!-- <button @click="test">test</button> -->
    </div>
</template>
<script setup>
import { getCurrentInstance, onActivated, onMounted, reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { request, baseUrl, getUserInfo } from "@/axios";
import { useStore } from "@/store";
import { ElMessage } from "element-plus";
import ChangePwd from "@/components/ChangePwd.vue";

const store = useStore();
const cardSelected = ref('home')
const router = useRouter();
const showChangePwd = ref(false)
const showEditorMode = ref(false)
const pathWillTo = ref('')
const RemMode = ref(false)

let renameDialogVisible = ref(false)
let renameId = ref(0)
let renameName = ref('')
function rename() {
    if (renameMode === 'task') {
        request({
            url: '/api/task/manage/',
            method: 'put',
            body: {
                task_id: renameId.value,
                title: renameName.value
            }
        }).then(res => {
            renameDialogVisible.value = false
            ElMessage.success('重命名成功')
            isLoadingTasks.value = true
            getTasks()
        }).catch(err => {
            renameDialogVisible.value = false
            ElMessage.error('重命名失败')
            console.log(err);
        })
    } else {
        request({
            url: '/api/file/text/',
            method: 'put',
            body: {
                update_type: 'name',
                text_id: renameId.value,
                name: renameName.value
            }
        }).then(res => {
            renameDialogVisible.value = false
            ElMessage.success('重命名成功')
            isLoadingFiles.value = true
            getFiles()
        }).catch(err => {
            renameDialogVisible.value = false
            ElMessage.error('重命名失败')
            console.log(err);
        })
    }
}

function formatDate(date) {
    const targetDate = new Date(date);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const dayBeforeYesterday = new Date(today);
    dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);

    // 格式化日期和时间为 xxxx/xx/xx xx:xx 格式
    const formatDateTime = (date) => {
        return `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    };

    if (targetDate.toDateString() === today.toDateString()) {
        return `今天 ${formatDateTime(targetDate).split(' ')[1]}`;
    } else if (targetDate.toDateString() === yesterday.toDateString()) {
        return `昨天 ${formatDateTime(targetDate).split(' ')[1]}`;
    } else if (targetDate.toDateString() === dayBeforeYesterday.toDateString()) {
        return `前天 ${formatDateTime(targetDate).split(' ')[1]}`;
    } else {
        // 直接返回格式化的日期和时间字符串
        return formatDateTime(targetDate);
    }
}


function LeftClick(type) {
    if (type === 'new') {
        openMode('?template=blank')
        // router.push('/editor?template=blank');
    } else if (type === 'open') {
        // router.push('/editor?template=open');
        openMode('?template=open')
    }
}

let files = reactive({ files: [] })
let filesShow = reactive({ files: [] })
let filesPage = ref(1)
let filesPageSize = ref(5)
let isLoadingFiles = ref(false)

function getFiles() {
    request({
        url: '/api/file/textall',
        method: 'get'
    }).then(res => {
        files.files = res.data.texts
        //按照time排序
        files.files.sort((a, b) => {
            return new Date(b.time) - new Date(a.time)
        })
        filesShow.files = files.files.slice((filesPage.value - 1) * filesPageSize.value, filesPage.value * filesPageSize.value)
        // 如果删这一页的最后一个，就要往前一页跳
        if (filesShow.files.length === 0) {
            filesPage.value--
            filesShow.files = files.files.slice((filesPage.value - 1) * filesPageSize.value, filesPage.value * filesPageSize.value)
        }
        console.log(filesShow.files);
        isLoadingFiles.value = false

    }).catch(err => {
        console.log(err)
        isLoadingFiles.value = false

    })
}

onMounted(() => {
    if (store.UserInfo.name) {
        isLoadingFiles.value = true
        getFiles()
        getTasks()
    }
    // isLoadingFiles.value = true
    // getFiles()
})
watch(filesPage, (val) => {
    filesShow.files = files.files.slice((val - 1) * filesPageSize.value, val * filesPageSize.value)
})
watch(files, (val) => {
    filesShow.files = val.files.slice((filesPage.value - 1) * filesPageSize.value, filesPage.value * filesPageSize.value)
})
watch(() => store.UserInfo, (val) => {
    if (val.name) {
        isLoadingFiles.value = true
        getFiles()
        getTasks()
    } else {
        files.files = []
        tasks.tasks = []
        isLoadingFiles.value = false
    }
})

function deleteFile(id) {
    isLoadingFiles.value = true
    request({
        url: '/api/file/text',
        method: 'delete',
        body: {
            text_id: id
        }
    }).then(res => {
        console.log(res);
        ElMessage.success('删除成功')
        getFiles()
    }).catch(err => {
        ElMessage.error('删除失败')
        isLoadingFiles.value = false
        console.log(err);
    })
}

function openFile(id) {
    openMode(`?template=blank&id=${id}`)
}

function linkto(path) {
    window.open(path)
}

const isChangeProfile = ref(false)
const NewName = ref('')
const NewAvatar = ref('')
function ChangeProfile() {
    isChangeProfile.value = true
    NewName.value = store.UserInfo.name
    if (store.UserInfo.avatar)
        NewAvatar.value = baseUrl + store.UserInfo.avatar
}
function Cancle() {
    isChangeProfile.value = false
}
function Save() {

    Promise.allSettled([

        new Promise((resolve, reject) => {
            if (NewName.value === store.UserInfo.name) {
                console.log(1111);
                resolve()
            } else {
                request({
                    url: '/api/user/name/',
                    method: 'post',
                    body: {
                        name: NewName.value,
                    }
                }).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            }
        }),
        new Promise((res, rej) => {
            if (NewAvatar.value === baseUrl + store.UserInfo.avatar) {
                res()
            } else {
                let formdata = new FormData()
                formdata.append('avatar', file)
                request({
                    url: '/api/user/avatar/',
                    method: 'post',
                    body: formdata
                }).then(res => {
                    res()
                }).catch(err => {
                    rej(err)
                })
            }
        })
    ]).then(res => {
        console.log(res);
        ElMessage.success('修改成功')
        getUserInfo()
        isChangeProfile.value = false
    }).catch(err => {
        console.log(err);
        ElMessage.error('修改失败')
    })
}
let file = null
function ChangeAvatar() {
    //先建立blob，让用户预览，点击保存以后统一修改
    file = document.getElementById('file1').files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function (e) {
        NewAvatar.value = e.target.result
        // 创建临时url

    }

}
function UploadAvatar() {
    document.getElementById('file1').click()
}

function openMode(path) {
    pathWillTo.value = path
    let mode = localStorage.getItem('mode')
    if (mode == 'tr') {
        OpenTr()
    } else if (mode == 'ai') {
        OpenAi()
    } else {
        showEditorMode.value = true
    }
}

function openTimeline(path) {
    router.push('/timeline')
}

function OpenTr() {
    if (RemMode.value) {
        localStorage.setItem('mode', 'tr')
    }
    showEditorMode.value = false
    router.push('/editor' + pathWillTo.value)
}

function OpenAi() {
    if (RemMode.value) {
        localStorage.setItem('mode', 'ai')
    }
    showEditorMode.value = false
    router.push('/editorai' + pathWillTo.value)
}
function clearMode() {
    localStorage.removeItem('mode')
    ElMessage.success('清空成功')
}


let renameMode = ''
const tasks = reactive({ tasks: [] })
const tasksShow = reactive({ tasks: [] })
const tasksPage = ref(1)
const tasksPageSize = ref(5)
const isLoadingTasks = ref(false)
function getTasks() {
    request({
        url: '/api/task/manage/',
        method: 'get'
    }).then(res => {
        tasks.tasks = res.data
        //按照time排序
        tasks.tasks.sort((a, b) => {
            return new Date(b.time) - new Date(a.time)
        })
        tasksShow.tasks = tasks.tasks.slice((tasksPage.value - 1) * tasksPageSize.value, tasksPage.value * tasksPageSize.value)
        // 如果删这一页的最后一个，就要往前一页跳
        if (tasksShow.tasks.length === 0) {
            tasksPage.value--
            tasksShow.tasks = tasks.tasks.slice((tasksPage.value - 1) * tasksPageSize.value, tasksPage.value * tasksPageSize.value)
        }
        console.log(tasksShow.tasks);
        isLoadingTasks.value = false

    }).catch(err => {
        console.log(err)
        isLoadingTasks.value = false
    })
}
watch(tasksPage, (val) => {
    tasksShow.tasks = tasks.tasks.slice((val - 1) * tasksPageSize.value, val * tasksPageSize.value)
})
watch(tasks, (val) => {
    tasksShow.tasks = val.tasks.slice((tasksPage.value - 1) * tasksPageSize.value, tasksPage.value * tasksPageSize.value)
})
function deleteTask(id) {
    isLoadingTasks.value = true
    request({
        url: '/api/task/manage/',
        method: 'delete',
        body: {
            task_id: id
        }
    }).then(res => {
        console.log(res);
        ElMessage.success('删除成功')
        getTasks()
    }).catch(err => {
        ElMessage.error('删除失败')
        isLoadingTasks.value = false
        console.log(err);
    })
}

function openTask(id) {
    router.push('/timeline?id=' + id)
}

</script>
<style scoped>
.home-main-right-title-2 {
    font-size: 26px;
    margin-top: 10px;
    color: #666;
}

.home-main {
    display: flex;
    height: calc(100vh - 40px);
}

.home-main-left {
    /* width: 130px; */
    background-color: rgb(250, 251, 253);
    /* background-image: linear-gradient(90deg, #5188ff, #64b5ff); */
    color: rgb(96, 96, 98);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    padding-top: 20px;
}

.home-main-left span {
    cursor: pointer;
    height: 50px;
    width: 80%;
    text-align: center;
    line-height: 50px;
    transition: all 0.3s;
    user-select: none;
    font-size: 14px;
    border-radius: 15px;
    margin-bottom: 10px;
    /* background-image: linear-gradient(90deg, #5188ff, #64b5ff); */
}

.home-main-left span:hover {
    background-color: #ffffff;
}

.left-span-select {
    background-color: #ffffff;
    box-shadow: 0 0 10px 0 #d8d8d899;
}

.home-main-right {
    padding-left: 50px;
    flex: 1;
    /* background-color: #ffffff; */
    background-color: rgb(250, 251, 253);
    padding-top: 50px;
    padding-right: 50px;
    overflow: auto;
}

.home-main-right-title {
    /* margin: 50px; */
    font-size: 40px;
    user-select: none;
}

.link {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-right: 30px;
    cursor: pointer;
    color: rgb(96, 96, 98);
    text-decoration: none;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    transition: all 0.3s;
    background-color: #fff;
    box-shadow: 0 4px 5px 0 #d8d8d899;
}

.link:hover {
    box-shadow: 0 4px 10px 0 #d8d8d8dd;
    transform: translateY(-5px);
}

.link svg {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
}

.home-main-right-content-2 {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */

}

.line {
    width: 100%;
    height: 1px;
    background-color: rgb(211, 211, 211);
    margin-top: 20px;
    margin-bottom: 20px;
}

.home-top-task {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    
}

.home-main-right-title2 {
    font-size: 20px;
    user-select: none;
    position: relative;
}

.home-main-right-title2::before {
    /* content: ''; */
    display: inline-block;
    position: relative;
    width: 5px;
    height: 20px;

    /* top: 50%; */
    transform: translateY(2px);
    background-color: #82a9ff;
    margin-right: 15px;
}

.home-main-right-file {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 50px 5px 50px;
}

.home-main-right-file-1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    padding: 15px;
    border-bottom: 1px dashed rgb(235, 235, 235);
    color: #939393;
    font-size: 15px;
    transition: all 0.2s;
}

.home-main-right-file-1:last-child {
    margin-bottom: 10px;
}

.home-main-right-file-1:hover {
    background-color: #f5f5f5af;
}

.home-main-right-file-1:first-child:hover {
    background-color: transparent;
}

.home-main-right-file-1 button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #3172ff;
    transition: all 0.3s;
    margin-right: 10px;
}

.home-main-right-file-1 div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 20px;
}

.home-main-right-file-mobile {
    display: none;
}

.recent-task {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 5px 0 #d8d8d86b;
    width: 100%;
    height: 100%;
}

.more {
    background-color: #3172ff;
}

.open {
    background-image: linear-gradient(90deg, #5188ff, #64b5ff);
    color: white;
    padding: 10px 20px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s;
    display: inline-block;
    width: 100px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
}

.open:hover {
    background-image: linear-gradient(90deg, #6797ff, #74bcff);

}

.file {
    position: relative;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 5px 0 #d8d8d86b;
    padding-bottom: 1px;
    margin-bottom: 50px;
}

.nologin {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    /* width: 100%; */
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff7e;
    backdrop-filter: blur(5px);
}

.nologin span {
    /* font-size: 20px; */
    color: #3172ff;
    border: #3172ff solid 1px;
    padding: 10px 20px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s;
}

.nologin span:hover {
    background-color: #3172ff;
    color: white;
}

.profile {
    position: relative;
    margin-bottom: 30px;
}

.profile-1 {
    margin-top: 30px;
    display: flex;
    /* 左侧大小不变，右侧元素占满剩余空间 */



}


.file-name {
    cursor: pointer;
}

.file-name:hover {
    text-decoration: underline;
}

.profile-1-1 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    flex-shrink: 0;
    border: solid 1px #636363;
}

.profile-1-1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile-1-2 {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    justify-content: center;
}

.profile-1-2-name {
    font-size: 26px;
    margin-bottom: 10px;
}

.about {
    color: #666;
    font-size: 14px;
    margin-bottom: 30px;
}

.about a {
    color: #3172ff;
}

.home-main-right-1 {
    display: flex;
    align-items: center
}

.home-main-right-1 img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.button-pwd {
    margin-left: 10px;
}

.mode {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 40px;
    gap: 20px;
}

.mode-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    cursor: pointer;
    transition: all 0.3s;
    padding: 20px;
    border: #3172ff solid 1px;
    border-radius: 10px;
    height: 100%;
}

.mode-1:hover {
    background-color: #ebf0ff;
    transform: scale(1.05);
}

.mode-name {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.mode-1 img {
    margin-bottom: 10px;
    width: 80%;
}

.mode-des {
    font-size: 14px;
    color: #666;
    text-align: center;
    margin-bottom: 20px;
}

.home-card {
    width: 100%;
}

.fade2-move,
.fade2-enter-active,
.fade2-leave-active {
    transition: all 0.5s ease;
}

.fade2-leave-active {
    position: absolute;
}

.fade2-enter-from,
.fade2-leave-to {
    opacity: 0;
    transform: translateY(20px);
}


.home-main-left-title {
    font-size: 20px;
    margin-bottom: 30px;
    height: 20px;
    color: #202020;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-10px);
    user-select: none;

}

.home-main-left-title img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

@media screen and (max-width: 768px) {
    .home-main-left {
        display: none !important;
    }

    .home-main-right-title {
        font-size: 30px;
    }

    .home-main-right-title-2 {
        font-size: 20px;
    }

    .home-main-right-content-2 {
        flex-direction: column;
    }

    .link {
        width: auto;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border: none;
        border-bottom: #3172ff solid 1px;
        border-radius: 0;
        padding-left: 10px;
        margin-top: 10px;
        margin-right: 0;
    }

    .link .link-image {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }

    .link .link-image svg {
        width: 30px;
        height: 30px;
        margin-bottom: 0;
    }

    .home-main-right-file {
        /* display: none; */
        font-size: 14px;
    }

    .home-main-right-file-mobile {
        display: flex;
    }

    .home-main-right-file-mobile .home-main-right-file-1 {
        grid-template-columns: 1fr 120px;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .home-main-right-file-1 button {
        margin-right: 0;
    }

    .home-main-right-file-1 div {
        margin-right: 0 !important;
    }

    .home-main-right-file-1 {
        grid-template-columns: 2fr 1fr 140px !important;
    }

    .home-main-right-1 {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .home-main-right-1 img {
        width: 150px;
        height: 150px;
        margin-bottom: 20px;
    }

    .button-pwd {
        margin-left: 0;
        margin-top: 10px;
    }

    .mode {
        flex-direction: column;
        gap: 20px;
        padding: 0 10px;
    }

    .mode-1 {
        width: 90%;
    }
}
</style>