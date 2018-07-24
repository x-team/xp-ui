// @flow

import React, { PureComponent } from 'react'

import withAutosize from '../hocs/withAutosize'

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
  required?: boolean,
  onChange?: () => mixed,
  type?: Type,
  postText?: string,
  placeholder?: string | number,
  linesLimit?: number
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
    left: 0
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

const labelStyles = cmz(
  typo.baseText,
  `
    margin-left: 30px
    display: inherit
  `
)

const ComponentRoot = elem.div()
const FieldRoot = elem.div(cmz(`
  display: inline-block
  position: relative
`))
const RadioCircle = elem.span(radioInputStyles.circle)
const Label = elem.label(labelStyles)

const inputStyles = [
  typo.formText,
  cmz(`
    & {
      position: relative
      display: table-cell
      margin: 0
      outline: none
      width: 100%
      height: 70px
      padding: 8px 18px
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

const inputWithPostText = cmz(`
  margin-right: 10px
`)

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
      left: 4px
      border: 2px solid ${theme.baseBrighter}
      border-top: none
      border-right: none
      transform: rotate(-45deg)
      transition: all 0.25s ease
    }
  `)
}

const CheckboxTick = elem.span(checkboxInputStyles.tick)

const slidingCheckboxInputStyles = {
  input: cmz(`
    & {
      display: none !important
    }

    &:checked ~ span:before {
      background-color: ${theme.baseLightRed}
    }

    &:checked ~ span:after {
      background-color: ${theme.baseRed}
      transform: translate(100%, -50%)
    }
  `),

  tick: cmz(`
    & {
      margin-left: 26px
      cursor: pointer
    }

    &:before {
      content: ''
      position: absolute
      top: 50%
      left: 0
      width: 46px
      height: 12px
      border-radius: 12px
      background-color: ${theme.sliderBackground}
      transform: translateY(-50%)
      transition: background-color 200ms ease-in-out
    }

    &:after {
      content: ''
      position: absolute
      top: 50%
      left: 0
      width: 24px
      height: 24px
      border-radius: 50%
      background-color: ${theme.sliderToggle}
      transform: translateY(-50%)
      transition: transform 300ms ease-in-out, background-color 200ms ease-in-out
    }
  `)
}

const SlidingCheckboxTick = elem.span(slidingCheckboxInputStyles.tick)

const textareaStyles = cmz(`
  height: auto
  line-height: 30px
  resize: vertical
`)

const getTagName = type => type === 'textarea' ? 'textarea' : 'input'

const TextareaWithAutosize = withAutosize('textarea')

const customTypesDefinitions: Object = {
  'sliding-checkbox': 'checkbox'
}

const getFinalType = type => customTypesDefinitions[type] || type

const inputFactory = type => {
  const finalType = getFinalType(type)
  return elem[getTagName(finalType)](inputStyles)
}

const specialTypesDefinitions: Object = {
  radio: {
    className: radioInputStyles.input,
    ElemBox: RadioCircle,
    ElemLabel: Label
  },
  checkbox: {
    className: checkboxInputStyles.input,
    ElemBox: CheckboxTick,
    ElemLabel: Label
  },
  'sliding-checkbox': {
    className: slidingCheckboxInputStyles.input,
    ElemBox: SlidingCheckboxTick,
    ElemLabel: Label
  }
}

const isSpecialType = type => Boolean(specialTypesDefinitions[type])

class InputField extends PureComponent<Props> {
  static defaultProps = {
    type: 'text',
    isInvalid: false,
    required: false
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
      postText,
      linesLimit,
      ...rest
    } = this.props

    const Tag = inputFactory(type)
    const inputId = id || name
    const labelId = inputId ? `label-${inputId}` : ''
    const errorClassName = isInvalid ? errorInput : ''
    const spacingClassName = postText ? inputWithPostText : ''
    const finalType = getFinalType(type)
    const baseProps = {
      name,
      id: inputId,
      value,
      onChange,
      'aria-labelledby': labelId
    }

    if (isSpecialType(type)) {
      const { ElemBox, ElemLabel, className } = specialTypesDefinitions[type]

      return (
        FieldRoot(
          ElemLabel(
            Tag({
              ...baseProps,
              className: `${className} ${spacingClassName}`,
              type: finalType,
              ...rest
            }),
            ElemBox(),
            label
          )
        )
      )
    }

    if (type === 'textarea') {
      const props = {
        ...baseProps,
        className: `${inputStyles.join(' ')} ${textareaStyles} ${errorClassName} ${spacingClassName}`,
        type,
        linesLimit,
        ...rest
      }
      return <TextareaWithAutosize {...props} />
    }

    return Tag({
      ...baseProps,
      className: `${errorClassName} ${spacingClassName}`,
      type,
      ...rest
    })
  }

  render () {
    const { label, type, id, name, postText, required } = this.props

    const inputId = id || name
    const labelId = inputId ? `label-${inputId}` : ''

    const RootComponent = isSpecialType(type) ? FieldRoot : ComponentRoot
    const postLabel = postText && <Text content={postText} isPureContent />

    return (
      RootComponent(
        label
          ? (
            <label id={labelId}>
              {!isSpecialType(type) && <Text content={label} required={required} />}
              {this.renderField()}
              {postLabel}
            </label>
          )
          : this.renderField()
      )
    )
  }
}

export default InputField
