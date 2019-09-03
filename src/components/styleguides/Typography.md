# Typography

## How to Use

Example:

```jsx
import typo, { typeface } from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  heading: cmz(
    typo.sectionHeading,
    `
      /* Other CSS properties here */
    `
  ),

  text: cmz(typeface.text)
}

const Component = () => (
  <article>
    <h1 className={cx.heading}>Lorem ipsum dolor sit amet</h1>
    <p className={cx.text}>Consectetur adipiscing elit.</p>
  </article>
)

export Component
```
