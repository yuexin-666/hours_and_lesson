import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
<<<<<<< HEAD

import axios from 'axios'

=======
import axios from 'axios'
Vue.prototype.$axios=axios
>>>>>>> f8fa54b46045db3e941a476dfa3a3a9196669510
Vue.config.productionTip = false
Vue.prototype.$axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
