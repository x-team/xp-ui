/* global test, describe, expect, beforeEach, afterEach */
import MockDate from 'mockdate'
import getTime from 'date-fns/get_time'
import subHours from 'date-fns/sub_hours'
import subMinutes from 'date-fns/sub_minutes'
import subSeconds from 'date-fns/sub_seconds'
import format from 'date-fns/format'

import {
  timeSince
} from '../../utils/helpers'

describe('#timeSince()', () => {
  let dateMock
  let timeDataMock
  const timeSpectrum = {
    little: 15,
    bigger: 80
  }
  const resultMock = {
    days: {
      date: '27 Jan 20',
      difference: '3 days ago'
    },
    hours: {
      withSpace: {
        little: '1 h ago',
        bigger: '15 h ago'
      },
      withoutSpace: {
        little: '1h ago',
        bigger: '15h ago'
      }
    },
    minutes: {
      withSpace: {
        little: '1 m ago',
        bigger: '15 m ago'
      },
      withoutSpace: {
        little: '1m ago',
        bigger: '15m ago'
      }
    },
    justNow: 'just now'
  }

  beforeEach(() => {
    MockDate.set('2020-01-31T00:00:00.000Z')

    dateMock = new Date()

    timeDataMock = {
      hours: {
        little: subHours(dateMock, timeSpectrum.little),
        bigger: subHours(dateMock, timeSpectrum.bigger)
      },
      minutes: {
        little: subMinutes(dateMock, timeSpectrum.little),
        bigger: subMinutes(dateMock, timeSpectrum.bigger)
      },
      seconds: {
        little: subSeconds(dateMock, timeSpectrum.little),
        bigger: subSeconds(dateMock, timeSpectrum.bigger)
      }
    }
  })

  afterEach(() => {
    MockDate.reset()
  })

  test('Should be an instance of Function', () => {
    expect(timeSince).toBeInstanceOf(Function)
  })

  describe('Called as "void" function', () => {
    test('Returns "just now" if is being called as a "void" function without params', () => {
      const result = timeSince()
      expect(result).toBe(resultMock.justNow)
    })
  })

  describe('Called with "null" as param', () => {
    test('Returns "just now" if is being called without params', () => {
      const result = timeSince(null)
      expect(result).toBe(resultMock.justNow)
    })
  })

  describe('"date" param', () => {
    describe('as "number" using a unix timestamp in miliseconds', () => {
      test('Returns a string with the format "DD MMM YY" for times that are ">= 24 hours ago"', () => {
        const ms = getTime(timeDataMock.hours.bigger)
        const result = timeSince(ms)
        expect(result).toBe(resultMock.days.date)
      })

      test('Returns a string with the format "{hours} h ago" for times that are "< 24 hours && >= 60 minutes ago"', () => {
        const ms1 = getTime(timeDataMock.hours.little)
        const result1 = timeSince(ms1)
        expect(result1).toBe(resultMock.hours.withSpace.bigger)

        const ms2 = getTime(timeDataMock.minutes.bigger)
        const result2 = timeSince(ms2)
        expect(result2).toBe(resultMock.hours.withSpace.little)
      })

      test('Returns a string with the format "{minutes} m ago" for times that are "< 24 hours && < 60 minutes && >= 60 seconds ago"', () => {
        const ms1 = getTime(timeDataMock.minutes.little)
        const result1 = timeSince(ms1)
        expect(result1).toBe(resultMock.minutes.withSpace.bigger)

        const ms2 = getTime(timeDataMock.seconds.bigger)
        const result2 = timeSince(ms2)
        expect(result2).toBe(resultMock.minutes.withSpace.little)
      })

      test('Returns "just now" for times that are "< 60 seconds ago"', () => {
        const ms = getTime(timeDataMock.seconds.little)
        const result = timeSince(ms)
        expect(result).toBe(resultMock.justNow)
      })
    })

    describe('as "string" using the format "MMMM D, YYYY HH:mm:ss"', () => {
      const formatString = 'MMMM D, YYYY HH:mm:ss'

      test('Returns a string with the format "DD MMM YY" for times that are ">= 24 hours ago"', () => {
        const string = format(timeDataMock.hours.bigger, formatString)
        const result = timeSince(string)
        expect(result).toBe(resultMock.days.date)
      })

      test('Returns a string with the format "{hours} h ago" for times that are "< 24 hours && >= 60 minutes ago"', () => {
        const string1 = format(timeDataMock.hours.little, formatString)
        const result1 = timeSince(string1)
        expect(result1).toBe(resultMock.hours.withSpace.bigger)

        const string2 = format(timeDataMock.minutes.bigger, formatString)
        const result2 = timeSince(string2)
        expect(result2).toBe(resultMock.hours.withSpace.little)
      })

      test('Returns a string with the format "{minutes} m ago" for times that are "< 24 hours && < 60 minutes && >= 60 seconds ago"', () => {
        const string1 = format(timeDataMock.minutes.little, formatString)
        const result1 = timeSince(string1)
        expect(result1).toBe(resultMock.minutes.withSpace.bigger)

        const string2 = format(timeDataMock.seconds.bigger, formatString)
        const result2 = timeSince(string2)
        expect(result2).toBe(resultMock.minutes.withSpace.little)
      })

      test('Returns "just now" for times that are "< 60 seconds ago"', () => {
        const string = format(timeDataMock.seconds.little, formatString)
        const result = timeSince(string)
        expect(result).toBe(resultMock.justNow)
      })
    })

    describe('as "string" using the format "YYYY-MM-DDTHH:mm:ss-Z"', () => {
      test('Returns a string with the format "DD MMM YY" for times that are ">= 24 hours ago"', () => {
        const string = format(timeDataMock.hours.bigger)
        const result = timeSince(string)
        expect(result).toBe(resultMock.days.date)
      })

      test('Returns a string with the format "{hours} h ago" for times that are "< 24 hours && >= 60 minutes ago"', () => {
        const string1 = format(timeDataMock.hours.little)
        const result1 = timeSince(string1)
        expect(result1).toBe(resultMock.hours.withSpace.bigger)

        const string2 = format(timeDataMock.minutes.bigger)
        const result2 = timeSince(string2)
        expect(result2).toBe(resultMock.hours.withSpace.little)
      })

      test('Returns a string with the format "{minutes} m ago" for times that are "< 24 hours && < 60 minutes && >= 60 seconds ago"', () => {
        const string1 = format(timeDataMock.minutes.little)
        const result1 = timeSince(string1)
        expect(result1).toBe(resultMock.minutes.withSpace.bigger)

        const string2 = format(timeDataMock.seconds.bigger)
        const result2 = timeSince(string2)
        expect(result2).toBe(resultMock.minutes.withSpace.little)
      })

      test('Returns "just now" for times that are "< 60 seconds ago"', () => {
        const string = format(timeDataMock.seconds.little)
        const result = timeSince(string)
        expect(result).toBe(resultMock.justNow)
      })
    })

    describe('as "Date" object', () => {
      test('Returns a string with the format "DD MMM YY" for times that are ">= 24 hours ago"', () => {
        const date = timeDataMock.hours.bigger
        const result = timeSince(date)
        expect(result).toBe(resultMock.days.date)
      })

      test('Returns a string with the format "{hours} h ago" for times that are "< 24 hours && >= 60 minutes ago"', () => {
        const date1 = timeDataMock.hours.little
        const result1 = timeSince(date1)
        expect(result1).toBe(resultMock.hours.withSpace.bigger)

        const date2 = timeDataMock.minutes.bigger
        const result2 = timeSince(date2)
        expect(result2).toBe(resultMock.hours.withSpace.little)
      })

      test('Returns a string with the format "{minutes} m ago" for times that are "< 24 hours && < 60 minutes && >= 60 seconds ago"', () => {
        const date1 = timeDataMock.minutes.little
        const result1 = timeSince(date1)
        expect(result1).toBe(resultMock.minutes.withSpace.bigger)

        const date2 = timeDataMock.seconds.bigger
        const result2 = timeSince(date2)
        expect(result2).toBe(resultMock.minutes.withSpace.little)
      })

      test('Returns "just now" for times that are "< 60 seconds ago"', () => {
        const date = timeDataMock.seconds.little
        const result = timeSince(date)
        expect(result).toBe(resultMock.justNow)
      })
    })
  })

  describe('"addSpaceAfterNumber" param', () => {
    describe('"true" as value', () => {
      test('Returns a string with the format "{hours} h ago" for times that are "< 24 hours && >= 60 minutes ago"', () => {
        const ms1 = getTime(timeDataMock.hours.little)
        const result1 = timeSince(ms1, true)
        expect(result1).toBe(resultMock.hours.withSpace.bigger)

        const ms2 = getTime(timeDataMock.minutes.bigger)
        const result2 = timeSince(ms2, true)
        expect(result2).toBe(resultMock.hours.withSpace.little)
      })

      test('Returns a string with the format "{minutes} m ago" for times that are "< 24 hours && < 60 minutes && >= 60 seconds ago"', () => {
        const ms1 = getTime(timeDataMock.minutes.little)
        const result1 = timeSince(ms1, true)
        expect(result1).toBe(resultMock.minutes.withSpace.bigger)

        const ms2 = getTime(timeDataMock.seconds.bigger)
        const result2 = timeSince(ms2, true)
        expect(result2).toBe(resultMock.minutes.withSpace.little)
      })
    })

    describe('"false" as value', () => {
      test('Returns a string with the format "{hours}h ago" for times that are "< 24 hours && >= 60 minutes ago"', () => {
        const ms1 = getTime(timeDataMock.hours.little)
        const result1 = timeSince(ms1, false)
        expect(result1).toBe(resultMock.hours.withoutSpace.bigger)

        const ms2 = getTime(timeDataMock.minutes.bigger)
        const result2 = timeSince(ms2, false)
        expect(result2).toBe(resultMock.hours.withoutSpace.little)
      })

      test('Returns a string with the format "{minutes}m ago" for times that are "< 24 hours && < 60 minutes && >= 60 seconds ago"', () => {
        const ms1 = getTime(timeDataMock.minutes.little)
        const result1 = timeSince(ms1, false)
        expect(result1).toBe(resultMock.minutes.withoutSpace.bigger)

        const ms2 = getTime(timeDataMock.seconds.bigger)
        const result2 = timeSince(ms2, false)
        expect(result2).toBe(resultMock.minutes.withoutSpace.little)
      })
    })
  })

  describe('"addDifferenceInDays" param', () => {
    describe('"true" as value', () => {
      test('Returns a string with the format "DD days ago" for times that are ">= 24 hours ago"', () => {
        const ms = getTime(timeDataMock.hours.bigger)
        const result = timeSince(ms, true, true)
        expect(result).toBe(resultMock.days.difference)
      })
    })

    describe('"false" as value', () => {
      test('Returns a string with the format "DD MMM YY" for times that are ">= 24 hours ago"', () => {
        const ms = getTime(timeDataMock.hours.bigger)
        const result = timeSince(ms, true, false)
        expect(result).toBe(resultMock.days.date)
      })
    })
  })
})
