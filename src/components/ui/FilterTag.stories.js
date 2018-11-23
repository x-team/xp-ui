// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import FilterTag from './FilterTag'

storiesOf('UI Components/FilterTag', module).add('basic usage', () => (
  <FilterTag
    onClickRemove={action('onClickRemove')}
  >{`<= 2018-01-01`}</FilterTag>
))
