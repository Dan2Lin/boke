import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleDetail from '../components/ArticleDetail'
import NotFoundComponent from '../components/NotFoundComponent'
import HomeComponent from '../components/HomeComponent'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)

var routes = [
  {
    path: '/getArticleById/:aId',
    name: 'ArticleDetail',
    component: ArticleDetail
  },
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '*',
    component: NotFoundComponent
  }
]

export default new VueRouter({
  routes: routes,
  mode: 'history'
})
