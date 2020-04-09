import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/pages/index'
// import page2 from '@/components/page2'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      name: 'index'
    },
    // {
    //   path: '/page2',
    //   component: page2
    // }
  ]
})