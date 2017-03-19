<template lang="html">
  <div class="wrapper">
    <v-header></v-header>
    <div class="container">
      <div class="col-sm-9">
        <div>
          <div class="time-entries">
            <p v-if="!plans.length"><strong>还没有任何活动</strong></p>

            <div class="my-list-group">
              <a class="my-list-group-item" v-for="(plan,index) in plans">
                <div class="row">
                  <div class="col-sm-1">
                    <div class="box">
                      <img  :src="plan.AVATAR" class="img-circle img-responsive" />
                    </div>
                  </div>

                  <div class="col-sm-2 text-center">
                      {{ plan.TIME }}
                  </div>

                  <div class="col-sm-9">
                    <router-link :to="'/activity/'+ plan.ID">{{ plan.TITLE }}</router-link>
                  </div>

                </div>
              </a>

            </div>
          </div>
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
  name: 'gambit',
  created: function () {
    this.$store.dispatch('pullActivity')
  },
  computed: {
    plans () {
      return this.$store.state.activity
    }
  },
  methods: {
  },
  components: {
    'v-header': Header,
    'v-aside': Aside
  }
}
</script>

<style lang="css">
  .my-list-group{
    padding-left: 0;
    margin-bottom: 10px;
  }
  .my-list-group-item{
    position: relative;
    display: block;
    padding: 5px 10px;
    margin-bottom: 18px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
  .comment-section {
    padding: 20px;
  }
  .box {
    width: 100%;
    position: relative;
    background-color: red;
    overflow: hidden;
    border-radius: 50%;
  }
  .box:after {
    content: '';
    display: block;
    margin-top: 100%;
  }
  .box img{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
