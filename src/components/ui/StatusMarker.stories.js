import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, radios } from '@storybook/addon-knobs'

import StatusMarker from './StatusMarker'

storiesOf('UI Components|StatusMarker', module)
  .add('basic usage (see knobs)', () => (
    <StatusMarker
      status={radios('Status', { Accepted: 'accepted', Excluded: 'excluded' }, 'accepted')}
      filled={boolean('Filled', true)}
      disabled={boolean('Disabled', false)}
    />
  ))

storiesOf('UI Components|StatusMarker/Debug', module)
  .add('missing props (does component explode?)', () => (
    <StatusMarker />
  ))
