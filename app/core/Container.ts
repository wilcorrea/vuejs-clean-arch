import { ContainerDefinition, ContainerProperty } from '../definitions'

/**
 * @class {Container}
 */
export default class Container {
  /**
   * @type {Record<string, string>}
   */
  private definitions: Record<string, ContainerDefinition<Container>> = {}

  /**
   * @type {Record<string, string>}
   */
  private properties: Record<string, unknown> = {}

  /**
   * @return {Container}
   */
  static create (): Container {
    return new this()
  }

  /**
   * @param {string} property
   * @param {(container: Container) => void | unknown} value
   * @return this
   */
  set (property: string, value: ContainerProperty<Container>): this {
    this.properties[property] = value
    return this
  }

  /**
   * @param {string} property
   * @return {unknown}
   */
  get (property: string): unknown {
    return this.properties[property]
  }

  /**
   * @param {string} alias
   * @param {string} target
   * @return this
   */
  addDefinition (alias: string, target: ContainerDefinition<Container>): this {
    this.definitions[alias] = target
    return this
  }

  /**
   * @param {Record<string, string>} definitions
   * @return this
   */
  addDefinitions (definitions: Record<string, string>): this {
    Object.assign(this.definitions, definitions)
    return this
  }

  /**
   * @param {string} alias
   * @return {unknown}
   */
  async resolve (alias: string): Promise<unknown> {
    const definition = this.definitions[alias]
    if (!definition) {
      return null
    }
    if (typeof definition !== 'function') {
      return definition
    }
    const reference = await definition(this)
    if (reference.default) {
      return reference.default
    }
    return reference
  }
}
