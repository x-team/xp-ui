// @flow

import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'

import JobsPageProTipCard from './JobsPageProTipCard'

storiesOf('UI Components|JobsPageProTipCard', module)
  .add('basic usage', () => (
    <JobsPageProTipCard heading='How to Stand Out'>
      <span>
        To be selected for an interview among thousands of applicants, <a href='#'>ensure your LinkedIn profile is up-to-date</a>. It should clearly show your years of experience working on large scale projects relevant to the job you’re applying for. Remember to showcase the impact of your role on each team!
      </span>
    </JobsPageProTipCard>
  ))

storiesOf('UI Components|JobsPageProTipCard/Debug', module)
  .add('without heading', () => (
    <JobsPageProTipCard>
      {faker.lorem.paragraph()}
    </JobsPageProTipCard>
  ))
  .add('without children', () => (
    <JobsPageProTipCard heading={faker.name.jobTitle()} />
  ))
  .add('missing props', () => (
    <JobsPageProTipCard />
  ))
