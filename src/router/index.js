import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contatos from '../views/contatos.vue'
import Erro from '.../views/erro.vue'
import Utilizador from '../views/utilizador.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contatos',
    name: 'Contatos',
    component: Contatos
  },
  {
    path: '/contatos/:id',
    components: Utilizador
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/:pathMatch8(.*)',
    name: 'erro',
    component: Erro
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
