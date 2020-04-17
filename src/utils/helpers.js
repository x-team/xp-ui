import formatDate from 'date-fns/format'
import differenceInSeconds from 'date-fns/difference_in_seconds'
import differenceInMinutes from 'date-fns/difference_in_minutes'
import differenceInHours from 'date-fns/difference_in_hours'
import differenceInDays from 'date-fns/difference_in_days'

import type { Element } from 'react'

/**
 * Returns the "displayName" or "name" values from the properties of a component, if these don't exist, return the word "Component"
 * @param {*} Component
 * @returns {string}
 */
export function getComponentDisplayName (Component): string {
  return Component.displayName || Component.name || 'Component'
}

/**
 * Returns a phrase or noun in singular or plural
 * @param {number*} count - quantity that defines the "noun"
 * @param {string} noun - "noun" that will have to be pluralized or not
 * @param {boolean} [stripCount=false] - Remove the "count" from the result
 * @param {string} [suffix='s'] - Defines the "suffix" to be used in case of pluralizing the "noun"
 * @returns {string}
 */
export function pluralize (count: number, noun: string, stripCount: boolean = false, suffix: string = 's'): string {
  return `${stripCount ? '' : `${count} `}${noun}${parseInt(count, 10) !== 1 ? suffix : ''}`
}

export const getClassName = (config: Object) => Object.keys(config)
  .filter(className => config && className && config[className])
  .join(' ')

/**
 * Return the size length in number of a "collection"
 * @param {null | string | Object | Array<*>} collection
 * @return {number}
 */
export function size (collection: null | string | Object | Array<*>): number {
  if (collection == null) return 0

  if (Array.isArray(collection) || typeof collection === 'string') return collection.length

  return Object.keys(collection).length
}

export const replaceBlankLinesForNewLines = (text: ?string): string => text ? text.replace(/(?:\r\n|\r|\n)/g, '<br>\n') : ''

/**
 * Returns a string specifying the defined past time between a "from" date and "now"
 * - The result could be:
 *  > 27 Jan 20
 *  > 3 days ago
 *  > 1 h ago
 *  > 1h ago
 *  > 1 m ago
 *  > 1m ago
 *  > just now
 * - "String" formats allowed: "YYYY-MM-DDTHH:mm:ss-Z" and "MMMM D, YYYY HH:mm:ss"
 * - "Number" format allowed: unix timestamp in miliseconds like "1318874398806"
 * @param {Date | string | number  | void | null} date
 * @param {boolean} [addSpaceAfterNumber=true]
 * @param {boolean} [addDifferenceInDays=false]
 * @returns string
 */
export function timeSince (date: Date | string | number | void | null, addSpaceAfterNumber: boolean = true, addDifferenceInDays: boolean = false): string {
  if (date && !(date instanceof Date)) {
    date = new Date(date)
  }

  const now = new Date()
  const hoursDelta = differenceInHours(now, date)

  if (date && hoursDelta >= 24) {
    if (addDifferenceInDays) {
      const days = differenceInDays(now, date)
      return `${days} day${days > 1 ? 's' : ''} ago`
    }

    return formatDate(date, 'DD MMM YY')
  }

  const minutesDelta = differenceInMinutes(now, date)

  if (date && minutesDelta >= 60) {
    return addSpaceAfterNumber ? `${hoursDelta} h ago` : `${hoursDelta}h ago`
  }

  if (date && differenceInSeconds(now, date) >= 60) {
    return addSpaceAfterNumber ? `${minutesDelta} m ago` : `${minutesDelta}m ago`
  }

  return 'just now'
}

export type ParsedVideoUrlType = {
  videoId: number,
  service: string,
  poster: ?string
}

/**
 * Given the URL of a video from YOUTUBE or VIMEO it parses the URL to an Object of type ParsedVideoUrlType
 * - Supported YouTube URL formats:
 *  > http://www.youtube.com/watch?v=R6NUFRNEai4
 *  > http://youtu.be/R6NUFRNEai4
 *  > https://youtube.googleapis.com/v/R6NUFRNEai4
 *  > https://www.youtube.com/embed/R6NUFRNEai4
 * - Supported Vimeo URL formats:
 *  > http://vimeo.com/25451551
 *  > http://player.vimeo.com/video/25451551
 * - Also supports relative URLs:
 *  > //player.vimeo.com/video/25451551
 * @param {string} url
 * @returns ParsedVideoUrlType
 */
export function parseVideoUrl (url: string): ParsedVideoUrlType {
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

// Legacy devices browser identified errors caused by RequestAPI and URLSearchParams
export const olderBrowserErrors: Array<string> = [
  `TypeError: invalid 'instanceof' operand y.Request`,
  `TypeError: y.Request is not a function. (evaluating 't instanceof y.Request')`,
  `TypeError: Expecting a function in instanceof check, but got undefined`,
  `ReferenceError: URLSearchParams is not defined`,
  `TypeError: undefined is not a valid argument for 'instanceof' (evaluating 't instanceof y.Request')`
]
export type ErrorType = {[key: string|number]: string | Array<Element<*>>}

/**
 * Given an object that contains errors it returns the "key name" of the field that contains as value an identified error for the older browsers. This "key name" field can be "string" or "number". If the object does not contain any error identified for older browsers it returns "null".
 * @param {ErrorType} [errors={}]
 * @returns {string | number | null}
 */
export function getOlderBrowserErrorKey (errors: ErrorType = {}): string | number | null {
  if (!errors) {
    return null
  }

  let matchingKey = null
  Object.keys(errors).forEach((key) => {
    if (olderBrowserErrors.includes(errors[key])) {
      matchingKey = key
    }
  })
  return matchingKey
}
