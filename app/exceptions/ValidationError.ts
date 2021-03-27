import { ErrorInfo } from '../definitions'

/**
 * @class {ValidationError}
 */
export default class ValidationError extends Error {
  /**
   * @type {ErrorInfo[]}
   */
  private errors: ErrorInfo[]

  /**
   * @param {ErrorInfo[]} errors
   */
  constructor (errors: ErrorInfo[]) {
    super('ValidationError')

    this.errors = errors
  }

  /**
   * @return {this}
   */
  getErrors (): ErrorInfo[] {
    return this.errors
  }

  /**
   * @param {ErrorInfo[]} errors
   * @return {this}
   */
  setErrors (errors: ErrorInfo[]): this {
    this.errors = errors
    return this
  }
}
