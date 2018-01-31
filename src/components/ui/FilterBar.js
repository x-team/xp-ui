// @flow

import { PureComponent } from 'react'

import elem from '../../utils/elem'
import theme from '../../styles/theme'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  onSubmit: Function,
  children: Element<*>|string
}

const Root = elem.div(cmz(`
  border-bottom: ${theme.lineSilver1} solid 1px
  margin: 0
`))

const Form = elem.form(cmz(`
  padding: 10px 20px
  box-sizing: border-box
  width: 100%
  max-width: 100%
`))

const Filters = elem.div(cmz(`
  & {
    display: flex
    align-items: flex-end
  }

  & *:not(:last-child) {
    margin-right: 20px
  }

  & input {
    width: 240px
    height: 40px
    padding: 5px
  }
`))

class FilterBar extends PureComponent<Props> {
  render () {
    const { onSubmit, children } = this.props

    return children ? Root(
      Form(
        {
          onSubmit: onSubmit
        },
        Filters(children)
      )
    ) : null
  }
}

export default FilterBar
