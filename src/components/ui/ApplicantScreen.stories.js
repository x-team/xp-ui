import React from 'react'
import { storiesOf } from '@storybook/react'

import Text from './Text'
import ApplicantScreen from './ApplicantScreen'
import MilestonesScreen from './MilestonesScreen'
import Button from './Button'

storiesOf('Screens and Layouts|ApplicantScreen', module)
  .add('standard use', () => (
    <ApplicantScreen>
      <Text
        content={`We’d love to start to get to know more about you. Please fill out these quick questions so we can introduce you to an Ambassador who will work with you 1-on-1 to get qualified to become an X-Teamer.`}
        isPureContent
      />
    </ApplicantScreen>
  ))

storiesOf('Screens and Layouts|ApplicantScreen/Use Cases', module)
  .add('with milestones', () => (
    <ApplicantScreen>
      <MilestonesScreen
        level={1}
        cta={<Button>Click here to go to next step</Button>}
      >
        <Text
          heading='So it begins.'
          content='Let’s kick things off with a warmup. To proceed, click the button below to download a short programming challenge. You can bookmark this page for later access.'
        />
      </MilestonesScreen>
    </ApplicantScreen>
  ))

storiesOf('Screens and Layouts|ApplicantScreen/Debug', module)
  .add('missing props (does component explode?)', () => (
    <ApplicantScreen />
  ))
