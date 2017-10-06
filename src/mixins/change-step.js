export const changeStep = steps => {
  return {
    methods: {
      changeStep(offset) {
        const step = steps[this.stepIndex + offset]
        if (step) {
          this.step = step.value
        }
      }
    }
  }
}
