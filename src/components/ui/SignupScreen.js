// @flow
/* global React$Node */

import React from 'react'

import Footer from './Footer'
import Text from './Text'

import { breakpoints } from '../../styles/theme'

const cmz = require('cmz')

const GAP = '32px'
const MOBILE_GAP = '12px'
const WRAPPER_WIDTH = '1100px'
const FORM_WIDTH = '500px'

const cx = {
  layout: cmz(`
    flex: 1
    display: flex
    flex-direction: column
    min-height: 100vh
  `),

  wrapper: cmz(`
    & {
      width: calc(100% - 2 * ${MOBILE_GAP})
      max-width: calc(${WRAPPER_WIDTH} - 2 * ${GAP})
      padding: 0 ${MOBILE_GAP}
      margin: 0 auto
      flex: 1
      display: flex
      flex-direction: column
      height: 100%
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        width: calc(100% - 2 * ${GAP})
        padding: 0 ${GAP}
      }
    }

    @media screen and (min-width: ${breakpoints.lg}) {
      & {
        width: 100%
        max-width: ${WRAPPER_WIDTH}
        padding: 0
      }
    }
  `),

  heading: cmz(`
    margin: 32px 0 0
  `),

  form: cmz(`
    width: 100%
    max-width: ${FORM_WIDTH}
    margin: 64px auto 0
    flex: 1
  `),

  group: cmz(`
    margin: 0 0 24px
  `),

  element: cmz(`
    margin: 0 0 16px
  `)
}

type InputGroupProps = {
  children?: React$Node
}

type LayoutProps = {
  heading?: string,
  subheading?: string,
  children?: React$Node
}

const Layout = ({ heading, subheading, children }: LayoutProps) => (
  <div className={cx.layout}>
    <div className={cx.wrapper}>
      {(heading || subheading) && (
        <div className={cx.heading}>
          <Text
            heading={heading}
            content={subheading}
            hasDivider
            isCentered
          />
        </div>
      )}
      <div className={cx.form}>
        {children}
      </div>
      <Footer
        copyright={`${new Date().getFullYear()} © All rights reserved. X-Company Pty Ltd.`}
      />
    </div>
  </div>
)

const InputGroup = ({ children }: InputGroupProps) => children ? (
  <div className={cx.group}>
    {React.Children.map(children, (child) => (
      <div className={cx.element}>{child}</div>
    ))}
  </div>
) : null

export default {
  Layout,
  InputGroup
}
