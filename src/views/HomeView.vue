<template>
    <div class="home-main">
        <div class="home-main-left">
            <span @click="LeftClick('new')">新建文档</span>
            <span @click="LeftClick('open')">打开文件</span>
        </div>
        <div class="home-main-right">
            <div class="home-main-right-title">你好</div>
            <div class="line"></div>
            <div class="home-main-right-title2">新建文档</div>
            <div class="home-main-right-content-2">
                <router-link class="link" to="/editor?template=blank">
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
                    <div class="link-title">空白文档</div>
                </router-link>
                <router-link class="link" to="/editor?template=doc">
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
                            <path d="M280.917333 545.28l90.965334 0 0 90.965333-90.965334 0 0-90.965333Z" fill="#79DEB4"
                                p-id="13576"></path>
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
                    <div class="link-title">示例-文档</div>
                </router-link>
                <router-link class="link" to="/editor?template=graph">
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
                            <path d="M642.6 490l-184.2 76.8 53.6 18.8 186.4-73.6z" fill="#E8677D" p-id="10313"></path>
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
                </router-link>
            </div>
            <div class="line"></div>
            <div class="home-main-right-title2">我的文件</div>
            <div class="home-main-right-file">
                <div class="home-main-right-file-1" style="margin-top: 20px; color: #666">
                    <div>文件名</div>
                    <div>创建时间</div>
                    <div>最后修改时间</div>
                    <div>操作</div>
                </div>
                <div class="home-main-right-file-1">
                    <div>111111111111111111111111111111111111111111111111111111111111111</div>
                    <div>2021/1/1</div>
                    <div>昨天</div>
                    <div>
                        <button>打开</button>
                        <button>删除</button>
                    </div>
                </div>
                <div class="home-main-right-file-1">
                    <div>111111111111111111111111111111111111111111111111111111111111111</div>
                    <div>2021/1/1</div>
                    <div>昨天</div>
                    <div>
                        <button>打开</button>
                        <button>删除</button>
                    </div>
                </div>
                <div class="home-main-right-file-1">
                    <div>111111111111111111111111111111111111111111111111111111111111111</div>
                    <div>2021/1/1</div>
                    <div>昨天</div>
                    <div>
                        <button>打开</button>
                        <button>删除</button>
                    </div>
                </div>
                <div class="home-main-right-file-1">
                    <div>111111111111111111111111111111111111111111111111111111111111111</div>
                    <div>2021/1/1</div>
                    <div>昨天</div>
                    <div>
                        <button>打开</button>
                        <button>删除</button>
                    </div>
                </div>
                <div class="home-main-right-file-1">
                    <div>111111111111111111111111111111111111111111111111111111111111111</div>
                    <div>2021/1/1</div>
                    <div>昨天</div>
                    <div>
                        <button>打开</button>
                        <button>删除</button>
                    </div>
                </div>
                <div class="home-main-right-file-1">
                    <div>111111111111111111111111111111111111111111111111111111111111111</div>
                    <div>2021/1/1</div>
                    <div>昨天</div>
                    <div>
                        <button>打开</button>
                        <button>删除</button>
                    </div>
                </div>
            </div>
            <!-- <div class="line"></div> -->
            <div class="home-main-right-title2">个人中心</div>

        </div>
        <!-- <button @click="test">test</button> -->
    </div>
</template>
<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { fetchEventSource } from '@microsoft/fetch-event-source';

const router = useRouter();
async function test() {
    const ctrl = new AbortController()
    await fetchEventSource('http://django.daoxuan.cc/api/ai/translate/', {
        // method: 'POST',
        signal: ctrl.signal, // AbortSignal
        // body: JSON.stringify({
        //     name: 'test'
        // }),
        headers: {
            'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
        },
        onmessage(ev) {
            console.log(ev.data);
        },
        onerror(ev) {
            // console.log(ev);
            ctrl.abort()
            throw ev

        },
        onclose(ev) {
            // console.log(ev);
            // ctrl.abort()
        }
    });
    console.log(111);
}

function LeftClick(type) {
    if (type === 'new') {
        router.push('/editor?template=blank');
    } else if (type === 'open') {
        router.push('/editor?template=open');
    }
}

</script>
<style scoped>
.home-main {
    display: flex;
    height: calc(100vh - 40px);
}

.home-main-left {
    /* width: 130px; */
    background-color: #5188ff;
    /* background-image: linear-gradient(90deg, #5188ff, #64b5ff); */
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    padding-top: 20px;
}

.home-main-left span {
    cursor: pointer;
    height: 50px;
    width: 100%;
    text-align: center;
    line-height: 50px;
    transition: all 0.3s;
    user-select: none;
    font-size: 14px;
}

.home-main-left span:hover {
    background-color: #409eff;

}

.home-main-right {
    padding-left: 50px;
    flex: 1;
    background-color: #ffffff;
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
    color: #3172ff;
    text-decoration: none;
    border: #3172ff solid 1px;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    transition: all 0.3s;
}

.link:hover {
    background-color: #3172ff;
    color: white;
}

.link svg {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}

.home-main-right-content-2 {
    display: flex;
    /* justify-content: center; */

}

.line {
    width: 100%;
    height: 1px;
    background-color: rgb(211, 211, 211);
    margin-top: 20px;
    margin-bottom: 20px;
}
.home-main-right-title2 {
    font-size: 20px;
    user-select: none;
}
.home-main-right-file {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.home-main-right-file-1 {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid rgb(211, 211, 211);
    color: #939393;
}
.home-main-right-file-1:last-child {
    margin-bottom: 40px;
}
.home-main-right-file-1:hover {
    background-color: #f5f5f5;
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
</style>