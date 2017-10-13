import cmz from 'cmz'
import WebFont from 'webfontloader'
import theme from './theme'

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
  base: cmz([ textRendering, `
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 300
  `]),

  heading: cmz([ textRendering, `
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 800
    text-transform: uppercase
    font-size: 54px
    margin: 0px
    color: ${theme.black[1]}
    letter-spacing: -3px
    line-height: .95em
  `])
}
