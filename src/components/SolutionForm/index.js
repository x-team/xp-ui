// @flow

import React, { PureComponent } from 'react'
import theme, { breakpoints } from '../../styles/theme'
import * as typo from '../../styles/typo'
import elem from '../../utils/elem'
import Title from './Title'

const cmz = require('cmz')

import type { Element } from 'react'

type Props = {
  disableButton: boolean,
  hasAttempted: boolean,
  isSubmitting: boolean,
  maxAttempts: number,
  onValueChange: Function,
  solutionValue: string,
  takenAttempts: number
}

const utilStyles = {
  maxWidth: cmz('max-width: 740px'),
  noOutline: cmz('outline: none'),
  noTextDecoration: cmz('text-decoration: none')
}

const Root = elem.div([
  utilStyles.maxWidth,
  cmz(`
    text-align: center
    min-width: 320px
    margin: 0px auto
  `)
])

const Form = elem.form([
  utilStyles.maxWidth,
  cmz(`
    margin: 30px auto
    position: relative
  `)
])

const Textarea = elem.textarea([
  utilStyles.noOutline,
  cmz(`
    display: block
    width: 100%
    height: 156px
    resize: none
    border: ${theme.grayBorder} solid 3px
    border-radius: 4px
    font-size: 28px
    padding: 10px 20px
    box-sizing: border-box
  `)
])

const Button = elem.button([
  utilStyles.noOutline,
  utilStyles.noTextDecoration,
  cmz(`
    & {
      text-transform: uppercase;
      background: ${theme.red};
      border: transparent solid 2px;
      border-radius: 3px;
      color: ${theme.white};
      cursor: pointer;
      font-size: 1rem;
      margin: 0.25em;
      min-width: 290px;
      padding: .75em 2.4em;
      transition: all .3s ease-out;
      font-weight: 700;
    }
    &:hover {
      background: ${theme.redHighlight};
      border-color: transparent;
    }
    &:active {
      background: ${theme.redHighlight};
      transition: none;
    }
    &[disabled] {
      background-color: ${theme.grayBorder};
      pointer-events: none;
    }
  `)
])

export default class SolutionForm extends PureComponent<Props> {
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
      takenAttempts
    } = this.props

    return Root(
      <Title {... { hasAttempted, maxAttempts }} />,
      Form(
        Textarea({
          onChange: this.props.onValueChange,
          placeholder: 'Solution',
          name: 'solution'
        }),
        Button(
          isSubmitting
          ? {
            disabled: true,
            children: 'Checking...'
          }
          : {
            disabled: disableButton,
            children: `Submit (${takenAttempts} of ${maxAttempts} attempts)`
          }
        )
      )
    )
  }
}
