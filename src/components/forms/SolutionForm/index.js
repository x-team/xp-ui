// @flow

import React, { PureComponent } from 'react'

import Title from './Title'
import Button from '../../ui/Button'

import elem from '../../../utils/elem'

import theme from '../../../styles/theme'
import typo from '../../../styles/typo'

const cmz = require('cmz')

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
  maxWidth: cmz('max-width: 840px'),
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
  typo.formText,
  cmz(`
    & {
      display: block
      width: 100%
      height: 156px
      padding: 10px 20px
      margin-bottom: 100px
      resize: vertical
      border: 1px solid ${theme.lineSilver3}
      box-sizing: border-box
    }

    &::-webkit-input-placeholder {
      color: ${theme.formPlaceholder}
    }

    &::-moz-placeholder {
      color: ${theme.formPlaceholder}
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
          name: 'solution',
          onChange: onValueChange,
          placeholder: 'Paste your solution here.'
        }),
        <Button disabled={isSubmitting || disableButton}>
          {isSubmitting ? 'Checking...' : `Submit (${takenAttempts} of ${maxAttempts})`}
        </Button>
      )
    )
  }
}

export default SolutionForm
