<template>
  <div :class="[$options.name]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-steps-container'
}
</script>

<style lang="scss" scoped>
.v-steps-container {
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
