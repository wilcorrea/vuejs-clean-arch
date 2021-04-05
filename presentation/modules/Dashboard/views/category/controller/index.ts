import { resolve } from 'app/container/index'
import { Datum, ErrorScheme, Schemata } from 'app/definitions'

import UseCase from 'source/Domains/Shared/UseCase'

import execute from '../../../controllers/execute'

/**
 * @param {Schemata} schemata
 * @param {ErrorScheme} errors
 * @return {(datum: Record<string, unknown>): Promise<void>}
 */
export function useAddCategory (schemata: Schemata, errors: ErrorScheme) {
  return async function (datum: Datum): Promise<void> {
    const useCase = await resolve('AddCategory') as UseCase

    await execute(useCase, datum, schemata, errors)
  }
}
