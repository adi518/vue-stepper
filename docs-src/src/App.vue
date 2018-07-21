<template>
  <div id="app">
    <v-menu :routes="routes" @open="handleOpen" @close="handleClose">
      <template slot="last-child">
        <a
        class="github-button"
        :href="flags.production && pkg.repository.url"
        data-icon="octicon-star"
        data-show-count="true"
        aria-label="Star adi518/vue-stepper-component on GitHub">
        Star
      </a>
      </template>
    </v-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import pkg from '../../package'

import router, { routes } from './router'

import VMenu from '@/components/Menu'

export default {
  name: 'app',
  components: {
    VMenu
  },
  data: () => ({
    pkg,
    
    routes,

    flags: {
      production: process.env.NODE_ENV !== 'development'
    }
  }),
  created() {
    if (process.env.NODE_ENV === 'development') {
      console.log(this.$route)
    }
  },
  watch: {
    // Listen to changes triggered by
    // navigation buttons (back/forward),
    // and programmatic changes (`router.push`).
    $route: {
      handler(route) {
        this.changeRoute(route)
      }
    }
  },
  methods: {
    changeRoute(route) {
      router.push({ name: route && router.name })
    },
    handleOpen({ width }) {
      const ghstar = document.getElementById('github-star')

      if (ghstar) {
        ghstar.style.setProperty('display', 'none')

        /* ghstar.style.setProperty('left', `calc(${width}px + 1.25rem)`) */
      }
    },
    handleClose() {
      const ghstar = document.getElementById('github-star')

      if (ghstar) {
        ghstar.style.removeProperty('display')

        /* ghstar.style.removeProperty('left') */
      }
    }
  }
}
</script>

<style lang="scss">
/* Meta-variables */
@import '~@/sass/colors';

/* Bootstrap */
$spacer: 1rem;
$spacers: ();
$spacers: map-merge((20: ($spacer * 2)), $spacers);

$body-bg: $app-color-mirage;
$body-color: $app-color-white;
$link-color: rgba($app-color-white, 0.5);

// Required
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

// Optional
@import '~bootstrap/scss/reboot';
@import '~bootstrap/scss/type';
@import '~bootstrap/scss/images';
@import '~bootstrap/scss/button-group';
@import '~bootstrap/scss/buttons';
@import '~bootstrap/scss/grid';
@import '~bootstrap/scss/utilities';

pre,
code,
kbd,
samp {
  font-size: 1rem;
}
/* Bootstrap end */
</style>
