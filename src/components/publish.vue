<template lang="html">
  <div class="wrapper">
    <v-header></v-header>
    <div class="container">
      <div class="col-sm-8">
        <div class="form-horizontal">
          <div class="form-group">
            <div class="col-sm-6">
              <label>标题</label>
              <input
                type="text"
                class="form-control"
                v-model="title"
                placeholder="title"
              />
            </div>
            <div class="col-sm-6">
              <label>时间</label>
              <input
                type="date"
                class="form-control"
                v-model="time"
                placeholder="date"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-12">
              <label>正文</label>
              <textarea
                class="form-control"
                v-model="content"
                placeholder="content"
                rows="30"
              >
              </textarea>
            </div>
          </div>
          <button class="btn btn-success" @click="save()">发布</button>
          <router-link to="/publish-gambit" class="btn btn-danger">取消</router-link>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header.vue'
import Person from '../assets/img/person.jpg'
export default {
  name: 'Publish',
  data () {
    return {
      title: '',
      content: '',
      time: ''
    }
  },
  methods: {
    save () {
      const plan = {
        AUTHOR: this.$store.state.username,
        AVATAR: Person,
        TITLE: this.title,
        CONTENT: this.content,
        TIME: this.time
      }
      this.$store.dispatch('savePlan', plan)
      this.$router.go(-1)
    }
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang="css">
</style>
