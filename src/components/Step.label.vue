<template>
  <label :class="[$options.name, $attrs.class]">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'v-step-label',
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
