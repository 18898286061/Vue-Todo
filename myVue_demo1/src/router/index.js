import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../components/About.vue'
import Home from '../components/home.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import MessageDetail from '../components/MessageDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // n个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              path: 'detail/:id',
              component: MessageDetail
            }
          ]
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
