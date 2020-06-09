/* global test, describe, expect */
import {
  pluralize
} from '../../utils/helpers'

describe('#pluralize()', () => {
  const nounMock = 'list'

  test('Should be an instance of Function', () => {
    expect(pluralize).toBeInstanceOf(Function)
  })

  describe('Counter is different than 1', () => {
    const countMock = 2

    describe('Default call', () => {
      test('Returns a counter with the pluralized noun', () => {
        const result = pluralize(countMock, nounMock)
        expect(result).toBe(`${countMock} ${nounMock}s`)
      })
    })

    describe('"stripCount" param', () => {
      test('Returns the pluralized noun without the counter if the "stripCount" flag is "true"', () => {
        const stripCountMock = true
        const result = pluralize(countMock, nounMock, stripCountMock)
        expect(result).toBe(`${nounMock}s`)
      })

      test('Returns the pluralized noun with the counter if the "stripCount" flag is "false"', () => {
        const stripCountMock = false
        const result = pluralize(countMock, nounMock, stripCountMock)
        expect(result).toBe(`${countMock} ${nounMock}s`)
      })
    })

    describe('"suffix" param', () => {
      test('Returns a counter with the pluralized noun using a custom "suffix"', () => {
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
      test('Returns a counter with the plain noun', () => {
        const result = pluralize(countMock, nounMock)
        expect(result).toBe(`${countMock} ${nounMock}`)
      })
    })

    describe('"stripCount" param', () => {
      test('Returns the plain noun without the counter if the "stripCount" flag is "true"', () => {
        const stripCountMock = true
        const result = pluralize(countMock, nounMock, stripCountMock)
        expect(result).toBe(`${nounMock}`)
      })
    })
  })
})
