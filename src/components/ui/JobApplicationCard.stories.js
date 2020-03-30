// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import JobApplicationCard from './JobApplicationCard'

const messageSample = (
  <span>You applied for this position on March 27th. <b>We will reach out soon via email to talk about next steps.</b></span>
)

storiesOf('UI Components|JobApplicationCard', module)
  .add('basic usage', () => (
    <JobApplicationCard
      onApply={action('Applying for job...')}
    />
  ))

storiesOf('UI Components|JobApplicationCard/States', module)
  .add('apply', () => (
    <JobApplicationCard
      isApplied={false}
      onApply={action('Applying for job...')}
    />
  ))
  .add('withdraw', () => (
    <JobApplicationCard
      isApplied
      message={messageSample}
      onWithdraw={action('Withdrawing from job...')}
    />
  ))
  .add('apply + is saving', () => (
    <JobApplicationCard
      isApplied={false}
      isSaving
      onApply={action('Applying for job...')}
    />
  ))
  .add('withdraw + is saving', () => (
    <JobApplicationCard
      isApplied
      isSaving
      message={messageSample}
      onWithdraw={action('Withdrawing from job...')}
    />
  ))

storiesOf('UI Components|JobApplicationCard/Debug', module)
  .add('missing props', () => (
    <JobApplicationCard />
  ))
