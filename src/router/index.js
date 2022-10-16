import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SobreLogin from '../views/SobreLogin.vue'
import SobreCadastro from '../views/SobreCadastro.vue'
import ParaProfissionais from '../views/ParaProfissionais.vue'
import ParaEmpresas from '../views/ParaEmpresas.vue'


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
  },
  {
    path:'/empresas',
    name: 'Empresas',
    component: ParaEmpresas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
