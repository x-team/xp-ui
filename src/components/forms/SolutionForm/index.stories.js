import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SolutionForm from '.'

storiesOf('Form Components/SolutionForm', module)
  .add('with disabled button', () => <SolutionForm disableButton />)
  .add('max of 5 attempts allowed', () => <SolutionForm maxAttempts={5} />)
  .add('2 attempts are taken', () => <SolutionForm hasAttempted takenAttempts={2} />)
  .add('submitting is in progress', () => <SolutionForm isSubmitting />)
  .add('custom submit callback is passed', () => <SolutionForm onSubmit={action('Submitted!')} />)
  .add('missing props (does component explode?)', () => <SolutionForm />)
