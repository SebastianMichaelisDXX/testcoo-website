import Vue from 'vue'
import Router from 'vue-router'
// import TopNav from '@/components/TopNav'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
