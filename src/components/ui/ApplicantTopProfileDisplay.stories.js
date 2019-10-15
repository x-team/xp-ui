import React from 'react'
import { storiesOf } from '@storybook/react'

import ApplicantTopProfileDisplay from './ApplicantTopProfileDisplay'

storiesOf('UI Components|Applicants/ApplicantTopProfileDisplay', module)
  .add('basic usage', () => (
    <ApplicantTopProfileDisplay />
  ))

storiesOf('UI Components|Applicants/ApplicantTopProfileDisplay/Debug', module)
  .add('missing props (does component explode?)', () => (
    <ApplicantTopProfileDisplay />
  ))
