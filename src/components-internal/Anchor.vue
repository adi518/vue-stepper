<template>
  <a class="v-a"
    :href="href"
    :target="target"
    :tabindex="tabindex"
    @click.prevent="handleClick"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'VA',
  props: {
    href: {
      type: String,
      default: ''
    },
    tabindex: {
      type: String,
      default: ''
    },
    refs: {
      type: Object,
      default: () => ({})
    },
    scrollTo: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '_blank'
    }
  },
  methods: {
    handleClick() {
      if (this.scrollTo) {
        this.$scrollTo(this.scrollTo)
      }

      this.$emit('click', { href: this.href })
    },
    getElementByRef(ref, refs) {
      refs = refs || this.$refs

      const noRefs = !refs

      if (noRefs) {
        console.error(`[getElementByRef warn]: No refs found.`)
        return
      }

      let element = refs[ref]

      // Is from element?
      if (element instanceof Element) {
        return element
      }

      // Is from component?
      if (refs[ref]) {
        element = refs[ref].el
        if (element instanceof Element) {
          return element
        }
      }

      // Ref doesn't exist
      console.error(`[getElementByRef warn]: No such ref as "${ref}".`)

      return null
    },
    $scrollTo(ref, options = {}) {
      const element = this.getElementByRef(ref, this.refs)

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

