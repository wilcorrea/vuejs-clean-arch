import { reactive } from 'vue'
import { Schema, UserEvent } from '../env'

/**
 * @param {Record<string, unknown>} attrs
 * @return {Schema}
 */
export function create (attrs: Record<string, unknown>): Schema {
  const listeners: Record<string, ((event: Event | UserEvent<HTMLInputElement>) => void)[]> = {}
  const schema = {
    attrs,
    listeners,
    errors: [],
    on (event: string, handler: (event: Event | UserEvent<HTMLInputElement>) => void): Schema {
      if (!listeners[event]) {
        listeners[event] = []
      }
      listeners[event].push(handler)
      return this
    }
  }
  return reactive(schema)
}

/**
 * @param {Record<string, Schema>} schemata
 * @return void
 */
export function reset (schemata: Record<string, Schema>): void {
  Object.values(schemata).forEach((schema) => schema.errors = [])
}

/**
 * @param {Record<string, unknown>} payload
 * @return {Record<string, unknown>}
 */
export const observable = (payload: Record<string, unknown>) => reactive(payload)
