import React from 'react'
import { storiesOf } from '@storybook/react'

import RoadmapHero from './RoadmapHero'

storiesOf('UI Components|RoadmapHero', module)
  .add('basic usage', () => (
    <RoadmapHero
      heading={`Your roadmap to X${String.fromCharCode(8209)}Team`}
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
    />
  ))

  .add('with image url in props', () => (
    <RoadmapHero
      heading='Next Steps'
      content='Thanks for completing the challenge and telling us a bit about yourself. Next, you will soon receive an e-mail from an X-Team Ambassador who will help us determine if you are a good fit for X-Team.'
      imgUrl={require('../../assets/next-steps.png')}
    />
  ))

storiesOf('UI Components|RoadmapHero/Debug', module)
  .add('missing props (does component explode?)', () => <RoadmapHero />)
