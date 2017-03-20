import * as types from './mutation-types'

export default {
  [types.SAVE_PLAN] (state, plan) {
    state.list.push(plan)
  },

  [types.SAVE_REWARD] (state, plan) {
    state.reward.push(plan)
  },

  [types.SAVE_ACTIVITY] (state, plan) {
    state.activity.push(plan)
  },

  [types.SAVE_DRAFT] (state, plan) {
    state.draft.push(plan)
  },

  [types.PULL_REWARD] (state, plan) {
    state.reward = []
    for (var variable in plan) {
      if (plan.hasOwnProperty(variable)) {
        state.reward.push(plan[variable])
      }
    }
  },

  [types.PULL_ACTIVITY] (state, plan) {
    state.activity = []
    for (var variable in plan) {
      if (plan.hasOwnProperty(variable)) {
        state.activity.push(plan[variable])
      }
    }
  },

  [types.PULL_DRAFT] (state, plan) {
    state.draft = []
    for (var variable in plan) {
      if (plan.hasOwnProperty(variable)) {
        state.draft.push(plan[variable])
      }
    }
  },

  [types.PULL_PLAN] (state, plan) {
    state.list = []
    for (var variable in plan) {
      if (plan.hasOwnProperty(variable)) {
        state.list.push(plan[variable])
      }
    }
  },

  [types.USER_STATUS] (state, name) {
    state.username = name
    state.userstatus = true
  },

  [types.CLEAR_USER] (state) {
    state.userstatus = false
  },

  [types.DELETE_DRAFT] (state) {
  }
}
