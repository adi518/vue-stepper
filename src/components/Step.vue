<template>
  <div :class="[namespace.kebab]">
    <v-step-bare v-bind="$props" @change="handleChange">
      <template slot="index" slot-scope="scope">
        <slot name="slot-index" v-bind="scope">
          <span :class="['index', scope.classes]">
            <slot name="index" v-bind="scope">
              {{ scope.display }}
            </slot>
          </span>
        </slot>
      </template>
      <template slot-scope="scope">
        <slot v-bind="scope">
          <span :class="['title', scope.classe]" v-if="scope.defaultSlot">
            <slot v-bind="scope"></slot>
          </span>
        </slot>
        <slot name="divider" v-bind="scope" v-if="divider">
          <span class="divider"></span>
        </slot>
      </template>
    </v-step-bare>
  </div>
</template>

<script>
import Bare from './Step.bare'

export default {
  name: 'v-step',
  components: {
    'v-step-bare': Bare
  },
  props: Bare.props,
  data() {
    const { $options: { name: kebab } } = this
    return { namespace: { kebab } }
  },
  methods: { handleChange: Bare.methods.handleChange },
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
@import '~@/sass/colors';

.v-step {
  flex: 1;
  opacity: 0.55;
  box-sizing: border-box;
  transition: opacity 0.7s;

  &:hover:not(.is-disabled) {
    opacity: 0.85;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  @media (max-width: 575px) {
    &:not(:last-child) {
      // Bootstrap "xs"
      margin-right: 0.5rem;
    }
  }
}

.index {
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  flex-shrink: 0;
  font-size: 1.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  color: $app-color-white;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid $app-color-wild-sand;

  &.is-active,
  &.is-visited {
    color: $app-color-dusty-gray;
  }

  &.is-active {
    border-color: rgba($app-color-wild-sand, 0.2);
    background-color: lighten($app-color-eden, 0%);
  }

  &.is-visited {
    background-color: $app-color-white;
  }
}

.title {
  color: $app-color-white;

  &.is-active {
    color: lighten($app-color-eden, 30%);
  }
}

.divider {
  width: 100%;
  margin-left: 0.5rem;
  border-bottom: 1px solid $app-color-white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}
</style>
