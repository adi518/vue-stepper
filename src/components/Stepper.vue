<template>
  <div class="v-stepper">
    <div
      v-for="(step, index) in steps"
      :key="index"
      :class="['step', stepClasses(step)]">
      <!-- we cannot type check here: `value == step.value` -->
      <input class="input"
        type="radio"
        :id="getId(index)"
        :name="`${$options.name}-${_uid}`"
        :value="step.value"
        :checked="isChecked(step)"
        :disabled="step.disabled"
        v-show="debug"
        @change="onChange" />
      <label class="label" :for="getId(index)">
        <span class="index" v-html="index + 1" />
        <span class="title" v-html="step.title" v-if="step.title" />
        <span class="line" />
      </label>
    </div>
  </div>
</template>

<script>
// https://www.webpackbin.com/bins/-KvHS7KEmrTLJOYWS9k2
// https://cristijora.github.io/vue-form-wizard/#/?id=demos

// Implementation
export default {
  name: 'VStepper',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    steps: {
      type: Array,
      default() {
        return []
      }
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.initialValue = this.value
  },
  computed: {
    stepsCount() {
      return this.steps.length
    },
    lastStepIndex() {
      return this.stepsCount - 1
    },
    stepIndex() {
      return this.steps.findIndex(step => step.value == this.value) // eslint-disable-line eqeqeq
    }
  },
  methods: {
    setStepAsVisited() {
      const index = this.stepIndex
      if (Number.isInteger(index)) {
        this.$set(this.steps[index], 'visited', true)
      }
    },
    onChange() {
      this.onChangeCallback()
    },
    onChangeCallback(value) {
      this.setStepAsVisited()
      this.emitValue(value)
    },
    emitValue(value) {
      this.$emit('input', value || event.target.value)
    },
    getId(index) {
      return `${this._uid}-${index}`
    },
    isIntermediateIndex(index) {
      return index !== this.lastStepIndex
    },
    isLastIndex(index) {
      return index === this.lastStepIndex
    },
    isChecked(step) {
      return this.value == step.value // eslint-disable-line eqeqeq
    },
    stepClasses(step) {
      return {
        'is-active': this.isChecked(step),
        'is-visited': step.visited
      }
    },
    changeStep(offset) {
      const step = this.steps[this.stepIndex + offset]
      if (step) {
        this.onChangeCallback(step.value)
      }
    },
    reset() {
      const steps = [].concat(this.steps)
      steps.forEach(step => this.$set(step, 'visited', false))
      this.emitValue(this.initialValue)
      this.$emit('was-reset')
    },
    next() {
      this.changeStep(1)
    },
    previous() {
      this.changeStep(-1)
    },
    getCurrentStepIndex() {
      return this.stepIndex
    }
  },
  data() {
    return {
      initialValue: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/colors';

.v-stepper {
  display: flex;
  user-select: none;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .step {
    flex-grow: 1;

    &.is-active,
    &.is-visited {
      .label {
        cursor: pointer;
      }

      .index {
        color: $color-iron;
      }
    }

    &.is-active {
      .label {
        .index {
          opacity: 1;
          background-color: $color-white;
        }
      }
    }

    &.is-visited {
      .index {
        opacity: .75;
        background-color: $color-white;
      }
    }
  }

  .label {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .index {
    width: 2em;
    height: 2em;
    font-weight: 300;
    font-size: 1.5em;
    margin-right: 10px;
    border-radius: 50%;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid $color-wild-sand;
  }

  .title {
    color: $color-white;
  }

  .line {
    width: 100%;
    margin-left: 1em;
    border-bottom: 1px solid $color-white;
    box-shadow: 1px 1px 1px rgba(0,0,0, .2);
  }
}
</style>
