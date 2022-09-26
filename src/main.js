import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/elementUI/index.js'

import './assets/less/index.less'

import '../src/api/mock.js'
import http from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
