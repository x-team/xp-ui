import React from 'react'
import { storiesOf } from '@storybook/react'

import ApplicantTopProfileDisplay from './ApplicantTopProfileDisplay'

const SampleElement = ({ children }) => (
  <div style={{ padding: '10px', border: '1px dotted red' }}>
    {children}
  </div>
)

storiesOf('UI Components|ApplicantTopProfileDisplay', module)
  .add('basic usage', () => (
    <ApplicantTopProfileDisplay
      videoPreview={<SampleElement>videoPreview</SampleElement>}
      addToList={<SampleElement>addToList</SampleElement>}
      fullName={<SampleElement>fullName</SampleElement>}
      applicantStatusSelector={<SampleElement>applicantStatusSelector</SampleElement>}
      baseImported={<SampleElement>baseImported</SampleElement>}
      activityHeaderBar={<SampleElement>activityHeaderBar</SampleElement>}
      sections={{
        something: {
          title: 'something title',
          label: 'something label',
          value: <SampleElement>something</SampleElement>
        },
        somethingelse: {
          title: 'something title',
          label: 'something label',
          value: <SampleElement>somethingelse</SampleElement>
        }
      }}
    />
  ))

storiesOf('UI Components|ApplicantTopProfileDisplay/Debug', module)
  .add('missing props', () => (
    <ApplicantTopProfileDisplay />
  ))
