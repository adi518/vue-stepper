<template>
  <div class="demo">
    <!-- Jumbotron -->
    <div class="demo-container demo-has-jumbotron">
      <div class="container demo-jumbotron">
        <v-switch
          class="demo-switch demo-important demo-switch-debug"
          size="lg"
          v-model="flags.debug"
          @update:value="value => flags.debug = value"
          open-name="On"
          close-name="Debug"
          color="green"
        />
        <v-switch
          class="demo-switch demo-important demo-switch-linear"
          size="lg"
          v-model="flags.random"
          @update:value="value => flags.random = value"
          open-name="Random"
          close-name="Linear"
          color="green"
        />
        <v-switch
          class="demo-switch demo-important demo-switch-persist"
          size="lg"
          v-model="flags.persist"
          @update:value="value => flags.persist = value"
          open-name="Persist"
          close-name="Static"
          color="green"
        />
        <h1 class="demo-heading demo-space-below-rem">
          Vue Stepper
          <sup>{{pkg.version}}</sup>
        </h1>
        <p class="demo-talign-center demo-large-space-below">
          A lean Vue.js Stepper component with Vuex support and Zero dependencies.
        </p>
        <!-- Accolades -->
        <v-stepper
          ref="stepper"
          class="demo-stepper demo-large-space-below"
          :steps="steps"
          :linear="flags.linear"
          persist
          v-model="step"
        >
          <template slot="step-1"> Eeny </template>
          <template slot="step-2"> Miny </template>
          <template slot="step-3"> Moe </template>
        </v-stepper>
        <div class="demo-space-below demo-talign-justify">
          <div v-if="step === 1">
            <p>
              <b>Eeny Content</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod elementum ante ac volutpat. Suspendisse euismod est enim, sit amet vehicula neque feugiat id. Nunc imperdiet convallis placerat. Sed accumsan mauris et magna facilisis gravida. Suspendisse et justo volutpat, congue libero id, vehicula sem. Maecenas nec ex imperdiet, bibendum justo vel, feugiat velit. Vivamus eu maximus mi. Fusce ac metus magna. Integer eu nunc ac quam efficitur sagittis. Nunc scelerisque, lorem ut elementum imperdiet, nisl tellus dapibus eros, eget sagittis dolor massa ut turpis.
            </p>
          </div>
          <div v-if="step === 2">
            <p>
              <b>Miny Content</b>
            </p>
            <p>
              Nunc a nunc at sapien posuere consequat. Vestibulum sed maximus felis. Nulla a diam sit amet nulla malesuada commodo. Fusce ullamcorper tortor sed ipsum ornare suscipit eget at nulla. Donec facilisis elit purus, eu tempus nunc feugiat sollicitudin. Mauris ipsum ligula, faucibus sed libero vel, dignissim posuere mauris. Quisque ipsum tellus, sodales ac ante sed, consequat efficitur metus. Pellentesque euismod viverra orci, vel elementum urna aliquam in. In in accumsan dui, vel interdum dui. Duis cursus lectus leo, in feugiat tortor posuere sed.
            </p>
          </div>
          <div v-if="step === 3">
            <p>
              <b>Moe Content</b>
            </p>
            <p>
              Aenean vel arcu mollis, feugiat ipsum vitae, sollicitudin nibh. Integer fermentum, dui ut laoreet faucibus, nibh elit ultricies ipsum, sit amet placerat libero nisl id enim. Quisque quis arcu nisi. Etiam interdum luctus neque, non tincidunt metus mollis vel. In nec tellus non nisl commodo aliquet a a ligula. Donec semper massa nisl, a tristique lectus ultrices ut. Donec ac ultricies lectus, a semper nibh. Integer tempor, purus ac convallis semper, purus sapien dignissim turpis, non sagittis urna quam nec est. Vivamus a commodo nulla. Cras suscipit arcu ut urna iaculis vehicula.
            </p>
          </div>
        </div>
        <p class="demo-talign-center demo-button-group">
          <a href="" class="btn demo-button" @click.prevent="$refs.stepper.previous()">Previous</a>
          <a href="" class="btn demo-button" @click.prevent="$refs.stepper.next()">Next</a>
          <a href="" class="btn demo-button" @click.prevent="$refs.stepper.reset()">Reset</a>
          <a :href="linkToGit" target="_blank" class="btn demo-button">GitHub</a>
        </p>
        <a class="demo-fixed-anchor demo-cursor-pointer" @click="scrollTo('docs')" tabindex="">Install, Examples & Documentation</a>
      </div>
    </div>
    <!-- Documentation -->
    <div ref="docs" class="container demo-container demo-pad-below demo-clearfix">
      <h2>Install & Usage</h2>
      <p>Install from GitHub via NPM</p>
      <pre class="demo-large-space-below language-bash"><code language="bash" v-html="md.Install"/></pre>
      <!-- <prism-code class="demo-large-space-below" language="bash" v-html="md.Install" /> -->
      <p>
        To use the component in your templates, simply import it, and register it with your component. To control the Stepper state, we use the
        <code>v-model</code> directive, just like on any other input element with two-way binding. The Stepper acts as a group of radio-buttons.
      </p>
      <h3>Template</h3>
      <pre class="demo-large-space-below language-html"><code v-html="md.Examples.Default.Template"/></pre>
      <h3>Script</h3>
      <pre class="demo-large-space-below language-js"><code v-html="md.Examples.Default.Script"/></pre>
      <!-- Vuex -->
      <h2>With Vuex</h2>
      <p>A common practice for managing your Stepper state, is through the Store (Vuex).</p>
      <pre class="demo-large-space-below language-js"><code v-html="md.Examples.Vuex.Store"/></pre>
      <p>Then, in your component:</p>
      <h3>Template</h3>
      <pre class="demo-large-space-below language-html"><code v-html="md.Examples.Vuex.Template"/></pre>
      <h3>Script</h3>
      <pre class="demo-large-space-below language-js"><code v-html="md.Examples.Vuex.Script"/></pre>
      <!-- Programmatic -->
      <h2>Changing Steps Programmatically</h2>
      <p>
        Changing steps programmatically is a popular use-case in a Stepper and also great for debugging your flow in development environment. Start off by assigning special
        <code>Vue</code> property
        <code>ref</code> to the
        <code>v-stepper</code> component. Then, assign a
        <code>Vue-Stepper</code> API method to an Event handler of your choice. The following example is similar to the Demo above, where we assign
        <code>previous</code>,
        <code>next</code> and
        <code>reset</code> to the
        <code>click</code> event of a button element.
        <a href="https://vuejs.org/v2/api/#ref" target="_blank">Read more</a> about
        <code>ref</code>.
      </p>
      <pre class="demo-large-space-below language-js"><code v-html="md.Examples.Programmatic.Template"/></pre>
      <h2>Debugging</h2>
      <p>It's often useful to inspect how the Stepper acts behind the scenes. To enable Debug mode, simply pass a
        <code>debug</code> property to the Stepper component via
        <code>:debug="true"</code>. You can play around with it in the Demo above by hitting the
        <a href="" @click.prevent="scrollTo('debug-switch')">Debug Switch</a> in the top left corner.
      </p>
      <h2>Options</h2>
      <p>
        <pre class="demo-large-space-below language-js"><code v-html="md.Options"/></pre>
      </p>
      <h2>Support</h2>
      <p>
        Please open an
        <a :href="pkg.bugs.url" target="_blank">issue</a> for support.
      </p>
    </div>
    <git-ribbon :href="linkToGit" />
  </div>
</template>

<script>
// https://v4-alpha.getbootstrap.com/
// https://github.com/spatie/vue-tabs-component
// https://github.com/cristijora/vue-tabs/blob/master/src/components/VueTabs.js
// https://stackoverflow.com/questions/42645964/vue-js-anchor-to-div-within-the-same-component

// Meta-data
import pkg from '@root/package'

// Resources
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import octicons from 'octicons'

// Components
import VStepper from './Stepper'
import VStepperOld from './Stepper.old'
import GitRibbon from './GitRibbon'
import PrismCode from './PrismCode'
import VSwitch from 'vue-switch/switch-2'

// Markdowns
const Markdowns = {
  Install: require('@/md/Install.md'),
  Options: require('@/md/Options.md'),
  Examples: {
    Default: {
      Template: require('@/md/Examples/Default/Template.md'),
      Script: require('@/md/Examples/Default/Script.md')
    },
    Programmatic: {
      Template: require('@/md/Examples/Programmatic/Template.md')
    },
    Vuex: {
      Store: require('@/md/Examples/Vuex/Store.md'),
      Template: require('@/md/Examples/Vuex/Template.md'),
      Script: require('@/md/Examples/Vuex/Script.md')
    }
  }
}

// Implementation
export default {
  components: {
    VStepper,
    VStepperOld,
    // PrismCode,
    VSwitch,
    GitRibbon
  },  
  data() {
    return {
      pkg,
      octicons,
      md: Markdowns,
      step: undefined,
      oldStep: 1,
      steps: 3,
      options: {
        steps: [
          {
            title: 'eeny',
            value: 1
          },
          {
            title: 'miny',
            value: 2
          },
          {
            title: 'moe',
            value: 3
          }
        ],
        debug: false
      },
      flags: {
        debug: false,
        random: false,
        persist: false
      }
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  computed: {
    linkToGit() {
      return pkg.repository.url
    }
  },
  methods: {
    scrollTo(refName) {
      const element = this.$refs[refName]
      const top = element.offsetTop
      window.scrollTo(0, top)
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/sass/typography.scss';
@import '~@/assets/sass/bootstrap.scss';
@import '~@/assets/sass/reset.scss';
@import '~@/assets/sass/utils.scss';
@import '~@/assets/sass/variables';
@import '~@/assets/sass/tags';

.demo {
  min-width: 320px;
}

.demo-container {
  min-height: 100vh;
}

.demo-has-jumbotron {
  display: flex;
  align-items: center;
  // background: linear-gradient(to right, $color-hot-pink 0%, #a80077 100%);
  // background: linear-gradient(to bottom, #b4e391 0%,#61c419 50%,#b4e391 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  // background: linear-gradient(to bottom, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%);
  // background: linear-gradient(to bottom, #e570e7 0%, #c85ec7 47%, #a849a3 100%);
  background: linear-gradient(to bottom, #00b7ea 0%,#009ec3 100%);
}

.demo-jumbotron {
  color: $color-white;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.demo-heading {
  @include media-breakpoint-down(xs) {
    margin-top: 3rem;
  }
}

.demo-switch.demo-important.vue-switch.s-lg {
  width: 4rem;
  height: 22px;
  display: flex;
  align-items: center;

  &.z-on::after {
    left: 55px;
  }

  &.demo-switch-debug {
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

  &.demo-switch-linear {
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

  &.demo-switch-persist {
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

.demo-stepper {
  width: 100%;
  display: flex;
  justify-content: center;

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

.demo-button {
  color: $color-white;
  padding: 0.5rem 1rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  border-radius: 0.3rem;
  border: 0.1em solid $color-white;
  @include media-breakpoint-down(xs) {
    margin-top: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    color: #a80077;
    text-decoration: none;
    background-color: $color-white;
    box-shadow: 1px 1px 1px rgba($color-black, 0.2);
  }
}

.demo-button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.demo-fixed-anchor {
  color: $color-white;
  bottom: 0.8rem;
  position: absolute;
  text-decoration: none;
  @include media-breakpoint-down(xs) {
    position: static;
    margin-top: 2rem;
    margin-bottom: 0.8rem;
  }

  &:hover {
    color: $color-white;
  }
}
</style>
