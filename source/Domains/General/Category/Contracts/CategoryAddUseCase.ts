import { Datum, Schemata } from 'app/definitions'

/**
 * @interface {CategoryAddUseCase}
 */
export default interface CategoryAddUseCase {
  /**
   * @param {Datum} datum
   * @param {Schemata} schemata
   * @return {boolean}
   */
  handle (datum: Datum, schemata: Schemata): Promise<string>
}
