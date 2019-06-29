import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './plugins/element.js'

Vue.config.productionTip = false

// 创建一个接口和地址,定义到Vue的原型上
import axios from "axios"
Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:3000/api"
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
