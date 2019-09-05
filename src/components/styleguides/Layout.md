# Layout

## How to Use

Example:

```jsx
import { breakpoints, mediaQueries } from '../../styles/theme'

const cmz = require('cmz')

const customMediaQueries = {
  small: `@media screen and (min-width: ${breakpoints.sm})`
}

const cx = {
  element: cmz(`
    & {
      display: none
    }

    ${customMediaQueries.small} {
      & {
        display: block
      }
    }

    ${mediaQueries.desktop} {
      & {
        display: inline
      }
    }
  `)
}

const Component = () => (
  <div className={cx.element}>
    Lorem ipsum dolor sit amet
  </div>
)

export Component
```



