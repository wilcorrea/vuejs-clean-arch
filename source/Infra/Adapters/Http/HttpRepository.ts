import { Datum, HttpClient, HttpRestAnswer } from 'app/definitions'
import { get } from 'app/container'
import PersistenceError from 'app/kernel/Exceptions/PersistenceError'
import error from 'app/error'

import Repository from '../Repository'

/**
 * @class {HttpRepository}
 */
export default abstract class HttpRepository implements Repository {
  /**
   * @private
   */
  protected readonly http: HttpClient

  /**
   */
  constructor () {
    this.http = get('http') as HttpClient
  }

  /**
   * @return {string}
   */
  abstract resource (): string

  /**
   * @return {string}
   */
  protected getEndpoint (): string {
    return this.resource()
  }

  /**
   * @param {Datum} datum
   * @return {Promise<string>}
   */
  protected async add (datum: Datum): Promise<string> {
    let errors
    try {
      const response = await this.http.post(this.getEndpoint(), datum)
      const data = response.data as HttpRestAnswer
      if (data.status === 'success') {
        return String(data.value)
      }
      errors = data?.meta
    } catch (e) {
      error(e)

      // report error
      if (e?.response) {
        errors = e?.response?.data?.meta
      }
    }

    throw new PersistenceError(errors)
  }
}
