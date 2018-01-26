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
  `)
}

const label = cmz(
  typo.baseText,
  `
    margin-left: 30px
  `
)

const ComponentRoot = elem.div()
const FieldRoot = elem.div(cmz(`
  display: inline-block
  position: relative
`))
const RadioCircle = elem.span(cmz(radioInputStyles.circle))
const RadioLabel = elem.label(cmz(label))

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
      color: ${theme.formPlaceholder}
    }

    &::-moz-placeholder {
      color: ${theme.formPlaceholder}
    }
  `)
]

const errorInput = cmz(`
  background: ${theme.formErrorShadow}
  border-color: ${theme.formError}
  color: ${theme.formError}
`)

const checkboxInputStyles = {
  input: cmz(`
    & {
      display: none !important
    }

    &:checked ~ span {
      background-color: ${theme.baseRed}
    }
    &:checked ~ span:after {
      opacity: 1
    }
  `),
  tick: cmz(`
    & {
      cursor: pointer
      position: absolute
      width: 18px
      height: 18px
      top: 6px
      left: 0
      border: 1px solid ${theme.formBorder}
      border-radius: 4px
    }

    &:after {
      opacity: 0
      content: ' '
      position: absolute
      width: 8px
      height: 4px
      top: 5px
      left: 5px
      border: 2px solid ${theme.baseBrighter}
      border-top: none
      border-right: none
      transform: rotate(-45deg)
      transition: all 0.25s ease
    }
  `)
}

const CheckboxTick = elem.span(checkboxInputStyles.tick)
const Checkboxlabel = elem.label(cmz(label))

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
    const elements = {
      radio: {
        className: radioInputStyles.input,
        box: RadioCircle,
        label: RadioLabel
      },
      checkbox: {
        className: checkboxInputStyles.input,
        box: CheckboxTick,
        label: Checkboxlabel
      }
    }

    if (type === 'radio' || type === 'checkbox') {
      return (
        FieldRoot(
          Tag({
            className: elements[type].className,
            type,
            name,
            id: inputId,
            value,
            onChange,
            'aria-labelledby': labelId,
            ...rest
          }),
          elements[type].box(),
          elements[type].label(label)
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
    const isRadioOrCheckbox = (type === 'radio' || type === 'checkbox')
    const RootComponent = isRadioOrCheckbox ? FieldRoot : ComponentRoot

    return (
      RootComponent(
        label
          ? (
            <label id={labelId}>
              {!isRadioOrCheckbox && <Text content={label} />}
              {this.renderField()}
            </label>
          )
          : this.renderField()
      )
    )
  }
}

export default InputField
