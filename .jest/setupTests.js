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
