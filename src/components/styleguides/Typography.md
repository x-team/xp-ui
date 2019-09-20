# Typography

Ideally a typography set should be enough for a typographic element.

Margins and paddings, for instance, are acceptable to be modified because those type of styles depends and vary a lot based on context. But `font-weight`, `font-size`, `line-height` and other similar properties, whenever needed, it might indicate a problem in the design communication.

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
