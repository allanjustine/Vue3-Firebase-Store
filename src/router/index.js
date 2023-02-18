import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import EditProduct from '@/views/EditProduct.vue'
import EditCustomer from '@/views/EditCustomer.vue'
import ProductList from '@/components/ProductList.vue'
import ProductCreate from '@/components/ProductCreate.vue'
import CustomerList from '@/components/CustomerList.vue'
import CustomerCreate from '@/components/CustomerCreate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/create-product',
    name: 'ProductCreate',
    component: ProductCreate
  },
  {
    path: '/customers',
    name: 'CustomerList',
    component: CustomerList
  },
  {
    path: '/create-customer',
    name: 'CustomerCreate',
    component: CustomerCreate
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/edit-customer/:id',
    name: 'EditCustomer',
    component: EditCustomer
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
