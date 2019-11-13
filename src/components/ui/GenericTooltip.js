// @flow
/* global React$Node, SyntheticEvent, HTMLElement */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import uuidv4 from 'uuid/v4'

import theme from '../../styles/theme'
import { typeface } from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  tooltip: cmz(
    typeface.semiHeading,
    `
      font-size: 12px
      line-height: 16px
      font-weight: 400
    `
  ),

  dark: cmz(`
    & {
      background: ${theme.baseDark} !important
    }

    &.place-bottom:after {
      border-bottom-color: ${theme.baseDark} !important
    }
  `)
}

type Place = 'top' | 'right' | 'bottom' | 'left'

type Effect = 'float' | 'solid'

type Offset = {
  top: number,
  right: number,
  bottom: number,
  left: number
}

type Props = {
  children?: React$Node,
  message?: React$Node,
  options?: {
    place?: Place,
    type?: 'dark' | 'success' | 'warning' | 'error' | 'info' | 'light',
    effect?: Effect,
    offset?: Offset,
    multiline?: boolean,
    border?: boolean,
    insecure?: boolean,
    className?: string,
    html?: boolean,
    delayHide?: number,
    delayUpdate?: number,
    delayShow?: number,
    event?: string,
    eventOff?: string,
    watchWindow?: boolean,
    isCapture?: boolean,
    globalEventOff?: string,
    getContent?: (dataTip: string) => void | [(dataTip: string) => void, number],
    afterShow?: (event: SyntheticEvent<*>) => void,
    afterHide?: (event: SyntheticEvent<*>) => void,
    overridePosition?: (
      { left: number, top: number },
      currentEvent: SyntheticEvent<*>,
      currentTarget: HTMLElement,
      node: HTMLElement,
      place: Place,
      desiredPlace: Place,
      effect: Effect,
      offset: Offset
    ) => ({ left: number, top: number }),
    disable?: boolean,
    scrollHide?: boolean,
    resizeHide?: boolean,
    wrapper?: string,
    clickable?: boolean
  }
}

const GenericTooltip = ({ children, message, options = {} }: Props) => {
  const uuid = uuidv4()
  const classNames = [
    cx.tooltip,
    !options.type || options.type === 'dark' ? cx.dark : ''
  ].join(' ')
  const defaultOptions = {
    place: 'bottom',
    type: 'dark',
    effect: 'solid'
  }
  return children ? (
    <Fragment>
      <span data-tip data-for={uuid}>{children}</span>
      {message && (
        <ReactTooltip id={uuid} className={classNames} {...defaultOptions} {...options}>
          {message}
        </ReactTooltip>
      )}
    </Fragment>
  ) : null
}

GenericTooltip.propTypes = {
  children: PropTypes.node,
  message: PropTypes.node,
  options: PropTypes.shape({
    place: PropTypes.string,
    type: PropTypes.string,
    effect: PropTypes.string,
    offset: PropTypes.object,
    multiline: PropTypes.bool,
    border: PropTypes.bool,
    insecure: PropTypes.bool,
    className: PropTypes.string,
    html: PropTypes.bool,
    delayHide: PropTypes.number,
    delayUpdate: PropTypes.number,
    delayShow: PropTypes.number,
    event: PropTypes.string,
    eventOff: PropTypes.string,
    watchWindow: PropTypes.bool,
    isCapture: PropTypes.bool,
    globalEventOff: PropTypes.string,
    getContent: PropTypes.any,
    afterShow: PropTypes.func,
    afterHide: PropTypes.func,
    overridePosition: PropTypes.func,
    disable: PropTypes.bool,
    scrollHide: PropTypes.bool,
    resizeHide: PropTypes.bool,
    wrapper: PropTypes.string,
    clickable: PropTypes.bool
  })
}

export default GenericTooltip
