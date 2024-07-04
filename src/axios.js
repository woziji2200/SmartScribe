import axios from 'axios'
import { fetchEventSource } from '@microsoft/fetch-event-source'
import { ElMessage } from 'element-plus'
import { useStore } from '@/store/index.js'
export const baseUrl = 'https://editor.daoxuan.cc'
// const store = useStore()
// console.log(this.store);
const instance = axios.create({
    baseURL: baseUrl,
})

export function isInExp(accessOrRefresh) {
    // return true
    try {
        if (!localStorage.getItem('login')) {
            return false
        }
        // debugger
        let Base64 = require('js-base64').Base64
        let token = null
        // console.log(uni.getStorageSync('login').access.split('.'), uni.getStorageSync('login'));
        if (accessOrRefresh == 'access') {
            token = JSON.parse(Base64.decode(JSON.parse(localStorage.getItem('login')).access.split('.')[1]))
            // console.log('token',token);
        } else {
            token = JSON.parse(Base64.decode(JSON.parse(localStorage.getItem('login')).refresh.split('.')[1]))
        }
        if (Date.now() / 1000 < token.exp)
            return true
        else
            return false
    } catch {
        return false
    }
}
function getAccess() {
    return JSON.parse(localStorage.getItem('login'))?.access
}
function getRefresh() {
    return JSON.parse(localStorage.getItem('login'))?.refresh
}
function setAccess(token) {
    let login = JSON.parse(localStorage.getItem('login'))
    login.access = token
    localStorage.setItem('login', JSON.stringify(login))
}
function setRefresh(token) {
    let login = JSON.parse(localStorage.getItem('login'))
    login.refresh = token
    localStorage.setItem('login', JSON.stringify(login))
}
export function setLogin(token) {
    localStorage.setItem('login', JSON.stringify(token))
}

/**
 * @param {Object} obj
 * @param {string} obj.url
 * @param {string} obj.method
 * @param {Object} obj.body
 * @param {Object} obj.params
 * @param {Object} obj.headers
 * @param {boolean} obj.isEventSource
 * @param {boolean} obj.noLogin
 * 
 */
export async function request(obj) {
    // console.log(isInExp('access'));
    if (!obj.noLogin && !isInExp('access')) {
        if (isInExp('refresh')) {
            try {
                let res = await instance.post('/api/token/refresh/', {
                    refresh: getRefresh()
                })
                setLogin(res.data)
            } catch (e) {
                ElMessage.error('请登录后使用或登录过期')
                return Promise.reject('未登录')
            }
        } else {
            ElMessage.error('请登录后使用或登录过期')
            return Promise.reject('未登录')
        }
    }
    let headers = obj.headers || {}
    let auth = obj.noLogin ? {} : {
        Authorization: `Bearer ${getAccess()}`
    }
    if(obj.isEventSource){
        // console.log(obj.onmessage, obj.onerror, obj.onclose);
        fetchEventSource(baseUrl + obj.url, {
            method: obj.method,
            signal: obj.signal, // AbortSignal
            body: JSON.stringify(obj.body),
            headers: {
                'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
                'content-type': 'application/json',
                ...auth
            },
            onmessage: obj.onmessage,
            onerror: obj.onerror,
            onclose: obj.onclose
        });
        return
    }
    return instance({
        url: obj.url,
        method: obj.method,
        data: obj.body,
        params: obj.params,
        signal: obj.signal,
        headers: {
            // 'content-type': 'application/json',
            ...obj.headers,
            ...auth
        }
    })

}

instance.interceptors.response.use(
    response => {
        return response
    },
    async error => {
        if (error.response.status == 401) {
            ElMessage.error('请登录后使用或登录过期')
            return Promise.reject('未登录')
        }
        return Promise.reject(error)
    }
)


export async function getUserInfo(){
    const store = useStore()
    try {
        if(!isInExp('access')){
            if(isInExp('refresh')){
                let res = await instance.post('/api/token/refresh/', {
                    refresh: getRefresh()
                })
                setLogin(res.data)
            } else { return }
        }
        // console.log(getAccess());
        let res = await instance.get('/api/user/userinfo/', {
            headers: {
                Authorization: `Bearer ${getAccess()}`
            }
        })
        store.UserInfo = res.data
        // console.log(111, store);
        // console.log(res);
    } catch (error) {

    }
}