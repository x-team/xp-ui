// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import JobApplicationCard from './JobApplicationCard'

const onApply = action('Applying for job')
const onWithdraw = action('Withdrawing from job')
const yes = true

// storiesOf('UI Components|JobApplicationCard', module)
storiesOf('UI Components|JobApplicationCard', module)
  .add('basic usage', () => (
    <JobApplicationCard
      hasApplied={yes}
      onApply={onApply}
    />
  ))

storiesOf('UI Components|JobApplicationCard/States', module)
  .add('apply', () => (
    <JobApplicationCard
      hasApplied={false}
      onApply={onApply}
    />
  ))
  .add('withdraw', () => (
    <JobApplicationCard
      hasApplied={yes}
      applicationDate={new Date()}
      onWithdraw={onWithdraw}
    />
  ))

storiesOf('UI Components|JobApplicationCard/Debug', module)
  .add('missing date', () => (
    <JobApplicationCard
      hasApplied={yes}
      onWithdraw={onWithdraw}
    />
  ))
  .add('missing props (does component explode?)', () => (
    <JobApplicationCard />
  ))
