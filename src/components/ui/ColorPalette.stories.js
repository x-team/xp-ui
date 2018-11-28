import React from 'react'
import { storiesOf } from '@storybook/react'

import ColorPalette from './ColorPalette'

storiesOf('UI Components/ColorPalette', module).add(
  'color variables for development reference',
  () => <ColorPalette />
)
