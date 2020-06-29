// @flow

import React from 'react'
import cmz from 'cmz'

import Text from './Text'
import Footer from './Footer'
import Loader from './Loader'

import { breakpoints } from '../../styles/theme'

const GAP = '32px'
const MOBILE_GAP = '12px'
const WRAPPER_WIDTH = '1100px'

const cx = {
  layout: cmz(`
    flex: 1
    display: flex
    flex-direction: column
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

  content: cmz(`
    flex: 1
    display: flex
    justify-content: center
    align-items: center
    margin: 90px auto 0
  `)
}

type Props = {
  isLoading?: boolean
}

const NotFoundScreen = ({ isLoading }: Props) => (
  <div className={cx.layout}>
    <div className={cx.wrapper}>
      <div className={cx.content}>
        {isLoading ? (
          <Loader />
        ) : (
          <Text
            heading='Page Not Found.'
            content={
              <p>
                You were destined for greater pages than this. Keep moving
                forward.
              </p>
            }
            hasDivider
            isCentered
          />
        )}
      </div>
      <Footer
        copyright={`${new Date().getFullYear()} © All rights reserved. X-Company Pty Ltd.`}
      />
    </div>
  </div>
)

export default NotFoundScreen
