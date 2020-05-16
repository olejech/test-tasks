import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Person from '../views/Person.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/person/:name',
    name: 'person',
    component: Person,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
