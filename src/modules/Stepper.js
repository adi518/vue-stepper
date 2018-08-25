import Utils from './Stepper.Utils'

export class Stepper {
  /**
   * Constructs Stepper utility object.
   * @param {number} steps
   * @param {object} options
   * @returns {object}
   */
  constructor(steps, options = {}) {
    const defaults = { step: null }
    options = Object.assign({}, defaults, options)
    this.map = new Utils.Steps(steps)
    this.model = new Utils.Model(options.step)
    this.array = Utils.makeStepsArray(steps)
    this.size = steps
    this.length = steps // Alias
    this.linear = options.linear
  }

  /**
   * Whether step exists in stepper.
   * @returns {boolean}
   */
  has(display) {
    return this.map.has(display)
  }

  /**
   * Current step.
   * @returns {number}
   */
  get step() {
    return this.model.step
  }

  /**
   * Next step.
   * @returns {number}
   */
  get next() {
    return this.model.step + 1
  }

  /**
   * Previous step.
   * @returns {number}
   */
  get previous() {
    return this.model.step - 1
  }
}

export default Stepper
