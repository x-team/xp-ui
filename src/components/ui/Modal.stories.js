import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import State from '../../utils/State'

import Modal from './Modal'
import ListsEditor from './ListsEditor'

const itemsArray = Array(18).fill({}).map((item, i) => ({
  id: i + 1,
  value: `Sample item ${i + 1}`,
  archived: i > 12 && true
}))

const sampleModalContent = [
  <h1 key='h1'>Modal content goes here</h1>,
  ...Array(5).fill('Anything goes in the modal content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)
]

const sampleModalContentTall = [
  <h1 key='h1'>Modal content goes here</h1>,
  ...Array(80).fill('Anything goes in the modal content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)
]

const sampleModalContentLong = [
  <h1 key='h1'>Modal content goes here</h1>,
  ...Array(5).fill('AnythinggoesinthemodalcontentbodyAnythinggoesinthemodalcontentbodyAnythinggoesinthemodalcontentbodyAnythinggoesinthemodalcontentbodyAnythinggoesinthemodalcontentbodyAnythinggoesinthemodalcontentbodyAnythinggoesinthemodalcontentbodyAnythinggoesinthemodalcontentbodyAnythinggoesinthemodalcontentbody').map((each, i) => <div key={`content-${i}`}>{each}</div>)
]

const sampleBackgroundContent = Array(40)
  .fill('Background content')
  .map((each, i) => <div key={`content-${i}`}>{each}</div>)

const Body = ({ children }) => (
  <div style={{ height: '100vh', overflow: 'auto' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      body { margin: 0; }
    ` }} />
    {children}
  </div>
)

const StoryModal = props => (
  <State initialState={{ isOpen: true }}>
    {({ setState, state }) => state.isOpen ? (
      <Modal
        onClose={() => setState({ isOpen: false })}
        {...props}
      />
    ) : null}
  </State>
)

storiesOf('Core Components|Modal', module)
  .add('basic usage', () => (
    <Body>
      <StoryModal>
        {sampleModalContent}
      </StoryModal>
    </Body>
  ))

storiesOf('Core Components|Modal/States', module)
  .add('default theme', () => (
    <Body>
      <StoryModal theme='default'>
        {sampleModalContent}
      </StoryModal>
      {sampleBackgroundContent}
    </Body>
  ))
  .add('white theme', () => (
    <Body>
      <StoryModal theme='white'>
        {sampleModalContent}
      </StoryModal>
      {sampleBackgroundContent}
    </Body>
  ))

storiesOf('Core Components|Modal/Use Cases', module)
  .add('with ListEditor', () => (
    <Body>
      <StoryModal>
        <ListsEditor
          collectionLabel='List'
          title='Lists'
          list={itemsArray}
          onEdit={action('onEdit')}
          onArchive={action('onArchive')}
          onDelete={action('onDelete')}
          onCreateNew={action('onCreateNew')}
        />
      </StoryModal>
    </Body>
  ))

storiesOf('Core Components|Modal/Debug', module)
  .add('missing onClose prop', () => (
    <Body>
      <Modal>
        {sampleModalContent}
      </Modal>
    </Body>
  ))
  .add('multiple modals', () => (
    <Body>
      <StoryModal>
        {sampleModalContent}
      </StoryModal>
      <StoryModal>
        {sampleModalContent}
      </StoryModal>
      <StoryModal>
        {sampleModalContent}
      </StoryModal>
    </Body>
  ))
  .add('modal with content taller than viewport', () => (
    <Body>
      <StoryModal>
        {sampleModalContentTall}
      </StoryModal>
    </Body>
  ))
  .add('modal with content longer than viewport', () => (
    <Body>
      <StoryModal>
        {sampleModalContentLong}
      </StoryModal>
    </Body>
  ))
  .add('modal with no content', () => (
    <Body>
      <StoryModal />
    </Body>
  ))
  .add('missing props', () => (
    <Modal />
  ))
