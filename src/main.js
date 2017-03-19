// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.http.options.emulateJSON = true

Vue.http.interceptors.push((request, next) => {
  request.credentials = true
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
