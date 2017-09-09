import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Picture from '@/components/Picture'
import Saying from '@/components/Saying'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/picture',
      name: 'Picture',
      component: Picture
    },
    {
      path: '/saying',
      name: 'Saying',
      component: Saying
    }
  ]
})
