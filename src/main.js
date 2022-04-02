// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import vueToTop from 'vue-totop'

import mock from '@/http/mock'

import './assets/icon/iconfont.css'
// 引入音乐插件
import vueAplayer from 'vue-aplayer'
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts


import './assets/css/common.scss';
import './assets/css/font.scss';
// 引入alloyfinger
// import AlloyFinger from 'alloyfinger'
// import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue'

// Vue.use(AlloyFingerPlugin,{
//   AlloyFinger
// })


Vue.use(vueAplayer)
Vue.use(ElementUI)
Vue.use(vueToTop)

Vue.config.productionTip = false

console.log('环境变量:',process.env)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})