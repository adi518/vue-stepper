<template>
  <div :class="[namespace.kebab]">
    <component :is="container">
      <v-step
        v-for="(step, $index) in stepsArr"
        :name="id"
        :key="$index"
        :debug="debug"
        :index="$index"
        :divider="divider"
        @change="handleChange"
        :visited="step.visited"
        :disabled="step.disabled"
        :active="step.index === toIndex(value.value)">

        <!-- Proxy slot ("index-root") -->
        <template
          slot="index-root"
          slot-scope="scope"
          v-if="withSlot(getSlotName('index-root', scope.displayIndex))">
          <!-- Lift slot ("index-root") -->
          <slot :name="getSlotName('index-root', scope.displayIndex)" v-bind="scope"></slot>
        </template>

        <!-- Proxy slot ("index") -->
        <template
          slot="index"
          slot-scope="scope"
          v-if="withoutSlot(getSlotName('index-root', scope.displayIndex))">
          <!-- Lift slot ("index") -->
          <slot :name="getSlotName('index', scope.displayIndex)" v-bind="scope">
            {{ scope.displayIndex }}
          </slot>
        </template>

        <!-- Proxy slot ("default") -->
        <template slot-scope="scope">
          <!-- Lift slot ("default") -->
          <slot :name="getSlotName('', scope.displayIndex)" v-bind="scope"></slot>
        </template>
        
      </v-step>
    </component> 
  </div>
</template>

<script>
import Step from './Step'
import Container from './Stepper.container'

import Utils from '@/modules/Utils'
import $Utils from '@/modules/Stepper.Utils'

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
      default: () => ({
        value: 1,
        id: undefined
      }),
      validator: ({ id, value }) => {
        const tests = []

        tests.push({
          name: 'id',
          type: [undefined, null, String.name],
          value: [undefined, null].includes(id) || typeof id === 'string'
        })

        tests.push({
          name: 'value',
          type: [Number.name],
          value: Utils.isNumber(value)
        })

        return tests.every(({ name, type, value }) => {
          if (value) {
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
    const { value: { value } } = this
    return {
      namespace: { kebab: 'v-stepper', capitalize: 'V-Stepper' },
      stepsArr: this.getStepsArr(),
      index: this.toIndex(value)
    }
  },

  watch: {
    /**
     * When `value` prop changes, update storage.
     */
    value: {
      handler({ value }) {
        this.index = this.toIndex(value)
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
        this.emitValue(this.toValue(index))
      },
      immediate: true
    }
  },

  created() {
    /**
     * Update from Storage if persistable.
     */
    if (this.persist) {
      const storage = this.getStorage()
      if (storage) {
        this.stepsArr = storage.stepsArr
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
     * @returns {string}
     */
    id() {
      return `${this.namespace.kebab}-${this._uid}`
    },

    /**
     * @returns {number}
     */
    lastIndex() {
      return this.stepsArr.length - 1
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
      const { steps, index } = this
      return Array.from(Array(steps)).reduce((flags, step, $index) => {
        const flag = `step${$index + 1}`
        flags[flag] = index === $index
        return flags
      }, {})
    }
  },

  methods: {
    /**
     * Converts index to value.
     * @returns {number}
     */
    toValue(index) {
      return index + 1
    },

    /**
     * Converts value to index.
     * @returns {number}
     */
    toIndex(value = 0) {
      return value - 1
    },

    /**
     * Whether a step
     * exists or not.
     * @returns {boolean}
     */
    doesStepExist(index) {
      return !!this.stepsArr[index]
    },

    /**
     * @returns {boolean}
     */
    isIntermediateIndex(index) {
      return index > 0 && index < this.lastIndex
    },

    /**
     * Handle `change` event and
     * programmatic changes.
     * @returns {void}
     */
    handleChange() {
      this.changeStep.apply(this, arguments)
    },

    /**
     * Changes step by index.
     * @returns {void}
     */
    changeStep(index) {
      const value = this.getValue()
      const isNext = index === this.index + 1
      const isPrevious = index === this.index - 1
      const oldIndex = this.toIndex(value)

      if (this.random) {
        this.setStep(oldIndex, 'visited', true)
        this.emitValue(this.toValue(index))

        return
      }

      if (this.linear && (isNext || isPrevious)) {
        this.setStep(index, 'active', true)
        this.setStep(index, 'visited', false)
        this.setStep(index, 'disabled', false)
        this.setStep(oldIndex, 'active', false)
        this.setStep(oldIndex, 'visited', true)

        this.stepsArr.forEach(step => {
          if (step.index > index) {
            this.setStep(step.index, 'disabled', true)
          }
        })

        this.emitValue(this.toValue(index))
      }
    },

    /**
     * Value getter
     * @returns {number}
     */
    getValue() {
      return this.value.value
    },

    /**
     * Constructs steps array
     * from `steps` prop.
     * @returns {Array}
     */
    getStepsArr() {
      return Array.from(Array(this.steps), (step, index) => {
        const isFirst = index === 0
        const isNext = index - 1 === 0
        let disabled = false
        if (this.linear) {
          if (isFirst || isNext) {
            // Leave Step enabled.
          } else {
            disabled = true
          }
        }
        const visited = false
        const value = this.toValue(index)
        return { index, value, visited, disabled }
      })
    },

    /**
     * Offsets stepper {n} steps.
     * @returns {void}
     */
    offset(offset) {
      const index = this.index + offset
      if (this.doesStepExist(index)) {
        this.handleChange(index)
      }
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
      this.stepsArr = this.getStepsArr()
      this.index = 0
      this.$emit('reset')
    },

    /**
     * Sets a step property.
     * @returns {void}
     */
    setStep(index, prop, value) {
      this.$set(this.stepsArr[index], prop, value)
    },

    /**
     * Storage setter.
     * @returns {void}
     */
    setStorage() {
      const { index, stepsArr } = this
      window[this.storekeeper].setItem(
        this.id,
        JSON.stringify({ index, stepsArr })
      )
    },

    /**
     * Storage getter.
     * @returns {object}
     */
    getStorage() {
      return JSON.parse(window[this.storekeeper].getItem(this.id))
    },

    /**
     * Constructs a step slot name.
     * @returns {string}
     */
    getSlotName: $Utils.getSlotName,

    /**
     * Update v-model.
     * @returns {void}
     */
    emitValue(value) {
      const { id, flags } = this
      this.$emit('input', { id, value, flags })
    },

    /**
     * Returns whether step slot was passed.
     * @returns {boolean}
     */
    withSlot: $Utils.withSlot,

    /**
     * Returns whether step slot was not passed.
     * @returns {boolean}
     */
    withoutSlot: $Utils.withoutSlot
  },
  inheritAttrs: false
}
</script>
