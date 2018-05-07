<template>
  <div :class="['v-step', classes]">
    <!-- We cannot type check here: `value == step.value` -->
    <input
      class="input"
      type="radio" 
      :id="id"
      :name="computedName"
      :checked="active"
      @change="$emit('change', index)"
      v-show="debug"
    >
    <label class="label" :for="id">
      <span class="index">
        <slot name="index" v-bind="api">
          {{api.displayIndex}}
        </slot>
      </span>
      <span class="title" v-if="defaultSlot">
        <slot v-bind="api"></slot>
      </span>
      <span class="divider" v-if="withDivider"></span>
    </label>
  </div>
</template>

<script>
// Implementation
export default {
  name: 'VStep',
  inheritAttrs: false,
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
    withDivider: {
      type: Boolean,
      default: false
    },
    debug: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    namespace: 'v-step'
  }),
  computed: {
    id() {
      return `${this.namespace}-${this._uid}-${this.index}`
    },
    displayIndex() {
      return this.index + 1
    },
    classes() {
      return {
        'is-active': this.active,
        'is-visited': this.visited,
        'is-disabled': this.disabled
      }
    },
    computedName() {
      return this.name || this.id
    },
    defaultSlot() {
      return this.$slots.default || this.$scopedSlots.default
    },
    api() {
      const { displayIndex, defaultSlot } = this
      return { displayIndex, defaultSlot }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/colors';

.v-step {
  flex: 1;
  box-sizing: border-box;

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  &.is-active,
  &.is-visited {
    .label {
      cursor: pointer;
    }

    .index {
      color: $color-iron;
    }
  }

  &.is-active {
    .label {
      .index {
        opacity: 1;
        background-color: $color-white;
      }
    }
  }

  &.is-visited {
    .index {
      opacity: 0.75;
      background-color: $color-white;
    }
  }
}

.label {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.index {
  width: 3rem;
  height: 3rem;
  font-weight: 300;
  font-size: 1.5rem;
  margin-right: 10px;
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid $color-wild-sand;
}

.title {
  color: $color-white;
}

.divider {
  width: 100%;
  margin-left: 1rem;
  border-bottom: 1px solid $color-white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}
</style>
