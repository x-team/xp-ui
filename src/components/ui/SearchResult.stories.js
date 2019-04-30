// flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import SearchResult from './SearchResult'

storiesOf('UI Components/SearchResult', module)
  .add('default usage', () => (
    <SearchResult
    />
  ))

storiesOf('UI Components/SearchResult/Debug', module)
  .add('missing props (does component explode?)', () => (
    <SearchResult />
  ))
