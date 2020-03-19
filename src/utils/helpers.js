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

export function parseVideoUrl (url: string): {
  videoId: number,
  service: string,
  poster: ?string
} {
  // - Supported YouTube URL formats:
  //   - http://www.youtube.com/watch?v=R6NUFRNEai4
  //   - http://youtu.be/R6NUFRNEai4
  //   - https://youtube.googleapis.com/v/R6NUFRNEai4
  //   - https://www.youtube.com/embed/R6NUFRNEai4
  // - Supported Vimeo URL formats:
  //   - http://vimeo.com/25451551
  //   - http://player.vimeo.com/video/25451551
  // - Also supports relative URLs:
  //   - //player.vimeo.com/video/25451551

  url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/)

  const videoId = RegExp.$6

  let service
  let poster

  if (RegExp.$3.indexOf('youtu') > -1) {
    service = 'youtube'
    poster = `//img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  } else if (RegExp.$3.indexOf('vimeo') > -1) {
    service = 'vimeo'
    // To do: get poster from Vimeo -> https://developer.vimeo.com/api/upload/thumbnails
  }

  return {
    videoId,
    service,
    poster
  }
}
