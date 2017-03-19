<template lang="html">
  <div class="wrapper">
        <v-header></v-header>
        <div class="container">
          <div class="col-sm-12">
            <div class="title">
              <h2>{{ title }}</h2>
            </div>
            <div class="time">
              {{ time }}
            </div>
            <div class="content">
              {{ content }}
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import Header from './header.vue'

export default {
  name: 'details',
  data () {
    return {
      title: '',
      time: '',
      content: ''
    }
  },
  created: function () {
    const id = {
      id: this.$route.params.id
    }
    this.$http.post('http://localhost/getReward.php', id)
    .then(function (response) {
      this.title = response.body.TITLE
      this.time = response.body.TIME
      this.content = response.body.CONTENT
    })
    .catch(function (response) {
      alert('Error')
    })
  },
  computed: {
    username () {
      return this.$store.state.username
    },
    userstatus () {
      return this.$store.state.userstatus
    }
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang="css">
.title{
  text-align: center;
}
.time{
  padding-top: 20px;
}
.content{
  padding-top: 50px;
}
</style>
