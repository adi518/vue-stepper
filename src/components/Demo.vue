<template>
  <div class="demo">
    <!-- Jumbotron -->
    <div class="demo-container demo-has-jumbotron">
      <div class="container demo-jumbotron">
        <h1 class="demo-space-below-rem">
          Vue Wizard
          <sup>{{pkg.version}}</sup>
        </h1>
        <p class="demo-talign-center demo-large-space-below">
          A super lean, fully reactive Vue.js Wizard component with Vuex support and Zero dependencies.
        </p>
        <!-- Accolades -->
        <v-wizard ref="wizard" class="demo-wizard demo-large-space-below" v-bind="options" v-model="step" />
        <div class="demo-space-below demo-talign-justify">
          <div v-if="step == 1">
            <p>
              <b>Eeny Content</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod elementum ante ac volutpat. Suspendisse euismod est enim, sit amet vehicula neque feugiat id. Nunc imperdiet convallis placerat. Sed accumsan mauris et magna facilisis gravida. Suspendisse et justo volutpat, congue libero id, vehicula sem. Maecenas nec ex imperdiet, bibendum justo vel, feugiat velit. Vivamus eu maximus mi. Fusce ac metus magna. Integer eu nunc ac quam efficitur sagittis. Nunc scelerisque, lorem ut elementum imperdiet, nisl tellus dapibus eros, eget sagittis dolor massa ut turpis.
            </p>
          </div>
          <div v-if="step == 2">
            <p>
              <b>Miny Content</b>
            </p>
            <p>
              Nunc a nunc at sapien posuere consequat. Vestibulum sed maximus felis. Nulla a diam sit amet nulla malesuada commodo. Fusce ullamcorper tortor sed ipsum ornare suscipit eget at nulla. Donec facilisis elit purus, eu tempus nunc feugiat sollicitudin. Mauris ipsum ligula, faucibus sed libero vel, dignissim posuere mauris. Quisque ipsum tellus, sodales ac ante sed, consequat efficitur metus. Pellentesque euismod viverra orci, vel elementum urna aliquam in. In in accumsan dui, vel interdum dui. Duis cursus lectus leo, in feugiat tortor posuere sed.
            </p>
          </div>
          <div v-if="step == 3">
            <p>
              <b>Moe Content</b>
            </p>
            <p>
              Aenean vel arcu mollis, feugiat ipsum vitae, sollicitudin nibh. Integer fermentum, dui ut laoreet faucibus, nibh elit ultricies ipsum, sit amet placerat libero nisl id enim. Quisque quis arcu nisi. Etiam interdum luctus neque, non tincidunt metus mollis vel. In nec tellus non nisl commodo aliquet a a ligula. Donec semper massa nisl, a tristique lectus ultrices ut. Donec ac ultricies lectus, a semper nibh. Integer tempor, purus ac convallis semper, purus sapien dignissim turpis, non sagittis urna quam nec est. Vivamus a commodo nulla. Cras suscipit arcu ut urna iaculis vehicula.
            </p>
          </div>
        </div>
        <p class="demo-talign-center">
          <a href="" class="btn demo-button" @click.prevent="$refs.wizard.previous()">Previous</a>
          <a href="" class="btn demo-button" @click.prevent="$refs.wizard.next()">Next</a>
          <a href="" class="btn demo-button" @click.prevent="$refs.wizard.reset()">Reset</a>
          <a :href="linkToGit" target="_blank" class="btn demo-button">View on GitHub</a>
        </p>
      </div>
      <a class="demo-fixed-anchor demo-cursor-pointer" @click="scrollTo('docs')" tabindex="">Install, Examples & Documentation</a>
    </div>
    <!-- Documentation -->
    <div ref="docs" class="container demo-container demo-pad-below demo-clearfix">
      <h2>Install & and Usage</h2>
      <p>Install from GitHub via NPM</p>
      <pre class="demo-large-space-below language-bash"><code>$ npm install vue-wizard --save</code></pre>
      <p>To use the component in your templates, simply import it, and register it with your component.</p>
      <pre class="demo-large-space-below language-js"><code v-html="markdowns.Install"/></pre>
      <h2>Examples</h2>
      <h3>With Local State</h3>
      <pre class="demo-large-space-below language-js"><code v-html="markdowns.ExampleLocalState"/></pre>
      <h3>With Vuex</h3>
      <pre class="demo-large-space-below language-js"><code v-html="markdowns.ExampleWithVuex"/></pre>
      <h3>Changing Steps Programmatically</h3>
      <pre class="demo-large-space-below language-js"><code v-html="markdowns.ExampleProgrammatic"/></pre>
      <h2>Support</h2>
      <p> Please open an
        <a :href="pkg.bugs.url" target="_blank">issue</a> for support.
      </p>
    </div>
    <git-ribbon :href="linkToGit" />
    <v-switch class="demo-switch demo-important demo-switch-debug" size="lg" v-model="options.debug" @update:value="value => step = value" open-name="On" close-name="Debug" color="green" />
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
import vWizard from './Wizard'
import GitRibbon from './GitRibbon'
import vSwitch from 'vue-switch/switch-2'

// Markdowns
import Install from '@/md/Install.md'

// Implementation
export default {
  components: {
    vWizard,
    vSwitch,
    GitRibbon
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
  },
  data() {
    return {
      pkg,
      octicons,
      markdowns: {
        Install
      },
      step: 1,
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
      }
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
@import '~@/assets/sass/abstracts';

.demo-container {
  min-height: 100vh;
}

.demo-has-jumbotron {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, $color-hot-pink 0%, #a80077 100%);
  // background: linear-gradient(45deg, #cb60b3 0%, #c146a1 25%, #a80077 75%, #db36a4 100%);
  // background: linear-gradient(45deg, #cb60b3 0%, #c146a1 15%, #a80077 40%, #db36a4 100%);
  // background: linear-gradient(45deg, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%);
  // background: linear-gradient(45deg, #cb60b3 0%, #ad1283 50%, #de47ac 100%);
  // background: linear-gradient(45deg, #b4ddb4 0%, #83c783 17%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%);
}

.demo-jumbotron {
  color: $color-white;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.demo-switch.demo-important.vue-switch.s-lg {
  width: 4em;
  height: 22px;
  display: flex;
  align-items: center;

  &.z-on::after {
    left: 55px;
  }

  &.demo-switch-debug {
    top: 1em;
    left: 1em;
    opacity: .8;
    position: absolute;

    &.z-on {
      opacity: 1;
    }
  }
}

.demo-wizard {
  width: 100%;
  display: flex;
  justify-content: center;
}

.demo-button {
  color: $color-white;
  font-size: 1.2rem;
  padding: .5em 1em;
  border-radius: .3em;
  border: .1em solid $color-white;

  &:hover {
    // color: $color-hot-pink;
    color: #a80077;
    text-decoration: none;
    background-color: $color-white;
    box-shadow: 1px 1px 1px rgba($color-black, .2);
  }
}

.demo-fixed-anchor {
  color: $color-white;
  bottom: .8em;
  position: absolute;
  text-decoration: none;

  &:hover {
    color: $color-white;
  }
}
</style>
