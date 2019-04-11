import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from './views/LoginPage'
import HomePage from './views/HomePage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage

    }
  ]
})
