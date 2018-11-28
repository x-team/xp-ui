import React from 'react'
import { storiesOf } from '@storybook/react'

import RoadmapTimelineElement from './RoadmapTimelineElement'

storiesOf('UI Components/RoadmapTimelineElement', module)
  .add('basic usage', () => <RoadmapTimelineElement />)
  .add('active state', () => <RoadmapTimelineElement isDone />)
  .add('missing props (does component explode?)', () => <RoadmapTimelineElement />)
