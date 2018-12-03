import React from 'react'
import { storiesOf } from '@storybook/react'

import IssueCollectorButton from './IssueCollectorButton'

storiesOf('UI Components/IssueCollectorButton', module)
  .add('basic usage', () => (
    <IssueCollectorButton>?</IssueCollectorButton>
  ))
  .add('no props', () => (
    <IssueCollectorButton />
  ))
