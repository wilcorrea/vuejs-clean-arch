import { ErrorScheme } from '../../definitions'

/**
 * @class {PersistenceErrors}
 */
export default class PersistenceErrors extends Error {
  /**
   * @type {ErrorScheme}
   */
  public readonly errors: ErrorScheme = {}

  /**
   * @param {ErrorScheme} errors
   */
  constructor (errors: ErrorScheme) {
    super('PersistenceErrors')

    this.errors = errors
  }

  /**
   * @return {ErrorScheme}
   */
  getErrors (): ErrorScheme {
    return this.errors
  }
}
