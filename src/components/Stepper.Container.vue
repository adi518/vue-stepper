<template>
  <div :class="[$options.name]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-stepper-container'
}
</script>

<style lang="scss" scoped>
.v-stepper-container {
  display: flex;
  width: inherit;
  user-select: none;
  box-sizing: border-box;
  justify-content: space-between;

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
}
</style>
