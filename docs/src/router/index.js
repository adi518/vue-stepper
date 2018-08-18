import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Documentation',
    component: () => import('@/containers/Docs')
  },
  {
    path: '/',
    name: 'Documentation 1.x',
    component: () => import('@/containers/Docs-1.x.vue')
  }
]

if (process.env.NODE_ENV === 'development') {
  routes.push({
    path: '/playground',
    name: 'Playground',
    component: () => import('@/components/HelloWorld.vue')
  })
}

export default new Router({ routes, mode: 'history' })
