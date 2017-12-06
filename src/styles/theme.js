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
  white: '#fff',
  haiti: '#130e2e',
  fern: '#5cb85c',
  radicalRed: '#f63a54',
  alto: '#D8D8D8',
  tuna: '#34323B',
  scarpaFlow: '#5A5665',
  manatee: '#918CA0',
  athensCray: '#F0F1F4',
  athensCrayAlt: '#E6E6ED',
  mercury: '#E4E4E4',
  porcelain: '#E9EDEE'
}

export default wrap({
  baseBrighter: palette.white,
  baseDarker: palette.haiti,
  baseRed: palette.radicalRed,
  baseGreen: palette.fern,
  baseSilver: palette.alto,

  typoHeading: palette.tuna,
  typoSubheading: palette.radicalRed,
  typoParagraph: palette.scarpaFlow,
  typeHighlight: palette.haiti,

  formPlaceholder: palette.alto,
  formText: palette.manatee,
  formBorder: palette.athensCrayAlt,

  lineRed: palette.radicalRed,
  // roadmap timeline circle
  // rodamap level border
  lineSilver1: palette.mercury,
  // milestones circle and line
  // horizontal ruler
  lineSilver2: palette.porcelain,
  // roadmap timeline line
  lineSilver3: palette.athensCray,
  // collapsible section divisors
  lineSilver4: palette.athensCrayAlt,

  iconRed: palette.radicalRed,
  iconBright: palette.white,
  iconDark: palette.tuna
})

export const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
  xl: '1440px'
}
