```js
props: {
  /**
   * Contains the current step value. Very similar to a
   * `value` attribute on an input. In most cases, you'll want
   * to set this as a two-way binding, using the `v-model` directive.
   * @type {String||Number||null}
   */
  value: {
    type: [String, Number],
    default: null
  },

  /**
   * An array of strings or numbers to be used as step values.
   * @type {Array}
   */
  steps: {
    type: Array,
    default() {
      return []
    }
  },

  /**
   * Sets up the Wizard in debug mode, which reveals the actual
   * Radio-button behind each step.
   * @type {Boolean}
   */
  debug: {
    type: Boolean,
    default: false
  }
}
```
