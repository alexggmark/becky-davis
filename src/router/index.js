import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/views/Default'
import Home from '@/components/Home'

Vue.component('default', Default)

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home,
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/test',
      name: 'Test',
      component: Home,
      meta: {
        layout: 'default'
      }
    }
  ]
})
