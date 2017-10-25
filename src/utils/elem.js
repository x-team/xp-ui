import { createElement } from 'react'
import DOM from 'react-dom'

// source: https://stackoverflow.com/questions/5876332/how-can-i-differentiate-between-an-object-literal-other-javascript-objects
function isPlainObj (o) {
  return typeof o === 'object' && o.constructor === Object && !o.$$typeof
}

function baseElem (tag, className, defaultProps = {}) {
  if (!Array.isArray(className)) {
    className = [ className ]
  }

  className = className.join(' ')

  return (props = {}, ...children) => {
    if (isPlainObj(props)) {
      const c = (props.className)
        ? `${className} ${props.className}`
        : className

      return createElement(
        tag,
        { ...defaultProps, ...props, className: c },
        ...children
      )
    }

    return createElement(tag, { ...defaultProps, className }, props, ...children)
  }
}

const elem = baseElem.bind(null, 'div')

const types = Object.keys(DOM)
types.forEach(type => {
  elem[type] = baseElem.bind(null, type)
})

export default elem
