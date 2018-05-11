import Vue from 'vue'
import VueRouter from 'vue-router'

// import Main from './views/main.vue'
// import ProductList from './views/product-list.vue'
// const Main = () => import('./views/main.vue')
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/main'
}, {
  path: '/main',
  name: 'main',
  component: () => import('./views/main.vue')//(resolve) => require(['./views/main.vue'], resolve)
}, {
  path: '/product-list',
  name: 'product-list',
  component: () => import('./views/product-list.vue')// (resolve) => require(['./views/product-list.vue'], resolve)
}]
export default new VueRouter({
  mode: 'hash',
  routes
})