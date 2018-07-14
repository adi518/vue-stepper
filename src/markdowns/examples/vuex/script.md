```js
import { VStepper } from 'vue-stepper-component'

export default {
  components: {
    VStepper
  },
  computed: {
    ...mapGetters({
      route: types.ROUTE
    }),
    step: {
      get() {
        return this.route
      },
      set(route) {
        this.$commit('COMMIT_STEP', route)
      }
    }
  }
}
```
