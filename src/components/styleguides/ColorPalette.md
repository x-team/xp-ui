# Color Palette

## How to Use

Example:

```jsx
import theme from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  element: cmz(`
    color: ${theme.typoSubheading}
    background: ${theme.baseGreen}
    border: ${theme.lineRed}
  `)
}

const Component = () => (
  <div className={cx.element}>
    Lorem ipsum dolor sit amet
  </div>
)

export Component
```


## Sets purposes

Treat color hex values as constants and use theme colors with purpose.

The color palette uses names from http://chir.ag/projects/name-that-color/.


### Base

Used in CSS properties: `background`, `background-color`, `fill`, `shadow`, `box-shadow`

### Typography

Used in CSS properties: `color`

### Forms

Used in any CSS properties but strictly for Form elements: `<input>`, `<textarea>`

### Lines

Used in CSS properties: `border`, `border-top`, `border-right`, `border-bottom`, `border-left`, `stroke`

### Icons

Used in CSS properties: `stroke`, `fill`

### Miscelaneous

No clear definition. Having variables on this category indicates lack of organisation.


