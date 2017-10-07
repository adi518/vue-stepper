```js
<script>
import vWizard from 'vue-wizard'

export default {
  components: {
    vWizard
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
