import { Datum, Schemata } from 'app/definitions'

/**
 * @interface {UseCase}
 */
export default interface UseCase {
  /**
   * @param {Datum} datum
   * @param {Schemata} schemata
   * @return {boolean}
   */
  handle (datum: Datum, schemata: Schemata): Promise<string>
}
