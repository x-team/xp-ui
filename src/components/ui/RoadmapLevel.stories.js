import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import RoadmapLevel from './RoadmapLevel'

const bodyPlaceholder = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, fuga suscipit rem voluptatibus sunt sapiente. Molestiae aliquam at libero repellat, asperiores, recusandae, praesentium ratione officia molestias nobis temporibus ipsam, repudiandae!'

storiesOf('UI Components/RoadmapLevel', module)
  .add('basic usage', () => (
    <RoadmapLevel
      icon='head'
      heading='The challenge'
      level={1}
      body={bodyPlaceholder}
    />
  ))

  .add('active state', () => (
    <RoadmapLevel
      icon='webcam'
      heading='Take the stage'
      level={1}
      body={bodyPlaceholder}
      isActive
    />
  ))

  .add('centered state with CTA button', () => (
    <RoadmapLevel
      icon='message'
      heading='Time to show off'
      level={1}
      body={bodyPlaceholder}
      isCentered
      cta={{
        label: `Let's do this.`,
        handle: action('CTA clicked!')
      }}
    />
  ))

  .add('missing props (does component explode?)', () => <RoadmapLevel />)
