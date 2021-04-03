import { create, createText, createCheckbox, observable } from 'app/ui/schema'
import { Datum, Schema } from 'app/definitions'

/**
 * @param {Datum} datum
 * @return {Record<string, Schema>}
 */
export const createSchemata = (datum: Datum): Record<string, Schema> => {
  const name = createText({
    label: 'Name',
    width: 80
  })

  const active = createCheckbox({
    label: 'Active',
    width: 20
  }).on('change', function () {
    datum.description = datum.active ? 'now is active' : 'now is not'
    description.attrs.label = datum.active ? 'Now is active' : 'Now is not'
  })

  // const description = createTextarea({
  //   label: 'Description'
  // })

  const description = create({
    as: 'textarea',
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
