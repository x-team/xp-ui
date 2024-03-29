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
MockDate.set('2019-02-02T00:00:00.000Z')

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
      boolean: jest.fn(() => true),
      number: jest.fn(() => 2),
      words: jest.fn(() => 'string string'),
      word: jest.fn(() => 'string')
    },
    name: {
      firstName: jest.fn(() => 'string'),
      lastName: jest.fn(() => 'string'),
      jobTitle: jest.fn(() => 'string')
    },
    date: {
      month: jest.fn(() => 'string')
    },
    internet: {
      email: jest.fn(() => 'string@email.com'),
      url: jest.fn(() => 'string.com')
    },
    lorem: {
      sentence: jest.fn(() => 'string'),
      paragraph: jest.fn(() => 'string'),
      paragraphs: jest.fn(() => 'string'),
      words: jest.fn(() => 'string')
    }
  }
))

jest.mock('uuid/v4', () => jest.fn(() => '00000000-0000-0000-0000-000000000000'))

jest.mock('date-fns/format', () => jest.fn(() => '11-11-2019'))
