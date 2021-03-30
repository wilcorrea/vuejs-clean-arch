import { create, observable } from 'app/ui/schema'
import { Datum, Schema } from 'app/definitions'

/**
 * @param {Datum} datum
 * @return {Record<string, Schema>}
 */
export const createSchemata = (datum: Datum): Record<string, Schema> => {
  const name = create({
    label: 'Name',
    width: 80
  })

  const active = create({
    label: 'Active',
    width: 20
  }).on('change', function () {
    datum.description = datum.active ? 'now is active' : 'now is not'
    description.attrs.label = datum.active ? 'Now is active' : 'Now is not'
  })

  const description = create({
    label: 'Description'
  })

  return {
    name,
    active,
    description
  }
}

/**
 * @return {Datum}
 */
export const createDatum = (): Datum => {
  return observable({
    name: '',
    active: true,
    description: ''
  })
}
