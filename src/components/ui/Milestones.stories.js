import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Milestones from './Milestones'

storiesOf('UI Components/Milestones', module)
  .add('basic usage', () => (
    <Milestones
      level={1}
      levels={[
        {
          label: 'Webcam',
          icon: 'webcam'
        },
        {
          label: 'Message',
          icon: 'message'
        },
        {
          label: 'Head',
          icon: 'head'
        },
        {
          label: 'Diamond',
          icon: 'diamond'
        }
      ]}
    />
  ))

  .add('with click handlers', () => (
    <Milestones
      level={1}
      levels={[
        {
          label: 'Webcam',
          icon: 'webcam',
          handleClick: action('webcam clicked')
        },
        {
          label: 'Message',
          icon: 'message',
          handleClick: action('message clicked')
        },
        {
          label: 'Head',
          icon: 'head',
          handleClick: action('head clicked')
        },
        {
          label: 'Diamond',
          icon: 'diamond',
          handleClick: action('diamond clicked')
        }
      ]}
    />
  ))

  .add('missing label prop', () => (
    <Milestones
      level={1}
      levels={[
        {
          label: '',
          icon: 'webcam'
        },
        {
          label: '',
          icon: 'message'
        },
        {
          label: '',
          icon: 'head'
        },
        {
          label: '',
          icon: 'diamond'
        }
      ]}
    />
  ))

  .add('second step is in progress', () => (
    <Milestones
      level={2}
      levels={[
        {
          label: '',
          icon: 'webcam'
        },
        {
          label: '',
          icon: 'message'
        },
        {
          label: '',
          icon: 'head'
        },
        {
          label: '',
          icon: 'diamond'
        }
      ]}
    />
  ))

  .add('last step is in progress', () => (
    <Milestones
      level={4}
      levels={[
        {
          label: '',
          icon: 'webcam'
        },
        {
          label: '',
          icon: 'message'
        },
        {
          label: '',
          icon: 'head'
        },
        {
          label: '',
          icon: 'diamond'
        }
      ]}
    />
  ))

  .add('missing props (does component explode?)', () => <Milestones />)
