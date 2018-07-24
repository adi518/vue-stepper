import Utils from './Stepper.Utils'

/**
 * Constructs Stepper utility object.
 * @param {number} steps
 * @param {number} step
 * @returns {object}
 */
export class Stepper {
  constructor(steps, step) {
    const map = new Utils.Steps(steps)
    const model = new Utils.Model(step)
    const array = Utils.makeStepsArray(steps)
    const size = steps
    const length = steps
    return {
      map,
      array,
      model,
      size,
      length
    }
  }
}

export default Stepper
