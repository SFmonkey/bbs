import * as types from './mutation-types'
import vueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(vueResource)

export default {
  savePlan ({ commit }, plan) {
    Vue.http.post('http://localhost/publish.php', plan)
    .then(function (response) {
      Object.assign(plan, { ID: response.body.ID })
      commit(types.SAVE_PLAN, plan)
    })
    .catch(function (response) {
      alert('Error')
    })
  },
  saveReward ({ commit }, plan) {
    Vue.http.post('http://localhost/submit.php', plan)
    .then(function (response) {
      Object.assign(plan, { ID: response.body.ID })
      commit(types.SAVE_REWARD, plan)
    })
    .catch(function (response) {
      alert('Error')
    })
  },
  saveActivity ({ commit }, plan) {
    Vue.http.post('http://localhost/creation.php', plan)
    .then(function (response) {
      console.log(response.body.ID)
      Object.assign(plan, { ID: response.body.ID })
      commit(types.SAVE_ACTIVITY, plan)
    })
    .catch(function (response) {
      alert('Error')
    })
  },
  pullReward ({ commit, state }) {
    Vue.http.get('http://localhost/pullreward.php')
    .then(function (response) {
      commit(types.PULL_REWARD, response.body.article)
    })
    .catch(function (response) {
      alert('Error')
    })
  },
  pullArticle ({ commit, state }) {
    Vue.http.get('http://localhost/pullarticle.php')
    .then(function (response) {
      commit(types.PULL_PLAN, response.body.article)
    })
    .catch(function (response) {
      alert('Error')
    })
  },
  pullActivity ({ commit, state }) {
    Vue.http.get('http://localhost/pullactivity.php')
    .then(function (response) {
      commit(types.PULL_ACTIVITY, response.body.article)
    })
    .catch(function (response) {
      alert('Error')
    })
  },
  pullDraft ({ commit, state }) {
    Vue.http.get('http://localhost/pulldraft.php')
    .then(function (response) {
      commit(types.PULL_DRAFT, response.body.article)
    })
    .catch(function (response) {
      alert('Error')
    })
  },
  userStatus ({ commit, state }) {
    Vue.http.get('http://localhost/userstatus.php')
    .then(function (response) {
      if (response.body.sign !== 1) {
        commit(types.USER_STATUS, response.body)
      }
    })
    .catch(function (response) {
      alert('Error')
    })
  },
  clearUser ({ commit }) {
    Vue.http.get('http://localhost/deleteUser.php')
    .then(function (response) {
      if (response.body === 'true') {
        commit(types.CLEAR_USER)
      }
    })
    .catch(function (response) {
      alert('Error')
    })
  }
}
