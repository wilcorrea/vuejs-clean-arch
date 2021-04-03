import { Datum, Schema } from 'app/definitions'

import CategoryRepository from '../Contracts/CategoryRepository'

/**
 * @class {AddCategory}
 */
export default class AddCategory {
  /**
   * @param {CategoryRepository} repository
   */
  constructor (readonly repository: CategoryRepository) {}

  /**
   * @param {Datum} datum
   * @param {Record<string, Schema>} schemata
   * @return {boolean}
   */
  handle (datum: Datum, schemata: Record<string, Schema>): boolean {
    const category = {
      name: datum?.name as string,
      active: datum?.active as boolean,
      description: datum?.description as string
    }

    // TODO: show how the reactivity can be explored
    schemata.name.attrs.width = schemata.name.attrs.width === 80 ? 50 : 80

    return this.repository.create(category)
  }
}
