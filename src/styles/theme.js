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
export const palette = {
  white: '#FFF',
  black: '#000',
  haiti: '#130E2E',
  fern: '#5CB85C',
  radicalRed: '#F63954',
  redRibbon: '#F20B2C',
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
  silver: '#C4C4C4',
  fairPink: '#FFEBED',
  grayScarpaFlow: '#5C5765',
  dodgerBlue: '#2FC2FF',
  gray: '#8E8E8E',
  iron: '#D6D6D8',
  jumbo: '#858489'
}

export const baseColors = {
  baseBrighter: palette.white,
  baseBright: palette.athensGrayBright,
  baseDarker: palette.haiti,
  baseDark: palette.black,
  baseRed: palette.radicalRed,
  baseLightRed: palette.wePeep,
  baseGreen: palette.fern,
  baseBrightGreen: palette.lima,
  baseSilver: palette.alto,
  baseGray: palette.gray,
  baseBrightSilver: palette.athensGray,
  baseHighlight: palette.mercury,
  baseHighlightBright: palette.frenchGray,
  baseFairPink: palette.fairPink,
  baseBombay: palette.bombay
}

export const typoColors = {
  typoHeading: palette.tuna,
  typoSubheading: palette.radicalRed,
  typoAnchor: palette.radicalRed,
  typoAnchorHover: palette.redRibbon,
  typoHeaderAnchor: palette.jumbo,
  typoParagraph: palette.tuna,
  typoParagraphOnDarkBackground: palette.frenchGrayDarker,
  typoHighlight: palette.haiti,
  typoHighlightOnDarkBackground: palette.scarpaFlow,
  typoLabel: palette.bombay,
  typoCounter: palette.dodgerBlue
}

export const formColors = {
  formPlaceholder: palette.manatee,
  formText: palette.tuna,
  formBorder: palette.athensGrayAlt,
  formError: palette.brickRed,
  formErrorShadow: palette.wePeep
}

export const lineColors = {
  lineRed: palette.radicalRed,
  lineSilver1: palette.mercury,
  lineSilver2: palette.porcelain,
  lineSilver3: palette.athensGray,
  lineSilver4: palette.athensGrayAlt,
  lineSilver5: palette.iron
}

export const iconColors = {
  iconRed: palette.radicalRed,
  iconGreen: palette.fern,
  iconBright: palette.white,
  iconDark: palette.tuna,
  iconGray: palette.bombay,
  iconTextGray: palette.tuna,
  iconMutedGray: palette.athensGray,
  iconGrayScarpaFlow: palette.grayScarpaFlow,
  iconFrenchGrayDarker: palette.frenchGrayDarker,
  iconBrightGreen: palette.lima,
  iconDarkerGray: palette.gray
}

export const miscColors = {
  sliderToggle: palette.bombay,

  logoGray: palette.nobel,

  silver: palette.silver
}

export default wrap({
  ...baseColors,
  ...typoColors,
  ...formColors,
  ...lineColors,
  ...iconColors,
  ...miscColors
})

export const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
  xl: '1440px'
}

export const mediaQueries = {
  mobile: `@media screen and (max-width: ${breakpoints.xs})`,
  medium: `@media screen and (max-width: ${breakpoints.md})`,
  desktop: `@media screen and (min-width: ${breakpoints.md})`
}
