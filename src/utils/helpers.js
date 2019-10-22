/* globals SyntheticEvent, HTMLElement */
import formatDate from 'date-fns/format'
import differenceInSeconds from 'date-fns/difference_in_seconds'
import differenceInMinutes from 'date-fns/difference_in_minutes'
import differenceInHours from 'date-fns/difference_in_hours'
import differenceInDays from 'date-fns/difference_in_days'

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

export const replaceBlankLinesForNewLines = (text: ?string): string => text ? text.replace(/(?:\r\n|\r|\n)/g, '<br>\n') : ''

export function timeSince (date: Date | string | number | void | null, addSpaceAfterNumber: boolean = true, addDifferenceInDays: boolean = false) {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }

  const now = new Date()
  const hoursDelta = differenceInHours(now, date)

  if (hoursDelta >= 24) {
    if (addDifferenceInDays) {
      const days = differenceInDays(now, date)
      return `${days} day${days > 1 ? 's' : ''} ago`
    }

    return formatDate(date, 'DD MMM YY')
  }

  const minutesDelta = differenceInMinutes(now, date)

  if (minutesDelta >= 60) {
    return addSpaceAfterNumber ? `${hoursDelta} h ago` : `${hoursDelta}h ago`
  }

  if (differenceInSeconds(now, date) >= 60) {
    return addSpaceAfterNumber ? `${minutesDelta} m ago` : `${minutesDelta}m ago`
  }

  return 'just now'
}

export function getMonthName (date: Date) {
  const months = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ]

  return months[date.getMonth()] || null
}

export function getMonthDayWithOrdinal (date: Date) {
  const day = date.getDate()
  if (day > 3 && day < 21) return `${day}th`
  switch (day % 10) {
    case 1: return `${day}st`
    case 2: return `${day}nd`
    case 3: return `${day}rd`
    default: return `${day}th`
  }
}
