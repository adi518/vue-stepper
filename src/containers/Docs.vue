<template>
  <div class="docs">

    <!-- BREAKPOINT STATE -->
    <v-breakpoint v-model="model.breakpoint"></v-breakpoint>

    <!-- DOCUMENTATION:JUMBOTRON -->
    <div class="docs-container docs-container--has-jumbotron docs-100vh js-vh-fix">
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
          Vue-Stepper <sup class="docs-version">{{assets.$package.version}}</sup>
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

        <!-- FIXED ANCHOR -->
        <v-a
          class="docs-fixed-anchor docs-c-pointer"
          scroll-to="docs"
          :refs="$refs">
          Install, Examples & Documentation
        </v-a>

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
    <div ref="docs" class="docs-container docs-container--second-page docs-min-100vh">
      <div class="container docs-clearfix">

        <!-- INSTALL -->
        <h3 class="mt-3" ref="install">
          <v-a :refs="$refs" scroll-to="install">Install</v-a>
        </h3>
        <div class="docs-markdown" v-html="markdowns.install"></div>

        <!-- USAGE -->
        <h3 ref="usage">
          <v-a :refs="$refs" scroll-to="usage">Usage</v-a>
        </h3>
        <p>
          To use the component in your templates, simply import and register with your component.
          To control the Stepper state, we use the <code>v-model</code> directive, just like on any
          other input element with two-way binding. The Stepper acts as a group of radio-buttons.
        </p>
        <h5>Template</h5>
        <div class="docs-markdown" v-html="markdowns.examples.default.template"></div>
        <h5>Script</h5>
        <div class="docs-markdown" v-html="markdowns.examples.default.script"></div>

        <!-- VUEX -->
        <h3 ref="vuex">
          <v-a :refs="$refs" scroll-to="vuex">Vuex</v-a>
        </h3>
        <p>A common practice for managing your Stepper state, is through a Store.</p>
        <div class="docs-markdown" v-html="markdowns.examples.vuex.store"></div>
        <p>Then, in your component:</p>
        <h5>Template</h5>
        <div class="docs-markdown" v-html="markdowns.examples.vuex.template"></div>
        <h5>Script</h5>
        <div class="docs-markdown" v-html="markdowns.examples.vuex.script"></div>
        
        <!-- PROGRAMMATIC -->
        <h3 ref="programmatic">
          <v-a :refs="$refs" scroll-to="programmatic">Programmatic</v-a>
        </h3>
        <p>
          Start off by assigning special
          <code>Vue</code> property
          <code><v-a href="https://vuejs.org/v2/api/#ref">ref</v-a></code> to the
          <code>v-stepper</code> component. Then, assign an API method to an Event handler
          of your choice. The following example is similar to the Demo above, where we assign
          <code>previous</code>, <code>next</code> and <code>reset</code> to the
          <code>click</code> event of a button element.
        </p>
        <div class="docs-markdown" v-html="markdowns.examples.programmatic.template"></div>

        <!-- API PROPS -->
        <h3 ref="api-props">
          <v-a :refs="$refs" scroll-to="api-props">API Props</v-a>          
        </h3>
        <div class="docs-markdown" v-html="markdowns.props"></div>

        <!-- SUPPORT -->
        <h3 ref="support">
          <v-a :refs="$refs" scroll-to="support">Support</v-a>
        </h3>
        <p>
          Please open an
          <v-a :href="assets.$package.bugs.url">issue</v-a> for support.
        </p>
      </div>
    </div>

    <!-- FOOTER -->    
    <footer class="docs-footer docs-clearfix">
      <p class="docs-credit mt-2 mb-2">
        Made with ❤️ by
        <v-a
          class="docs-anchor--author"
          href="https://github.com/adi518">
          Adi Sahar
        </v-a>
      </p>
    </footer>

    <!-- FIXED -->
    <v-git-ribbon
      :href="assets.$package.repository.url"
      octo-color="#18202a"
      fill-color="#eeeeee"
    ></v-git-ribbon>
  </div>
</template>

<script>
// https://github.com/spatie/vue-tabs-component
// https://github.com/cristijora/vue-tabs/blob/master/src/components/VueTabs.js
// https://stackoverflow.com/questions/42645964/vue-js-anchor-to-div-within-the-same-component

import $package from '@root/package'

import Prism from 'prismjs'
import truncate from 'lodash.truncate'
import { VhChromeFix } from '@/assets/js/VhChromeFix'

import VSwitch from 'vue-switch/switch-2'
import { VShowAt, VHideAt, VBreakpoint, Model as BreakpointModel } from 'vue-breakpoint-component'

import VStepper from '@/components/Stepper'
import VA from '@/components-internal/Anchor'
import VGitRibbon from '@/components-internal/GitRibbon'

export default {
  name: 'VDocs',
  components: {
    VA,
    VShowAt,
    VHideAt,
    VSwitch,
    VStepper,
    VGitRibbon,
    VBreakpoint
  },
  data: () => ({
    assets: {
      $package
    },
    markdowns: {
      install: require('@/markdowns/install.md'),
      props: require('@/markdowns/props.md'),
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
      steps: 3,
      step: undefined,
      breakpoint: new BreakpointModel()
    },
    flags: {
      debug: false,
      random: false,
      persist: false,
      development: process.env.NODE_ENV === 'development'
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
      Pellentesque euismod viverra orci, vel elementum urna aliquam in.
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
      purus ac convallis semper, purus sapien dignissim turpis.
      `

      if (this.model.breakpoint.noMatch) {
        return truncate(lorem, { length: 210 })
      }

      return lorem
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
    color: $docs-color-white;

    &:hover {
      text-decoration: none;
      color: $docs-color-white;

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

.docs {
  min-width: 320px;
}

.docs-version {
  font-weight: 300;
  font-size: 0.7rem;
}

.docs-logo {
  width: 4rem;
}

.docs-container {
  position: relative;
}

.docs-container--has-jumbotron {
  display: flex;
  align-items: center;
  background: linear-gradient(125deg, #18202a 45%, #12525e 50%, #18202a 80%);

  @include media-breakpoint-down(xs) {
    background-image: linear-gradient(
      -125deg,
      #18202a 45%,
      #12525e 50%,
      #18202a 80%
    );
  }
}

.docs-container--second-page {
  background-color: #18202a;
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
}

.docs-tagline {
  text-align: center;
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

.docs-stepper {
  width: 100%;
  font-size: 1.1rem;

  .v-step {
    @include media-breakpoint-down(xs) {
      .index {
        display: none;
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
  background-color: transparent;
  border: 1px solid rgba($docs-color-white, 0.5);

  @include media-breakpoint-down(xs) {
    margin-top: 0.5rem;
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
    #18202a 25%,
    #12525e 50%,
    #18202a 75%
  );
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

/* Utils */
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

.docs-c-pointer {
  cursor: pointer;
}

.docs-100vh {
  height: 100vh;
}

.docs-min-100vh {
  min-height: 100vh;
}
/* Utils end */
</style>
