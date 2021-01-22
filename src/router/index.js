import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/index',
          component: () => import('@/views/index/index'),
          name: 'FirstPage',
          meta: {
            title: '首页',
            noCache: true,
            activeMenu: 'index'
          }
        }
      ]
    }
  ]
})
