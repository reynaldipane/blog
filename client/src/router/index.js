import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Dashboard from '@/components/Dashboard'
import FormArticle from '@/components/FormArticle'
import TableArticle from '@/components/TableArticle'
import DetailArticle from '@/components/DetailArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [{
        path: 'newarticle',
        name: 'NewArticle',
        component: FormArticle
      }, {
        path: 'readarticle',
        component: TableArticle,
        children: [{
          path: ':id',
          name: 'tablearticle',
          component: DetailArticle,
          props: true
        }]
      }]
    }
  ]
})
