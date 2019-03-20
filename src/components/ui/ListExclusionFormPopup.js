// @flow

import React, { PureComponent } from 'react'
import ClickOutside from 'react-click-outside'

import InputField from '../forms/InputField'
import Button from './Button'
import SvgIcon from './SvgIcon'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(`
    & {
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1)
      border: 1px solid ${theme.lineSilver2}
      background: ${theme.baseBrighter}
      white-space: nowrap
      position: absolute
      z-index: 9999
      width: 300px
    }

    &::before,
    &::after {
      content: ''
      position: absolute
      display: block
      border-top: 10px solid transparent
      border-bottom: 10px solid transparent
    }

    &::before {
      border-right: 10px solid ${theme.lineSilver2}
      right: 100%
    }

    &::after {
      border-right: 10px solid ${theme.baseBrighter}
      right: calc(100% - 1px)
    }
  `),

  container: cmz(`
    overflow: auto
    padding: 10px 20px 20px
    height: calc(100% - 56px)
    box-sizing: border-box
  `),

  applicant: cmz(typo.sectionHeading, `
    margin: 20px 20px 10px
    line-height: 1
  `),

  input: cmz(`
    & {
      padding: 20px 0
      border-bottom: 1px solid ${theme.lineSilver2}
    }

    &:first-of-type {
      padding-top: 0
    }

    &:last-of-type {
      padding-bottom: 0
      border-bottom: none
    }
  `),

  buttons: cmz(`
    margin: 20px 0 0
    text-align: right
  `)
}

type Positioning = {
  x: number,
  y: number,
  width: number,
  height: number,
  top: number,
  right: number,
  bottom: number,
  left: number
}

type Props = {
  applicant: string,
  reasons: Array<string>,
  positioning: Positioning,
  onSubmit?: Function,
  onCancel?: Function
}

type State = {
  reasonIndex: number,
  reasonLabel: string,
  anchor: number,
  style: Object
}

const noneIndex = -1

class ListExclusionFormPopup extends PureComponent<Props, State> {
  static defaultProps = {
    applicant: '',
    reasons: [],
    positioning: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }

  state = {
    reasonIndex: noneIndex,
    reasonLabel: '',
    anchor: 4,
    style: {}
  }

  handleCancel = (event: Object) => {
    event.preventDefault()
    const { onCancel } = this.props
    this.setState(
      {
        reasonIndex: noneIndex,
        reasonLabel: ''
      },
      () => onCancel && onCancel()
    )
  }

  handleSubmit = (event: Object) => {
    event.preventDefault()
    const { onSubmit } = this.props
    const { reasonLabel } = this.state
    onSubmit && onSubmit(reasonLabel)
  }

  handleReasonChange = (event: Object) => {
    const { reasons } = this.props
    const reasonIndex = event.target.value
    const reasonLabel = reasons[reasonIndex]
    this.setState({
      reasonIndex,
      reasonLabel
    })
  }

  handleCommentChange = (event: Object) => {
    const { reasons } = this.props
    this.setState({
      reasonIndex: reasons.length,
      reasonLabel: event.target.value
    })
  }

  updateDimensions = () => {
    const { width = 0, height = 0, top = 0, bottom = 0, left = 0 } = this.props.positioning
    const { innerHeight } = window

    const maxHeight = 400
    const margin = 10
    const margins = margin * 2
    const triangleHeight = 20
    const initialAnchor = (height / 2) - (triangleHeight / 2)

    let anchor = initialAnchor > 0 ? initialAnchor : 0

    const style = {
      height: maxHeight,
      maxHeight: `calc(100vh - ${margins}px)`,
      top: top,
      left: left + width + 12
    }

    // Small screens than popup max height
    if (innerHeight <= maxHeight + margins) {
      style.top = margin
      anchor = bottom > innerHeight - margin
        ? innerHeight - margins - triangleHeight
        : (top < margin ? 0 : top + initialAnchor - margin)

    // Bigger screens than popup max height
    } else {
      // Popup would appears out of top boundary
      if (top < margin) {
        style.top = margin
        anchor = 0
      }
      // Popup would appears out of bottom boundary
      if (top + maxHeight + margin > innerHeight) {
        style.top = innerHeight - maxHeight - margin
        anchor = bottom > innerHeight - margin
          ? maxHeight - triangleHeight
          : top - style.top + initialAnchor
      }
    }

    this.setState({
      anchor,
      style
    })
  }

  componentDidMount () {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render () {
    const { applicant, reasons } = this.props
    const { reasonIndex, reasonLabel, anchor, style } = this.state
    return (
      <ClickOutside onClickOutside={this.handleCancel}>
        <form className={cx.wrapper} style={style}>
          <style dangerouslySetInnerHTML={{ __html: `
            .${cx.wrapper}::before,
            .${cx.wrapper}::after {
              top: ${anchor.toString()}px;
            }
          ` }} />
          <h1 className={cx.applicant}>{applicant}</h1>
          <div className={cx.container}>
            {reasons.map((value, index) => (
              <div className={cx.input} key={index} data-testid='exclusion-reasons'>
                <InputField
                  name='reasons'
                  type='radio'
                  label={value}
                  value={index}
                  checked={Number(reasonIndex) === index}
                  onChange={this.handleReasonChange}
                />
              </div>
            ))}
            <InputField
              type='textarea'
              name='reason'
              label='Add a comment'
              placeholder='Provide a reason'
              value={reasonLabel}
              onChange={this.handleCommentChange}
              data-testid='exclusion-comment'
            />
            <div className={cx.buttons}>
              <Button size='normal' pseudolink onClick={this.handleCancel} data-testid='exclusion-cancel'>
                Cancel
              </Button>
              <Button size='normal' onClick={this.handleSubmit} data-testid='exclusion-submit' disabled={reasonIndex === noneIndex}>
                <SvgIcon icon='paperplane' color='inverted' />
              </Button>
            </div>
          </div>
        </form>
      </ClickOutside>
    )
  }
}

export default ListExclusionFormPopup
