// flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import EmailFeed from './EmailFeed'

const currentData = new Date()

const getEmailObjectStructure = (index) => ({
  subject: `Welcomen Subject ${++index}`,
  from: `from${index}@x-team.com`,
  to: `to-${index}@x-team.com`,
  body: `Welcome to x-team ${index}`,
  lastSyncRefresh: new Date()
})

const emailsLarge = [...Array(14).keys()].map(getEmailObjectStructure)
const emailsSmall = [...Array(5).keys()].map(getEmailObjectStructure)
const emailsExtraSmall = [...Array(1).keys()].map(getEmailObjectStructure)

storiesOf('UI Components/EmailFeed', module)
  .add('initial expanded all', () => (
    <EmailFeed
      initialExpandedAll
      emails={emailsLarge}
      lastSyncRefresh={currentData} />
  ))
  .add('with refresh email action', () => (
    <EmailFeed
      emails={emailsLarge}
      onRefreshEmails={action('refresh emails action')}
      lastSyncRefresh={currentData}
    />
  ))
  .add('with refreshing state', () => (
    <EmailFeed
      isRefreshing
      emails={emailsLarge}
      lastSyncRefresh={currentData}
    />
  ))
  .add('with extra small list of emails', () => (
    <EmailFeed
      emails={emailsExtraSmall}
      lastSyncRefresh={currentData}
    />
  ))
  .add('with small list of emails', () => (
    <EmailFeed
      emails={emailsSmall}
      lastSyncRefresh={currentData
      } />
  ))
  .add('with large list of emails', () => (
    <EmailFeed
      emails={emailsLarge}
      lastSyncRefresh={currentData}
    />
  ))
  .add('with end button link', () => (
    <EmailFeed
      emails={emailsSmall}
      endButtonUrl='http://www.fayerwayer.com'
      lastSyncRefresh={currentData}
    />
  ))
  .add('with error message', () => (
    <EmailFeed
      errorMessage='Emails not <a href="testing">found</a>'
    />
  ))
  .add('parent element with fixed width at 300px', () => (
    <div style={{ width: '300px' }}>
      <EmailFeed
        emails={emailsLarge}
      />
    </div>
  ))
  .add('parent element with fixed width at 500px', () => (
    <div style={{ width: '500px' }}>
      <EmailFeed
        emails={emailsLarge}
      />
    </div>
  ))
  .add('parent element with fixed width at 700px', () => (
    <div style={{ width: '700px' }}>
      <EmailFeed
        emails={emailsLarge}
      />
    </div>
  ))
  .add('last sync refresh 5 minutes ago', () => {
    const lastSyncRefresh = new Date()
    lastSyncRefresh.setMinutes(lastSyncRefresh.getMinutes() - 5)
    return (
      <EmailFeed
        emails={emailsLarge}
        lastSyncRefresh={lastSyncRefresh}
      />
    )
  })
  .add('last sync refresh 3 hours ago', () => {
    const lastSyncRefresh = new Date()
    lastSyncRefresh.setHours(lastSyncRefresh.getHours() - 3)

    return (
      <EmailFeed
        emails={emailsLarge}
        lastSyncRefresh={lastSyncRefresh}
      />
    )
  })
  .add('last sync refresh 1 day ago', () => {
    const lastSyncRefresh = new Date()
    lastSyncRefresh.setDate(lastSyncRefresh.getDate() - 1)
    return (
      <EmailFeed
        emails={emailsLarge}
        lastSyncRefresh={lastSyncRefresh}
      />
    )
  })
  .add('last sync refresh 5 days ago', () => {
    const lastSyncRefresh = new Date()
    lastSyncRefresh.setDate(lastSyncRefresh.getDate() - 5)
    return (
      <EmailFeed
        emails={emailsLarge}
        lastSyncRefresh={lastSyncRefresh}
      />
    )
  })
  .add('missing props (does component explode?)', () => <EmailFeed />)
