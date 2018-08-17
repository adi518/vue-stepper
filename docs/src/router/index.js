import Vue from 'vue'
import Router from 'vue-router'

import Docs from '@/containers/Docs'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Documentation',
    component: Docs
  }
]

if (process.env.NODE_ENV === 'development') {
  routes.push({ path: '/hello-world', name: 'Hello World', component: HelloWorld })
}

export default new Router({ routes, mode: 'history' })
