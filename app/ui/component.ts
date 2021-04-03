import app from 'app/main'
import { Component } from '@vue/runtime-core'

const registered: Record<string, boolean> = {}

/**
 * @param {string} name
 * @param {Component} component
 */
export function register (name: string, component: Component): void {
  if (registered[name]) {
    return
  }
  registered[name] = true

  app.component(name, component)
}
