// @flow

import { PureComponent } from 'react'
import theme from '../../styles/theme'
import typo from '../../styles/typo'
import elem from '../../utils/elem'
import differenceInSeconds from 'date-fns/difference_in_seconds'
import differenceInMinutes from 'date-fns/difference_in_minutes'
import differenceInHours from 'date-fns/difference_in_hours'
import formatDate from 'date-fns/format'
import type { Element } from 'react'
const cmz = require('cmz')

const UPDATE_INTERVAL_TIME = 60 * 1000 // 1 minute

type Props = {
  avatar?: Element<*>,
  date?: Date,
  name?: string,
  text?: string
}

const Root = elem.div(cmz(`
  display: flex
`))

const Avatar = elem.div(cmz(`
  margin-right: 16px
  max-height: 40px
  max-width: 40px
  min-height: 40px
  min-width: 40px
`))

const PlaceholderAvatar = elem.div(cmz(`
  background: ${theme.iconGray}
  border-radius: 50%
  height: 100%
  width: 100%
`))

const Body = elem.div(cmz(`
  display: flex
  flex-direction: column
`))

const Name = elem.span(cmz(
  typo.headline,
  `
    font-size: 16px
    line-height: normal
    margin: 0
    text-transform: uppercase
  `
))

const Time = elem.span(cmz(
  typo.baseText,
  `
    font-size: 12px
    line-height: 12px
    margin-top: 8px
  `
))

const Text = elem.p(typo.baseText)

const timeFromNow = date => {
  const now = new Date()
  const hoursDelta = differenceInHours(now, date)
  if (hoursDelta >= 24) {
    return formatDate(date, 'D MMM YY')
  }
  const minutesDelta = differenceInMinutes(now, date)
  if (minutesDelta >= 60) {
    return `${hoursDelta} h ago`
  }
  if (differenceInSeconds(now, date) >= 60) {
    return `${minutesDelta} m ago`
  }
  return 'just now'
}

class Note extends PureComponent<Props> {
  interval: number

  static defaultProps = {
    avatar: PlaceholderAvatar()
  }

  componentDidMount () {
    this.interval = setInterval(() => this.forceUpdate(), UPDATE_INTERVAL_TIME)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const { avatar, date, name, text } = this.props

    return (
      Root(
        Avatar(avatar),
        Body(
          name && Name(name),
          date && Time(timeFromNow(date)),
          text && Text(text)
        )
      )
    )
  }
}

export default Note
