// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import ResultCount from './ResultCount'

storiesOf('Core Components|ResultCount', module)
  .add('basic usage', () => (<ResultCount items={15} />))

storiesOf('Core Components|ResultCount/Debug', module)
  .add('missing props (does component explode?)', () => (<ResultCount />))
  .add('usage with single item result', () => (<ResultCount items={1} />))
