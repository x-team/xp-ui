// @flow

import React, { PureComponent } from 'react'

import withAutosize from '../hocs/withAutosize'

import Text from '../ui/Text'

import elem from '../../utils/elem'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { InputType } from '../../utils/types'

const cmz = require('cmz')

type Props = {
  label?: string,
  name?: string,
  id?: string,
  value?: boolean | number | string | Object,
  isInvalid?: boolean,
  defaultValue?: string,
  required?: boolean,
  onChange?: (value: any) => void,
  type?: InputType,
  postText?: string,
  placeholder?: string | number,
  linesLimit?: number,
  disabled?: boolean
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
  display: inline-block
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

const dateInputContainer = cmz(`
  & {
    position: relative
  }

  &:after {
    font-weight: 900
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px' viewBox='0 0 16 16'%3E%3Cg stroke='none' strokeWidth='1' fillRule='evenodd'%3E%3Cg transform='translate(-560.000000, -479.000000)'%3E%3Cg transform='translate(363.000000, 309.000000)'%3E%3Cg transform='translate(33.000000, 146.000000)'%3E%3Cpath d='M177.993,40 L166.007,40 C164.901746,39.9989108 164.004951,39.1052439 164,38 L164,28 C163.999997,27.468352 164.211671,26.9585804 164.588259,26.5833058 C164.964847,26.2080312 165.475355,25.9981392 166.007,26 L168,26 L168,25 C168,24.4477153 168.447715,24 169,24 C169.552285,24 170,24.4477153 170,25 L170,26 L174,26 L174,25 C174,24.4477153 174.447715,24 175,24 C175.552285,24 176,24.4477153 176,25 L176,26 L177.993,26 C179.098254,26.0010892 179.995049,26.8947561 180,28 L180,38 C180.000003,38.531648 179.788329,39.0414196 179.411741,39.4166942 C179.035153,39.7919688 178.524645,40.0018608 177.993,40 L177.993,40 Z M178,28 L177.993,28 L176,28 L176,29 C176,29.5522847 175.552285,30 175,30 C174.447715,30 174,29.5522847 174,29 L174,28 L170,28 L170,29 C170,29.5522847 169.552285,30 169,30 C168.447715,30 168,29.5522847 168,29 L168,28 L166.007,28 C166.00479,27.998925 166.00221,27.998925 166,28 L166,38 L166.007,38 L177.993,38 C177.99521,38.001075 177.99779,38.001075 178,38 L178,28 L178,28 Z M175,36 C174.447715,36 174,35.5522847 174,35 C174,34.4477153 174.447715,34 175,34 C175.552285,34 176,34.4477153 176,35 C176,35.5522847 175.552285,36 175,36 L175,36 Z M175,33 C174.447715,33 174,32.5522847 174,32 C174,31.4477153 174.447715,31 175,31 C175.552285,31 176,31.4477153 176,32 C176,32.5522847 175.552285,33 175,33 L175,33 Z M172,36 C171.447715,36 171,35.5522847 171,35 C171,34.4477153 171.447715,34 172,34 C172.552285,34 173,34.4477153 173,35 C173,35.5522847 172.552285,36 172,36 L172,36 Z M172,33 C171.447715,33 171,32.5522847 171,32 C171,31.4477153 171.447715,31 172,31 C172.552285,31 173,31.4477153 173,32 C173,32.5522847 172.552285,33 172,33 L172,33 Z M169,36 C168.447715,36 168,35.5522847 168,35 C168,34.4477153 168.447715,34 169,34 C169.552285,34 170,34.4477153 170,35 C170,35.5522847 169.552285,36 169,36 L169,36 Z M169,33 C168.447715,33 168,32.5522847 168,32 C168,31.4477153 168.447715,31 169,31 C169.552285,31 170,31.4477153 170,32 C170,32.5522847 169.552285,33 169,33 L169,33 Z' /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")
    position: absolute
    right: 15px
    top: calc(50% - 10px)
    pointer-events: none
    z-index: 3
  }

  &:hover:after {
    color: #bf1400
  }
`)

const dateInput = cmz(`
  & {
    cursor: pointer
    padding-right: 40px
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer
    position: absolute
    width: 100%
    height: 100%
    color: transparent
    background: transparent
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none
    display: none
  }

  &::-webkit-clear-button {
    z-index: 1
  }
`)

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

    if (type === 'date') {
      return <div className={dateInputContainer}>{
        Tag({
          ...baseProps,
          className: `${errorClassName} ${spacingClassName} ${dateInput}`,
          placeholder: 'yyyy-mm-dd',
          type,
          ...rest
        })
      }</div>
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
          : (
            <div>
              {this.renderField()}
              {postLabel}
            </div>
          )
      )
    )
  }
}

export default InputField
