// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import vuex from 'vuex'
Vue.use(vuex)

import './assets/css/common.css'

import ElementUI from 'element-ui'    //引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 监听滚动
// import vuescroll from 'vue-scroll'
// Vue.use(vuescroll)

// window.sr = ScrollReveal();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
