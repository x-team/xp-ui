// flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import Email from './Email'

storiesOf('UI components/Email', module)
  .add('just now', () =>
    <Email
      subject='RE: oportunity'
      from='From: john@johnson.com'
      to='talent@x-team.com'
      createdAt={1547942400000}
      body='Body message'
    />
  )
  .add('initial open body', () =>
    <Email
      subject='RE: oportunity'
      from='From: john@johnson.com'
      to='talent@x-team.com'
      createdAt={1547942400000}
      body='Test body message 2 '
      initialOpen
    />
  )
  .add('missing props (does component explode?)', () => <Email />)
