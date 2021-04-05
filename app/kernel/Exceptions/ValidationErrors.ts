import { ErrorScheme } from '../../definitions'

/**
 * @class {ValidationErrors}
 */
export default class ValidationErrors extends Error {
  /**
   * @type {ErrorScheme}
   */
  public readonly errors: ErrorScheme = {}

  /**
   * @param {ErrorScheme} errors
   */
  constructor (errors: ErrorScheme) {
    super('ValidationErrors')

    this.errors = errors
  }

  /**
   * @return {ErrorScheme}
   */
  getErrors (): ErrorScheme {
    return this.errors
  }
}
