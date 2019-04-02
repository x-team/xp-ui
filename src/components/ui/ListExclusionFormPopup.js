// @flow
/* global SyntheticEvent, HTMLInputElement, SyntheticInputEvent */

import React, { PureComponent } from 'react'
import ClickOutside from 'react-click-outside'
import throttle from 'lodash.throttle'
import isEqual from 'lodash.isequal'

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
      display: flex
      flex-direction: column
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
    height: 100%
    box-sizing: border-box
  `),

  applicant: cmz(typo.sectionHeading, `
    margin: 14px 20px 10px
    line-height: 1.2
    white-space: pre-wrap
    word-break: break-all
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
    & {
      margin: 20px 0 0
      text-align: right
    }

    & svg {
      transform: translateY(2px)
    }
  `)
}

type Positioning = {
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
  marginTop: number,
  marginBottom: number,
  maxHeight: number,
  actionIdAttr: string,
  onSubmit?: (reason: string) => void,
  onCancel?: () => void
}

type State = {
  reasonIndex: number,
  reasonLabel: string,
  anchor: number,
  style: Object,
  positioning: Positioning
}

const noneIndex = -1

const getActionElementPosition = (actionIdAttr: string): Positioning => {
  const currentTarget = document.getElementById(actionIdAttr)
  const {
    width = 0,
    height = 0,
    top = 0,
    right = 0,
    bottom = 0,
    left = 0
  } = currentTarget ? currentTarget.getBoundingClientRect() : {}
  return { width, height, top, right, bottom, left }
}

class ListExclusionFormPopup extends PureComponent<Props, State> {
  static defaultProps = {
    applicant: '',
    reasons: [],
    marginTop: 10,
    marginBottom: 10,
    maxHeight: 400
  }

  state = {
    reasonIndex: noneIndex,
    reasonLabel: '',
    anchor: 4,
    style: {},
    positioning: getActionElementPosition(this.props.actionIdAttr)
  }

  handleCancel = (event: SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { onCancel } = this.props
    this.setState({ reasonIndex: noneIndex, reasonLabel: '' }, () => onCancel && onCancel())
  }

  handleSubmit = (event: SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { onSubmit } = this.props
    const { reasonLabel } = this.state
    onSubmit && onSubmit(reasonLabel)
  }

  handleReasonChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { reasons } = this.props
    const reasonIndex = Number(event.target.value)
    const reasonLabel = reasons[reasonIndex]
    this.setState({ reasonIndex, reasonLabel })
  }

  handleCommentChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ reasonLabel: event.target.value })
  }

  isScreenSmallerThanPopupMaxHeight = ({ innerHeight, maxHeight, margins }: { innerHeight: number, maxHeight: number, margins: number }) => innerHeight <= maxHeight + margins

  isClickedElementTopAboveThePopupTop = ({ top, marginTop }: { top: number, marginTop: number }) => top < marginTop

  doesPopupHeightGoesOutOfScreenBottomBoundary = ({ top, maxHeight, marginBottom, innerHeight }: { top: number, maxHeight: number, marginBottom: number, innerHeight: number }) => top + maxHeight + marginBottom > innerHeight

  isClickedElementBottomBelowThePopupBottom = ({ bottom, innerHeight, marginBottom }: { bottom: number, innerHeight: number, marginBottom: number }) => bottom > innerHeight - marginBottom

  getAnchorPositionedAtMiddleOfClickedElement = ({ top, initialAnchor, marginTop }: { top: number, initialAnchor: number, marginTop: number }) => top + initialAnchor - marginTop

  getAnchorPositionedAtBottomEdgeOfThePopup = ({ innerHeight, margins, triangleHeight }: { innerHeight: number, margins: number, triangleHeight: number }) => innerHeight - margins - triangleHeight

  getAnchorPositionForScreenSmallerThanPopupMaxHeight = ({ bottom, innerHeight, marginBottom, margins, triangleHeight, top, marginTop, initialAnchor }: { bottom: number, innerHeight: number, marginBottom: number, margins: number, triangleHeight: number, top: number, marginTop: number, initialAnchor: number }) => {
    if (this.isClickedElementBottomBelowThePopupBottom({ bottom, innerHeight, marginBottom })) {
      return this.getAnchorPositionedAtBottomEdgeOfThePopup({ innerHeight, margins, triangleHeight })
    }
    if (this.isClickedElementTopAboveThePopupTop({ top, marginTop })) {
      return 0
    }
    return this.getAnchorPositionedAtMiddleOfClickedElement({ top, initialAnchor, marginTop })
  }

  getPopupTopWhenDockedToTheScreenBottom = ({ innerHeight, maxHeight, marginBottom }: { innerHeight: number, maxHeight: number, marginBottom: number }) => innerHeight - maxHeight - marginBottom

  getAnchorPositionedAtBottomEdgeOfThePopupWhenPopupIsDockedToTheScreenBottom = ({ maxHeight, triangleHeight }: { maxHeight: number, triangleHeight: number }) => maxHeight - triangleHeight

  getAnchorPositionedAtMiddleOfClickedElementWhenPopupIsDockedToTheScreenBottom = ({ innerHeight, maxHeight, marginBottom, top, initialAnchor }: { innerHeight: number, maxHeight: number, marginBottom: number, top: number, initialAnchor: number }) => top - this.getPopupTopWhenDockedToTheScreenBottom({ innerHeight, maxHeight, marginBottom }) + initialAnchor

  getAnchorPositionWhenPopupIsDockedToTheScreenBottom = ({ bottom, innerHeight, marginBottom, maxHeight, triangleHeight, top, initialAnchor }: { bottom: number, innerHeight: number, marginBottom: number, maxHeight: number, triangleHeight: number, top: number, initialAnchor: number }) => {
    let anchor = this.isClickedElementBottomBelowThePopupBottom({ bottom, innerHeight, marginBottom })
      ? this.getAnchorPositionedAtBottomEdgeOfThePopupWhenPopupIsDockedToTheScreenBottom({ maxHeight, triangleHeight })
      : this.getAnchorPositionedAtMiddleOfClickedElementWhenPopupIsDockedToTheScreenBottom({ innerHeight, maxHeight, marginBottom, top, initialAnchor })
    anchor = anchor < 0 ? 0 : anchor
    return anchor
  }

  getDistanceBetweenTopOfScreenAndClickedElement = ({ top, triangleHeight }: { top: number, triangleHeight: number }) => top - triangleHeight

  getPointOfArrowPositionRelatedToClickedElement = ({ triangleHeight, height }: { triangleHeight: number, height: number }) => triangleHeight - (height / 2)

  setUpdatedDimensions = () => {
    const { marginTop, marginBottom, maxHeight } = this.props
    const { width = 0, height = 0, top = 0, bottom = 0, left = 0 } = this.state.positioning
    const { innerHeight } = window

    const margins = marginTop + marginBottom
    const triangleHeight = 20
    const initialAnchor = (height / 2) - (triangleHeight / 2)

    let anchor = initialAnchor > 0 ? initialAnchor : 0

    const style = {
      height: maxHeight,
      maxHeight: `calc(100vh - ${margins}px)`,
      top,
      left: left + width + 10
    }

    if (this.isScreenSmallerThanPopupMaxHeight({ innerHeight, maxHeight, margins })) {
      style.top = marginTop
      anchor = this.getAnchorPositionForScreenSmallerThanPopupMaxHeight({ bottom, innerHeight, marginBottom, margins, triangleHeight, top, marginTop, initialAnchor })
    } else {
      if (height < triangleHeight) {
        if (this.isClickedElementTopAboveThePopupTop({ top: this.getDistanceBetweenTopOfScreenAndClickedElement({ top, triangleHeight }), marginTop })) {
          style.top = marginTop
        } else {
          style.top = this.getDistanceBetweenTopOfScreenAndClickedElement({ top, triangleHeight })
          anchor = this.getPointOfArrowPositionRelatedToClickedElement({ triangleHeight, height })
        }
      }
      if (this.isClickedElementTopAboveThePopupTop({ top, marginTop })) {
        style.top = marginTop
        anchor = 0
      }
      if (this.doesPopupHeightGoesOutOfScreenBottomBoundary({ top, maxHeight, marginBottom, innerHeight })) {
        style.top = this.getPopupTopWhenDockedToTheScreenBottom({ innerHeight, maxHeight, marginBottom })
        anchor = this.getAnchorPositionWhenPopupIsDockedToTheScreenBottom({ bottom, innerHeight, marginBottom, maxHeight, triangleHeight, top, initialAnchor })
      }
    }

    this.setState({ anchor, style })
  }

  updateDimensions = throttle(this.setUpdatedDimensions, 1000)

  componentDidUpdate (prevProps: Props, prevState: State) {
    const positioning = getActionElementPosition(this.props.actionIdAttr)
    if (!isEqual(prevState.positioning, positioning)) {
      this.setState({ positioning }, this.setUpdatedDimensions())
    }
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
          {applicant && <h1 className={cx.applicant}>{applicant}</h1>}
          <div className={cx.container}>
            {reasons.map((value, index) => (
              <div className={cx.input} key={index} data-testid='exclusion-reasons'>
                <InputField
                  name='reasons'
                  type='radio'
                  label={value}
                  value={index}
                  checked={reasonIndex === index}
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
              <Button pseudolink onClick={this.handleCancel} data-testid='exclusion-cancel'>
                Cancel
              </Button>
              <Button onClick={this.handleSubmit} data-testid='exclusion-submit' disabled={reasonLabel === ''}>
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
