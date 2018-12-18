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

// Mock date for tests
const constantDate = new Date('2018-06-13T04:41:20')
/* eslint no-global-assign:off */
Date = class extends Date {
  constructor (date) {
    super()
    return constantDate
  }
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
