// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import JobApplicationCard from './JobApplicationCard'

storiesOf('UI Components|JobApplicationCard', module)
  .add('basic usage', () => (
    <JobApplicationCard
      hasApplied
      onApply={action('Applying for job...')}
    />
  ))

storiesOf('UI Components|JobApplicationCard/States', module)
  .add('apply', () => (
    <JobApplicationCard
      hasApplied={false}
      onApply={action('Applying for job...')}
    />
  ))
  .add('withdraw', () => (
    <JobApplicationCard
      hasApplied
      applicationDate={new Date('Tue, 22 Oct 2019 20:35:15 GMT')}
      onWithdraw={action('Withdrawing from job...')}
    />
  ))

storiesOf('UI Components|JobApplicationCard/Debug', module)
  .add('missing date', () => (
    <JobApplicationCard
      hasApplied
      onWithdraw={action('Withdrawing from job...')}
    />
  ))
  .add('missing props', () => (
    <JobApplicationCard />
  ))
