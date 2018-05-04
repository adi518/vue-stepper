<template>
  <div :class="[namespace.kebab]">
    <w-step
      v-for="(step, index) in map"
      :name="id"
      :key="index"
      :debug="debug"
      :index="index"
      :active="step.index === state.index"
      :visited="step.visited"
      :disabled="step.disabled"
      :with-divider="isIntermediateIndex(index)"
      @change="onChange(index)"
    >
      <template slot="index" slot-scope="api">
        <slot :name="`step-${api.displayIndex}-index`" v-bind="api">
          {{api.displayIndex}}
        </slot>
      </template>
      <template slot-scope="api">
        <slot :name="`step-${api.displayIndex}`" v-bind="api"></slot>
      </template>
    </w-step>
  </div>
</template>

<script>
// https://www.webpackbin.com/bins/-KvHS7KEmrTLJOYWS9k2
// https://cristijora.github.io/vue-form-wizard/#/?id=demos
// https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript

// Abstract
import { WComponent } from '@/components/component'

// Components
import WStep from './Step'

// Implementation
export default {
  name: 'WStepper',
  extends: WComponent,
  components: {
    WStep
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
      default: true
    },
    storekeeper: {
      type: String,
      default: 'localStorage',
      validator(value) {
        return ['localStorage', 'sessionStorage'].includes(value)
      }
    },
    debug: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      map: this.getMap(),
      state: { index: this.value - 1, reset: false, initialized: true }
    }
  },
  watch: {
    state: {
      handler(state, oldState) {
        this.setStep(state.index, 'active')
        this.setStep(state.index, 'disabled', false)
        this.setStep(oldState.index, 'active', false)
        if (this.linear) {
          this.map.forEach(step => {
            if (step.index > state.index) {
              this.setStep(step.index, 'disabled')
            }
          })
        }
        if (this.state.reset) {
          this.state.reset = false
        } else {
          // Fix a bug/caveat where initial change
          // returns old index as 1 instead of 0,
          // therefore we utilize a flag and then unset it.
          if (this.state.initialized) {
            this.setStep(0, 'visited')
            this.state.initialized = false
          } else {
            this.setStep(oldState.index, 'visited')
          }
        }
        if (this.persist) {
          this.setStorage()
        }
        if (state.index === oldState.index) {
          // do nothing
        } else {
          this.emit(state.index)
        }
      },
      deep: true
    }
  },
  created() {
    if (this.persist) {
      const storage = this.getStorage()
      if (storage) {
        this.state = storage.state
        this.map = storage.map
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
      return `${this.namespace.kebab}-${this._uid}`
    },
    lastIndex() {
      return this.map.length - 1
    }
  },
  methods: {
    onChange(index) {
      this.state.index = index
    },
    emit(index = this.state.index) {
      this.$emit('input', this.map[index].value)
    },
    isIntermediateIndex(index) {
      return index < this.lastIndex
    },
    getMap() {
      return Array.from(Array(this.steps), (step, index) => {
        const value = index + 1
        const visited = false
        const disabled = false
        return { index, value, visited, disabled }
      })
    },
    offset(offset) {
      const index = this.state.index + offset
      const step = this.map[index]
      if (step) {
        this.state.index = index
      }
    },
    next() {
      this.offset(1)
    },
    previous() {
      this.offset(-1)
    },
    reset() {
      this.state = { index: 0, reset: true, initialized: true }
      this.map = this.getMap()
      this.$emit('reset')
    },
    setStep(index, prop, value = true) {
      if (Number.isInteger(index)) {
        this.$set(this.map[index], prop, value)
      }
    },
    setStorage() {
      const { state, map } = this
      window[this.storekeeper].setItem(this.id, JSON.stringify({ state, map }))
    },
    getStorage() {
      return JSON.parse(window[this.storekeeper].getItem(this.id))
    }
  }
}
</script>

<style lang="scss" scoped>
.w-stepper {
  display: flex;
  user-select: none;
  flex-direction: row;
  @include w-breakpoint-sm {
    display: none;
  }
}
</style>