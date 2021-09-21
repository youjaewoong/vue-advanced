import Vue from 'vue'
import App from './App.vue'
import { router } from './routers/index.js';
import { store } from './store/index.js'

Vue.config.productionTip = false

//vue 구조를 파악하는 곳
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
