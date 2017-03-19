<template lang="html">
  <div class="signup-table">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" v-model="loginModel.username">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="loginModel.password">
      </div>
      <button type="submit" class="btn btn-success" @click="postInf()">登陆</button>
      <router-link to="/publish-gambit" class="btn btn-danger">取消</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      apiUrl: 'http://localhost/signin.php',
      loginModel: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    postInf: function () {
      var vm = this
      vm.$http.post(vm.apiUrl, vm.loginModel)
      .then(function (response) {
        this.$router.go(-1)
      })
      .catch(function (response) {
        alert('Error')
      })
    }
  }
}
</script>

<style lang="css">
.signup-table{
  width: 30%;
  padding: 20px 10px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%,-50%);
  border: 1px solid #ddd
}
</style>
