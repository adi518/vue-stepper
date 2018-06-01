<template>
	<div class="v-stepper-root">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.v-stepper-root {
  display: flex;
  user-select: none;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
}
</style>
