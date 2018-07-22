<template>
  <div :class="['v-step', classes]">
    <label class="label">
      <slot name="index-root" v-bind="scope">
        <slot name="index" v-bind="scope">
          {{ scope.displayIndex }}
        </slot>
      </slot>
      <slot v-bind="scope"></slot>      
      <input
        type="radio"
        v-show="debug"
        :checked="active"
        :name="computedName"
        @change="handleChange">
    </label>
  </div>
</template>

<script>
import Utils from '@/modules/Stepper.Utils'

export default {
  name: 'VStep',
  props: {
    index: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    visited: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    divider: {
      type: Boolean,
      default: false
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    namespace: { kebab: 'v-step', capitalize: 'V-Step' }
  }),
  computed: {
    id() {
      const { namespace: { kebab: namespace }, _uid: id, index } = this
      return [namespace, id, index].join('-')
    },
    displayIndex() {
      return this.index + 1
    },
    computedName() {
      return this.name || this.id
    },
    defaultSlot() {
      return this.$slots.default || this.$scopedSlots.default
    },
    scope() {
      const { index, displayIndex, defaultSlot, flags } = this
      return { index, displayIndex, defaultSlot, flags }
    },
    flags() {
      return {
        active: this.active,
        visited: this.visited,
        disabled: this.disabled
      }
    },
    classes() {
      return {
        'is-active': this.active,
        'is-visited': this.visited,
        'is-disabled': this.disabled
      }
    }
  },
  methods: {
    /**
     * Lift index (a la v-model).
     * @returns {void}
     */
    handleChange() {
      this.$emit('change', this.index)
    }
  },
  inheritAttrs: false
}
</script>
