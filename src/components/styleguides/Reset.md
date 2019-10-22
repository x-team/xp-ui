# Reset

The isolation of styles works by reseting styles on a component level.

## How to Use

Example:

```jsx
import reset from '../../styles/reset'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(
    reset.admin,
    `
      /* Other CSS properties here */
    `
  )
}

const Component = () => (
  <article className={cx.wrapper}>
    <h1>Lorem ipsum dolor sit amet</h1>
    <p>Consectetur adipiscing elit.</p>
  </article>
)

export Component
```
