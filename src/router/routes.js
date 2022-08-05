import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import ControleDeProdutos from '@/views/ControleDeProdutos.vue';
import ControleDeClientes from '@/views/ControleDeClientes.vue';
// @ alias para a pasta src --- outra maneira de import


Vue.use(VueRouter)

const router = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    title: 'Login',
    // icon:
    meta: {
        requiredAuth: false,
        // isAdmin: true
    }
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    title: 'Dashboard',
    meta: {
        requiredAuth: true,
        // isAdmin: true
    }
  },
  {
    path: '/controle-de-produtos',
    name: 'ControleDeProdutos',
    component: ControleDeProdutos,
    title: 'Produtos',
    meta: {
        requiredAuth: false,
        // isAdmin: true
    }
  },
  {
    path: '/controle-de-clientes',
    name: 'ControleDeClientes',
    component: ControleDeClientes,
    title: 'Clientes',
    meta: {
        requiredAuth: false,
        // isAdmin: true
    }
  },
]

export default router