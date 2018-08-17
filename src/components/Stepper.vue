<template>
  <div :class="[namespace.kebab]">
    <component :is="container">
      <v-step
        v-for="(step, key) in array"
        :name="id"
        :key="key"
        :index="key"
        :debug="debug"
        :divider="divider"
        @change="handleChange"
        :visited="step.visited"
        :disabled="step.disabled"
        :active="step.index === toIndex(value.step)">

        <!-- Proxy slot ("index-root") -->
        <template
          slot="index-root"
          slot-scope="scope"
          v-if="withSlot(getSlotName('index-root', scope.display))">
          
          <!-- Lift slot ("index-root") -->
          <slot :name="getSlotName('index-root', scope.display)" v-bind="scope"></slot>
        </template>

        <!-- Proxy slot ("index") -->
        <template
          slot="index"
          slot-scope="scope"
          v-if="withoutSlot(getSlotName('index-root', scope.display))">

          <!-- Lift slot ("index") -->
          <slot :name="getSlotName('index', scope.display)" v-bind="scope">
            {{ scope.display }}
          </slot>
        </template>

        <!-- Proxy slot ("default") -->
        <template slot="title" slot-scope="scope">

          <!-- Lift slot ("default") -->
          <slot :name="getSlotName('title', scope.display)" v-bind="scope"></slot>
        </template>

      </v-step>
    </component>
  </div>
</template>

<script>
import Step from './Step'
import Container from './Stepper.container'

import utils from '@/modules/Utils'
import Utils from '@/modules/Stepper.Utils'

export default {
  name: 'v-stepper',

  components: {
    'v-step': Step
  },

  props: {
    /**
     * Contains the current step value. Very similar to a `value`
     * attribute on an input. In most cases, you'll want to set
     * this as a two-way binding, using the `v-model` directive.
     * @type {(number|undefined|null)}
     */
    value: {
      type: Object,
      default: () => {
        return new Utils.Model()
      },
      validator: ({ id, step }) => {
        const tests = []

        tests.push({
          name: 'id',
          type: [undefined, null, String.name],
          result: [undefined, null].includes(id) || typeof id === 'string'
        })

        tests.push({
          name: 'step',
          type: Number.name,
          result: utils.isNumber(step)
        })

        return tests.every(({ name, type, result }) => {
          if (result) {
            return true
          }
          console.error(
            `[${
              this.namespace.capitalize
            } error]: Property "${name}" must be of type ${[]
              .concat(type)
              .map(type => String(type))
              .join(' or ')}.`
          )
          return false
        })
      }
    },

    /**
     * Contains the steps count.
     * @type {number}
     */
    steps: {
      type: Number,
      default: 0
    },

    /**
     * Whether to run in linear
     * mode (random otherwise).
     * @type {boolean}
     */
    linear: {
      type: Boolean,
      default: true
    },

    /**
     * Whether to sync state with storage.
     * @type {boolean}
     */
    persist: {
      type: Boolean,
      default: false
    },

    /**
     * Which Storage API to use.
     * Should be used with `persist` prop.
     * @type {string}
     */
    storekeeper: {
      type: String,
      default: 'localStorage',
      validator(value) {
        return ['localStorage', 'sessionStorage'].includes(value)
      }
    },

    /**
     * Adds/Removes a divider to/from each Step component.
     * @type {boolean}
     */
    divider: {
      type: Boolean,
      default: true
    },

    /**
     * Steps container (component).
     * @type {object}
     */
    container: {
      type: Object,
      default: () => Container
    },

    /**
     * Sets up debug mode, which reveals the
     * actual radio-button behind each step.
     * @type {boolean}
     */
    debug: {
      type: Boolean,
      default: false
    }
  },

  data() {
    const { toIndex, getArray, getStepObj, $options: { name: kebab } } = this
    const step = getStepObj()
    const array = getArray()
    const index = toIndex(step.display)
    const namespace = { kebab, capitalize: 'V-Stepper' }
    return { namespace, index, array }
  },

  watch: {
    /**
     * When `value` prop changes, update storage.
     */
    value: {
      handler({ step: display }) {
        this.index = this.toIndex(display)
        if (this.persist) {
          this.setStorage()
        }
      }
    },

    /**
     * When internal property `index` changes,
     * convert to value and update v-model.
     */
    index: {
      handler(index) {
        const display = this.toDisplay(index)
        this.emit(display)
      },
      immediate: true
    }
  },

  created() {
    /**
     * Update from/set Storage if persistable.
     */
    if (this.persist) {
      const storage = this.getStorage()
      if (storage) {
        this.array = storage.array
        this.index = storage.index
      } else {
        this.setStorage()
      }
    }
  },

  destroyed() {
    /**
     * Remove from Storage if persistable.
     */
    if (this.persist) {
      window[this.storekeeper].removeItem(this.id)
    }
  },

  computed: {
    /**
     * Namespaced id.
     * @returns {string}
     */
    id() {
      return `${this.namespace.kebab}-${this._uid}`
    },

    /**
     * FIXME: doesn't compute correctly.
     * Current index, display.
     * @returns {number}
     */
    current() {
      const { toIndex, display } = this
      const index = toIndex(display)
      return {
        index,
        display
      }
    },

    /**
     * Step (aka display-index).
     * @returns {number}
     */
    step() {
      return this.value.step
    },

    /**
     * @returns {number}
     */
    lastIndex() {
      return this.array.length - 1
    },

    /**
     * @returns {boolean}
     */
    random() {
      return this.linear === false
    },

    /**
     * Creates flags for ease of composition.
     * @returns {object}
     */
    flags() {
      const { getSimpleArray, index } = this
      const steps = getSimpleArray()
      return steps.reduce((flags, step, $index) => {
        const flag = `step${$index + 1}`
        const alias = `s${$index + 1}`
        flags[flag] = index === $index
        flags[alias] = index === $index
        return flags
      }, {})
    }
  },

  methods: {
    /**
     * Get step object (eases code composition).
     * @param {number} step
     * @returns {object}
     */
    getStepObj(step = this.value.step) {
      const index = this.toIndex(step)
      return { index, display: step }
    },

    /**
     * Maps index to display value.
     * @param {number} index
     * @returns {number}
     */
    toDisplay(index = 0) {
      return index + 1
    },

    /**
     * Maps display value to index.
     * @param {number} display
     * @returns {number}
     */
    toIndex(display = 0) {
      return display - 1
    },

    /**
     * Whether a step
     * exists or not.
     * @param {number} index
     * @returns {boolean}
     */
    doesStepExist(index) {
      return !!this.array[index]
    },

    /**
     * Whether a step
     * is a intermediate.
     * @param {number} index
     * @returns {boolean}
     */
    isIntermediateIndex(index) {
      return index > 0 && index < this.lastIndex
    },

    /**
     * Handle `change` event and
     * programmatic changes.
     * @param {event} event
     * @returns {void}
     */
    handleChange() {
      this.changeStep.apply(this, arguments)
    },

    /**
     * Changes step by index.
     * @param {number} index
     * @returns {void}
     */
    changeStep(index) {
      const current = this.getStepObj()
      const isNext = index === this.index + 1
      const isPrevious = index === this.index - 1
      const display = this.toDisplay(index)

      if (this.random) {
        this.setStep(current.index, 'visited', true)

        this.emit(display)

        return
      }

      if (this.linear && (isNext || isPrevious)) {
        this.setStep(index, 'active', true)
        this.setStep(index, 'visited', false)
        this.setStep(index, 'disabled', false)
        this.setStep(current.index, 'active', false)
        this.setStep(current.index, 'visited', true)

        this.disableSteps(index)

        this.emit(display)
      }
    },

    /**
     * Disables all steps after index.
     * @param {number} index
     * @returns {void}
     */
    disableSteps(index = 0, isFirst = this.isFirst) {
      const first = isFirst(index)
      this.array.forEach(step => {
        if (step.index > index || first) {
          this.setStep(step.index, 'disabled', true)
        }
      })
    },

    /**
     * Constructs a simple steps array.
     * E.g.: `[1, 2, 3]`.
     * @param {number} steps
     * @returns {array}
     */
    getSimpleArray(steps = this.steps) {
      return Utils.makeStepsArray(steps)
    },

    /**
     * Constructs steps array
     * from `steps` prop.
     * @param {boolean} linear
     * @returns {Array}
     */
    getArray(linear = this.linear) {
      const { toDisplay, isCurrent, isAdjacent, getSimpleArray } = this
      const steps = getSimpleArray()
      return steps.map((step, index) => {
        const flags = { visited: false }
        const display = toDisplay(index)
        const current = isCurrent(index)
        const adjacent = isAdjacent(index)
        const disableable = current || adjacent

        if (linear && disableable) {
          flags.disabled = true
        }

        return { index, display, ...flags }
      })
    },

    /**
     * Offsets stepper {n} steps.
     * @returns {void}
     */
    offset(offset, index = this.index) {
      const offsetted = index + offset
      if (this.doesStepExist(offsetted)) {
        this.handleChange(offsetted)
      }
    },

    /**
     * Whether first index.
     * @param {number} index
     * @returns {boolean}
     */
    isFirst(index) {
      return index === 0
    },

    /**
     * Whether second index.
     * @param {number} index
     * @returns {boolean}
     */
    isSecond(index) {
      return index - 1 === 0
    },

    /**
     * Whether current index.
     * @param {number} index
     * @returns {boolean}
     */
    isCurrent(index) {
      return this.index === index
    },

    /**
     * Whether adjacent index.
     * @param {number} indexa
     * @param {number} indexb
     * @returns {boolean}
     */
    isAdjacent(indexa, indexb) {
      const delta = indexa - indexb
      return [1, -1].includes(delta)
    },

    /**
     * Goes to next step.
     * @returns {void}
     */
    next() {
      this.offset(1)
    },

    /**
     * Goes to previous step.
     * @returns {void}
     */
    previous() {
      this.offset(-1)
    },

    /**
     * Resets the stepper.
     * @returns {void}
     */
    reset() {
      this.array = this.getArray()
      this.index = 0
      this.$emit('reset')
    },

    /**
     * Sets a step property to array.
     * @param {number} index
     * @param {string} prop
     * @param {string} value
     * @returns {void}
     */
    setStep(index, prop, value) {
      this.$set(this.array[index], prop, value)
    },

    /**
     * Storage setter.
     * @returns {void}
     */
    setStorage() {
      const { id: key, index, array } = this
      const value = JSON.stringify({ index, array })
      window[this.storekeeper].setItem(key, value)
    },

    /**
     * Storage getter.
     * @returns {object}
     */
    getStorage() {
      const storage = window[this.storekeeper].getItem(this.id)
      return JSON.parse(storage)
    },

    /**
     * Storage Remover.
     * @returns {void}
     */
    removeStorage() {
      window[this.storekeeper].removeItem(this.id)
    },

    /**
     * Constructs a step slot name.
     * @returns {string}
     */
    getSlotName: Utils.getSlotName,

    /**
     * Update v-model.
     * @returns {void}
     */
    emit(display) {
      const { id, flags } = this
      this.$emit('input', { id, step: display, flags })
    },

    /**
     * Returns whether step slot was passed.
     * @returns {boolean}
     */
    withSlot(name) {
      return Utils.withSlot(this, name)
    },

    /**
     * Returns whether step slot was not passed.
     * @returns {boolean}
     */
    withoutSlot(name) {
      return Utils.withoutSlot(this, name)
    }
  },
  inheritAttrs: false
}
</script>
