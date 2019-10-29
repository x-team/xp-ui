// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, radios } from '@storybook/addon-knobs'
import faker from 'faker'

import ApplicantScreenNotification from './ApplicantScreenNotification'

storiesOf('UI Components|ApplicantScreenNotification', module)
  .add('basic usage', () => {
    const typeOptions = {
      Success: 'success',
      Warning: 'warning',
      Error: 'error'
    }

    return (
      <ApplicantScreenNotification
        type={radios('Type', typeOptions, 'success')}
      >
        {text('Content', 'Hello this is a notification')}
      </ApplicantScreenNotification>
    )
  })

storiesOf('UI Components|ApplicantScreenNotification/States', module)
  .add('success', () => (
    <ApplicantScreenNotification
      type='success'
    >
      Hello this is a notification
    </ApplicantScreenNotification>
  ))
  .add('error', () => (
    <ApplicantScreenNotification
      type='error'
    >
      Hello this is a notification
    </ApplicantScreenNotification>
  ))
  .add('warning', () => (
    <ApplicantScreenNotification
      type='warning'
    >
      Hello this is a notification
    </ApplicantScreenNotification>
  ))

storiesOf('UI Components|ApplicantScreenNotification/Debug', module)
  .add('with HTML content', () => (
    <ApplicantScreenNotification>
      <span>Hello this is a <strong>notification</strong></span>
    </ApplicantScreenNotification>
  ))
  .add('with long content', () => (
    <ApplicantScreenNotification>
      {faker.lorem.paragraph()}
    </ApplicantScreenNotification>
  ))
  .add('missing props', () => (
    <ApplicantScreenNotification />
  ))
