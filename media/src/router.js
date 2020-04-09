import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/pages/index'
import about from '@/components/pages/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      name: 'index'
    },
    {
      path: '/about',
      component: about
    }
  ]
})