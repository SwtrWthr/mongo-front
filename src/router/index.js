import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ComponentLoading from '../components/ComponentLoading'

Vue.use(VueRouter)

const AdminRoot = () => ({
  component: import(/* webpackChunkName: "admin-pages" */ '@/views/admin/root'),
  loading: ComponentLoading,
  delay: 2500
})
const AdminBookIndex = () => ({
  component: import(/* webpackChunkName: "admin-pages" */ '@/views/admin/book/index'),
  loading: ComponentLoading,
  delay: 2500
})
const AdminDashboard = () => ({
  component: import(/* webpackChunkName: "admin-pages" */ '@/views/admin/dashboard/index'),
  loading: ComponentLoading,
  delay: 2500
})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'AdminRoot',
    component: AdminRoot,
    children: [
      {
        path: 'books',
        name: 'AdminBookIndex',
        component: AdminBookIndex
      },
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
