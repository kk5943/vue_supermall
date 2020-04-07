import axios from 'axios'
// import qs from 'qs'

// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

const request = config => {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/wh',
        // 备份地址
        // baseURL: 'http://106.54.54.237:8000/api/wh',
        timeout: 5000
    })
    instance.interceptors.request.use(
            function(config) {
                // 在发送请求之前做些什么
                // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

                // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

                // 3.对请求的参数进行序列化(看服务器是否需要序列化)
                // config.data = qs.stringify(config.data)
                // console.log(config);

                // NProgress.start()
                return config
            },
            function(error) {
                // 对请求错误做些什么

                return Promise.reject(error)
            }
        )
        // 添加响应拦截器
    instance.interceptors.response.use(
        function(response) {
            // 对响应数据做点什么
            // NProgress.done()
            return response.data
        },
        function(error) {
            // 对响应错误做点什么
            console.log(err)
            return Promise.reject(error)
        }
    )

    return instance(config)
}

export default request