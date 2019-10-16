// @flow
/* global React$Node */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'
import faker from 'faker'

import JobCard from './JobCard'

export const JobCardLink = ({ children, ...props }: { children: React$Node }) => (
  <a onClick={action('This should be react-router/gasby Link')} {...props}>
    {children}
  </a>
)

storiesOf('UI Components/XP-Registration/JobCard', module)
  .add('default', () => (
    <JobCard
      applied={boolean('Applied', false)}
      name={text('Name', faker.random.words())}
      summary={text('Summary', faker.lorem.paragraph())}
      message={text('Message', faker.random.words())}
      link={JobCardLink}
      onApply={action('onApply')}
      onWithdraw={action('onWithdraw')}
    />
  ))

storiesOf('UI Components/XP-Registration/JobCard/Debug', module)
  .add('missing props (does component explode?)', () => (
    <JobCard />
  ))
