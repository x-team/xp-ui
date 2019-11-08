// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import JobApplicationCard from './JobApplicationCard'

storiesOf('UI Components|JobApplicationCard', module)
  .add('default', () => (
    <JobApplicationCard
      onApply={action('Applying for job...')}
    />
  ))

storiesOf('UI Components|JobApplicationCard/Use Cases', module)
  .add('contained in column - like it is in the job page layout', () => (
    <div style={{ width: '220px' }}>
      <JobApplicationCard
        isApplied
        onApply={action('Applying for job...')}
      />
    </div>
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
      applicationDate={new Date('Tue, 22 Oct 2019 20:35:15 GMT')}
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
      applicationDate={new Date('Tue, 22 Oct 2019 20:35:15 GMT')}
      onWithdraw={action('Withdrawing from job...')}
    />
  ))

storiesOf('UI Components|JobApplicationCard/Debug', module)
  .add('missing date', () => (
    <JobApplicationCard
      isApplied
      onWithdraw={action('Withdrawing from job...')}
    />
  ))
  .add('missing props', () => (
    <JobApplicationCard />
  ))
