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
        },
        {
          path: '/cssIndex',
          component: () => import('@/views/cssViewPage/index'),
          name: 'cssPage',
          meta: {
            title: 'CSS效果页',
            noCache: true,
            activeMenu: 'css'
          }
        },
        {
          path:'/jsIndex',
          component: () => import('@/views/jsPage/index'),
          name: 'cssPage',
          meta: {
            title: 'JS效果页',
            noCache: true,
            activeMenu: 'js'
          }
        }
      ]
    },
    {
      path: "/404",
      name: "Error404Page",
      component: () => import('@/views/404')
    },
    {
      path: "*", // 此处需特别注意置于最底部
      redirect: "/404" //无匹配到的路径自动重定向到404页面
    }
  ]
})
