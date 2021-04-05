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
 * @typedef {ErrorDetail}
 */
export type ErrorDetail = {
  message: string
  value?: unknown
}

/**
 * @typedef {ErrorScheme}
 */
export type ErrorScheme = Record<string, ErrorDetail[] | unknown>

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
  on (event: string, handler: (event: Event | UserEvent<HTMLInputElement>) => void): Schema
}

/**
 * @typedef {Schemata}
 */
export type Schemata = Record<string, Schema>

/**
 * @typedef {HttpRequestConfig}
 */
export type HttpRequestConfig = Record<string, unknown>

/**
 * @typedef {HttpRestAnswer}
 */
export type HttpRestAnswer = {
  status: string
  value?: unknown
  meta?: unknown
}

/**
 * @typedef {HttpResponse}
 */
export interface HttpResponse<T = unknown> {
  data: T
  status: number
  statusText: string
  headers: unknown
  config: HttpRequestConfig
  request?: unknown
}

/**
 * @typedef HttpClient
 */
export interface HttpClient {
  request<T = unknown, R = HttpResponse<T>> (config: HttpRequestConfig): Promise<R>

  get<T = unknown, R = HttpResponse<T>> (url: string, config?: HttpRequestConfig): Promise<R>

  delete<T = unknown, R = HttpResponse<T>> (url: string, config?: HttpRequestConfig): Promise<R>

  head<T = unknown, R = HttpResponse<T>> (url: string, config?: HttpRequestConfig): Promise<R>

  options<T = unknown, R = HttpResponse<T>> (url: string, config?: HttpRequestConfig): Promise<R>

  post<T = unknown, R = HttpResponse<T>> (url: string, data?: unknown, config?: HttpRequestConfig): Promise<R>

  put<T = unknown, R = HttpResponse<T>> (url: string, data?: unknown, config?: HttpRequestConfig): Promise<R>

  patch<T = unknown, R = HttpResponse<T>> (url: string, data?: unknown, config?: HttpRequestConfig): Promise<R>
}
