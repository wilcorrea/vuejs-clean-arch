import Category from './Category'
import { ErrorScheme } from 'app/definitions'

/**
 * @class {CategoryValidation}
 */
export default class CategoryValidation {
  /**
   * @return {ErrorScheme | null}
   */
  validate (category: Category): ErrorScheme | null {
    return null
  }
}
