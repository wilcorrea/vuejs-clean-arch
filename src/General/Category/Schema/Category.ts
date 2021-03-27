import { create } from 'app/ui/schema'
import { Schema } from 'app/definitions'

export const schemata = (): Record<string, Schema> => {
  return {
    name: create({
      label: 'Name',
      width: 80
    }),
    active: create({
      label: 'Active',
      width: 20
    }),
    description: create({
      label: 'Description'
    })
  }
}
