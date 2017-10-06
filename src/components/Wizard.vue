<template>
  <div class="v-wizard">
    <div
      class="step"
      v-for="(step, index) in steps"
      :key="index"
      :class="stepClasses(step)">
      <!-- we cannot type check here: `value == step.value` -->
      <input class="input"
        type="radio"
        :checked="isChecked(step)"
        :disabled="step.disabled"
        v-show="debug"
        v-bind="inputProps(step, index)"
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
  name: 'VWizard',
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
    reset: {
      type: Boolean,
      default: false
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  creatd() {
    this.mutableReset = this.reset
  },
  watch: {
    value(value, oldValue) {
      if (oldValue) {
        const index = this.steps.findIndex(step => step.value == oldValue) // eslint-disable-line eqeqeq
        this.$set(this.steps[index], 'visited', true)
      }
    },
    reset(value) {
      this.mutableReset = value
      if (this.mutableReset) {
        this.steps.forEach(step => this.$set(step, 'visited', false))
        this.mutableReset = false
        this.$emit('update:reset', this.mutableReset)
      }
    }
  },
  computed: {
    stepsCount() {
      return this.steps.length
    },
    lastStepIndex() {
      return this.stepsCount - 1
    }
  },
  methods: {
    onChange() {
      this.$emit('input', event.target.value)
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
    inputProps(step, index) {
      return {
        id: this.getId(index),
        name: this._uid,
        value: step.value,
      }
    },
    stepClasses(step) {
      return {
        'is-active': this.isChecked(step),
        'is-visited': step.visited
      }
    }
  },
  data() {
    return {
      mutableReset: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/colors';

.v-wizard {
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
