import { Vue } from 'vue-class-component'

/**
 * @typedef {UserEvent}
 */
export type UserEvent<T extends HTMLElement> = Event & {
  target: T
  // probably you might want to add the currentTarget as well
  currentTarget: T
}

export interface ContainerForm extends Vue {}

/**
 * @typedef {ContainerDefinition}
 */
export type ContainerDefinition<T> = ((container: T) => Promise<unknown>) | string | unknown

/**
 * @typedef {ContainerProperty}
 */
export type ContainerProperty<T> = ((container: T) => void) | unknown

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
 * @typedef {Datum}
 */
export type Datum = Record<string, unknown>

/**
 * @typedef {Schema}
 */
export type Schema = {
  attrs: Record<string, unknown>
  listeners: Record<string, ((event: Event | UserEvent<HTMLInputElement>) => void)[]>
  errors: ErrorInfoDetail[]
  on: (event: string, handler: (event: Event | UserEvent<HTMLInputElement>) => void) => Schema
}
