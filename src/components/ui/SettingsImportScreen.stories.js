import React from 'react'
import { storiesOf } from '@storybook/react'

import SettingsImportScreen from './SettingsImportScreen'
import SelectBox from './SelectBox'

const ListSelector = ({ selected = false }) => (
  <SelectBox
    placeholder='Select a List'
    size='small'
    items={[
      { id: 1, value: 'Selected list', selected },
      { id: 2, value: 'Other list', selected: false },
      { id: 3, value: 'Another list', selected: false }
    ]}
  />
)

storiesOf('UI Components/SettingsImportScreen', module)
  .add('default initial view', () => (
    <SettingsImportScreen>
      <ListSelector />
    </SettingsImportScreen>
  ))
  .add('validated view containing invalid records', () => (
    <SettingsImportScreen
      status='VALIDATED'
      selectedList={{ id: 1, name: 'Selected list' }}
      validEmails={['email1@email.com', 'email2@email.com', 'email3@email.com']}
      invalidEmails={['not-an-email', '@this.is.invalid', '/\\!@#$%ˆ&*()_+-=;\'']}
      emailsList={`email1@email.com
email2@email.com
email3@email.com
not-an-email
@this.is.invalid
/\\!@#$%ˆ&*()_+-=;'`}
    >
      <ListSelector selected />
    </SettingsImportScreen>
  ))
  .add('validated view containing only valid records', () => (
    <SettingsImportScreen
      status='VALIDATED'
      selectedList={{ id: 1, name: 'Selected list' }}
      validEmails={['email1@email.com', 'email2@email.com', 'email3@email.com']}
      emailsList={`email1@email.com
email2@email.com
email3@email.com`}
    >
      <ListSelector selected />
    </SettingsImportScreen>
  ))
  .add('importing view', () => (
    <SettingsImportScreen
      status='IMPORTING'
      selectedList={{ id: 1, name: 'Selected list' }}
      validEmails={['email1@email.com', 'email2@email.com', 'email3@email.com']}
    >
      <ListSelector selected />
    </SettingsImportScreen>
  ))
  .add('imported view', () => (
    <SettingsImportScreen
      status='IMPORTED'
      selectedList={{ id: 1, name: 'Selected list' }}
      response={{
        validProfileEmails: ['email1@email.com', 'email2@email.com'],
        invalidProfileEmails: ['email3@email.com']
      }}
    >
      <ListSelector selected />
    </SettingsImportScreen>
  ))
  .add('imported view with server error', () => (
    <SettingsImportScreen
      status='IMPORTED'
      selectedList={{ id: 1, name: 'Selected list' }}
      error={'The server is down!'}
    >
      <ListSelector selected />
    </SettingsImportScreen>
  ))

storiesOf('UI Components/SettingsImportScreen/Debug', module)
  .add('missing props (does component explode?)', () => (
    <SettingsImportScreen />
  ))
