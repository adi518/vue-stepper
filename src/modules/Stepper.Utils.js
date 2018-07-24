import $Utils from '@/modules/Utils'

const { isNan, isFunction } = $Utils

export class Utils {
  static Model(step = 1) {
    /**
     * Constructs an object model for v-model.
     * @param {number} step
     * @returns {object}
     */
    return { id: undefined, step, flags: {} }
  }
  /**
   * Remove stale storage keys.
   * @param {(string|Array)} id
   * @returns {void}
   */
  static removeStaleStorage(keys = []) {
    keys = [].concat(keys)

    for (const key in window.localStorage) {
      if (keys.includes(key)) {
        // Keep in storage.
      } else {
        window.localStorage.removeItem(key)
      }
    }
  }

  /**
   * Constructs a step slot name.
   * @param {string} suffix
   * @param {number} display
   * @param {object} options
   * @returns {string} String of prefix, display and suffix.
   */
  static getSlotName(suffix = '', display, options = {}) {
    const defaults = { prefix: 'step' }
    options = Object.assign({}, defaults, options)
    const { prefix } = options
    const name = []
    if (isNan(display)) {
      throw new Error(`[Stepper.Utils.getSlotName warn]: Cannot generate name without a "display".`)
    }
    if (prefix) {
      name.push(prefix)
    }
    if (display) {
      name.push(display)
    }
    if (suffix) {
      name.push(suffix)
    }
    return name.join('-')
  }

  /**
  * Returns whether a step slot was passed.
  * @param {string} name
  * @returns {boolean}
  */
  static withSlot(name) {
    return this.withoutSlot(name) === false
  }

  /**
   * Returns whether a step slot was not passed.
   * @param {string} name
   * @returns {boolean}
   */
  static withoutSlot(name) {
    const noSlot = !this.$slots[name] || (this.$slots[name] && !this.$slots[name].length)
    const noScopedSlot = !this.$scopedSlots[name]
    return noSlot && noScopedSlot
  }

  /**
   * Constructs steps array. E.g.: [1, 2, 3...]
   * @param {number} steps
   * @returns {Array}
   */
  static makeStepsArray(steps) {
    if (steps) {
      return Array.from(Array(steps)).map((value, index) => index + 1)
    }
    return []
  }

  /**
   * Constructs steps map.
   * @param {number} steps
   * @param {function} callback
   * @returns {Array}
   */
  static Steps(steps, callback = function () { }) {
    // Duck-type
    if (isFunction(callback)) {
      // OK
    } else {
      throw new Error(`[Steps error]: Argument "callback" is not a function.`)
    }
    const array = Utils.makeStepsArray(steps).map(step => {
      const name = `step-${step}`
      const entry = [step, { route: name }]
      entry[1] = callback(entry)
      return entry
    })

    return new Map(array)
  }
}

export default Utils
