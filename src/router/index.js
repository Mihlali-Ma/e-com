import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import ContactVue from '../views/ContactVue.vue'
import ProductView from '../views/ProductView.vue'
import CrudView from '../views/CrudView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactVue
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/crud',
    name: 'crud',
    component: CrudView
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
