<template>
  <div class="app-step">
    <v-breakpoint v-model="models.breakpoint"></v-breakpoint>
    {{ children }}
  </div>
</template>

<script>
import truncate from 'lodash.truncate'
import { VBreakpoint, Model as Breakpoint } from 'vue-breakpoint-component'

export default {
  name: 'app-step',
  components: {
    VBreakpoint
  },
  props: {
    truncate: {
      type: Number,
      default: Infinity
    },
    noMatch: {
      type: Number,
      default: Infinity
    }
  },
  data: () => ({
    models: { breakpoint: new Breakpoint() }
  }),
  computed: {
    children() {
      const text = this.$slots.default[0].text
      if (this.models.breakpoint.noMatch) {
        return truncate(text, { length: this.noMatch })
      }
      return text
    }
  }
}
</script>
