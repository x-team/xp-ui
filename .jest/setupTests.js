// @flow

import { JSDOM } from 'jsdom'
import MockDate from 'mockdate'

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

function copyProps (src: Object, target: Object) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target)
  })
}

// Mock date for tests
MockDate.set('2/2/2019')

window.matchMedia = () => ({})
global.navigator = {
  userAgent: 'node.js'
}

copyProps(window, global)

// Mocking faker methods
/* global jest */
jest.mock('faker', () => (
  {
    random: {
      number: jest.fn(() => 2),
      words: jest.fn(() => 'string string'),
      word: jest.fn(() => 'string')
    },
    name: {
      firstName: jest.fn(() => 'string'),
      lastName: jest.fn(() => 'string')
    },
    date: {
      month: jest.fn(() => 'string')
    },
    internet: {
      email: jest.fn(() => 'string@email.com')
    }
  }
))
