import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false

// let moment = require('moment')
import moment from 'moment'

Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
        return moment(dataStr).format(pattern)
    })
    // 安装插件
Vue.use(Toast)

//使用图片懒加载
Vue.use(VueLazyLoad, {
    loading: require('assets/img/common/placeholder.png')
})

// 解决移动端300ms延迟
FastClick.attach(document.body)

Vue.prototype.$bus = new Vue()
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')