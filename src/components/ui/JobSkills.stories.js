// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import faker from 'faker'

import JobSkills from './JobSkills'

const jobSkills = faker.random.words(faker.random.number(10)).split(' ').join(',')

storiesOf('Core Components|JobSkills', module)
  .add('basic usage', () => (
    <JobSkills
      skills={text('Skills', jobSkills)}
    />
  ))

  storiesOf('Core Components|JobSkills/Debug', module)
  .add('missing props', () => (
    <JobSkills />
  ))
