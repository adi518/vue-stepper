export class Utils {
  /**
   * @param {*} value
   * @returns {Boolean}
   */
  static isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value)
  }

  /**
   * @param {*} value
   * @returns {Boolean}
   */
  static isNan() {
    return Utils.isNumber.apply(Utils, arguments) === false
  }

  /**
   * Whether is function.
   * @param {*} fn
   * @returns {boolean}
   */
  static isFunction(fn) {
    return Object.prototype.toString.call(fn) == '[object Function]' // eslint-disable-line
  }
}

export default Utils
