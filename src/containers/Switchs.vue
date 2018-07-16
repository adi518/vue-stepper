<template>
  <div>
    <v-switch
      class="docs-switch docs-important docs-switch-debug"
      size="lg"
      v-model="flags.debug"
      @update:value="value => flags.debug = value"
      open-name="On"
      close-name="Debug"
      color="green"
    ></v-switch>
    <v-switch
      class="docs-switch docs-important docs-switch-linear"
      size="lg"
      v-model="flags.random"
      @update:value="value => flags.random = value"
      open-name="Random"
      close-name="Linear"
      color="green"
    ></v-switch>
    <v-switch
      class="docs-switch docs-important docs-switch-persist"
      size="lg"
      v-model="flags.persist"
      @update:value="value => flags.persist = value"
      open-name="Persist"
      close-name="Static"
      color="green"
    ></v-switch>
  </div>
</template>

<style lang="scss">
.docs-switch.docs-important.vue-switch.s-lg {
  width: 4rem;
  height: 22px;
  display: flex;
  align-items: center;

  &.z-on::after {
    left: 55px;
  }

  &.docs-switch-debug {
    top: 0.5rem;
    left: 0.5rem;
    opacity: 0.8;
    position: fixed;

    &.z-on {
      opacity: 1;
    }

    @include media-breakpoint-down(xs) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  &.docs-switch-linear {
    top: 0.5rem;
    left: 5rem;
    opacity: 0.8;
    position: fixed;

    &.z-on {
      opacity: 1;
    }

    @include media-breakpoint-down(xs) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  &.docs-switch-persist {
    top: 0.5rem;
    left: 9.5rem;
    opacity: 0.8;
    position: fixed;

    &.z-on {
      opacity: 1;
    }

    @include media-breakpoint-down(xs) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>

