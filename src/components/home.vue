<template lang="html">
  <div class="wrapper">
    <v-header></v-header>
    <div class="container">
      <div class="col-sm-9">
        <div class="jumbotron">
          <h3>消息中心</h3>
          <p>
            <strong>
              <router-link to="/publish-gambit">发布一个话题</router-link>
            </strong>
          </p>
        </div>
      </div>
      <div class="col-sm-3">
        <v-aside></v-aside>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header.vue'
import Aside from './aside.vue'

export default {
  name: 'app',
  components: {
    'v-header': Header,
    'v-aside': Aside
  }
}
</script>

<style lang="css">
</style>
