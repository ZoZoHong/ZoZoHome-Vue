import axios from 'axios'

export function request (config) {

    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    // 返回promise对象
    instance.interceptors.request.use((function (config) {
        return config;
    }), function (err) {
        return Promise.reject(err);
    })

    instance.interceptors.response.use(res => {
        return res.status
    }, err => {
        return Promise.reject(err)
    })

    return instance(config)
}

