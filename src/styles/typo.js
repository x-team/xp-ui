import WebFont from 'webfontloader'

import theme, { breakpoints } from '../styles/theme'

const cmz = require('cmz')

WebFont.load({
  google: {
    families: [
      'Open Sans:600,700,800',
      'Source Sans Pro:300,700',
      'Montserrat:400'
    ]
  }
})

/**
 * Using named typefaces according to their meaning
 */
const typeface = {
  // headers, subheaders
  extraHeading: cmz(`
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 800
  `),

  // roadmap level's subheader
  strongHeading: cmz(`
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 700
  `),

  // collapsible section's title
  semiHeading: cmz(`
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 600
  `),

  // regular text, form controls values/placeholders
  text: cmz(`
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 300
  `),

  // buttons, milestone levels' labels
  extra: cmz(`
    font-family: Montserrat, Arial, sans-serif
    font-weight: 400
  `)
}

// mixin for font smoothing
const textRendering = cmz(`
  text-rendering: optimizeLegibility
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
`)

export default {
  // RoadmapHero title
  mainHeading: cmz(
    textRendering,
    typeface.extraHeading,
    `
      font-size: 55px
      text-transform: uppercase
      margin: 0
      color: ${theme.typoHeading}
      letter-spacing: -1px
      line-height: 51px
    `
  ),

  // in-page top-level headers
  mediumHeading: cmz(
    textRendering,
    typeface.extraHeading,
    `
      font-size: 36px
      text-transform: uppercase
      margin: 0 0 16px
      color: ${theme.typoHeading}
      letter-spacing: -1px
      line-height: 49px
    `
  ),

  // CollapsibleSection title
  moderateHeading: cmz(
    textRendering,
    typeface.semiHeading,
    `
      font-size: 24px
      margin: 0 0 10px
      color: ${theme.typoHeading}
      letter-spacing: -1px
      line-height: 36px
    `
  ),

  // RoadmapLevel's heading
  smallHeading: cmz(
    textRendering,
    typeface.extraHeading,
    `
      text-transform: uppercase
      font-size: 22px
      margin: 0 0 .5rem
      color: ${theme.typoHeading}
      letter-spacing: -.61px
      line-height: 30px
    `
  ),

  // RoadmapLevel's level text
  smallSubheading: cmz(
    textRendering,
    typeface.strongHeading,
    `
      font-size: 18px
      color: ${theme.typoSubheading}
      margin: .625rem 0
      letter-spacing: -.15px
      line-height: 24px
    `
  ),

  // milestone levelN text, button value
  tinyHeading: cmz(
    textRendering,
    typeface.extra,
    `
      line-height: 18px
    `
  ),

  // regular text
  base: cmz(
    textRendering,
    typeface.text,
    `
      font-size: 20px
      color: ${theme.typoParagraph}
      line-height: 30px
    `
  ),

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
