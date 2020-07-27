// @flow

import React, { Fragment } from 'react'

import Button from './Button'
import Footer from './Footer'
import Loader from './Loader'

import theme, { breakpoints } from '../../styles/theme'
import { typeface } from '../../styles/typo'

const cmz = require('cmz')

const GAP = '32px'
const MOBILE_GAP = '12px'
const WRAPPER_WIDTH = '1100px'

const cx = {
  wrapper: cmz(`
    & {
      display: flex
      flex: 1
      align-items: center
      flex-direction: column
      line-height: 1.4
      text-align: center
      height: 100%
      width: calc(100% - 2 * ${MOBILE_GAP})
      max-width: calc(${WRAPPER_WIDTH} - 2 * ${GAP})
      padding: 0 ${MOBILE_GAP}
      margin: 0 auto
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
    display: flex
    flex: 1
    justify-content: center
    align-items: center
    flex-direction: column
    padding: 48px 48px 0
    width: auto
    max-width: 100%
    height: 100%
    color: ${theme.typoParagraph}
  `),

  image: cmz(`
    margin: 0 0 40px
  `),

  headline: cmz(
    typeface.extraHeading,
    `
      margin: 0 0 16px
      font-size: 32px
      line-height: 44px
      text-transform: uppercase
    `
  ),

  text: cmz(
    typeface.text,
    `
      margin: 0 0 32px
      font-size: 18px
    `
  ),

  join: cmz(`
    & {
      color: ${theme.typoAnchor}
      text-decoration: none
      cursor: pointer
    }

    &:hover {
      color: ${theme.typoAnchorHover}
    }
  `),

  title: cmz(`
    font-size: 24px
    margin: 0 0 14px
    font-family: Lato, Helvetica, Arial, sans-serif
    font-weight: 700
  `),

  alttext: cmz(`
    font-size: 16px
    margin: 0 0 32px
    font-family: Lato, Helvetica, Arial, sans-serif
    font-weight: 400
  `),

  recover: cmz(`
    width: 500px
    max-width: 100%
    font-size: 13px !important
    box-sizing: border-box
    font-weight: 700
  `)
}

type Props = {
  headline?: string,
  isLoading?: boolean,
  recover?: () => void,
  joinClick?: () => void
}

const LocateYourProfile = ({ headline, isLoading, recover, joinClick }: Props) => (
  <div className={cx.wrapper}>
    <div className={cx.content}>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <svg className={cx.image} width='129' height='124' viewBox='0 0 129 124' fill='none'>
            <path fillRule='evenodd' clipRule='evenodd' d='M64.3335 36.3335C61.9404 36.3335 60.0001 38.2738 60.0001 40.6668V43.3335C60.0001 45.7265 61.9404 47.6668 64.3335 47.6668C66.7265 47.6668 68.6668 45.7265 68.6668 43.3335V40.6668C68.6668 38.2738 66.7265 36.3335 64.3335 36.3335ZM58.0001 40.6668C58.0001 37.1692 60.8358 34.3335 64.3335 34.3335C67.8311 34.3335 70.6668 37.1692 70.6668 40.6668V43.3335C70.6668 46.8311 67.8311 49.6668 64.3335 49.6668C60.8358 49.6668 58.0001 46.8311 58.0001 43.3335V40.6668Z' fill='#101011' />
            <path fillRule='evenodd' clipRule='evenodd' d='M55.4344 54.8872C57.0837 52.9202 59.5626 51.667 62.3334 51.667H66.3334C69.0901 51.667 71.5888 52.9593 73.2317 54.8903C73.5896 55.311 73.5387 55.9421 73.118 56.3C72.6974 56.6578 72.0663 56.607 71.7084 56.1863C70.4166 54.668 68.4606 53.667 66.3334 53.667H62.3334C60.1788 53.667 58.2524 54.6391 56.967 56.1722C56.6121 56.5954 55.9814 56.6508 55.5582 56.2959C55.135 55.9411 55.0796 55.3104 55.4344 54.8872Z' fill='#101011' />
            <path fillRule='evenodd' clipRule='evenodd' d='M64.3334 29.667C56.7855 29.667 50.6667 35.7858 50.6667 43.3337C50.6667 50.8816 56.7855 57.0003 64.3334 57.0003C71.8813 57.0003 78.0001 50.8816 78.0001 43.3337C78.0001 35.7858 71.8813 29.667 64.3334 29.667ZM48.6667 43.3337C48.6667 34.6812 55.681 27.667 64.3334 27.667C72.9859 27.667 80.0001 34.6812 80.0001 43.3337C80.0001 51.9861 72.9859 59.0003 64.3334 59.0003C55.681 59.0003 48.6667 51.9861 48.6667 43.3337Z' fill='#101011' />
            <path fillRule='evenodd' clipRule='evenodd' d='M112.5 2.5C104.768 2.5 98.5 8.76801 98.5 16.5C98.5 24.232 104.768 30.5 112.5 30.5C120.232 30.5 126.5 24.232 126.5 16.5C126.5 8.76801 120.232 2.5 112.5 2.5ZM96.5 16.5C96.5 7.66344 103.663 0.5 112.5 0.5C121.337 0.5 128.5 7.66344 128.5 16.5C128.5 25.3366 121.337 32.5 112.5 32.5C103.663 32.5 96.5 25.3366 96.5 16.5Z' fill='#101011' />
            <path d='M116 39.879C115.448 39.879 115 40.3267 115 40.879V103C115 109.075 110.075 114 104 114H72C71.7348 114 71.4804 114.105 71.2929 114.293L64 121.586L56.7071 114.293C56.5196 114.105 56.2652 114 56 114H24C17.9249 114 13 109.075 13 103V22C13 15.9249 17.9249 11 24 11H86.2382C86.7905 11 87.2382 10.5523 87.2382 10C87.2382 9.44772 86.7905 9 86.2382 9H24C16.8203 9 11 14.8203 11 22V103C11 110.18 16.8203 116 24 116H55.5858L63.2929 123.707C63.6834 124.098 64.3166 124.098 64.7071 123.707L72.4142 116H104C111.18 116 117 110.18 117 103V40.879C117 40.3267 116.552 39.879 116 39.879Z' fill='#101011' />
            <path fillRule='evenodd' clipRule='evenodd' d='M39 69C39 68.4477 39.4477 68 40 68H90C90.5523 68 91 68.4477 91 69C91 69.5523 90.5523 70 90 70H40C39.4477 70 39 69.5523 39 69Z' fill='#101011' />
            <path fillRule='evenodd' clipRule='evenodd' d='M39 81C39 80.4477 39.4477 80 40 80H90C90.5523 80 91 80.4477 91 81C91 81.5523 90.5523 82 90 82H40C39.4477 82 39 81.5523 39 81Z' fill='#CDCDD6' />
            <path fillRule='evenodd' clipRule='evenodd' d='M39 87C39 86.4477 39.4477 86 40 86H83C83.5523 86 84 86.4477 84 87C84 87.5523 83.5523 88 83 88H40C39.4477 88 39 87.5523 39 87Z' fill='#CDCDD6' />
            <path fillRule='evenodd' clipRule='evenodd' d='M39 93C39 92.4477 39.4477 92 40 92H66C66.5523 92 67 92.4477 67 93C67 93.5523 66.5523 94 66 94H40C39.4477 94 39 93.5523 39 93Z' fill='#CDCDD6' />
            <path d='M110.636 19.253V18.5669C110.636 17.9735 110.769 17.4574 111.036 17.0186C111.303 16.5797 111.791 16.1131 112.5 15.6186C113.183 15.155 113.632 14.778 113.847 14.4874C114.068 14.1969 114.179 13.8724 114.179 13.5139C114.179 13.1122 114.023 12.8062 113.71 12.596C113.398 12.3859 112.962 12.2808 112.402 12.2808C111.426 12.2808 110.313 12.5836 109.064 13.1894L108 11.1589C109.451 10.3863 110.99 10 112.617 10C113.958 10 115.022 10.3059 115.809 10.9178C116.603 11.5298 117 12.3457 117 13.3656C117 14.0455 116.837 14.6327 116.512 15.1272C116.187 15.6217 115.568 16.1779 114.657 16.796C114.033 17.2349 113.636 17.5687 113.466 17.7974C113.304 18.026 113.222 18.3258 113.222 18.6967V19.253H110.636ZM110.323 22.4238C110.323 21.9047 110.47 21.5122 110.762 21.2463C111.055 20.9806 111.482 20.8477 112.041 20.8477C112.581 20.8477 112.998 20.9837 113.291 21.2557C113.59 21.5276 113.74 21.917 113.74 22.4238C113.74 22.9121 113.59 23.2985 113.291 23.5828C112.991 23.8609 112.575 24 112.041 24C111.495 24 111.072 23.864 110.772 23.5921C110.473 23.3139 110.323 22.9245 110.323 22.4238Z' fill='black' />
          </svg>
          {headline && (
            <p className={cx.headline}>{headline}</p>
          )}
          <p className={cx.text}><a className={cx.join} onClick={joinClick}>Join X-Team</a> if you don’t have an account yet.</p>
          <p className={cx.title}>Already have an account?</p>
          <p className={cx.alttext}>Please ensure that you have local storage enabled in your browser.</p>
          {recover && (
            <Button onClick={recover} className={cx.recover}>Recover my secret profile Link</Button>
          )}
        </Fragment>
      )}
    </div>
    <Footer
      copyright={`${new Date().getFullYear()} © All rights reserved. X-Company Pty Ltd.`}
    />
  </div>
)

export default LocateYourProfile
