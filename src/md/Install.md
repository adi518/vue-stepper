```html
<template>
   <div id="app">
      <v-wizard v-model="step" :steps="steps" />
      <div v-if="step == 1">
        <p>
          <b>Eeny Content</b>
        </p>
        <p>...</p>
      </div>
      <div v-if="step == 2">
        <p>
          <b>Miny Content</b>
        </p>
        <p>...</p>
      </div>
      <div v-if="step == 3">
        <p>
          <b>Moe Content</b>
        </p>
        <p>...</p>
      </div>
   </div>
</template>

<script>
import vWizard from 'vue-wizard'

export default {
  components: { vWizard },
  data() {
     return {
        step: 1,
        steps: [
          { title: 'eeny', value: 1 },
          { title: 'miny', value: 2 },
          { title: 'moe' , value: 3 }
        ]
     }
  }
}
</script>
```
