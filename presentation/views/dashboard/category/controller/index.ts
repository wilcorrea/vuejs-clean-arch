import { resolve } from 'app/container/instance'
import { ErrorInfo, Schema } from 'app/env'
import { reset } from 'app/ui/schema'

import AddCategory from 'src/General/Category/UseCases/AddCategory'

/**
 * @param {Record<string, Schema>} schema
 * @return {(datum: Record<string, unknown>): Promise<void>}
 */
export function useAddCategory (schema: Record<string, Schema>) {
  return async function (datum: Record<string, unknown>): Promise<void> {
    reset(schema)

    const useCase = await resolve('AddCategory') as AddCategory
    let errors: ErrorInfo[] = []
    try {
      useCase.handle(datum, schema)
      window.alert('Show')
    } catch (e) {
      if (Array.isArray(e.errors)) {
        errors = e.errors
      }
    }
    for (const detail of errors) {
      schema[detail.field].errors = detail.errors
    }
  }
}
