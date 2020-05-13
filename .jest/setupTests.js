// @flow

import { JSDOM } from 'jsdom'

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

function copyProps (src: Object, target: Object) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target)
  })
}

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
