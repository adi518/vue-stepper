```js
<script>
import VStepper from 'vue-stepper-component'

export default {
  components: {
    VStepper
  },
  data() {
     return {
        step: 1,
        steps: [
          { title: 'eeny', value: 1 },
          { title: 'miny', value: 2, disabled: true },
          { title: 'moe' , value: 3, disabled: true }
        ]
     }
  }
}
</script>
```
