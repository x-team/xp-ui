// @flow
/* global React$Element */

import React from 'react'

import Text from './Text'
import VideoPlayer from './VideoPlayer'
import GenericTooltip from './GenericTooltip'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const GAP = '32px'
const MOBILE_GAP = '12px'
const WRAPPER_WIDTH = '1100px'

const cx = {
  wrapper: cmz(
    typo.regularText,
    `
      background: ${theme.baseBrightSilver}
    `
  ),

  container: cmz(`
    & {
      display: flex
      flex-direction: column
      align-items: center
      max-width: calc(${WRAPPER_WIDTH} - 2 * ${GAP})
      padding: ${MOBILE_GAP}
      margin: 0 auto
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        padding: ${GAP}
      }
    }

    @media screen and (min-width: ${breakpoints.md}) {
      & {
        flex-direction: row
      }
    }

    @media screen and (min-width: ${breakpoints.lg}) {
      & {
        max-width: ${WRAPPER_WIDTH}
        padding: ${GAP} 0
      }
    }
  `),

  content: cmz(`
    width: 100%
  `),

  heading: cmz(
    typo.heading,
    `
      & {
        margin: 0 0 -16px
        font-size: 28px
        line-height: 1.4
        letter-spacing: -0.02em
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          font-size: 42px
          line-height: 57px
        }
      }
    `
  ),

  text: cmz(`
    & {
      font-size: 20px
      line-height: 1.4
      margin: -11px 0 0
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        font-size: 24px
      }
    }
  `),

  player: cmz(`
    & {
      display: block
      align-self: flex-start
      box-shadow: -10px 10px 0 ${theme.baseTuna.fade(0.95)}
      background: ${theme.baseTuna.fade(0.85)}
      margin: ${GAP} auto 10px
      width: 100%
      max-width: 534px
    }

    & > iframe {
      display: block
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        width: 534px
        flex-shrink: 0
      }
    }

    @media screen and (min-width: ${breakpoints.md}) {
      & {
        margin: 0 0 10px ${GAP}
      }
    }
  `),

  actions: cmz(`
    & {
      display: flex
      flex-wrap: wrap
      align-items: center
      margin: 24px 0 0
    }

    & > :first-child:not(:only-child) {
      margin: 0 48px 0 0
    }
  `),

  profile: cmz(`
    & {
      text-decoration: none
      color: ${theme.typoAnchor}
      font-size: 16px
      font-weight: 600
      white-space: nowrap
      flex-wrap: wrap
      line-height: 1.4
    }

    &:hover {
      color: ${theme.typoAnchorHover}
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        font-size: 20px
      }
    }
  `),

  dismiss: cmz(`
    & {
      color: ${theme.typoParagraph.fade(0.5)}
      background: none
      font-size: 16px
      text-transform: none
      border: none
      font-weight: 500
      cursor: pointer
    }

    &:hover {
      background: none
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        font-size: 20px
      }
    }
  `)
}

type Props = {
  heading?: string,
  videoUrl?: string,
  onDismiss?: () => void,
  children?: React$Element<*>|string
}

const WelcomeHero = ({ heading, videoUrl, onDismiss, children }: Props) => heading || children ? (
  <div data-testid="xpui-welcome-hero-wrapper" className={cx.wrapper}>
    <div className={cx.container}>
      <div data-testid="xpui-welcome-hero-content" className={cx.content}>
        <Text
          heading={heading}
          headingClass={cx.heading}
          content={children}
          contentClass={cx.text}
          hasDivider={!!heading}
        />
        <div className={cx.actions}>
          <GenericTooltip
            message={
              <span>
                We currently heavily rely on LinkedIn
                <br />
                Profiles to match candidates with
                <br />
                potential roles.
              </span>
            }
          >
            <a
              className={cx.profile}
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Update your LinkedIn profile »
            </a>
          </GenericTooltip>
          {onDismiss && (
            <div className={cx.dismiss} onClick={onDismiss}>Dismiss</div>
          )}
        </div>
      </div>
      {videoUrl && (
        <div className={cx.player}>
          <VideoPlayer
            src={videoUrl}
            embedded
            overlay
            width={534}
            height={300}
          />
        </div>
      )}
    </div>
  </div>
) : null

export default WelcomeHero
