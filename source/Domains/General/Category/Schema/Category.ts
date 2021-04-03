import { create, createCheckbox, createText, observable } from 'app/ui/schema'
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
    .on('blur', function () {
      active.attrs.label = 'Active'
    })
    .on('focus', function () {
      active.attrs.label = 'Inactive'
    })

  const active = createCheckbox({
    label: 'Active',
    width: 20
  })
    .on('change', function () {
      datum.description = datum.active ? 'value: now is active' : 'value: now is not'
    })
    .on('change', function () {
      description.attrs.label = datum.active ? 'label: Now is active' : 'label: Now is not'
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

/**
 * @return {Record<string, unknown>}
 */
export const createErrors = (): Record<string, unknown> => {
  return observable({
    name: undefined,
    active: undefined,
    description: undefined
  })
}
