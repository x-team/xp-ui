// @flow

import { PureComponent } from 'react'
import cmz from 'cmz'
import theme from '../styles/theme'
import elem from '../utils/elem'

type Err = {[key: string|number]: string}
type Props = {
  errors: Err
}

const Root = elem.div(cmz(`
  color: ${theme.brand.darken(0.2)}
  border: 2px solid ${theme.brand.darken(0.1)}
  border-radius: .175em
  background: ${theme.brand.lighten(0.3)}
  font-style: italic
  margin: 10px
`))

const List = elem.ul(cmz(`
  list-style-type: none;
  padding: 3px;
  text-align: center;
`))

const Item = elem.li()

class ErrorBox extends PureComponent<Props> {
  renderErrorItem: Function

  constructor (props: Props) {
    super(props)

    this.renderErrorItem = this.renderErrorItem.bind(this)
  }

  renderErrorItem (err: string) {
    const { errors } = this.props
    return Item({ key: err }, errors[err])
  }

  render () {
    const { errors } = this.props

    const keys = Object.keys(errors)
    if (!keys.length) { return null }

    return Root(
      List(
        keys.map(this.renderErrorItem)
      )
    )
  }
}

export default ErrorBox
