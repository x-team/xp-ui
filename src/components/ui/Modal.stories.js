import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Modal from './Modal'
import ListsEditor from './ListsEditor'

const itemsArray = Array(18).fill({}).map((item, i) => ({
  id: i + 1,
  value: `Sample item ${i + 1}`,
  archived: i > 12 && true
}))

storiesOf('UI Components/Modal', module)
  .add('basic modal', () => (
    <div style={{ position: 'relative', minHeight: '500px' }}>
      <Modal>
        <h1>Modal content goes here</h1>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      </Modal>
    </div>
  ))
  .add('modal with content bigger than viewport', () => (
    <div style={{ position: 'relative', minHeight: '300px' }}>
      <Modal>
        <h1>Modal content goes here</h1>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      </Modal>
    </div>
  ))
  .add('ListEditor use case', () => (
    <div style={{ position: 'relative', minHeight: '800px' }}>
      <Modal>
        <ListsEditor
          collectionLabel='List'
          title='Lists'
          list={itemsArray}
          onEdit={action('onEdit')}
          onArchive={action('onArchive')}
          onDelete={action('onDelete')}
          onCreateNew={action('onCreateNew')}
        />
      </Modal>
    </div>
  ))
  .add('missing props (does component explode?)', () => (
    <div style={{ position: 'relative', minHeight: '100px' }}>
      <Modal />
    </div>
  ))
