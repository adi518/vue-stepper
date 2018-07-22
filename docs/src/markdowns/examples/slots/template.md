```html
<v-stepper steps="steps" v-model="step">
  
  <!-- Default Slot (Step Name) -->
  <template slot="step-{n}" slot-scope="scope"> Eeny </template>
  
  <!-- Default Slot (Custom Step Name template) -->
  <template slot="step-{n}" slot-scope="scope">
    {{ scope.displayIndex }} Eeny
  </template>

  <!-- Index Slot -->
  <template slot="step-{n}-index" slot-scope="scope">
    <!-- Custom Template -->
    <span class="step__index--custom">
      {{ scope.displayIndex }}
    </span>
  </template>
  
  <!--
    Index Root Slot
    ***************
    Alternatively, we can compose `displayIndex` in `default` Slot
    and remove Index from composition. V-Void is a third-party component
    for clearing slots in Vue@2.5.3+: https://www.npmjs.com/package/vue-void.
  -->  
  <template :slot="`step-{n}-index-root`" v-bind="scope">
    <v-void :key="step" v-if="model.breakpoint.noMatch"></v-void>
  </template>
  
</v-stepper>
```