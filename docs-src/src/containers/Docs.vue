<template>
  <div class="docs">

    <!-- BREAKPOINT STATE -->
    <v-breakpoint v-model="model.breakpoint"></v-breakpoint>

    <!-- FIRST PAGE -->
    <div class="docs-container docs-container--has-jumbotron docs-100vh js-vh-fix">
      
      <!-- JUMBOTRON -->
      <div class="container docs-jumbotron">

        <h1 class="docs-h1 mb-3">
          Vue-Stepper <sup class="docs-version">{{ pkg.version }}</sup>
        </h1>
        <p class="docs-tagline mb-5">
          Fully customizable
          Stepper component <br v-show="model.breakpoint.noMatch"> with Vuex
          support and Zero dependencies.
        </p>        
        
        <!-- DEMO -->
        <v-stepper
          ref="stepper"
          class="docs-stepper mb-3"
          v-model="model.step"
          :steps="model.steps"
          :debug="flags.debug"
          :linear="flags.linear"
          :persist="flags.persist"
        >
          <template slot="step-1"> Eeny </template>
          <template slot="step-2"> Miny </template>
          <template slot="step-3"> Moe </template>

          <template v-for="step in stepsArr">
            <template :slot="`step-${step}-index-root`">            
              <v-void :key="step" v-if="model.breakpoint.noMatch"></v-void>
            </template>
          </template>
        </v-stepper>

        <template v-if="model.step === 1">
          <p class="docs-lorem">
            {{ einyLorem }}
          </p>
        </template>

        <template v-if="model.step === 2">
          <p class="docs-lorem">
            {{ minyLorem }}
          </p>
        </template>

        <template v-if="model.step === 3">
          <p class="docs-lorem">
            {{ moeLorem }}
          </p>
        </template>
        
        <v-hide-at no-match>
          <div class="docs-button-group mt-3">
            <button class="btn docs-button" @click="$refs.stepper.previous()">Previous</button>
            <button class="btn docs-button" @click="$refs.stepper.next()">Next</button>
            <button class="btn docs-button" @click="$refs.stepper.reset()">Reset</button>
          </div>  
        </v-hide-at>

        <!-- ABSOLUTE ANCHOR -->
        <v-a
          class="docs-fixed-anchor docs-c-pointer"
          :scroll-to="$refs.docs">
          Install, Examples &amp; Documentation
        </v-a>

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

      </div>
    </div>

    <!-- SECOND-PAGE -->
    <div ref="docs" class="docs-container docs-min-100vh">
      <div class="container docs-clearfix">

        <!-- INSTALL -->
        <h4 class="mt-4" ref="install">
          <v-a :scroll-to="$refs.install">Install</v-a>
        </h4>
        <div class="docs-markdown" v-html="markdowns.install"></div>

        <!-- USAGE -->
        <h4 ref="usage">
          <v-a :scroll-to="$refs.usage">Usage</v-a>
        </h4>
        <p>
          To use the component in your templates, simply import and register with your component.
          To control the Stepper state, we use the <code>v-model</code> directive, similar to
          an input element.
        </p>
        <h5>Template</h5>
        <div
          class="docs-markdown"
          v-html="markdowns.examples.default.template"
        ></div>
        <h5>Script</h5>
        <div
          class="docs-markdown"
          v-html="markdowns.examples.default.script"
        ></div>

        <!-- SLOTS -->
        <h4 ref="slots">
          <v-a :scroll-to="$refs.slots">Slots</v-a>
        </h4>
        <p>
          Slots are scoped and generated dynamically according to the amount of steps.
          Since they are scoped, you can leverage shared state and customize either one.
          Slots names: <code>default</code>, <code>index-root</code>, <code>index</code>.
        </p>
        <p>
          Every Slot scope consists of the following properties:
          <code>index</code>,
          <code>displayIndex</code>,
          <code>flags</code>.
        </p>
        <p>
          Few examples of what you can do:
        </p>
        <div
          class="docs-markdown"
          v-html="markdowns.examples.slots.template"
        ></div>

        <!-- VUEX -->
        <h4 ref="vuex">
          <v-a :scroll-to="$refs.vuex">Vuex</v-a>
        </h4>
        <p>
          A common practice for managing your Stepper state is through a Store.
          The following is merely an implementation proposal.
        </p>
        <h5>Store</h5>
        <div
          class="docs-markdown"
          v-html="markdowns.examples.vuex.meta"
        ></div>
        <h5>Template</h5>
        <div
          class="docs-markdown"
          v-html="markdowns.examples.vuex.component.template"
        ></div>
        <h5>Script</h5>
        <div
          class="docs-markdown"
          v-html="markdowns.examples.vuex.component.script"
        ></div>
        
        <!-- PROGRAMMATIC -->
        <h4 ref="programmatic">
          <v-a :scroll-to="$refs.programmatic">Programmatic</v-a>
        </h4>
        <p>
          Start off by assigning special
          <code>Vue</code> property
          <code><v-a href="https://vuejs.org/v2/api/#ref">ref</v-a></code> to the
          <code>v-stepper</code> component. Then, assign an API method to an Event listener.
          The following example is similar to the Demo above, where we assign
          <code>previous</code>, <code>next</code> and <code>reset</code> to the
          <code>click</code> event of a button element.
        </p>
        <div class="docs-markdown" v-html="markdowns.examples.programmatic.template"></div>

        <!-- API PROPS -->
        <h4 ref="api-props">
          <v-a :scroll-to="$refs['api-props']">API Props</v-a>          
        </h4>
        <div class="docs-markdown" v-html="markdowns.props"></div>

        <!-- SUPPORT -->
        <h4 ref="support">
          <v-a :scroll-to="$refs.support">Support</v-a>
        </h4>
        <p>
          Please open an
          <v-a :href="pkg.bugs.url">issue</v-a> for support.
        </p>

        <!-- LICENSE -->
        <h4 class="mt-5" ref="license">          
          <v-a :scroll-to="$refs.license">License</v-a>
        </h4>
        <p>
          Copyright (c) 2018
          <v-a href="https://github.com/adi518">
            {{ pkg.author }}
          </v-a>
          by
          <v-a href="https://opensource.org/licenses/MIT">
            {{ pkg.license }}
          </v-a>
        </p>

      </div>
    </div>

    <!-- FOOTER -->    
    <footer class="docs-footer docs-clearfix">
      <p class="docs-credit mt-2 mb-2">
        Made with ❤️ by
        <v-a href="https://github.com/adi518">
          Adi Sahar
        </v-a>
      </p>
    </footer>

    <!-- GIT RIBBON -->
    <div id="github" class="docs-github">
      <v-a class="docs-github-anchor" :href="pkg.repository.url">
        <img :src="assets.octocat" alt="Github">
      </v-a>
    </div>

  </div>
</template>

<script>
// https://stackoverflow.com/questions/42414627/create-text-node-with-custom-render-function-in-vue-js

import pkg from '../../../package'

import Prism from 'prismjs'
import truncate from 'lodash.truncate'

import octocat from '@/assets/images/octocat.png'
import { VhChromeFix } from '@/assets/javascript/VhChromeFix'

import {
  VShowAt,
  VHideAt,
  VBreakpoint,
  Model as BreakpointModel
} from 'vue-breakpoint-component'

import VVoid from 'vue-void'
import VA from '@/components/Anchor'
import { VStepper, VStep } from 'vue-stepper-component'

import store from '@/store'
import { mapState } from 'vuex'

export default {
  name: 'VDocs',
  components: {
    VA,
    VVoid,
    VStep,
    VShowAt,
    VHideAt,
    VStepper,
    VBreakpoint
  },
  data: () => ({
    pkg,

    assets: {
      octocat
    },

    markdowns: {
      props: require('@/markdowns/props.md'),
      install: require('@/markdowns/install.md'),
      examples: {
        default: {
          script: require('@/markdowns/examples/default/script.md'),
          template: require('@/markdowns/examples/default/template.md')
        },
        programmatic: {
          template: require('@/markdowns/examples/programmatic/template.md')
        },
        slots: {
          template: require('@/markdowns/examples/slots/template.md')
        },
        vuex: {
          meta: require('@/markdowns/vuex/meta.md'),
          component: {
            script: require('@/markdowns/vuex/component-script.md'),
            template: require('@/markdowns/vuex/component-template.md')
          }
        }
      }
    },

    model: {
      steps: 3,
      step: undefined,
      breakpoint: new BreakpointModel()
    },

    flags: {
      debug: false,
      random: false,
      persist: true,
      production: process.env.NODE_ENV !== 'development'
    }
  }),
  created() {
    this.vhChromeFix = undefined
  },
  mounted() {
    window.setTimeout(Prism.highlightAll)

    this.vhChromeFix = new VhChromeFix([{ selector: '.js-vh-fix', vh: 100 }])
  },
  destroyed() {
    this.vhChromeFix.destroy()
  },
  computed: {
    einyLorem() {
      const lorem = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      In euismod elementum ante ac volutpat. Suspendisse euismod est enim,
      sit amet vehicula neque feugiat id. Nunc imperdiet convallis placerat.
      Sed accumsan mauris et magna facilisis gravida. Suspendisse et justo volutpat,
      congue libero id, vehicula sem. Maecenas nec ex imperdiet, bibendum justo vel,
      feugiat velit. Vivamus eu maximus mi. Fusce ac metus magna.
      `
      if (this.model.breakpoint.noMatch) {
        return truncate(lorem, { length: 200 })
      }
      return lorem
    },
    minyLorem() {
      const lorem = `
      Nunc a nunc at sapien posuere consequat. Vestibulum sed maximus felis.
      Nulla a diam sit amet nulla malesuada commodo.
      Fusce ullamcorper tortor sed ipsum ornare suscipit eget at nulla.
      Donec facilisis elit purus, eu tempus nunc feugiat sollicitudin.
      Mauris ipsum ligula, faucibus sed libero vel, dignissim posuere mauris.
      Quisque ipsum tellus, sodales ac ante sed, consequat efficitur metus.
      Pellentesque euismod viverra orci.
      `
      if (this.model.breakpoint.noMatch) {
        return truncate(lorem, { length: 190 })
      }
      return lorem
    },
    moeLorem() {
      const lorem = `
      Aenean vel arcu mollis, feugiat ipsum vitae, sollicitudin nibh. Integer fermentum,
      dui ut laoreet faucibus, nibh elit ultricies ipsum, sit amet placerat libero nisl id enim.
      Quisque quis arcu nisi. Etiam interdum luctus neque, non tincidunt metus mollis vel.
      In nec tellus non nisl commodo aliquet a a ligula. Donec semper massa nisl,
      a tristique lectus ultrices ut. Donec ac ultricies lectus, a semper nibh. Integer tempor,
      purus ac convallis semper.
      `
      if (this.model.breakpoint.noMatch) {
        return truncate(lorem, { length: 210 })
      }
      return lorem
    },
    stepsArr() {
      return Array.from(Array(this.model.steps)).map(
        (value, index) => index + 1
      )
    },
    ...mapState(['step', 'steps', 'stepsMap'])
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
  padding-right: 1rem;
  text-transform: lowercase;
  background-position: 100%;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  background-image: url('~@/assets/images/logo.png');
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
}
.docs-tagline {
  text-align: center;
}
.docs-fixed-anchor {
  left: 0;
  width: 100%;
  bottom: 0.8rem;
  font-weight: 300;
  font-size: 1.2rem;
  position: absolute;
  text-align: center;
  color: $app-color-white;
  &:hover {
    color: $app-color-white;
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
      rgba($app-color-white, 0.5),
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
  margin-bottom: 2rem;
}
.docs-footer {
  display: flex;
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
.docs-100vh {
  height: 100vh;
}
.docs-min-100vh {
  min-height: 100vh;
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
