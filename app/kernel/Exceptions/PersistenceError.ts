import { ErrorDetail } from '../../definitions'

/**
 * @class {PersistenceError}
 */
export default class PersistenceError extends Error {
  /**
   * @type {Record<string, ErrorDetail[]>}
   */
  public readonly errors: Record<string, ErrorDetail[]> = {}

  /**
   * @param {Record<string, ErrorDetail[]>} errors
   */
  constructor (errors: Record<string, ErrorDetail[]>) {
    super('PersistenceError')

    this.errors = errors
  }

  /**
   * @return {Record<string, ErrorDetail[]>}
   */
  getErrors (): Record<string, ErrorDetail[]> {
    return this.errors
  }
}
