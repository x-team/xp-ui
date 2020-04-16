/* global test, describe, expect, spyOn */
// import React from 'react'
// import renderer from 'react-test-renderer'

import {
  throttle,
  isScrolledIntoView,
  getComponentDisplayName,
  pluralize,
  size,
  stopPropagation,
  timeSince,
  ParsedVideoUrlType,
  parseVideoUrl,
  olderBrowserErrors,
  ErrorType,
  getOlderBrowserErrorKey
} from './../../utils/helpers'

// Seems not to be used in the application
describe('throttle()', () => {
  test('Should be an instance of Function', () => {
    expect(throttle).toBeInstanceOf(Function)
  })
})

// Seems not to be used in the application
describe('isScrolledIntoView()', () => {
  test('Should be an instance of Function', () => {
    expect(isScrolledIntoView).toBeInstanceOf(Function)
  })
})

// Seems not to be used in the application
describe('stopPropagation()', () => {
  let eventMock = {
    stopPropagation () {}
  }

  test('Should be an instance of Function', () => {
    expect(stopPropagation).toBeInstanceOf(Function)
  })

  test('Should call the event.stopPropagation internally', () => {
    spyOn(eventMock, 'stopPropagation')
    stopPropagation(eventMock)

    expect(eventMock).not.toBeNull()
    expect(eventMock).not.toBeUndefined()
    expect(eventMock.stopPropagation).toHaveBeenCalled()
  })
})

describe('getComponentDisplayName()', () => {
  test('Should be an instance of Function', () => {
    expect(getComponentDisplayName).toBeInstanceOf(Function)
  })
})

describe('pluralize()', () => {
  const nounMock = 'list'

  test('Should be an instance of Function', () => {
    expect(pluralize).toBeInstanceOf(Function)
  })

  describe('Counter is different than 1', () => {
    const countMock = 2

    describe('Default', () => {
      test('Should return a counter with the pluralized noun', () => {
        const result = pluralize(countMock, nounMock)
        expect(result).toBe(`${countMock} ${nounMock}s`)
      })
    })

    describe('"stripCount" param', () => {
      test('Should return the pluralized noun without the counter if the "stripCount" flag is "true"', () => {
        const stripCountMock = true
        const result = pluralize(countMock, nounMock, stripCountMock)
        expect(result).toBe(`${nounMock}s`)
      })

      test('Should return the pluralized noun with the counter if the "stripCount" flag is "false"', () => {
        const stripCountMock = false
        const result = pluralize(countMock, nounMock, stripCountMock)
        expect(result).toBe(`${countMock} ${nounMock}s`)
      })
    })

    describe('"suffix" param', () => {
      test('Should return a counter with the pluralized noun using a custom "suffix"', () => {
        const stripCountMock = false
        const suffixMock = 'random'
        const result = pluralize(countMock, nounMock, stripCountMock, suffixMock)
        expect(result).toBe(`${countMock} ${nounMock}${suffixMock}`)
      })
    })
  })

  describe('Counter is equal to 1', () => {
    const countMock = 1

    describe('Default', () => {
      test('Should return a counter with the plain noun', () => {
        const result = pluralize(countMock, nounMock)
        expect(result).toBe(`${countMock} ${nounMock}`)
      })
    })

    describe('"stripCount" param', () => {
      test('Should return the plain noun without the counter if the "stripCount" flag is "true"', () => {
        const stripCountMock = true
        const result = pluralize(countMock, nounMock, stripCountMock)
        expect(result).toBe(`${nounMock}`)
      })
    })
  })
})

describe('size()', () => {
  test('Should be an instance of Function', () => {
    expect(size).toBeInstanceOf(Function)
  })
})

describe('timeSince()', () => {
  test('Should be an instance of Function', () => {
    expect(timeSince).toBeInstanceOf(Function)
  })
})

describe('parseVideoUrl()', () => {
  test('Should be an instance of Function', () => {
    expect(parseVideoUrl).toBeInstanceOf(Function)
  })

  describe('Support for YOUTUBE videos format', () => {
    const videoIdMock: string = 'R6NUFRNEai4'
    const resultMock: ParsedVideoUrlType = {
      videoId: 'R6NUFRNEai4',
      service: 'youtube',
      poster: '//img.youtube.com/vi/R6NUFRNEai4/maxresdefault.jpg'
    }

    test('Should support the http://www.youtube.com/watch?v={videoId} format', () => {
      const result = parseVideoUrl(`http://www.youtube.com/watch?v=${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })

    test('Should support the http://youtu.be/{videoId} format', () => {
      const result = parseVideoUrl(`http://youtu.be/${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })

    test('Should support the https://youtube.googleapis.com/v/{videoId} format', () => {
      const result = parseVideoUrl(`https://youtube.googleapis.com/v/${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })

    test('Should support the https://www.youtube.com/embed/{videoId} format', () => {
      const result = parseVideoUrl(`https://www.youtube.com/embed/${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })
  })

  describe('Support for VIMEO videos format', () => {
    const videoIdMock: string = '25451551'
    const resultMock: ParsedVideoUrlType = {
      videoId: '25451551',
      service: 'vimeo',
      poster: undefined
    }

    test('Should support the http://vimeo.com/{videoId} format', () => {
      const result = parseVideoUrl(`http://vimeo.com/${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })

    test('Should support the http://player.vimeo.com/video/{videoId} format', () => {
      const result = parseVideoUrl(`http://player.vimeo.com/video/${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })

    test('Should support relative url format like //player.vimeo.com/video/{videoId}', () => {
      const result = parseVideoUrl(`//player.vimeo.com/video/${videoIdMock}`)
      expect(result).toMatchObject(resultMock)
    })
  })
})

describe('getOlderBrowserErrorKey()', () => {
  test('Should be an instance of Function', () => {
    expect(getOlderBrowserErrorKey).toBeInstanceOf(Function)
  })

  const stringKey = 'stringKey'
  const numberKey = '12341324'

  const randomIndex: number = Math.abs(Math.round(Math.random() * olderBrowserErrors.length - 1))
  const errorNullMock: ErrorType = {
    'randomKey': 'Ramdom error message'
  }
  const errorStringKeyMock: ErrorType = {
    [stringKey]: olderBrowserErrors[randomIndex]
  }
  const errorNumberKeyMock: ErrorType = {
    [numberKey]: olderBrowserErrors[randomIndex]
  }

  test('Should return "null" if the Error object passed is empty', () => {
    const result = getOlderBrowserErrorKey()
    expect(result).toBeNull()
  })

  test('Should return "null" if the Error object passed does not contain any errors identified for legacy browsers', () => {
    const result = getOlderBrowserErrorKey(errorNullMock)
    expect(result).toBeNull()
  })

  test('Should return the "string key" of the field that contains an error identified for legacy browsers as value', () => {
    const result = getOlderBrowserErrorKey(errorStringKeyMock)
    expect(result).toBe(stringKey)
  })

  test('Should return the "number key" of the field that contains an error identified for legacy browsers as value', () => {
    const result = getOlderBrowserErrorKey(errorNumberKeyMock)
    expect(result).toBe(numberKey)
  })
})
