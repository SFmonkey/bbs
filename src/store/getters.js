getters : {
       loginStatus : state => state.loginStatus
},
import vueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(vueResource)

Vue.http.get('http://localhost/userstatus.php')
.then(function (response) {
  state.userstatus = true
  console.log(state.userstatus)
})
.catch(function (response) {
  alert('Error')
})
