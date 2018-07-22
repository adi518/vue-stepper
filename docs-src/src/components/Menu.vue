<template>
  <div :class="['v-menu', 'clearfix', classes]">
    <!-- We need to wrap token to fix Desktop Safari 5 -->
    <div class="token" @touchstart.passive.stop="toggle" @click.stop.prevent="toggle"></div>
    <ul ref="menu" class="menu" @touchstart.passive.stop>
      <li v-for="(route, index) in computedRoutes" :key="index">
        <router-link v-if="route.name" :to="{ name: route.name }" v-html="route.name" />
      </li>
      <li>
        <slot name="last-child"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
// https://github.com/vuejs/vue-router/issues/800
// https://developer.mozilla.org/en-US/docs/Web/Events/mouseout
// https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave
// https://gist.github.com/languanghao/5f74ca361f22192ba774941a69fd275b
// https://developers.google.com/web/updates/2016/06/passive-event-listeners
// https://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing
// https://stackoverflow.com/questions/39589911/svg-image-not-working-in-safari-5-1-7-windows

import { flattenRoutes } from 'vue-flatten-routes'

import token from '@/assets/images/logo.svg'

export default {
  name: 'VMenu',
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    flags: {
      open: false
    },
    assets: {
      token
    }
  }),
  watch: {
    'flags.open'(value) {
      this.emitToggle(value)
    }
  },
  mounted() {
    document.addEventListener('click', this.dismiss)
    document.addEventListener('touchstart', this.dismiss)

    window.addEventListener('resize', this.handleResize)
  },
  destroyed() {
    document.removeEventListener('click', this.dismiss)
    document.removeEventListener('touchstart', this.dismiss)

    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    classes() {
      return {
        'is-open': this.flags.open
      }
    },
    computedRoutes() {
      return flattenRoutes(this.routes)
    }
  },
  methods: {
    toggle(state) {
      if ([true, false].includes(state)) {
        this.flags.open = state
      } else {
        this.flags.open = !this.flags.open
      }
      this.$emit('toggle', this.flags.open)
    },
    dismiss() {
      this.toggle(false)
    },
    emitToggle(value) {
      this.$emit(value ? 'open' : 'close', { width: this.getWidth() })
    },
    handleResize() {
      this.emitToggle(this.flags.open)
    },
    getWidth() {
      return this.$refs.menu.getBoundingClientRect().width
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/colors';

.v-menu {
  left: 1rem;
  bottom: 0.5rem;
  display: flex;
  direction: ltr;
  z-index: 999999;
  flex-direction: column;
  justify-content: flex-end;

  &.is-open {
    .token {
      left: auto;
      right: 2rem;
      opacity: 1;
      position: fixed;
      transform: translate(1.4rem, 1.4rem);
    }

    .menu {
      transform: translateX(0);
    }
  }
}

.token {
  opacity: 0.5;
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  z-index: 999999;
  left: 2rem;
  bottom: 3rem;
  display: flex;
  flex-shrink: 0;
  position: fixed;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1.2rem 1.2rem;
  transform: translate(-1.4rem, 1.4rem);
  background-image: url('~@/assets/images/logo.svg');
}

.menu {
  top: 0;
  left: 0;
  bottom: 0;
  margin: 0;
  width: 50vw;
  z-index: 999999;
  flex-grow: 1;
  display: flex;
  overflow: auto;
  position: fixed;
  overflow-x: hidden; // Fix IE
  flex-direction: column;
  background-color: rgba($app-color-mirage, 0.8);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px rgba($app-color-black, 0.2);
}

.clearfix {
  &::after,
  &::before {
    height: 0;
    display: block;
    content: '\0020';
    overflow: hidden;
  }
  &::after {
    clear: both;
  }
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

li {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  &:first-child {
    margin-top: 1rem;
  }
}

a {
  display: block;
  line-height: 1.5;
  white-space: nowrap;
  text-decoration: none;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid rgba(255, 255, 255, 0.05);

  &:hover {
    text-decoration: none;
  }
}
</style>
