/**
 * @param {string} message
 * @param {Record<string,unknown>} options
 */
export function successMessage (message: string, options = {}): void {
  window.alert(message)
}

/**
 * @param {string} message
 * @param {Record<string,unknown>} options
 */
export function failMessage (message: string, options = {}): void {
  window.alert(message)
}

/**
 * @param {string} message
 * @param {Record<string,unknown>} options
 */
export function errorMessage (message: string, options = {}): void {
  window.alert(message)
}
