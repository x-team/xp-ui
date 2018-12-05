import React from 'react'
import { storiesOf } from '@storybook/react'

import ApplicantListFilter from './ApplicantListFilter'

storiesOf('Form Components/ApplicantListFilter', module)
  .add('basic usage', () => (
    <ApplicantListFilter
      accepted={10}
      excluded={40}
      handleCheck={() => true}
    />
  ))
  .add('missing props (does component explode?)', () => <ApplicantListFilter />)
