<template>
  <div class="v-stepper">
    <component :is="rootComponent">
      <v-step
        v-for="(step, $index) in stepsArr"
        :name="id"
        :key="$index"
        :debug="debug"
        :index="$index"
        :visited="step.visited"
        :disabled="step.disabled"
        :with-divider="withDivider"
        :active="step.index === toIndex(value)"
        @change="handleChange"
      >
        <template slot="index" slot-scope="api">
          <slot :name="`step-${api.displayIndex}-index`" v-bind="api">
            {{api.displayIndex}}
          </slot>
        </template>
        <template slot-scope="api">
          <slot :name="`step-${api.displayIndex}`" v-bind="api"></slot>
        </template>
      </v-step>
    </component> 
  </div>
</template>

<script>
// https://www.webpackbin.com/bins/-KvHS7KEmrTLJOYWS9k2
// https://material.angular.io/components/stepper/overview
// https://cristijora.github.io/vue-form-wizard/#/?id=demos
// https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript

// Components
import VStep from './Step'
import VStepperRoot from './StepperRoot'

// Implementation
export default {
  name: 'VStepper',
  components: {
    VStep
  },
  props: {
    value: {
      type: Number,
      default: 1
    },
    steps: {
      type: Number,
      default: 0
    },
    linear: {
      type: Boolean,
      default: true
    },
    persist: {
      type: Boolean,
      default: false
    },
    storekeeper: {
      type: String,
      default: 'localStorage',
      validator(value) {
        return ['localStorage', 'sessionStorage'].includes(value)
      }
    },
    withDivider: {
      type: Boolean,
      default: true
    },
    rootComponent: {
      type: Object,
      default: () => VStepperRoot
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      namespace: 'v-stepper',
      stepsArr: this.getStepsArr(),
      index: this.toIndex(this.value)
    }
  },
  watch: {
    value(value) {
      this.index = this.toIndex(value)
      if (this.persist) {
        this.setStorage()
      }
    },
    index: {
      handler(index) {
        this.$emit('input', this.toValue(index))
      },
      immediate: true
    }
  },
  created() {
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
    window[this.storekeeper].removeItem(this.id)
  },
  computed: {
    id() {
      return `${this.namespace}-${this._uid}`
    },
    lastIndex() {
      return this.stepsArr.length - 1
    }
  },
  methods: {
    toValue(index) {
      return index + 1
    },
    toIndex(value) {
      return value - 1
    },
    doesStepExist(index) {
      return !!this.stepsArr[index]
    },
    isIntermediateIndex(index) {
      return index > 0 && index < this.lastIndex
    },
    handleChange(index) {
      const isNext = index === this.index + 1
      const isPrevious = index === this.index - 1
      const oldIndex = this.toIndex(this.value)
      if (this.linear) {
        if (isNext || isPrevious) {
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
          this.$emit('input', this.toValue(index))
        }
      } else {
        this.setStep(oldIndex, 'visited', true)
        this.$emit('input', this.toValue(index))
      }
    },
    getStepsArr() {
      return Array.from(Array(this.steps), (step, index) => {
        const isFirst = index === 0
        const isNext = index - 1 === 0
        let disabled = false
        if (this.linear) {
          if (isFirst || isNext) {
            // Keep it enabled.
          } else {
            disabled = true
          }
        }
        const visited = false
        const value = this.toValue(index)
        return { index, value, visited, disabled }
      })
    },
    offset(offset) {
      const index = this.index + offset
      if (this.doesStepExist(index)) {
        this.handleChange(index)
      }
    },
    next() {
      this.offset(1)
    },
    previous() {
      this.offset(-1)
    },
    reset() {
      this.stepsArr = this.getStepsArr()
      this.index = 0
      this.$emit('reset')
    },
    setStep(index, prop, value) {
      this.$set(this.stepsArr[index], prop, value)
    },
    setStorage() {
      const { index, stepsArr } = this
      window[this.storekeeper].setItem(
        this.id,
        JSON.stringify({ index, stepsArr })
      )
    },
    getStorage() {
      return JSON.parse(window[this.storekeeper].getItem(this.id))
    }
  },  
  inheritAttrs: false
}
</script>
