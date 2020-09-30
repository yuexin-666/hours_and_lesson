import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
<<<<<<< HEAD

<<<<<<< HEAD
import axios from 'axios'

Vue.prototype.$axios=axios
=======

import axios from 'axios'

Vue.prototype.$axios=axios

>>>>>>> aacbc6b1b3d3a63e47865ba5711bae4311f5726c
=======
<<<<<<< HEAD
import axios from 'axios'
Vue.prototype.$axios=axios
=======

import axios from 'axios'
<<<<<<< HEAD
Vue.prototype.$axios = axios
=======

>>>>>>> 6657e37f7e378a447d5c437b0f3717cc50f198aa
>>>>>>> acd86914436c8ee0aa725d48905aeef3c14d292a
>>>>>>> 1371a801b5778e09ca28977e1c383f391a8d290b
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
