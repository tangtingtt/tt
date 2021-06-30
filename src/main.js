// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import vueToTop from 'vue-totop'
import './assets/icon/iconfont.css'
// 引入音乐插件
import vueAplayer from 'vue-aplayer'
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import './assets/css/font.scss';


Vue.use(vueAplayer)
Vue.use(ElementUI)
Vue.use(vueToTop)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
