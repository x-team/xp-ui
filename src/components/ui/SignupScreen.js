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
  `)
}

type Props = {
  heading?: string,
  subheading?: string,
  children?: React$Node
}

const SignupScreen = ({ heading, subheading, children }: Props) => (
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
      {children}
      <Footer
        copyright={`${new Date().getFullYear()} © All rights reserved. X-Company Pty Ltd.`}
      />
    </div>
  </div>
)

export default SignupScreen
