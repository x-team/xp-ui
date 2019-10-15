import React from 'react'
import { storiesOf } from '@storybook/react'

import MilestonesScreen from './MilestonesScreen'
import Button from './Button'
import Text from './Text'

storiesOf('UI Components/MilestonesScreen', module)
  .add('first step', () => (
    <MilestonesScreen
      cta={<Button>Go to the step 2</Button>}
    >
      <Text
        heading='First step'
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe illo error hic, nemo nostrum iusto recusandae repudiandae eum doloremque necessitatibus doloribus? Provident perferendis illo totam ipsum ut sapiente, assumenda quasi!'
      />
    </MilestonesScreen>
  ))
  .add('second step', () => (
    <MilestonesScreen
      cta={<Button>Go to the step 3</Button>}
    >
      <Text
        heading='First subsection'
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum numquam, beatae, distinctio fugiat eveniet harum, vel sint odit adipisci quos nam soluta pariatur, voluptatibus repudiandae hic mollitia ex iste rem.'
      />

      <Text
        heading='Second subsection'
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsa illum placeat aliquid recusandae odio minus quisquam, corporis, sed consequuntur optio fugit eaque rerum, nihil mollitia. Sequi ad nulla facere.'
      />
    </MilestonesScreen>
  ))
  .add('n-th step', () => (
    <MilestonesScreen
      cta={<Button>Go to the step N+1</Button>}
    >
      <Text
        heading='First subsection'
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At suscipit dicta aliquam sint libero minima officiis alias ducimus. Fugit praesentium itaque, iure molestias aut beatae odit facilis inventore doloremque eaque.'
      />

      <Text
        heading='Second subsection'
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque iusto quisquam, sed eius optio. Obcaecati, hic! Possimus sit magnam vero laboriosam obcaecati nostrum a molestiae amet aut. Corrupti, voluptas.'
      />

      <Text
        heading='Third subsection'
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minima aperiam dolorem natus repudiandae reprehenderit neque laudantium quasi voluptates architecto, ratione asperiores odio hic rerum alias dolores quo sint culpa!'
      />
    </MilestonesScreen>
  ))

storiesOf('UI Components/MilestonesScreen/Debug', module)
  .add('missing props (does component explode?)', () => <MilestonesScreen />)
