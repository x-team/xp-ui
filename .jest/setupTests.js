// @flow

require('./setupJSDOM')

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
