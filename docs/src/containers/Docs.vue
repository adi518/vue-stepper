<template>
  <div class="docs">

    <!-- BREAKPOINT STATE -->
    <v-breakpoint v-model="models.breakpoint"></v-breakpoint>

    <!-- FIRST PAGE -->
    <div
      class="docs-container docs-container--has-jumbotron"
      :style="{ height: `${models.breakpoint.innerHeight}px` }
    ">
      
      <!-- JUMBOTRON -->
      <div class="container docs-jumbotron" :class="models.breakpoint.noMatch && ['pl-3', 'pr-3'] || 'p-0'">

        <h1 class="docs-h1 mb-3">
          Vue-Stepper <sup class="docs-version">{{ pkg.version }}</sup>
        </h1>
        <p class="docs-tagline mb-5">
          Fully customizable
          Stepper component <br v-show="models.breakpoint.noMatch"> with zero dependencies.
        </p>        
        
        <!-- DEMO -->
        <v-stepper
          ref="stepper"
          class="docs-stepper mb-4"
          v-model="stepper.model"
          :steps="stepper.size"
          :debug="flags.debug"
          :linear="flags.linear"
          :persist="flags.persist"
        >
          <!-- We use `{}` to convert slot to scoped-slot (prevents slot duplication error). -->
          <template slot="step-1-title" slot-scope="{}"> Eeny </template>
          <template slot="step-2-title" slot-scope="{}"> Miny </template>
          <template slot="step-3-title" slot-scope="{}"> Moe </template>

          <template v-for="(display, index) in stepper.array" :slot="getSlotName('index', display)" slot-scope="scope">
            <!-- ADD RIPPLE EFFECT EXAMPLE -->
            <span :key="index" class="docs-stepper__index-ripple" v-ripple>{{ scope.display }}</span>
          </template>

          <template v-for="(display, index) in stepper.array" :slot="getSlotName('index-root', display)">
            <!-- HIDE INDEXES ON BOOTSTRAP BREAKPOINT "XS" -->
            <v-void :key="index" v-if="models.breakpoint.noMatch"></v-void>
          </template>
        </v-stepper>

        <p class="docs-lorem">
          <template v-if="stepper.model.flags.s1">{{ einy }}</template>
          <template v-if="stepper.model.flags.s2">{{ miny }}</template>
          <template v-if="stepper.model.flags.s3">{{ moe }}</template>
        </p>
        
        <v-hide-at no-match>
          <div class="docs-button-group mt-25">
            <button v-ripple class="btn docs-button" @click="$refs.stepper.previous()">Previous</button>
            <button v-ripple class="btn docs-button" @click="$refs.stepper.next()">Next</button>
            <button v-ripple class="btn docs-button" @click="$refs.stepper.reset()">Reset</button>
            <button v-ripple class="btn docs-button" @click="toggleMode"
              :title="`Switch to ${flags.linear ? 'Random' : 'Linear' } mode`"
              >Mode : {{ flags.linear ? 'Linear' : 'Random' }}</button>
            <button v-ripple class="btn docs-button" @click="togglePersist"
              :title="`Switch to ${flags.persist ? 'Regular' : 'Persistable' } mode`"
              >Mode : {{ flags.persist ? 'Persistable' : 'Regular' }}</button>
          </div>
        </v-hide-at>

        <!-- ABSOLUTE ANCHOR -->
        <v-a
          class="docs-fixed-anchor"
          :scroll-to="$refs.docs">Install, Examples &amp; Documentation</v-a>

        <!-- GITHUB STAR -->
        <div id="github-star" class="docs-github-star">
          <a
            class="github-button"
            :href="flags.production && pkg.repository.url"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star adi518/vue-stepper-component on GitHub">
            Star
          </a>
        </div>

        <!-- END -->
      </div>
    </div>

    <!-- SECOND-PAGE -->
    <div ref="docs" class="docs-container">
      <div class="container docs-clearfix" :class="models.breakpoint.noMatch && ['pl-3', 'pr-3'] || 'p-0'">
        <div class="docs-markdown" v-html="markdowns.readme"></div>
      </div>
    </div>

    <!-- FOOTER -->    
    <footer class="docs-footer docs-clearfix">
      <p class="docs-credit mt-2 mb-2">
        Made with ❤️ by
        <v-a href="https://github.com/adi518">Adi Sahar</v-a>
      </p>
    </footer>

    <!-- GIT RIBBON -->
    <div id="github" class="docs-github">
      <v-a class="docs-github-anchor" :href="pkg.repository.url"><img :src="assets.octocat" alt="Github"></v-a>
    </div>

    <!-- END -->
  </div>
</template>

<script>
// https://stackoverflow.com/questions/42414627/create-text-node-with-custom-render-function-in-vue-js

import pkg from '@repo/package'

import Prism from 'prismjs'
import truncate from 'lodash.truncate'
import Ripple from 'vue-ripple-directive'

import octocat from '@/assets/images/octocat.png'

import {
  VShowAt,
  VHideAt,
  VBreakpoint,
  Model as Breakpoint
} from 'vue-breakpoint-component'

import VVoid from 'vue-void'
import { VStepper, Utils, Model as Step } from 'vue-stepper-component'

import VA from '@/components/Anchor'
import VScopedSlot from '@/components/ScopedSlot'

import store from '@/store'
import { mapState } from 'vuex'

import readme from '@repo/README.md'

export default {
  name: 'VDocs',
  components: {
    VA,
    VVoid,
    VShowAt,
    VHideAt,
    VStepper,
    VBreakpoint,
    VScopedSlot
  },
  directives: {
    Ripple
  },
  data: () => {
    const production = process.env.NODE_ENV === 'production'

    return {
      pkg,

      assets: {
        octocat
      },

      markdowns: {
        readme
      },

      models: {
        breakpoint: new Breakpoint()
      },

      flags: {
        debug: false,
        linear: true,
        persist: true,
        production: production
      }
    }
  },
  watch: {
    'stepper.model'(model) {
      store.commit('stepper_model', model)
    }
  },
  created() {
    /**
     * Remove storage of stale Stepper instances.
     */
    Utils.removeStaleStorage(this.stepper.model.id)
  },
  mounted() {
    /**
     * Highlights all code blocks.
     */
    window.setTimeout(Prism.highlightAll)
  },
  computed: {
    ...mapState(['stepper']),
    // model: {
    //   get() {
    //     return this.stepper.model
    //   },
    //   set(payload) {
    //     store.commit('stepper', payload)
    //   }
    // },
    einy() {
      const lorem = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      In euismod elementum ante ac volutpat. Suspendisse euismod est enim,
      sit amet vehicula neque feugiat id. Nunc imperdiet convallis placerat.
      Sed accumsan mauris et magna facilisis gravida. Suspendisse et justo volutpat,
      congue libero id, vehicula sem. Maecenas nec ex imperdiet, bibendum justo vel,
      feugiat velit. Vivamus eu maximus mi. Fusce ac metus magna.
      `
      if (this.models.breakpoint.noMatch) {
        return truncate(lorem, { length: 200 })
      }
      return lorem
    },
    miny() {
      const lorem = `
      Nunc a nunc at sapien posuere consequat. Vestibulum sed maximus felis.
      Nulla a diam sit amet nulla malesuada commodo.
      Fusce ullamcorper tortor sed ipsum ornare suscipit eget at nulla.
      Donec facilisis elit purus, eu tempus nunc feugiat sollicitudin.
      Mauris ipsum ligula, faucibus sed libero vel, dignissim posuere mauris.
      Quisque ipsum tellus, sodales ac ante sed, consequat efficitur metus.
      Pellentesque euismod viverra orci.
      `
      if (this.models.breakpoint.noMatch) {
        return truncate(lorem, { length: 190 })
      }
      return lorem
    },
    moe() {
      const lorem = `
      Aenean vel arcu mollis, feugiat ipsum vitae, sollicitudin nibh. Integer fermentum,
      dui ut laoreet faucibus, nibh elit ultricies ipsum, sit amet placerat libero nisl id enim.
      Quisque quis arcu nisi. Etiam interdum luctus neque, non tincidunt metus mollis vel.
      In nec tellus non nisl commodo aliquet a a ligula. Donec semper massa nisl,
      a tristique lectus ultrices ut. Donec ac ultricies lectus, a semper nibh. Integer tempor,
      purus ac convallis semper.
      `
      if (this.models.breakpoint.noMatch) {
        return truncate(lorem, { length: 210 })
      }
      return lorem
    }
  },
  methods: {
    toggleMode() {
      this.flags.linear = !this.flags.linear

      this.$refs.stepper.reset()
    },
    togglePersist() {
      this.flags.persist = !this.flags.persist

      if (this.flags.persist === false) {
        this.$refs.stepper.removeStorage()
      }

      this.$refs.stepper.reset()
    },
    getSlotName: Utils.getSlotName
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:300,400');

/* Meta-variables */
@import '~@/sass/colors';

$app-min-width: 320px;

/* Bootstrap */
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
/* Bootstrap end */

/* Prismjs */
@import '~prismjs/themes/prism.css';

.docs {
  pre[class*='language-'] {
    margin-top: 0;
    margin-bottom: 0;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    margin-bottom: 1.5rem;
    background: rgba(#f5f2f0, 0.9);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    background: none;
  }
}
/* Prismjs end */

/* Tags */
html {
  @include media-breakpoint-down(xs) {
    font-size: 90%;
  }
}

body {
  font-weight: 300;
  font-family: 'Lato', sans-serif;
}

a {
  font-weight: 400;
}

p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  > a {
    color: $app-color-white;

    &:hover {
      text-decoration: none;
      color: $app-color-white;

      &::before {
        color: #12525e;
      }
    }

    &::before {
      content: '§';
      color: silver;
      margin-left: -1em;
      position: absolute;

      @include media-breakpoint-down(xs) {
        display: none;
      }
    }
  }
}

code {
  color: lighten($app-color-eden, 10%);
}
/* Tags end */

/* Headings */
.docs-h1 {
  display: flex;
  opacity: 0.9;
  margin-left: auto;
  margin-right: auto;
  font-size: 2.7rem;
  position: relative;
  text-transform: lowercase;
  text-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3);
}
/* Headings end */

/* Common Layout */
.docs {
  min-width: $app-min-width;
}

.docs-container {
  position: relative;
}

.docs-container--has-jumbotron {
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    125deg,
    $app-color-mirage 45%,
    $app-color-eden 50%,
    $app-color-mirage 80%
  );
}
.docs-jumbotron {
  display: flex;
  flex-direction: column;
  color: $app-color-white;
}
.docs-version {
  font-weight: 300;
  font-size: 0.7rem;
  top: 0;
  right: 0;
  position: absolute;
  margin-right: -1rem;
}
.docs-tagline {
  text-align: center;
}
.docs-fixed-anchor {
  font-size: 1.2rem;
  font-weight: 300;
  left: 50%;
  bottom: 0.8rem;
  position: absolute;
  white-space: nowrap;
  color: $app-color-white;
  transform: translateX(-50%);
  &:hover {
    color: inherit;
  }
}
.docs-credit {
  text-align: center;
  color: $app-color-white;
  a {
    color: rgba($app-color-white, 0.9);
  }
}
/* Common Layout end */
/* Layout */
.docs-stepper {
  font-size: 1.1rem;
  label {
    margin-bottom: 0; // Reset Bootstrap
  }
}
.docs-stepper__index-ripple {
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
}
.docs-lorem {
  margin-bottom: 0;
}
.docs-button {
  min-width: 6rem;
  font-weight: 300;
  font-size: 1.1rem;
  margin-left: 0.35rem;
  margin-right: 0.35rem;
  color: $app-color-white;
  transition: box-shadow 0.2s;
  background-color: transparent;
  border: 1px solid rgba($app-color-white, 0.5);
  &:hover {
    color: $app-color-white;
    box-shadow: 0 0.25rem 0.5rem rgba($app-color-black, 0.2);
    background-image: linear-gradient(
      -135deg,
      rgba($app-color-white, 0.15),
      transparent 100%
    );
  }
  @include media-breakpoint-down(xs) {
    margin-top: 0.5rem;
  }
}
.docs-button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.docs-markdown {
  h2 {
    font-size: 1.5rem; // h4
    margin-top: 1.5rem;
  }
  h3 {
    font-size: 1.25rem; // h5
  }
}
.docs-footer {
  display: flex;
  margin-top: 2rem;
  min-height: 5rem;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    125deg,
    $app-color-mirage 25%,
    $app-color-eden 50%,
    $app-color-mirage 75%
  );
}
.docs-github-star {
  top: 1rem;
  left: 1rem;
  position: absolute;
}
.docs-github {
  top: 1.2rem;
  right: 1.2rem;
  position: fixed;
}
.docs-github-anchor {
  display: block;
  margin-top: -0.175rem;
  margin-right: -0.5rem;
  animation: docs-float 6s ease-in-out infinite;
  img {
    width: 4rem;
    transform: scaleX(-1);
  }
}
/* Layout end */
/* Utils */
.docs-c-pointer {
  cursor: pointer;
}
.docs-clearfix {
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
/* Utils end */
/* Animations */
@keyframes docs-float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.5rem);
  }
  100% {
    transform: translateY(0);
  }
}
/* Animations end */
</style>
