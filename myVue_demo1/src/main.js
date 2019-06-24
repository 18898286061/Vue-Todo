import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({ // 配置对象属性名称固定，不可随便修改
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
