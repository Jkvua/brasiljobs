import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SobreLogin from '../views/SobreLogin.vue'
import SobreCadastro from '../views/SobreCadastro.vue'
import ParaProfissionais from '../views/ParaProfissionais.vue'
import ParaEmpresas from '../views/ParaEmpresas.vue'
import CurriculoCriando from '../views/CurriculoCriando.vue'
import { auth } from '@/plugins/firebase'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    meta: {requiresAuth: true},
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
  },
  {
    path:'/curriculo',
    name: 'Curriculo',
    component: CurriculoCriando
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.requiresAuth)

  if (requiresAuth && !auth.meta.currentUser) {
    next('/login')
  }
  else {
    next()
  }
})

export default router
