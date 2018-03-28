import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Dashboard from '@/components/Dashboard'
import FormArticle from '@/components/FormArticle'
import TableArticle from '@/components/TableArticle'
import DetailArticle from '@/components/DetailArticle'
import Landing from '@/components/Landing'
import PostLanding from '@/components/PostLanding'
import HomePostLanding from '@/components/HomePostLanding'
import store from '@/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Landing,
      children: [{
        path: ``,
        component: HomePostLanding
      },
      {
        path: 'post/:id',
        name: 'detailarticle',
        component: PostLanding,
        props: true
      }]
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
      beforeEnter: (to, from, next) => {
        if (store.state.activeUser.token === ``) {
          next()
        } else {
          next({path: '/dashboard'})
        }
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      beforeEnter: (to, from, next) => {
        if (store.state.activeUser.token === ``) {
          next()
        } else {
          next({path: '/dashboard'})
        }
      }
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        if (store.state.activeUser.token !== ``) {
          next()
        } else {
          next({name: 'signin'})
        }
      },
      children: [{
        path: '',
        name: 'NewArticle',
        component: FormArticle
      }, {
        path: 'readarticle',
        component: TableArticle,
        children: [{
          path: ':id',
          name: 'userdetailarticle',
          component: DetailArticle,
          props: true
        }]
      }]
    }
  ]
})
