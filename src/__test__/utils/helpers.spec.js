/* global test, describe, expect */
import React, { Component } from 'react'
import renderer from 'react-test-renderer'

import {
  getComponentDisplayName,
  pluralize,
  size,
  timeSince,
  ParsedVideoUrlType,
  parseVideoUrl,
  olderBrowserErrors,
  ErrorType,
  getOlderBrowserErrorKey
} from './../../utils/helpers'

describe('getComponentDisplayName()', () => {
  const mockComponent = () => {
    class MockComponent {
      render () {
        const { ...rest } = this.props
        return <Component {...rest} />
      }
    }
    return MockComponent
  }
  const displayNameMock = 'displayName'
  const nameMock = 'name'

  test('Should be an instance of Function', () => {
    expect(getComponentDisplayName).toBeInstanceOf(Function)
  })

  describe('"displayName" propierty value', () => {
    test('Should return the "displayName" prop value if does exists', () => {
      const props = {
        displayName: displayNameMock
      }
      const component = renderer.create(<mockComponent {...props} />)
      const result = getComponentDisplayName(component.toJSON().props)

      expect(result).toBe(displayNameMock)
    })

    test('Should return the "displayName" prop value if does exists by priority of another value', () => {
      const props = {
        anotherMore: 'randomValueMore',
        name: nameMock,
        another: 'randomValue',
        anotherOne: 'randomValueOne',
        displayName: displayNameMock
      }
      const component = renderer.create(<mockComponent {...props} />)
      const result = getComponentDisplayName(component.toJSON().props)
      expect(result).toBe(displayNameMock)
    })
  })

  describe('"name" propierty value', () => {
    test('Should return the "name" prop value if does exists and "displayName" prop does not exists', () => {
      const props = {
        name: nameMock
      }
      const component = renderer.create(<mockComponent {...props} />)
      const result = getComponentDisplayName(component.toJSON().props)
      expect(result).toBe(nameMock)
    })

    test('Should return the "name" prop value if does exists and "displayName" prop does not exists by priority of another value', () => {
      const props = {
        another: 'randomValue',
        anotherMore: 'randomValueMore',
        name: nameMock,
        anotherOne: 'randomValueOne'
      }
      const component = renderer.create(<mockComponent {...props} />)
      const result = getComponentDisplayName(component.toJSON().props)
      expect(result).toBe(nameMock)
    })
  })

  describe('"displayName" and "name" props do not exists', () => {
    test('Should return the word "Component" if not props exists', () => {
      const component = renderer.create(<mockComponent />)
      const result = getComponentDisplayName(component.toJSON().props)
      expect(result).toBe('Component')
    })

    test('Should return the word "Component" if the "displayName" and "name" props do not exists but there are another props defined', () => {
      const props = {
        another: 'randomValue',
        anotherMore: 'randomValueMore',
        anotherOne: 'randomValueOne'
      }
      const component = renderer.create(<mockComponent {...props} />)
      const result = getComponentDisplayName(component.toJSON().props)
      expect(result).toBe('Component')
    })
  })
})

describe('pluralize()', () => {
  const nounMock = 'list'

  test('Should be an instance of Function', () => {
    expect(pluralize).toBeInstanceOf(Function)
  })

  describe('Counter is different than 1', () => {
    const countMock = 2

    describe('Default call', () => {
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

    describe('Default call', () => {
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

  describe('"collection" param', () => {
    test('Should return "0" if "collection" param is not passed', () => {
      const result = size()
      expect(result).toBe(0)
    })

    test('Should return "0" if "collection" param is not passed', () => {
      const result = size()
      expect(result).toBe(0)
    })

    test('Should return the length for a "collection" param of "String" type', () => {
      const collection = 'randomCollectionStringWord'
      const result = size(collection)
      expect(result).toBe(collection.length)
    })

    test('Should return the length for a "collection" param of "Array" type', () => {
      const collection = ['a', 'b', 'c', 'd', 'e', 1, 2, 3, 4, 5]
      const result = size(collection)
      expect(result).toBe(collection.length)
    })

    test('Should return the length for a "collection" param of "Object" type', () => {
      const collection = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6
      }
      const result = size(collection)
      expect(result).toBe(Object.keys(collection).length)
    })
  })
})

describe('timeSince()', () => {
  test('Should be an instance of Function', () => {
    expect(timeSince).toBeInstanceOf(Function)
  })

  describe('Called as "void" function', () => {
    test('Should return "just now" if is being called as a "void" function without params', () => {
      const result = timeSince()
      expect(result).toBe('just now')
    })
  })

  describe('Called with "null" as param', () => {
    test('Should return "just now" if is being called without params', () => {
      const result = timeSince(null)
      expect(result).toBe('just now')
    })
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
