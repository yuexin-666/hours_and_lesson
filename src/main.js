import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import axios from 'axios'
<<<<<<< HEAD
Vue.prototype.$axios = axios
=======

>>>>>>> 6657e37f7e378a447d5c437b0f3717cc50f198aa
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
