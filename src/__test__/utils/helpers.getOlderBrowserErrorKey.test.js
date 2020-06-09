/* global test, describe, expect */
import {
  olderBrowserErrors,
  ErrorType,
  getOlderBrowserErrorKey
} from '../../utils/helpers'

describe('#getOlderBrowserErrorKey()', () => {
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

  test('Returns "null" if the Error object passed is empty', () => {
    const result = getOlderBrowserErrorKey()
    expect(result).toBeNull()
  })

  test('Returns "null" if the Error object passed does not contain any errors identified for legacy browsers', () => {
    const result = getOlderBrowserErrorKey(errorNullMock)
    expect(result).toBeNull()
  })

  test('Returns the "string key" of the field that contains an error identified for legacy browsers as value', () => {
    const result = getOlderBrowserErrorKey(errorStringKeyMock)
    expect(result).toBe(stringKey)
  })

  test('Returns the "number key" of the field that contains an error identified for legacy browsers as value', () => {
    const result = getOlderBrowserErrorKey(errorNumberKeyMock)
    expect(result).toBe(numberKey)
  })
})
