import React from 'react'
import { storiesOf } from '@storybook/react'

import ApplicantProfileContentDisplay from './ApplicantProfileContentDisplay'

storiesOf('UI Components|ApplicantProfileContentDisplay', module)
  .add('basic usage', () => (
    <ApplicantProfileContentDisplay />
  ))

storiesOf('UI Components|ApplicantProfileContentDisplay/Debug', module)
  .add('missing props (does component explode?)', () => (
    <ApplicantProfileContentDisplay />
  ))
