/* global test, describe, expect */
import {
  size
} from '../../utils/helpers'

describe('#size()', () => {
  test('Should be an instance of Function', () => {
    expect(size).toBeInstanceOf(Function)
  })

  describe('"collection" param', () => {
    test('Returns "0" if "collection" param is not passed', () => {
      const result = size()
      expect(result).toBe(0)
    })

    test('Returns "0" if "collection" param is not passed', () => {
      const result = size()
      expect(result).toBe(0)
    })

    test('Returns the length of a "String collection" param', () => {
      const collection = 'randomCollectionStringWord'
      const result = size(collection)
      expect(result).toBe(collection.length)
    })

    test('Returns the length of an "Array collection" param', () => {
      const collection = ['a', 'b', 'c', 'd', 'e', 1, 2, 3, 4, 5]
      const result = size(collection)
      expect(result).toBe(collection.length)
    })

    test('Returns the length for an "Object collection" param', () => {
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
