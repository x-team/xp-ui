import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ListsEditor from './ListsEditor'

storiesOf('UI Components/ListsEditor', module)
  .add('basic', () => {
    const itemsArray = Array(18)
      .fill({})
      .map((item, i) => ({
        id: i + 1,
        value: `Sample item ${i + 1}`,
        archived: i > 12 && true
      }))

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ListsEditor
          collectionLabel='list'
          list={itemsArray}
          onEdit={action('onEdit')}
          onArchive={action('onArchive')}
          onDelete={action('onDelete')}
          onCreateNew={action('onCreateNew')}
        />
      </div>
    )
  })
  .add('missing props (does component explode?)', () => <ListsEditor />)
