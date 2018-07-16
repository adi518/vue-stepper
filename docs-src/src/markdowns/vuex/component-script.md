```js
import path from 'path'
import router from './router'

import { VStepper } from 'vue-stepper-component'

export default {
  components: {
    VStepper
  },
  watch: {
    $route: { 
      handler(route) {
        this.changeRoute(route)
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters({
      steps: types.STEPS,
      step: types.STEP
    }),
    step: {
      get() {
        return this.step
      },
      set(step: route) {
        this.changeRoute({ name: route })
      }
    }
  },
  methods: {
    changeRoute(route) {
      const basename = route.name || path.basename(route.fullPath)

      router.push(basename)
    }
  }
}
```
