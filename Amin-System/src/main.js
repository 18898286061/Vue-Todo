import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.prototype.$axios = axios

import Admin from './components/Admin'
import About from './components/About'
import Add from './components/Add'
import Detail from './components/Detail'
import Edit from  './components/Edit'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base:__dirname,
  routes: [
    {path: "/", component: Admin},
    {path: "/about", component: About},
    {path: "/add", component: Add},
    {path: "/detail/:id", component: Detail},
    {path: "/edit/:id", component: Edit}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id="app">
    <router-link to="/">主页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/add">添加用户</router-link>

    <router-view></router-view>
  </div>`
}).$mount('#app')
