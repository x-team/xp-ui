import color from 'color'

// wrap all theme colors in the `color` function,
// so we can call `.darken()`, `.lighten()`, etc.
function wrap (theme) {
  Object.keys(theme).forEach(k => {
    if (Array.isArray(theme[k])) {
      theme[k] = theme[k].map(c => color(c))
    } else {
      theme[k] = color(theme[k])
    }
  })

  return theme
}

/**
 * Using named colors from http://chir.ag/projects/name-that-color/
 * Treat color hex values as constants and use theme colors with purpose
 */
const palette = {
  white: '#FFF',
  black: '#000',
  haiti: '#130E2E',
  fern: '#5CB85C',
  radicalRed: '#F63954',
  alto: '#D8D8D8',
  nobel: '#B3B3B3',
  tuna: '#34323B',
  manatee: '#918CA0',
  athensGray: '#F0F1F4',
  athensGrayAlt: '#E6E6ED',
  athensGrayBright: '#F9FAFB',
  mercury: '#E4E4E4',
  porcelain: '#E9EDEE',
  brickRed: '#D32F3B',
  wePeep: '#F7D9DC',
  bombay: '#B2B6BC',
  lima: '#5fcf21',
  ripeLemon: '#f8e71c',
  frenchGray: '#c2c1c5',
  frenchGrayDarker: '#B8B7BC',
  scarpaFlow: '#5A5665',
  silver: '#C4C4C4'
}

export default wrap({
  baseBrighter: palette.white,
  baseBright: palette.athensGrayBright,
  baseDarker: palette.haiti,
  baseDark: palette.black,
  baseRed: palette.radicalRed,
  baseLightRed: palette.wePeep,
  baseGreen: palette.fern,
  baseSilver: palette.alto,
  baseHighlight: palette.mercury,
  baseHighlightBright: palette.frenchGray,

  typoHeading: palette.tuna,
  typoSubheading: palette.radicalRed,
  typoParagraph: palette.tuna,
  typoParagraphOnDarkBackground: palette.frenchGrayDarker,
  typoHighlight: palette.haiti,
  typoHighlightOnDarkBackground: palette.scarpaFlow,
  typoLabel: palette.bombay,

  sliderToggle: palette.bombay,
  sliderBackground: palette.athensGray,

  formPlaceholder: palette.manatee,
  formText: palette.tuna,
  formBorder: palette.athensGrayAlt,
  formError: palette.brickRed,
  formErrorShadow: palette.wePeep,

  lineRed: palette.radicalRed,
  // roadmap timeline circle
  // rodamap level border
  lineSilver1: palette.mercury,
  // milestones circle and line
  // screen sections dividers
  lineSilver2: palette.porcelain,
  // roadmap timeline line
  lineSilver3: palette.athensGray,
  // horizontal ruler
  // collapsible section dividers
  lineSilver4: palette.athensGrayAlt,

  iconRed: palette.radicalRed,
  iconBright: palette.white,
  iconDark: palette.tuna,
  iconGray: palette.bombay,
  iconTextGray: palette.tuna,
  iconMutedGray: palette.athensGray,

  logoGray: palette.nobel,

  statusAccepted: palette.lima,
  statusPending: palette.ripeLemon,
  statusExluded: palette.radicalRed,

  silver: palette.silver
})

export const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
  xl: '1440px'
}

export const mediaQueries = {
  medium: `@media screen and (max-width: ${breakpoints.md})`,
  desktop: `@media screen and (min-width: ${breakpoints.md})`
}
