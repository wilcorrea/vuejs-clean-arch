import { Datum, ErrorScheme, Schemata } from 'app/definitions'
import error from 'app/error'

import UseCase from 'source/Domains/Shared/UseCase'

import { hideLoading, showLoading } from '../ui/loading'
import { errorMessage, failMessage, successMessage } from '../ui/message'

/**
 * @param {UseCase} useCase
 * @param {Datum} datum
 * @param {Schemata} schemata
 * @param {ErrorScheme} errors
 *
 * @return {Promise<void>}
 */
export default async function (useCase: UseCase, datum: Datum, schemata: Schemata, errors: ErrorScheme): Promise<void> {
  let problems
  try {
    showLoading()
    const save = await useCase.handle(datum, schemata)
    if (save) {
      successMessage('success-message')
      return
    }
  } catch (exception) {
    error(exception)

    if (exception.errors) {
      problems = exception.errors
    }
  } finally {
    hideLoading()
  }

  if (problems) {
    for (const key in problems) {
      if (!problems.hasOwnProperty(key)) {
        continue
      }
      errors[key] = problems[key]
    }
    failMessage('validation-message')
    return
  }

  errorMessage('error-message')
}
