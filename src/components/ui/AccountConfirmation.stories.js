// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import AccountConfirmation from './AccountConfirmation'
import Modal from './Modal'

const Body = ({ children }) => (
  <div style={{ minHeight: '100vh', overflow: 'hidden' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      body { margin: 0; }
    ` }} />
    {children}
  </div>
)

storiesOf('UI Components|AccountConfirmation', module)
  .add('basic usage', () => (
    <Body>
      <Modal theme='white'>
        <AccountConfirmation
          avatar='http://icons.iconarchive.com/icons/diversity-avatars/avatars/128/batman-icon.png'
          fullName='Monica Blacksmith'
          email='monica.blacksmith@example.com'
          onContinue={action('onContinue')}
          onSignOut={action('onSignOut')}
        />
      </Modal>
    </Body>
  ))

storiesOf('UI Components|AccountConfirmation/Debug', module)
  .add('avatar src is not passed in', () => (
    <AccountConfirmation
      fullName='Monica Blacksmith'
      email='monica.blacksmith@example.com'
      onContinue={action('onContinue')}
      onSignOut={action('onSignOut')}
    />
  ))

  .add('missing props', () => (
    <AccountConfirmation />
  ))
