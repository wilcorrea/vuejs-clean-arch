import { ErrorScheme } from '../../definitions'

/**
 * @class {PersistenceError}
 */
export default class PersistenceError extends Error {
  /**
   * @type {ErrorScheme}
   */
  public readonly errors: ErrorScheme = {}

  /**
   * @param {ErrorScheme} errors
   */
  constructor (errors: ErrorScheme) {
    super('PersistenceError')

    this.errors = errors
  }

  /**
   * @return {ErrorScheme}
   */
  getErrors (): ErrorScheme {
    return this.errors
  }
}
