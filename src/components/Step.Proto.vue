<script>
export default {
  render() {
    const {
      active,
      computedName,
      scope,
      classes,
      label: VLabel,
      handleChange
    } = this
    return (
      <Component
        scopedSlots={{
          default: () => {
            return (
              <VLabel klass={classes}>
                <slot name="index" {...scope}>
                  {scope.display}
                </slot>
                <slot name="title" {...scope} />
                <input
                  type="radio"
                  v-show="debug"
                  checked={active}
                  name={computedName}
                  onChange={handleChange}
                />
              </VLabel>
            )
          }
        }}
      />
    )
  }
}
</script>
