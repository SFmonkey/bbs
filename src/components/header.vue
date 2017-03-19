<template lang="html">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-fire"></i>
          孵化平台
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/publish-gambit">首页</router-link></li>
        </ul>
        <ul class="nav navbar-nav">
          <li><router-link to="/old">已发布</router-link></li>
        </ul>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">协作</router-link></li>
        </ul>
        <ul class="nav navbar-nav">
          <li><router-link to="/activity">活动</router-link></li>
        </ul>
        <ul class="nav navbar-nav">
          <li><router-link to="/reward">悬赏</router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right" v-if='!userstatus'>
          <li><router-link to="signin">登陆</router-link></li>
          <li><router-link to="signup">注册</router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right" v-if='userstatus'>
          <li class="dropdown">
             <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ username }} <span class="caret"></span></a>
             <ul class="dropdown-menu">
                <li><router-link to="/draft">草稿</router-link></li>
               <li role="separator" class="divider"></li>
                <li><router-link to="/publish-table">创建文章</router-link></li>
                <li role="separator" class="divider"></li>
                 <li><router-link to="/create">创建活动</router-link></li>
                 <li role="separator" class="divider"></li>
                  <li><router-link to="/submit">发布悬赏</router-link></li>
                  <li role="separator" class="divider"></li>
                  <li @click="clearUser"><router-link to="/publish-gambit">注销</router-link></li>
             </ul>
           </li>
        </ul>
      </div>
    </nav>
</template>

<script>

export default {
  name: 'header',
  created: function () {
    this.$store.dispatch('userStatus')
  },
  computed: {
    username () {
      return this.$store.state.username
    },
    userstatus () {
      return this.$store.state.userstatus
    }
  },
  methods: {
    clearUser: function () {
      this.$store.dispatch('clearUser')
    }
  }
}
</script>

<style lang="css">
</style>
