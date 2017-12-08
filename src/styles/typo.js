import WebFont from 'webfontloader'
import theme, { breakpoints } from '../styles/theme'

const cmz = require('cmz')

WebFont.load({
  google: {
    families: [
      'Open Sans:800,400',
      'Source Sans Pro:300,700'
    ]
  }
})

export const textRendering = cmz(`
  text-rendering: optimizeLegibility
  -webkit-font-smoothing: antialiased
`)

export const family = {
  base: cmz(
    textRendering, `
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 300
    color: ${theme.typoParagraph}
  `),

  heading: cmz(
    textRendering, `
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 800
    text-transform: uppercase
    font-size: 54px
    margin: 0px
    color: ${theme.typoHeading}
    letter-spacing: -3px
    line-height: .95em
  `),

  action: cmz(`
    font-family: Raleway, sans-serif;
  `),

  smallHeading: cmz(
    textRendering, `
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 400
    font-size: 18px
    margin: 0 0 10px
    color: ${theme.typoHeading}
    line-height: 1em
  `),

  divider: cmz(`
    & {
      margin-bottom: 60px;
      position: relative;
    }
    &:after {
      content: '';
      position: absolute;
      width: 3.5rem;
      height: 2px;
      bottom: -30px;
      transform: translateX(-50%);
      background-color: ${theme.lineRed};
    }
    @media screen and (max-width: ${breakpoints.sm}) {
      & {
        margin-bottom: 60px;
      }
    }`
  )
}
