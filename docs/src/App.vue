<template>
  <div id="app">
    <v-menu :routes="routes" :exclude="['Step 1', 'Step 2', 'Step 3']" @open="handleOpen" @close="handleClose">
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

import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    VMenu
  },
  data: () => ({
    pkg,

    routes,

    flags: {
      production: process.env.NODE_ENV === 'production'
    }
  }),
  created() {
    if (process.env.NODE_ENV === 'development') {
      /**
       * Log route for debugging purposes.
       */
      if (this.debug) {
        console.log(this.$route)
      }
    }
  },
  mounted() {
    this.ghstar = document.getElementById('github-star')
  },
  methods: {
    handleOpen({ width }) {
      const { ghstar } = this

      if (ghstar) {
        ghstar.style.setProperty('display', 'none')
      }
    },
    handleClose() {
      const { ghstar } = this

      if (ghstar) {
        ghstar.style.removeProperty('display')
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
$spacers: map-merge((20: $spacer * 2), $spacers);
$spacers: map-merge((25: $spacer * 2 + 0.5), $spacers);

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

<style lang="stylus">
// https://github.com/vuejs/vuepress/blob/fd46a26d3a884b62092581451028121fd0daf654/lib/default-theme/styles/code.styl
for lang in js ts html md vue css sass scss less stylus go java c sh yaml {
  pre{'[class~="language-' + lang + '"]'} {
    &:before {
      content: '' + lang;
    }
  }
}

pre[class*=language-] {
  position: relative;

  &::before {
    position: absolute;
    z-index: 3;
    top: 0.8rem;
    right: 1rem;
    font-size: 0.75rem;
  }
}

pre[class~='language-bash'] {
  &:before {
    content: 'bash';
  }
}

pre[class~='language-javascript'] {
  &:before {
    content: 'js';
  }
}

pre[class~='language-typescript'] {
  &:before {
    content: 'ts';
  }
}

pre[class~='language-markup'] {
  &:before {
    content: 'html';
  }
}

pre[class~='language-markdown'] {
  &:before {
    content: 'md';
  }
}

pre[class~='language-json']:before {
  content: 'json';
}

pre[class~='language-ruby']:before {
  content: 'rb';
}

pre[class~='language-python']:before {
  content: 'py';
}

pre[class~='language-bash']:before {
  content: 'sh';
}
</style>