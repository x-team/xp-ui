// @flow

import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'

import ProTipCard from './ProTipCard'

storiesOf('UI Components|ProTipCard', module)
  .add('basic usage', () => (
    <ProTipCard heading='How to Stand Out'>
      <span>
        To be selected for an interview among thousands of applicants,{' '}
        <a href='/experience'>
          ensure your profile is up-to-date
        </a>
        . It should clearly show your years of experience working on large scale
        projects relevant to the job you’re applying for. Remember to showcase the
        impact of your role on each team!
      </span>
    </ProTipCard>
  ))

storiesOf('UI Components|ProTipCard/Debug', module)
  .add('without heading', () => (
    <ProTipCard>
      {faker.lorem.paragraph()}
    </ProTipCard>
  ))
  .add('without children', () => (
    <ProTipCard heading={faker.name.jobTitle()} />
  ))
  .add('missing props', () => (
    <ProTipCard />
  ))
