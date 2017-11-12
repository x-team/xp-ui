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

export default wrap({
  white: '#FFF',

  offwhite: '#f3f2f7',

  black: '#130e2e',
  blackHighlight: '#272334',

  grayBorder: '#938e9f',
  lightGrayBorder: '#e0e0e0',

  red: '#ff5965',
  redHighlight: '#f63a55',

  defaultBorder: '#f63954',
  lightBorder: '#eee',
  invertedBorder: '#fff',
  monochromeBorder: '#231f20'
})

export const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
  xl: '1440px'
}
