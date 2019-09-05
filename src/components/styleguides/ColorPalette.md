# Color Palette

Source code: https://github.com/x-team/xp-ui/blob/develop/src/styles/theme.js

The original hex values should be declared as constants and use names from http://chir.ag/projects/name-that-color/.

Ideally these hex constants should not be used directly applied on CSS. For CSS usage there are purposed categories where the constant names are defined by meaning.

## Purposed categories

This approach grants flexibility and makes easier to maintain the code in the long run. For instance, imagine the case that has an original shade of red, that red is then used for text, backgrounds and borders. After some time it's introduced a new shade of red and the developer is asked to replace all texts - or even more specific: all textual links on hover - with that new shade but the other places should keep using the original shade.

This happens and happended already. We could handled easily a batch find&replace using the meaninful constant names and confidently apply the changes.

See the categories bellow:


### Base

Used in CSS properties: `background`, `background-color`, `fill`, `shadow`, `box-shadow`

### Typography

Used in CSS properties: `color`

### Forms

Used in any CSS properties strictly on Form elements: `<form>`, `<input>`, `<textarea>`, `<label>`

### Lines

Used in CSS properties: `border`, `border-top`, `border-right`, `border-bottom`, `border-left`, `stroke`

### Icons

Used in SVG icons in the CSS properties: `stroke`, `fill`

### Miscelaneous

No clear definition. Having variables on this category indicates lack of organisation, it should be avoided.


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
