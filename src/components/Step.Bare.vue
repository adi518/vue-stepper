<template>
  <component :is="label" :klass="classes">
    <slot name="index" v-bind="scope">
      {{ scope.display }}
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
import Label from './Step.Label'

export default {
  name: 'v-step-bare',

  props: {
    /**
     * Non-display Index.
     */
    index: {
      type: Number,
      default: 0
    },

    /**
     * Input name (required).
     * Used for grouping steps together.
     * Similar to a radio-group.
     */
    name: {
      type: String,
      required: true
    },

    /**
     * Whether Step is active.
     * Attached to Input `checked` attribute.
     * Composed into a CSS class.
     * Attached to slot scope.
     */
    active: {
      type: Boolean,
      default: false
    },

    /**
     * Whether Step was visited.
     * Composed into a CSS class.
     * Attached to slot scope.
     */
    visited: {
      type: Boolean,
      default: false
    },

    /**
     * Whether Step is disabled.
     * Composed into a CSS class.
     * Attached to slot scope.
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Label component to use.
     * Can be used for customizing looks.
     * Expects a component descriptor.
     */
    label: {
      type: Object,
      default: () => Label
    },

    /**
     * Whether in debug mode.
     * Displays actual radios.
     */
    debug: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const { $options: { name: kebab } } = this
    return { namespace: { kebab } }
  },
  computed: {
    /**
     * Namespaced id.
     * @returns {string}
     */
    id() {
      const { namespace, _uid: id, index } = this
      return [namespace.kebab, id, index].join('-')
    },

    /**
     * Display index getter.
     * @returns {number}
     */
    display() {
      return this.index + 1
    },

    /**
     * Input name getter.
     * @returns {string}
     */
    computedName() {
      return this.name
    },

    /**
     * Default slot getter.
     * Can be used for reusable composition.
     * Either regular or scoped.
     * Attached to slot scope.
     * @returns {(array|function)}
     */
    defaultSlot() {
      return this.$slots.default || this.$scopedSlots.default
    },

    /**
     * Scope attached to slot.
     * @returns {object}
     */
    scope() {
      const { index, display, defaultSlot, flags, classes } = this
      return {
        index,
        flags,
        classes,
        display,
        defaultSlot
      }
    },

    /**
     * Flags for ease of composition.
     * Attached to slot scope.
     * @returns {object}
     */
    flags() {
      return {
        active: this.active,
        visited: this.visited,
        disabled: this.disabled
      }
    },

    /**
     * CSS classes for ease of composition.
     * Attached to slot scope.
     * @returns {object}
     */
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
