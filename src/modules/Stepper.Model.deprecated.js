export class Model {
  /**
   * Constructs an object model for v-model.
   * @param {number} step
   * @returns {object}
   */
  constructor(step = 1) {
    return { id: undefined, step, flags: {} }
  }
}

export default Model

console.log(new Model())
