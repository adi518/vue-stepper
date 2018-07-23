## Install
```bash
$ npm install vue-stepper-component --save
```

## Usage
To use the component in your template, simply import and register with your component. To control the Stepper state, we use the `v-model` directive, similar to an input element.

### Template
```html
<v-stepper :steps="steps" v-model="step"></v-stepper>

<template v-if="step.flags.step1">
  <!-- Step 1 Content -->
</template>

<template v-if="step.flags.step2">
  <!-- Step 2 Content -->
</template>

<template v-if="step.flags.step3">
  <!-- Step 3 Content -->
</template>
```

### Script
```js
import { VStepper } from 'vue-stepper-component'
export default {
  components: {
    VStepper
  },
  data: () => ({
    steps: 3,
    step: undefined
  })
}
```

## Slots
Slots are scoped and generated dynamically according to the amount of steps. Since they are scoped, you can leverage shared state and customize either one. Slots names: `default`, `index-root`, `index`.

Every Slot scope consists of the following properties: `index`, `displayIndex`, `flags: { active, disabled, visited }`.

Few examples of what you can do:

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

## Vuex
A common practice for managing your Stepper state is through a Store. The following is merely an implementation proposal.

### Store
```js
// State

const stepsMap = new Map([
  [1, { route: { name: 'step-1' } }],
  [2, { route: { name: 'step-2' } }],
  [3, { route: { name: 'step-3' } }]
])

const state = {
  step: 1,
  steps: stepsMap.size,
  stepsMap: stepsMap
 }

// Getters...
// Mutations...

// Export
```

### Template
```html
<v-stepper :steps="steps" v-model="step"></v-stepper>

<!-- Change routes by step -->
<router-view></router-view>
```

### Script
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

## Programmatic
Start off by assigning special Vue property `ref` to the component. Then, assign an API method to an `Event listener`. The following example is similar to the Demo above, where we assign `previous`, `next` and `reset` to the `click` event of a button element.

```html
<v-stepper ref="stepper" :steps="steps" v-model="step"></v-stepper>

<!-- Stepper Controls -->
<button type="button" @click="$refs.stepper.previous()">Previous</button>
<button type="button" @click="$refs.stepper.next()">Next</button>
<button type="button" @click="$refs.stepper.reset()">Reset</button>
```

## API Props
```js
/**
 * Contains the current step value. Very similar to a `value`
 * attribute on an input. In most cases, you'll want to set
 * this as a two-way binding, using the `v-model` directive.
 * @type {(number|undefined|null)}
 */
value: {
  type: Number,
  default: 1
},

/**
 * Contains the steps count.
 * @type {Number}
 */
steps: {
  type: Number,
  default: 0
},

/**
 * Whether to run in linear
 * mode (random otherwise).
 * @type {Boolean}
 */
linear: {
  type: Boolean,
  default: true
},

/**
 * Whether to sync state with storage.
 * @type {Boolean}
 */
persist: {
  type: Boolean,
  default: false
},

/**
 * Which Storage API to use.
 * Should be used with `persist` prop.
 * @type {String}
 */
storekeeper: {
  type: String,
  default: 'localStorage',
  validator(value) {
    return ['localStorage', 'sessionStorage'].includes(value)
  }
},

/**
 * Add/Remove a divider to/from each Step component.
 * @type {Boolean}
 */
divider: {
  type: Boolean,
  default: true
},

/**
 * Steps container (component).
 * @type {Object}
 */
container: {
  type: Object,
  default: () => Container
},

/**
 * Sets up debug mode, which reveals the
 * actual radio-button behind each step.
 * @type {Boolean}
 */
debug: {
  type: Boolean,
  default: false
}
```

## Development (Component)
```bash
$ npm start
```

## Development (Documentation)
```bash
$ npm run docs
```

## Support
Please open an [issue](https://github.com/adi518/vue-stepper-component/issues) for support.

## License
Copyright (c) 2018 by [MIT](https://opensource.org/licenses/MIT)