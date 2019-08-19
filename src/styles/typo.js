import theme, { breakpoints } from './theme'

const cmz = require('cmz')

/**
 * Using named typefaces according to their meaning
 */
export const typeface = {
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
export const textRendering = cmz(`
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
      & {
        font-size: 55px
        text-transform: uppercase
        margin: 0
        color: ${theme.typoHeading}
        letter-spacing: -1px
        line-height: 51px

        -ms-word-break: keep-all;
        word-break: keep-all;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        hyphens: none;
      }

      @media screen and (max-width: ${breakpoints.sm}) {
        & {
          font-size: 35px
          line-height: 32px
        }
      }
    `
  ),

  // in-page top-level headers
  headline: cmz(
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
  sectionHeading: cmz(
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

  // ApplicantBadge title
  badgeHeading: cmz(
    textRendering,
    typeface.semiHeading,
    `
      font-size: 19px
      color: ${theme.typoHeading}
      letter-spacing: -.3px
      line-height: 19px
      margin: 0
      text-transform: uppercase
    `
  ),

  // RoadmapLevel's heading
  heading: cmz(
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

  // RoadmapLevel's level text, applicant's badge name
  subheading: cmz(
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
  labelText: cmz(
    textRendering,
    typeface.extra,
    `
      font-size: 12px
      text-transform: uppercase
      line-height: 18px
    `
  ),

  // regular text
  baseText: cmz(
    textRendering,
    typeface.text,
    `
      font-size: 20px
      color: ${theme.typoParagraph}
      line-height: 30px
    `
  ),

  // form input values
  formText: cmz(
    textRendering,
    typeface.text,
    `
      font-size: 18px
      color: ${theme.formText}
      line-height: 30px
    `
  ),

  // default links
  link: cmz(
    textRendering,
    typeface.text,
    `
      & {
        color: ${theme.typoAnchor}
        text-decoration: none
      }

      &:hover {
        color: ${theme.typoAnchorHover}
      }
    `
  ),

  // text divider
  divider: cmz(`
    & {
      display: block
      position: relative
      width: 3.5rem
      height: 2px
      margin: 40px 0 35px
      background-color: ${theme.lineRed}
    }

    @media screen and (max-width: ${breakpoints.sm}) {
      & {
        width: 2rem
      }
    }
  `)
}
