import React from 'react'
import { storiesOf } from '@storybook/react'

import ProfileHeaderLinks from './ProfileHeaderLinks'

storiesOf('UI Components/ProfileHeaderLinks', module)
  .add('basic usage', () => (
    <ProfileHeaderLinks
      links={[
        { label: 'Link 1', hash: '#link1' },
        { label: 'Link 2', hash: '#link2' },
        {
          label: 'External Link',
          url: 'http://localhost:8000/'
        }
      ]}
    />
  ))

  .add('missing props (does component explode?)', () => <ProfileHeaderLinks />)
