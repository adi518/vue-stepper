<template>
  <pre :class="{ 'line-numbers': lineNumbers }"><code :class="`language-${language}`" ref="code" :key="lineNumbers"><slot/></code></pre>
</template>

<script>
// https://codesandbox.io/embed/215p4mlz0y?module=%2FPrismCode.vue
const Prism = require('prismjs/components/prism-core.js')
require('prismjs/components/prism-clike.js')
require('prismjs/components/prism-javascript.js')
require('prismjs/plugins/line-numbers/prism-line-numbers.js')

export default {
  name: 'prism-code',
  props: {
    language: {
      required: true,
      type: String
    },
    lineNumbers: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  mounted() {
    Prism.highlightElement(this.$refs.code)
  },
  watch: {
    lineNumbers() {
      this.$forceUpdate()
      this.$nextTick(() => Prism.highlightElement(this.$refs.code))
    }
  }
}
</script>

<style scoped>
@import '~prismjs/themes/prism.css';
@import '~prismjs/plugins/line-numbers/prism-line-numbers.css';
</style>
