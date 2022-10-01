// imported nessesary liberaries
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import SecondScreen from './components/SecondScreen'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: SecondScreen
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
