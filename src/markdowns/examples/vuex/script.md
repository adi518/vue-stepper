```js
import { VStepper } from 'vue-stepper-component'

export default {
  components: {
    VStepper
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
      set(step) {
        this.$commit('COMMIT_STEP', step)
      }
    }
  }
}
```
