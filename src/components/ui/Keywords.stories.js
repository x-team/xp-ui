import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Keywords from './Keywords'

storiesOf('UI Components/Keywords', module)
  .add('basic', () => (
    <Keywords
      values='a,simple,string,separated,by,commas,with,operators,and,or'
      onChange={action('onChange')}
      onSubmit={action('onSubmit')}
    />
  ))
  .add('missing props (does component explode?)', () => <Keywords />)
