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
  const { top, bottom } = element.getBoundingClientRect()

  // Viewport offset
  const scrollPosition = window.scrollY
  const docViewBottom = scrollPosition + window.innerHeight

  // Element's position relative to the document
  const elemTop = scrollPosition + top
  const elemBottom = scrollPosition + bottom

  return direction < 0 ? elemTop <= docViewBottom : elemBottom <= docViewBottom
}
