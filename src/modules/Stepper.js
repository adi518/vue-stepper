import Utils from './Stepper.Utils'
import Model from './Stepper.Model'

/**
 * Constructs Stepper model and map.
 * @param {number} size
 * @returns {object}
 */
export class Stepper {
  constructor(size) {
    const model = new Model()
    const map = new Utils.Steps(size)
    const array = Utils.makeStepsArray(size)
    return {
      map,
      array,
      model,
      size: map.size,
      length: map.size
    }
  }
}

export default Stepper
