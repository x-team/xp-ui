import WebFont from 'webfontloader'
import theme, { breakpoints } from './theme'

const cmz = require('cmz')

WebFont.load({
  google: {
    families: [
      'Open Sans:800',
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
  `),

  heading: cmz(
    textRendering, `
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 800
    text-transform: uppercase
    font-size: 54px
    margin: 0px
    color: ${theme.blackHighlight}
    letter-spacing: -3px
    line-height: .95em
  `),

  smallHeading: cmz(
    textRendering, `
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 800
    font-size: 18px
    margin: 0 0 10px
    color: ${theme.black}
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
      height: 4px;
      bottom: -30px;
      transform: translateX(-50%);
      background-color: ${theme.red};
    }
    @media screen and (max-width: ${breakpoints.sm}) {
      & {
        margin-bottom: 60px;
      }
    }`
  )

}
