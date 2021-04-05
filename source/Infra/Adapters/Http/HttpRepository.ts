import { Datum, HttpClient } from 'app/definitions'
import { get } from 'app/container/index'
import PersistenceErrors from 'app/kernel/Exceptions/PersistenceErrors'
import error from 'app/error'

import Repository from '../Repository'
import { extractData } from './helper'

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
   * @param {string} path
   * @return {string}
   */
  protected path (path = ''): string {
    const resource = this.resource()
    return `${resource}/${path}`.replace(/\/\//g, '/')
  }

  /**
   * @param {Datum} datum
   * @return {Promise<string>}
   */
  protected async add (datum: Datum): Promise<string> {
    let errors
    try {
      const response = await this.http.post(this.path(), datum)
      const data = extractData(response)
      if (data.status === 'success') {
        return String(data.value)
      }
      errors = data?.meta
    } catch (exception) {
      error(exception)

      // report error
      if (exception?.response) {
        errors = exception?.response?.data?.meta
      }
    }

    throw new PersistenceErrors(errors)
  }

  /**
   * @param {string | number} primaryKey
   * @return {Promise<string>}
   */
  protected async read (primaryKey: string | number): Promise<string> {
    let errors
    try {
      const response = await this.http.get(this.path(String(primaryKey)))
      const data = extractData(response)
      if (data.status === 'success') {
        return String(data.value)
      }
      errors = data?.meta
    } catch (exception) {
      error(exception)

      // report error
      if (exception?.response) {
        errors = exception?.response?.data?.meta
      }
    }

    throw new PersistenceErrors(errors)
  }

  /**
   * @param {string | number} primaryKey
   * @param {Datum} datum
   * @return {Promise<string>}
   */
  protected async set (primaryKey: string | number, datum: Datum): Promise<string> {
    let errors
    try {
      const response = await this.http.patch(this.path(String(primaryKey)), datum)
      const data = extractData(response)
      if (data.status === 'success') {
        return String(data.value)
      }
      errors = data?.meta
    } catch (exception) {
      error(exception)

      // report error
      if (exception?.response) {
        errors = exception?.response?.data?.meta
      }
    }

    throw new PersistenceErrors(errors)
  }

  /**
   * @param {string | number} primaryKey
   * @return {Promise<string>}
   */
  protected async remove (primaryKey: string | number): Promise<string> {
    let errors
    try {
      const response = await this.http.delete(this.path(String(primaryKey)))
      const data = extractData(response)
      if (data.status === 'success') {
        return String(data.value)
      }
      errors = data?.meta
    } catch (exception) {
      error(exception)

      // report error
      if (exception?.response) {
        errors = exception?.response?.data?.meta
      }
    }

    throw new PersistenceErrors(errors)
  }
}
