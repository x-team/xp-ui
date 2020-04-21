/* global test, describe, expect */
import React, { Component } from 'react'
import renderer from 'react-test-renderer'

import {
  getComponentDisplayName
} from '../../utils/helpers'

describe('#getComponentDisplayName()', () => {
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
    test('Returns the "displayName" prop value if does exists', () => {
      const props = {
        displayName: displayNameMock
      }
      const component = renderer.create(<mockComponent {...props} />)
      const result = getComponentDisplayName(component.toJSON().props)

      expect(result).toBe(displayNameMock)
    })

    test('Returns the "displayName" prop value if does exists by priority of another value', () => {
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
    test('Returns the "name" prop value if does exists and "displayName" prop does not exists', () => {
      const props = {
        name: nameMock
      }
      const component = renderer.create(<mockComponent {...props} />)
      const result = getComponentDisplayName(component.toJSON().props)
      expect(result).toBe(nameMock)
    })

    test('Returns the "name" prop value if does exists and "displayName" prop does not exists by priority of another value', () => {
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
    test('Returns the word "Component" if not props exists', () => {
      const component = renderer.create(<mockComponent />)
      const result = getComponentDisplayName(component.toJSON().props)
      expect(result).toBe('Component')
    })

    test('Returns the word "Component" if the "displayName" and "name" props do not exists but there are another props defined', () => {
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
