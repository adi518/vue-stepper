```js
import path from 'path'
import router from './router'
import { mapGetters } from 'vuex'

import { VStepper } from 'vue-stepper-component'

export default {
  components: {
    VStepper
  },
  created() {
    this.changeRoute(route)
  },
  watch: {
    $route(route) {
      this.changeRoute(route)
    }
  },
  computed: {
    ...mapGetters([
      'step',
      'steps',
      'stepsMap'
    ]),
    step: {
      get() {
        return this.step
      },
      set(step) {
        const { route: { name } } = this.stepsMap.get(step)

        this.changeRoute({ name })
      }
    }
  },
  methods: {
    changeRoute(route) {
      router.push(route)
    }
  }
}
```
