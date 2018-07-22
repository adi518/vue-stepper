<template>
  <component :is="label" :klass="classes">
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
  </component>
</template>

<script>
import Label from './Step.label'

export default {
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
    label: {
      type: Object,
      default: () => Label
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    namespace: { kebab: 'v-step-bare', capitalize: 'V-StepBare' }
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
      const { index, displayIndex, defaultSlot, flags, classes } = this
      return {
        index,
        flags,
        classes,
        defaultSlot,
        displayIndex
      }
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
