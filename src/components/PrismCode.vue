<template>
  <pre :class="`language-${language}`"><code><slot/></code></pre>
</template>

<script>
// https://codesandbox.io/embed/215p4mlz0y?module=%2FPrismCode.vue
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default {
  name: 'prism-code',
  props: {
    language: {
      required: true,
      type: String
    }
  },
  mounted() {
    Prism.highlightElement(this.$el);
  }
}
</script>
