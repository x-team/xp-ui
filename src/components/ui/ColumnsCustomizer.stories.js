import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ColumnsCustomizer from './ColumnsCustomizer'

storiesOf('UI Components/ColumnsCustomizer', module)
  .add('basic usage', () => {
    const itemsArray = [
      { id: 1, value: 'item-1', selected: true },
      { id: 2, value: 'item-2', selected: true },
      { id: 3, value: 'item-3', selected: true },
      { id: 4, value: 'item-4', selected: true },
      { id: 5, value: 'item-5', selected: true },
      { id: 6, value: 'item-6', selected: true }
    ]
    return (
      <div style={{ right: 0, position: 'absolute', top: 50 }}>
        <ColumnsCustomizer
          items={itemsArray}
          onSelect={action('onSelect')}
        />
      </div>
    )
  })

storiesOf('UI Components/ColumnsCustomizer/Debug', module)
  .add('missing props (does component explode?)', () => {
    return (
      <div style={{ right: 0, position: 'absolute', top: 50 }}>
        <ColumnsCustomizer />
      </div>
    )
  })
