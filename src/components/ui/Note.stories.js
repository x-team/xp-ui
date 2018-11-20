
import React from 'react'
import { storiesOf } from '@storybook/react'

import Note from './Note'

storiesOf('UI Components/Note', module)
  .add('just now', () => {
    const noteDate = new Date()
    return (
      <Note
        avatar='https://pbs.twimg.com/profile_images/416334680598659072/-_RxK6dH_200x200.jpeg'
        date={noteDate}
        name='Samwise Gamgee'
        text={`One tiny **Hobbit** against all the evil the world could muster. A sane being would have given up, but Samwise burned with a magnificent madness, a *glowing* obsession to surmount every obstacle, to find [Frodo](http://google.com), destroy the Ring, and cleanse Middle Earth of its festering malignancy. He knew he would try again. Fail, perhaps. And try once more. A thousand, thousand times if need be, but he would not give up the quest.`}
      />
    )
  })

  .add('6 minutes ago', () => {
    const noteDate = new Date()
    noteDate.setMinutes(noteDate.getMinutes() - 6)
    return (
      <Note
        avatar='https://pbs.twimg.com/profile_images/416334680598659072/-_RxK6dH_200x200.jpeg'
        date={noteDate}
        name='Samwise Gamgee'
        text={`I feel like spring after winter, and sun on the leaves; and like trumpets and harps and all the songs I have ever heard!`}
      />
    )
  })

  .add('no avatar, 2 hours ago', () => {
    const noteDate = new Date()
    noteDate.setHours(noteDate.getHours() - 2)
    return (
      <Note
        date={noteDate}
        name='Samwise Gamgee'
        text={`Do you remember the Shire, Mr. Frodo? It'll be spring soon. And the orchards will be in blossom. And the birds will be nesting in the hazel thicket. And they'll be sowing the summer barley in the lower fields... and eating the first of the strawberries with cream. Do you remember the taste of strawberries?`}
      />
    )
  })

  .add('older than 1 day', () => {
    const noteDate = new Date()
    noteDate.setDate(noteDate.getDate() - 1)
    return (
      <Note
        avatar='https://pbs.twimg.com/profile_images/416334680598659072/-_RxK6dH_200x200.jpeg'
        date={noteDate}
        name='Samwise Gamgee'
        text={`There, peeping among the cloud-wrack above a dark tor high up in the mountains, Sam saw a white star twinkle for a while. The beauty of it smote his heart, as he looked up out of the forsaken land, and hope returned to him. For like a shaft, clear and cold, the thought pierced him that in the end the Shadow was only a small and passing thing: there was light and high beauty for ever beyond its reach.`}
      />
    )
  })

  .add('showing note type in sub header', () => {
    const noteDate = new Date()
    return (
      <Note
        noteType='interview'
        avatar='https://pbs.twimg.com/profile_images/416334680598659072/-_RxK6dH_200x200.jpeg'
        date={noteDate}
        showNoteType
        name='Samwise Gamgee'
        text={`Do you remember the Shire, Mr. Frodo? It'll be spring soon. And the orchards will be in blossom. And the birds will be nesting in the hazel thicket. And they'll be sowing the summer barley in the lower fields... and eating the first of the strawberries with cream. Do you remember the taste of strawberries?`}
      />
    )
  })

  .add('note with unparseable markdown text', () => <Note text='[one] [two]' />)

  .add('missing props (does component explode?)', () => <Note />)
