<template>
  <div class="docs">

    <!-- DOCUMENTATION:JUMBOTRON -->
    <div class="docs-container docs-container--has-jumbotron">
      <div class="container docs-jumbotron">
        <!-- <v-switch
          class="docs-switch docs-important docs-switch-debug"
          size="lg"
          v-model="flags.debug"
          @update:value="value => flags.debug = value"
          open-name="On"
          close-name="Debug"
          color="green"
        /> -->
        <!-- <v-switch
          class="docs-switch docs-important docs-switch-linear"
          size="lg"
          v-model="flags.random"
          @update:value="value => flags.random = value"
          open-name="Random"
          close-name="Linear"
          color="green"
        /> -->
        <!-- <v-switch
          class="docs-switch docs-important docs-switch-persist"
          size="lg"
          v-model="flags.persist"
          @update:value="value => flags.persist = value"
          open-name="Persist"
          close-name="Static"
          color="green"
        /> -->
        <h1 class="docs-heading mb-3">
          Vue-Stepper
          <sup class="docs-version">{{assets.$package.version}}</sup>
        </h1>
        <p class="docs-tagline mb-5">
          A lean, fully customizable Vue.js<br>Stepper component with Vuex support and Zero dependencies.
        </p>        
        
        <!-- DEMO -->
        <v-stepper
          ref="stepper"
          class="docs-stepper mb-3"
          :steps="model.steps"
          v-model="model.step"
          :debug="flags.debug"
          :linear="flags.linear"
          :persist="flags.persist"
        >
          <template slot="step-1"> Eeny </template>
          <template slot="step-2"> Miny </template>
          <template slot="step-3"> Moe </template>
        </v-stepper>

        <template v-if="model.step === 1">
          <h6>Eeny Content</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod elementum ante ac volutpat. Suspendisse euismod est enim, sit amet vehicula neque feugiat id. Nunc imperdiet convallis placerat. Sed accumsan mauris et magna facilisis gravida. Suspendisse et justo volutpat, congue libero id, vehicula sem. Maecenas nec ex imperdiet, bibendum justo vel, feugiat velit. Vivamus eu maximus mi. Fusce ac metus magna. Integer eu nunc ac quam efficitur sagittis.
          </p>
        </template>

        <template v-if="model.step === 2">
          <h6>Miny Content</h6>
          <p>
            Nunc a nunc at sapien posuere consequat. Vestibulum sed maximus felis. Nulla a diam sit amet nulla malesuada commodo. Fusce ullamcorper tortor sed ipsum ornare suscipit eget at nulla. Donec facilisis elit purus, eu tempus nunc feugiat sollicitudin. Mauris ipsum ligula, faucibus sed libero vel, dignissim posuere mauris. Quisque ipsum tellus, sodales ac ante sed, consequat efficitur metus. Pellentesque euismod viverra orci, vel elementum urna aliquam in. In in accumsan dui, vel interdum dui.
          </p>
        </template>

        <template v-if="model.step === 3">
          <h6>Moe Content</h6>
          <p>
            Aenean vel arcu mollis, feugiat ipsum vitae, sollicitudin nibh. Integer fermentum, dui ut laoreet faucibus, nibh elit ultricies ipsum, sit amet placerat libero nisl id enim. Quisque quis arcu nisi. Etiam interdum luctus neque, non tincidunt metus mollis vel. In nec tellus non nisl commodo aliquet a a ligula. Donec semper massa nisl, a tristique lectus ultrices ut. Donec ac ultricies lectus, a semper nibh. Integer tempor, purus ac convallis semper, purus sapien dignissim turpis, non sagittis urna quam nec est.
          </p>
        </template>
        
        <div class="docs-button-group mt-3">
          <a href="" class="btn docs-button" @click.prevent="$refs.stepper.previous()">Previous</a>
          <a href="" class="btn docs-button" @click.prevent="$refs.stepper.next()">Next</a>
          <a href="" class="btn docs-button" @click.prevent="$refs.stepper.reset()">Reset</a>
        </div>        

        <!-- FIXED ANCHOR -->
        <a class="docs-fixed-anchor docs-c-pointer" @click="scrollTo('docs')" tabindex="">Install, Examples & Documentation</a>

        <!-- GITHUB STAR -->
        <div class="docs-github-star">
          <a
            class="github-button"
            :href="flags.development ? null : assets.$package.repository.url"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star adi518/vue-stepper-component on GitHub">
            Star
          </a>
        </div>

      </div>
    </div>

    <!-- DOCUMENTATION:SECOND-PAGE -->
    <div ref="docs" class="docs-container docs-container--second-page">
      <div class="container docs-clearfix">

        <!-- INSTALL -->
        <h3 class="mt-3">Install</h3>
        <div class="docs-markdown" v-html="markdowns.install"></div>

        <!-- USAGE -->
        <h3>Usage</h3>
        <p>
          To use the component in your templates, simply import and register with your component. To control the Stepper state, we use the
          <code>v-model</code> directive, just like on any other input element with two-way binding. The Stepper acts as a group of radio-buttons.
        </p>
        <h4>Template</h4>
        <div class="docs-markdown" v-html="markdowns.examples.default.template"></div>
        <h4>Script</h4>
        <div class="docs-markdown" v-html="markdowns.examples.default.script"></div>

        <!-- VUEX -->
        <h3>With Vuex</h3>
        <p>A common practice for managing your Stepper state, is through a Store.</p>
        <div class="docs-markdown" v-html="markdowns.examples.vuex.store"></div>
        <p>Then, in your component:</p>
        <h4>Template</h4>
        <div class="docs-markdown" v-html="markdowns.examples.vuex.template"></div>
        <h4>Script</h4>
        <div class="docs-markdown" v-html="markdowns.examples.vuex.script"></div>
        
        <!-- PROGRAMMATIC -->
        <h3>Changing Steps Programmatically</h3>
        <p>
          Start off by assigning special
          <code>Vue</code> property
          <code><a href="https://vuejs.org/v2/api/#ref" target="_blank">ref</a></code> to the
          <code>v-stepper</code> component. Then, assign an API method to an Event handler of your choice. The following example is similar to the Demo above, where we assign
          <code>previous</code>,
          <code>next</code> and
          <code>reset</code> to the
          <code>click</code> event of a button element.
        </p>
        <div class="docs-markdown" v-html="markdowns.examples.programmatic.template"></div>

        <!-- API PROPS -->
        <h3>API Props</h3>
        <div class="docs-markdown" v-html="markdowns.options"></div>

        <!-- DEBUGGING -->
        <h3>Debugging</h3>
        <p>It's often useful to inspect how the Stepper acts behind the scenes. To enable Debug mode, simply pass a
          <code>debug</code> property to the Stepper component via
          <code>:debug="true"</code>. You can play around with it in the Demo above by hitting the
          <a @click.prevent="scrollTo('debug-switch')" tabindex="">Debug Switch</a> in the top left corner.
        </p>

        <!-- SUPPORT -->
        <h3>Support</h3>
        <p>
          Please open an
          <a :href="assets.$package.bugs.url" target="_blank">issue</a> for support.
        </p>
      </div>
    </div>

    <!-- FOOTER -->    
    <footer class="docs-footer docs-clearfix">
      <p class="docs-credit mt-2 mb-2">
        Made with ❤️ by <a class="docs-anchor--author" href="https://github.com/adi518" target="_blank">Adi Sahar</a>
      </p>
    </footer>

    <!-- FIXED -->
    <v-git-ribbon :href="assets.$package.repository.url" fill-color="#dddddd"></v-git-ribbon>
  </div>
</template>

<script>
// https://v4-alpha.getbootstrap.com/
// https://github.com/spatie/vue-tabs-component
// https://github.com/cristijora/vue-tabs/blob/master/src/components/VueTabs.js
// https://stackoverflow.com/questions/42645964/vue-js-anchor-to-div-within-the-same-component

import $package from '@root/package'

import Prism from 'prismjs'

import VSwitch from 'vue-switch/switch-2'
import VStepper from '@/components/Stepper'
import VGitRibbon from '@/components-internal/GitRibbon'

export default {
  name: 'VDocs',
  components: {
    VStepper,
    VSwitch,
    VGitRibbon
  },
  data: () => ({
    assets: {
      $package
    },
    markdowns: {
      install: require('@/markdowns/install.md'),
      options: require('@/markdowns/options.md'),
      examples: {
        default: {
          script: require('@/markdowns/examples/default/script.md'),
          template: require('@/markdowns/examples/default/template.md')
        },
        programmatic: {
          template: require('@/markdowns/examples/programmatic/template.md')
        },
        vuex: {
          store: require('@/markdowns/examples/vuex/store.md'),
          script: require('@/markdowns/examples/vuex/script.md'),
          template: require('@/markdowns/examples/vuex/template.md')
        }
      }
    },
    model: {
      step: undefined,
      steps: 3
    },
    flags: {
      debug: false,
      random: false,
      persist: false,
      development: process.env.NODE_ENV === 'development'
    }
  }),
  mounted() {
    window.setTimeout(Prism.highlightAll)
  },
  methods: {
    getElementByRef(ref, refs) {
      refs = refs || this.$refs

      const noRefs = !!refs

      if (noRefs) {
        console.error(`[getElementByRef warn]: No refs found.`)
        return
      }

      let element = this.$refs[ref]

      // Is from element?
      if (element instanceof Element) {
        return element
      }

      // Is from component?
      if (this.$refs[ref]) {
        element = this.$refs[ref].el
        if (element instanceof Element) {
          return element
        }
      }

      // Ref doesn't exist
      console.error(`[getElementByRef warn]: No such ref as "${ref}".`)

      return null
    },
    scrollTo(ref, options = {}) {
      const element = this.getElementByRef(ref)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          ...options
        })
      }
    }
  }
}
</script>

<style lang="scss">
// https://css-tricks.com/html-vs-body-in-css/
// https://getbootstrap.com/docs/4.0/getting-started/theming/#variable-defaults
// https://github.com/sagalbot/vue-select/blob/0ce49212524c0c4f1d6dd61d43d66bc7c276083f/docs/assets/scss/_variables.scss

@import url('https://fonts.googleapis.com/css?family=Dosis');
@import url('https://fonts.googleapis.com/css?family=Lato:300,400');

/* Meta-variables */
@import '~@/assets/sass/variables';

/* Bootstrap */
$spacer: 1rem;
$spacers: ();
$spacers: map-merge((20: ($spacer * 2)), $spacers);

$body-color: $docs-color-white;
$link-color: rgba($docs-color-white, 0.5);

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

/* Prism */
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
/* Prism end */

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

.docs {
  min-width: 320px;
}

.docs-version {
  font-weight: 300;
  font-size: 0.7rem;
}

// .docs-version {
//   top: 1rem;
//   left: 1rem;
//   position: fixed;
//   font-weight: 500;
//   font-size: 0.7rem;
//   color: $docs-color-white;
//   font-family: $docs-bootstrap-font-stack;
//   text-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3);
// }

.docs-logo {
  width: 4rem;
}

.docs-container {
  min-height: 100vh;
  position: relative;
}

.docs-container--second-page {
  background: linear-gradient(
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    linear-gradient(135deg, #7966f3 20%, transparent 50%),
    linear-gradient(235deg, #13535f 45%, #1a7f8b 45%);
}

.docs-container--has-jumbotron {
  display: flex;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    linear-gradient(135deg, #7966f3 20%, transparent 50%),
    linear-gradient(235deg, #1a7f8b 45%, #13535f 45%);
}

.docs-jumbotron {
  display: flex;
  flex-direction: column;
  color: $docs-color-white;
}

.docs-heading {
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

  @include media-breakpoint-down(xs) {
    font-size: 2rem;
    margin-top: 5rem;
    margin-left: 0;
  }
}

.docs-tagline {
  text-align: center;

  @include media-breakpoint-down(xs) {
    text-align: inherit;
  }
}

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
    @include media-breakpoint-down(xs) {
      // position: static;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    &.z-on {
      opacity: 1;
    }
  }

  &.docs-switch-linear {
    top: 0.5rem;
    left: 5rem;
    opacity: 0.8;
    position: fixed;
    @include media-breakpoint-down(xs) {
      // position: static;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    &.z-on {
      opacity: 1;
    }
  }

  &.docs-switch-persist {
    top: 0.5rem;
    left: 9.5rem;
    opacity: 0.8;
    position: fixed;
    @include media-breakpoint-down(xs) {
      // position: static;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    &.z-on {
      opacity: 1;
    }
  }
}

.docs-stepper {
  width: 100%;
  font-size: 1.1rem;

  .step {
    &:last-child {
      label {
        @include media-breakpoint-down(xs) {
          margin-bottom: 0;
        }
      }
    }

    label {
      @include media-breakpoint-down(xs) {
        margin-bottom: 1rem;
      }
    }
  }
}

.docs-button {
  min-width: 6rem;
  font-weight: 300;
  font-size: 1.1rem;
  margin-left: 0.35rem;
  margin-right: 0.35rem;
  color: $docs-color-white;
  transition: box-shadow 0.2s;
  border: 1px solid rgba($docs-color-white, 0.5);

  @include media-breakpoint-down(xs) {
    margin-top: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    color: $docs-color-white;
    box-shadow: 0 0.25rem 0.5rem rgba($docs-color-black, 0.2);
  }
}

.docs-button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.docs-fixed-anchor {
  left: 0;
  width: 100%;
  bottom: 0.8rem;
  font-weight: 300;
  font-size: 1.2rem;
  position: absolute;
  text-align: center;
  color: $docs-color-white;

  &:hover {
    color: $docs-color-white;
  }

  @include media-breakpoint-down(xs) {
    position: static;
    margin-top: 2rem;
    margin-bottom: 0.8rem;
  }
}

.docs-c-pointer {
  cursor: pointer;
}

.docs-markdown {
  margin-bottom: 2rem;
}

.docs-footer {
  display: flex;
  min-height: 5rem;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #7966f3 25%, #006464 100%);
}

.docs-credit {
  text-align: center;
  color: $docs-color-white;

  a {
    color: rgba($docs-color-white, 0.9);
  }
}

.docs-github-star {
  top: 1rem;
  left: 1rem;
  position: absolute;
}

.docs-clearfix {
  // https://www.rachelandrew.co.uk/archives/2017/01/24/the-end-of-the-clearfix-hack/
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

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
