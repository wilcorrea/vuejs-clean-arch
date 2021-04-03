import { reactive } from 'vue'
import { Schema, UserEvent } from '../definitions'

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
 * @param {Record<string,unknown>} attrs
 * @return {Schema}
 */
export function createText (attrs: Record<string, unknown>): Schema {
  return create({ ...attrs, as: 'text' })
}

/**
 * @param {Record<string,unknown>} attrs
 * @return {Schema}
 */
export function createCheckbox (attrs: Record<string, unknown>): Schema {
  return create({ ...attrs, as: 'checkbox' })
}

/**
 * @param {Record<string,unknown>} attrs
 * @return {Schema}
 */
export function createTextarea (attrs: Record<string, unknown>): Schema {
  return create({ ...attrs, as: 'textarea' })
}

/**
 * @param {Record<string, unknown>} payload
 * @return {Record<string, unknown>}
 */
export const observable = (payload: Record<string, unknown>): Record<string, unknown> => reactive(payload)
