// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import ResultCount from './ResultCount'

storiesOf('UI Components/ResultCount', module)
  .add('basic usage', () => (<ResultCount items={15} />))
  .add('usage with array', () => (<ResultCount items={[1, 2, 10, 13]} />))
  .add('usage with single item result', () => (<ResultCount items={1} />))
  .add('missing props (does component explode?)', () => (<ResultCount />))
