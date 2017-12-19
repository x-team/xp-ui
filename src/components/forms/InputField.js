// @flow

import React, { PureComponent } from 'react'

import Text from '../ui/Text'

import elem from '../../utils/elem'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

type Type = 'checkbox' | 'color' | 'date' | 'email' | 'hidden' | 'month' | 'number' | 'password' | 'radio' | 'search' | 'tel' | 'text' | 'textarea' | 'time' | 'url' | 'week'

type Props = {
  label?: string,
  name: string,
  id?: string,
  value?: boolean | number | string | Object,
  isInvalid?: boolean,
  defaultValue?: string,
  onChange?: () => mixed,
  type?: Type,
  placeholder?: string | number
}

const circle = size => `
  content: ' ';
  position: absolute;
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
`

const radioInputStyles = {
  circle: cmz(`
    ${circle(18)}
    top: 6px
    border: 1px solid ${theme.formBorder}
    box-sizing: border-box
  `),

  input: cmz(`
    & {
      display: none !important
    }

    &:checked ~ span:after {
      ${circle(10)}
      top: -1px
      right: -1px
      margin: 4px
      background-color: ${theme.baseRed}
    }
  `),

  option: cmz(`
    margin-left: 50px
  `),

  label: cmz(
    typo.baseText,
    `
      margin-left: 30px
    `
  )
}

const ComponentRoot = elem.div()
const FieldRoot = elem.div(cmz(`
  display: inline-block
  position: relative
`))
const RadioCircle = elem.span(cmz(radioInputStyles.circle))
const RadioLabel = elem.label(cmz(radioInputStyles.label))

const inputStyles = [
  typo.formText,
  cmz(`
    & {
      position: relative
      display: table-cell
      margin: 0 !important
      outline: none
      width: 100%
      height: 70px
      padding: 10px 18px
      border: 1px solid ${theme.formBorder}
      box-sizing: border-box
      z-index: 2
    }

    &::-webkit-input-placeholder {
      color: ${theme.formText}
    }

    &::-moz-placeholder {
      color: ${theme.formText}
    }
  `)
]

const errorInput = cmz(`
  background: ${theme.formErrorShadow}
  border-color: ${theme.formError}
  color: ${theme.formError}
`)

const getTagName = type => type === 'textarea' ? 'textarea' : 'input'

const inputFactory = type => elem[getTagName(type)](inputStyles)

class InputField extends PureComponent<Props> {
  static defaultProps = {
    type: 'text',
    isInvalid: false
  }

  renderField = () => {
    const {
      type,
      label,
      id,
      name,
      value,
      onChange,
      isInvalid,
      ...rest
    } = this.props

    const Tag = inputFactory(type)
    const inputId = id || name
    const labelId = inputId ? `label-${inputId}` : ''
    const errorClassName = isInvalid ? errorInput : ''

    if (type === 'radio') {
      return (
        FieldRoot(
          Tag({
            className: radioInputStyles.input,
            type,
            name,
            id: inputId,
            value,
            onChange,
            'aria-labelledby': labelId,
            ...rest
          }),
          RadioCircle(),
          RadioLabel(label)
        )
      )
    }

    return Tag({
      className: errorClassName,
      type,
      name,
      id: inputId,
      value,
      onChange,
      'aria-labelledby': labelId,
      ...rest
    })
  }

  render () {
    const { label, type, id, name } = this.props

    const inputId = id || name
    const labelId = inputId ? `label-${inputId}` : ''
    const isRadio = type === 'radio'
    const RootComponent = isRadio ? FieldRoot : ComponentRoot

    return (
      RootComponent(
        label
          ? (
            <label id={labelId}>
              {!isRadio && <Text content={label} />}
              {this.renderField()}
            </label>
          )
          : this.renderField()
      )
    )
  }
}

export default InputField
