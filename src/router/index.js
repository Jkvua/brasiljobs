import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SobreLogin from '../views/SobreLogin.vue'
import SobreCadastro from '../views/SobreCadastro.vue'
import ParaProfissionais from '../views/ParaProfissionais.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: SobreLogin
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: SobreCadastro
  },
  {
    path: '/profissionais',
    name: 'Profissionais',
    component: ParaProfissionais
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
