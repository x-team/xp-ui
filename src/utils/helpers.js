export function throttle (callback, timeout) {
  let now = Date.now()
  return function () {
    if ((now + timeout - Date.now()) < 0) {
      callback()
      now = Date.now()
    }
  }
}

export function isScrolledIntoView (element, direction) {
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
