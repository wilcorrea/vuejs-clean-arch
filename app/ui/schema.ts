import { Schema, UserEvent } from '../definitions'

/**
 * @param {Record<string, unknown>} attrs
 * @return {Schema}
 */
export function create (attrs: Record<string, unknown>): Schema {
  return {
    attrs,
    listeners: {},
    errors: [],
    on (event: string, handler: (event: Event | UserEvent<HTMLInputElement>) => void): Schema {
      if (!this.listeners[event]) {
        this.listeners[event] = []
      }
      this.listeners[event].push(handler)
      return this
    }
  }
}
