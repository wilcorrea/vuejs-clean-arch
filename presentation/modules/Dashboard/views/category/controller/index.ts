import { resolve } from 'app/container'
import { ErrorDetail, Schemata } from 'app/definitions'
import error from 'app/error'

import { hideLoading, showLoading } from 'presentation/modules/Dashboard/ui/loading'
import { errorMessage, failMessage, successMessage } from 'presentation/modules/Dashboard/ui/message'

import AddCategory from 'source/Domains/General/Category/Contracts/CategoryAddUseCase'

/**
 * @param {Schemata} schemata
 * @param {Record<string, ErrorDetail[]>} errors
 * @return {(datum: Record<string, unknown>): Promise<void>}
 */
export function useAddCategory (schemata: Schemata, errors: Record<string, ErrorDetail[] | unknown>) {
  return async function (datum: Record<string, unknown>): Promise<void> {
    const useCase = await resolve('AddCategory') as AddCategory

    try {
      showLoading()
      const save = await useCase.handle(datum, schemata)
      if (save) {
        successMessage('success-message')
        return
      }
      return
    } catch (exception) {
      if (exception.errors) {
        for (const key in exception.errors) {
          if (!exception.errors.hasOwnProperty(key)) {
            continue
          }
          errors[key] = exception.errors[key]
        }
        failMessage('validation-message')
        return
      }

      errorMessage('error-message')

      error(exception)
    } finally {
      hideLoading()
    }
  }
}
