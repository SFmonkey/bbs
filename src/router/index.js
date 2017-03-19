import Vue from 'vue'
import Router from 'vue-router'
import Gambit from '@/components/gambit'
import Publish from '@/components/publish'
import Signin from '@/components/signin'
import Signup from '@/components/signup'
import Article from '@/components/article'
import Subm from '@/components/submit'
import Reward from '@/components/reward'
import Detail from '@/components/detail'
import Old from '@/components/old'
import Activity from '@/components/activity'
import Creation from '@/components/creation'
import Explain from '@/components/explain'
import Draft from '@/components/draft'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gambit',
      component: Gambit
    }, {
      path: '/publish-gambit',
      component: Gambit
    }, {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }, {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }, {
      path: '/article/:id',
      name: 'Article',
      component: Article
    }, {
      path: '/publish-table',
      name: 'Publish',
      component: Publish
    }, {
      path: '/submit',
      name: 'submit',
      component: Subm
    }, {
      path: '/reward',
      name: 'reward',
      component: Reward
    }, {
      path: '/reward/:id',
      name: 'detail',
      component: Detail
    }, {
      path: '/old',
      name: 'old',
      component: Old
    }, {
      path: '/activity',
      name: 'activity',
      component: Activity
    }, {
      path: '/create',
      name: 'create',
      component: Creation
    }, {
      path: '/activity/:id',
      name: 'explain',
      component: Explain
    }, {
      path: '/draft',
      name: 'draft',
      component: Draft
    }
  ]
})
