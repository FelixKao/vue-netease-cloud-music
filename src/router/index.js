import Vue from 'vue'
import Router from 'vue-router'

const Recommend = () => import('@/pages/recommend/recommend')
const Rank = () => import('@/pages/rank/rank')
const Search = () => import('@/pages/search/search')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
