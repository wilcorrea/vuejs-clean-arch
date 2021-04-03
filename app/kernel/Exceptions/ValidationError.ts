import { ErrorDetail } from '../../definitions'

/**
 * @class {ValidationError}
 */
export default class ValidationError extends Error {
  /**
   * @type {Record<string, ErrorDetail[]>}
   */
  public readonly errors: Record<string, ErrorDetail[]> = {}

  /**
   * @param {string} field
   * @param {string} message
   * @param {unknown} value
   */
  constructor (field: string, message: string, value?: unknown) {
    super('ValidationError')

    this.errors[field] = [
      {
        message,
        value
      }
    ]
  }

  /**
   * @return {Record<string, ErrorDetail[]>}
   */
  getErrors (): Record<string, ErrorDetail[]> {
    return this.errors
  }
}
