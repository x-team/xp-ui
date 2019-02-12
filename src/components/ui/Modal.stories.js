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

const Body = ({ children }) => (
  <div style={{ minHeight: '100vh', overflow: 'hidden' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      body { margin: 0; }
    ` }} />
    {children}
  </div>
)

storiesOf('UI Components/Modal', module)
  .add('basic modal', () => (
    <Body>
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
    </Body>
  ))
  .add('modal with content bigger than viewport', () => (
    <Body>
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
    </Body>
  ))
  .add('ListEditor use case', () => (
    <Body>
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
    </Body>
  ))
  .add('missing props (does component explode?)', () => (
    <Body>
      <Modal />
    </Body>
  ))
