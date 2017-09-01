import color from 'color'

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

  black:  [
    '#130e2e',
    '#272334',
  ],

  brand: '#f63a55',

  gray: [
    '#e0e0e0',
    '#e5e5e5',
    '#5a5665',
    '#efefef',
    '#8e8e8e',
  ],

   red: [
     '#ff5965',
     '#f63a55',
   ]

})

export const breakpoints = {
	xs: '480px',
	sm: '768px',
	md: '1024px',
	lg: '1280px',
	xl: '1440px'
}

// module.exports = {
//   fern: '#5CB85C',
//   haiti: '#130e2e',
//   manatee: '#938E9F',
// }

// app-background: #fff;
// brand-color: #f63a55;
// page-background: #fcfcfc;
// footer-background: #fcfcfc;

// success-color: #5cb85c;

// disabled-background: #eee;
// text-color: #333;
// inverted-text-color: #fff;

// title: $black;
// sub-title: $gray-1;
