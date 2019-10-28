# Reset

The style isolation works by reseting pure HTML elements styles from a component level.

## How to Use

Example:

```jsx
import '../../styles/reset'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(
    `
      /* CSS properties here */
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
