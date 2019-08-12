import Vue from 'vue';

import router from './router/index';
import store from './store';

import axios from 'axios';
Vue.prototype.$axios = axios;


import { Button } from 'element-ui';
Vue.use(Button);

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
