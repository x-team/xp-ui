import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Roadmap from './Roadmap'
import RoadmapLevel from './RoadmapLevel'

const bodyPlaceholder = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, fuga suscipit rem voluptatibus sunt sapiente. Molestiae aliquam at libero repellat, asperiores, recusandae, praesentium ratione officia molestias nobis temporibus ipsam, repudiandae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, fuga suscipit rem voluptatibus sunt sapiente. Molestiae aliquam at libero repellat, asperiores, recusandae, praesentium ratione officia molestias nobis temporibus ipsam, repudiandae!'

storiesOf('UI Components/Roadmap', module)
  .add('basic usage', () => (
    <Roadmap>
      <RoadmapLevel
        icon='head'
        heading='The challenge'
        level={1}
        body={bodyPlaceholder}
        isActive
      />

      <RoadmapLevel
        icon='webcam'
        heading='Take the stage'
        level={2}
        body={bodyPlaceholder}
      />

      <RoadmapLevel
        icon='message'
        heading='Time to show off'
        level={3}
        body={bodyPlaceholder}
      />

      <RoadmapLevel
        icon='terminal'
        heading='Show us the code!'
        level={4}
        body={bodyPlaceholder}
      />

      <RoadmapLevel
        icon='diamond'
        heading='Being shortlisted'
        level={5}
        body={bodyPlaceholder}
      />

      <RoadmapLevel
        icon='talking'
        heading='Partner match-up and interviews'
        level={6}
        body={bodyPlaceholder}
      />

      <RoadmapLevel
        icon='trophy'
        heading="Final level: you're in."
        level={7}
        body={bodyPlaceholder}
        isCentered
        cta={{
          label: `Let's do this.`,
          handle: action('You made it 🎉!!!')
        }}
      />
    </Roadmap>
  ))

  .add('missing props (does component explode?)', () => <Roadmap />)
