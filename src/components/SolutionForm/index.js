// @flow

import React, { PureComponent } from 'react'

import Title from './Title'
import Button from '../Button'

import elem from '../../utils/elem'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

import type { Element } from 'react'

type Props = {
  disableButton: boolean,
  hasAttempted: boolean,
  isSubmitting: boolean,
  maxAttempts: number,
  onValueChange: Function,
  solutionValue: string,
  takenAttempts: number,
  onSubmit (): void
}

const utilStyles = {
  maxWidth: cmz('max-width: 740px'),
  noOutline: cmz('outline: none'),
  noTextDecoration: cmz('text-decoration: none')
}

const Root = elem.div([
  utilStyles.maxWidth,
  cmz(`
    text-align: left
    min-width: 320px
    margin: 0 auto
  `)
])

const Form = elem.form([
  utilStyles.maxWidth,
  cmz(`
    margin: 30px auto
    position: relative
  `)
])

const textareaStyles = [
  utilStyles.noOutline,
  typo.base,
  cmz(`
    & {
      display: block
      width: 100%
      height: 156px
      resize: none
      color: ${theme.formText}
      border: 1px solid ${theme.lineSilver3}
      border-radius: 4px
      font-size: 18px
      padding: 10px 20px
      margin-bottom: 100px
      box-sizing: border-box
    }

    &::-webkit-input-placeholder {
      color: ${theme.formText}
    }

    &::-moz-placeholder {
      color: ${theme.formText}
    }
  `)
]

const errorTextarea = cmz(`
  background: ${theme.formErrorShadow}
  border-color: ${theme.formError}
  color: ${theme.formError}
`)

const Textarea = elem.textarea(textareaStyles)
const TextareaError = elem.textarea(`${textareaStyles[1]} ${textareaStyles[2]} ${errorTextarea}`)

class SolutionForm extends PureComponent<Props> {
  static defaultProps = {
    disableButton: false,
    hasAttempted: false,
    isSubmitting: false,
    maxAttempts: 3,
    takenAttempts: 0
  }

  render () {
    const {
      disableButton,
      hasAttempted,
      isSubmitting,
      maxAttempts,
      takenAttempts,
      onSubmit,
      onValueChange
    } = this.props

    const TextareaComponent = hasAttempted ? TextareaError : Textarea

    return Root(
      <Title {... { hasAttempted, maxAttempts }} />,
      Form(
        {onSubmit},
        TextareaComponent({
          onChange: onValueChange,
          placeholder: 'Solution',
          name: 'solution'
        }),
        <Button disabled={isSubmitting || disableButton}>
          {isSubmitting ? 'Checking...' : `Submit (${takenAttempts} of ${maxAttempts} attempts)`}
        </Button>
      )
    )
  }
}

export default SolutionForm
