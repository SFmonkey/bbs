<template lang="html">
  <div class="wrapper">
        <v-header></v-header>
        <div class="container">
          <div class="col-sm-12">
            <div class="article" v-if='!editstatus'>
                <input type="button" name="name" value="编辑" class="btn btn-primary" @click='edit()'>
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
            <div class="article" v-if='editstatus'>
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
                <button class="btn btn-danger" @click="cancel()">取消</button>
                <hr>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import Header from './header.vue'
import Person from '../assets/img/person.jpg'

export default {
  name: 'details',
  data () {
    return {
      title: '',
      time: '',
      content: '',
      editstatus: false
    }
  },
  created: function () {
    const id = {
      id: this.$route.params.id
    }
    this.$http.post('http://localhost/getDraft.php', id)
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
    }
  },
  methods: {
    edit () {
      this.editstatus = true
    },
    cancel () {
      this.editstatus = false
    },
    save () {
      const plan = {
        AUTHOR: this.$store.state.username,
        AVATAR: Person,
        TITLE: this.title,
        CONTENT: this.content,
        TIME: this.time
      }
      const id = {
        id: this.$route.params.id
      }
      this.$store.dispatch('savePlan', plan)
      this.$store.dispatch('deleteDraft', id)
      this.$router.go(-1)
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
.article{

}
</style>
