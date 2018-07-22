<template>
  <label :class="['v-step-label', klass]">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'v-step-label',
  props: {
    klass: {
      type: [String, Array, Object]
    }
  },
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
.v-step-label {
  display: flex;
  flex-direction: row;
  align-items: center;

  &.is-active,
  &.is-visited {
    cursor: pointer;
  }

  &.is-active {
    opacity: 1;
  }
}
</style>
