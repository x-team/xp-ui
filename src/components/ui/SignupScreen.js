// @flow
/* global React$Node */

import React from 'react'
import cmz from 'cmz'

import Footer from './Footer'
import Text from './Text'
import Loader from './Loader'
import Milestones from './Milestones'

import { breakpoints } from '../../styles/theme'

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

  milestones: cmz(`
    width: 100%
    max-width: 500px
    padding: 32px 0 24px
    margin: 0 auto
  `),

  heading: cmz(`
    margin: 32px 0
  `),

  loading: cmz(`
    margin: 32px 0 0
    display: flex
    justify-content: center
    flex: 1
    align-items: center
  `),

  content: cmz(`
    & {
      width: 500px
      max-width: 100%
      margin: 0 auto
      flex: 1
    }

    & > * {
      margin: 24px 0
    }

    & > :first-child {
      margin: 0 0 24px 0
    }

    & > :last-child {
      margin: 24px 0 0 0
    }
  `)
}

type Props = {
  heading?: string,
  subheading?: string,
  isLoading?: boolean,
  children?: React$Node,
  milestones?: Array<*>,
  milestone?: number
}

const SignupScreen = ({ heading, subheading, isLoading, children, milestone, milestones }: Props) => (
  <div className={cx.layout}>
    <div className={cx.wrapper}>
      {milestone && milestones && (
        <div className={cx.milestones}>
          <Milestones
            level={milestone}
            levels={milestones}
          />
        </div>
      )}
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
      {isLoading ? (
        <div className={cx.loading}>
          <Loader />
        </div>
      ) : (
        <div className={cx.content}>
          {children}
        </div>
      )}
      <Footer
        copyright={`${new Date().getFullYear()} © All rights reserved. X-Company Pty Ltd.`}
      />
    </div>
  </div>
)

export default SignupScreen
