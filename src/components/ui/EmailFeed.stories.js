// flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, array, boolean } from '@storybook/addon-knobs'

import EmailFeed from './EmailFeed'

const currentData = new Date()

const emailsLarge = [...Array(33).keys()].map(x => ({
  subject: `Welcomen Subject ${++x}`,
  from: `from${x}@x-team.com`,
  to: `to-${x}@x-team.com`,
  body: `Welcome to x-team ${x}`,
  createdAt: new Date()
}))

const emailsSmall = [...Array(5).keys()].map(x => ({
  subject: `Welcomen Subject ${++x}`,
  from: `from${x}@x-team.com`,
  to: `to-${x}@x-team.com`,
  body: `Welcome to x-team ${x}`,
  createdAt: new Date()
}))

storiesOf('UI Components/EmailFeed', module)

  .add('initial expanded all', () => <EmailFeed initialExpandedAll emails={emailsLarge} lastSyncRefresh={new Date()} />)
  .add('with refresh email action', () => (
    <EmailFeed
      emails={emailsLarge}
      onRefreshEmails={action('refresh emails action')}
      lastSyncRefresh={new Date()}
    />
  ))
  .add('with refreshing state', () => <EmailFeed isRefreshing emails={emailsLarge} lastSyncRefresh={new Date()}/>)
  .add('with small list of emails', () => <EmailFeed emails={emailsSmall} lastSyncRefresh={new Date()}/>)

  .add('missing props (does component explode?)', () => <EmailFeed />)
