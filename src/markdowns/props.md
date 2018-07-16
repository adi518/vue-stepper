```js
/**
 * Contains the current step value. Very similar to a
 * `value` attribute on an input. In most cases, you'll want
 * to set this as a two-way binding, using the `v-model` directive.
 * @type {Number||undefined||null}
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
 * Sets up the Stepper in either
 * linear or random mode.
 * @type {Boolean}
 */
linear: {
  type: Boolean,
  default: true
},

/**
 * Sync state with storage?
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
withDivider: {
  type: Boolean,
  default: true
},

/**
 * Steps wrapper component.
 * @type {Object}
 */
rootComponent: {
  type: Object,
  default: () => VStepperRoot
},

/**
 * Sets up debug mode, which reveals
 * the actual radio-button behind each step.
 * @type {Boolean}
 */
debug: {
  type: Boolean,
  default: false
}
```
