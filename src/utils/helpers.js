/* globals SyntheticEvent, HTMLElement */

export function throttle (callback, timeout) {
  let now = Date.now()
  return function () {
    if ((now + timeout - Date.now()) < 0) {
      callback()
      now = Date.now()
    }
  }
}

export function isScrolledIntoView (element) {
  if (!element) return false
  // Element's position relative to the viewport
  const { bottom } = element.getBoundingClientRect()

  // Viewport offset
  const scrollPosition = window.scrollY
  const docViewBottom = scrollPosition + window.innerHeight

  // Element's position relative to the document
  const elemBottom = scrollPosition + bottom

  return elemBottom <= docViewBottom
}

export function getComponentDisplayName (Component) {
  return Component.displayName || Component.name || 'Component'
}

export function pluralize (count: number, noun: string, stripCount: boolean = false, suffix: string = 's') {
  return `${stripCount ? '' : `${count} `}${noun}${parseInt(count, 10) !== 1 ? suffix : ''}`
}

export const getClassName = (config: Object) => Object.keys(config)
  .filter(className => config && className && config[className])
  .join(' ')

export function size (collection: ?string | ?Object | ?Array<*>): number {
  if (collection == null) return 0

  if (Array.isArray(collection) || typeof collection === 'string') return collection.length

  return Object.keys(collection).length
}

export function stopPropagation (event: ?SyntheticEvent<HTMLElement>) {
  event && event.stopPropagation()
}
