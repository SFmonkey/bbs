<template lang="html">
    <div class="signin-table">
      <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" v-model="signupModel.username">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" placeholder="Password" v-model="signupModel.password">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Confirm Password</label>
        <input type="password" class="form-control" placeholder="Password agin"
        v-model="signupModel.passwordAgin">
      </div>
      <button type="submit" class="btn btn-success" @click="postInf()">注册</button>
      <router-link to="/publish-gambit" class="btn btn-danger">取消</router-link>
    </form>
    </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      apiUrl: 'http://localhost/signup.php',
      signupModel: {
        username: '',
        password: '',
        passwordAgin: ''
      }
    }
  },

  methods: {
    postInf: function () {
      if (this.signupModel.password !== this.signupModel.passwordAgin) {
        alert('两次密码输入不一致')
      } else {
        var vm = this
        vm.$http.post(vm.apiUrl, vm.signupModel)
        .then(function (response) {
          this.$router.go(-1)
        })
        .catch(function (response) {
          alert('Error')
        })
      }
    }
  }
}
</script>

<style lang="css">
  .signin-table{
    width: 30%;
    padding: 20px 10px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid #ddd
  }
</style>
