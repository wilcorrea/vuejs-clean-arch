import { ErrorInfo, ErrorInfoDetail } from '../../definitions'

/**
 * @class {ValidationError}
 */
export default class ValidationError extends Error {
  /**
   * @type {ErrorInfo[]}
   */
  private errors: ErrorInfo[]

  /**
   * @param {string} field
   * @param {string} message
   * @param {unknown} value
   */
  constructor (field: string, message: string, value?: unknown) {
    super('ValidationError')

    const error: ErrorInfoDetail = {
      message,
      value
    }
    this.errors = [
      {
        field,
        errors: [error]
      }
    ]
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
