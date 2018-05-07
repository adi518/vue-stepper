```js
<script>
import VStepper from 'vue-stepper-component'

export default {
  components: {
    VStepper
  },
  computed: {
    ...mapGetters({
      route: types.GET_ROUTE,
      steps: types.GET_STEPS
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
</script>
```
