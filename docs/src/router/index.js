import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Documentation',
    component: () => import('@/containers/Docs'),
    children: [
      {
        path: 'step-1',
        name: 'Step 1',
        meta: { step: 1 },
        component: () => import('@/containers/Step1')
      },
      {
        path: 'step-2',
        name: 'Step 2',
        meta: { step: 2 },
        component: () => import('@/containers/Step2')
      },
      {
        path: 'step-3',
        name: 'Step 3',
        meta: { step: 3 },
        component: () => import('@/containers/Step3')
      }
    ]
  },
  {
    path: '/',
    name: 'Documentation 1.x',
    component: () => import('@/containers/Docs-1.x.vue')
  }
]

if (process.env.NODE_ENV === 'development') {
  routes.push({
    path: '/router-integration',
    name: 'Router Integration',
    component: () => import('@/components/HelloWorld.vue')
  })
}

const router = new Router({ routes })

import { getters } from '@/store'

/**
 * Listen to changes triggered by
 * navigation buttons (back/forward),
 * and programmatic changes (`router.push`).
 * In linear mode, possible steps are
 * only next, current or previous.
 */
router.beforeEach((to, from, next) => {
  const route = to
  switch (route) {
    case route.meta.hasOwnProperty('step'): {
      const stepper = getters.stepper
      if (stepper.has(route.meta.step)) {
        if (stepper.linear) {
          const test = [
            stepper.step,
            stepper.next,
            stepper.previous,
          ].includes(route.meta.step)
          if (test) {
            next()
          } else {
            next(false)
          }
        } else {
          next()
        }
      } else {
        next(false)
      }
    }
      break
    default: {
      if (route.matched.length) {
        next()
      } else {
        next({ name: 'Step 1' })
      }
    }
  }
})

export default router
