import Vue from 'vue'
import Admin from './Admin'
import router from './router'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Admin/>',
  components: { Admin }
})
