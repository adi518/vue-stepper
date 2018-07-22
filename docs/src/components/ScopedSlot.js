export default {
  name: 'v-test',
  props: {
    zlot: {
      type: String
    }
  },
  render(h) {
    return this.$children.map(
      child => h(child, { props: { slot: 'step-1', slotScope: {} } })
    )
  }
}
