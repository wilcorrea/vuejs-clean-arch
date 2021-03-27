// create a new type HTMLElementEvent that has a target of type you pass
// type T must be a HTMLElement (e.g. HTMLTextAreaElement extends HTMLElement)
import Container from './core/Container'

export type UserEvent<T extends HTMLElement> = Event & {
  target: T
  // probably you might want to add the currentTarget as well
  currentTarget: T
}

/**
 * @typedef {ContainerDefinition}
 */
export type ContainerDefinition<T> = ((container: T) => Promise<unknown>) | string | unknown

/**
 * @typedef {ContainerProperty}
 */
export type ContainerProperty<T> = ((container: T) => void) | unknown

/**
 * @typedef {Datum}
 */
export type Datum = Record<string, unknown>

/**
 * @typedef {ErrorInfoDetail}
 */
export type ErrorInfoDetail = {
  message: string
  value?: unknown
}

/**
 * @typedef {ErrorInfo}
 */
export type ErrorInfo = {
  field: string
  errors: ErrorInfoDetail[]
}

/**
 * @typedef {Schema}
 */
export type Schema = {
  attrs: Record<string, unknown>
  listeners: Record<string, ((event: Event | UserEvent<HTMLInputElement>) => void)[]>
  errors: ErrorInfoDetail[]
  on: (event: string, handler: (event: Event | UserEvent<HTMLInputElement>) => void) => Schema
}
