<template>
  <div class="v-step-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-step-container',
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
.v-step-container {
  flex-grow: 1;

  &:not(:first-child) {
    margin-left: 1rem;
  }

  // Bootstrap "xs"
  @media (max-width: 575px) {
    &:not(:first-child) {
      margin-left: auto;
    }

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
}
</style>
