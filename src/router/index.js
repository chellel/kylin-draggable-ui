import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'editor',
      component: () => import('@/views/editor/index')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index')
    }
  ]
})