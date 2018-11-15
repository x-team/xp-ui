import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Dropdown from './Dropdown'
import Loader from './Loader'
import SelectBox from './SelectBox'
import Button from './Button'

storiesOf('UI Components/Dropdown', module)
  .add('Labeled button', () => (
    <Dropdown icon='add' label='Add to List' indicator>
      <div style={{ background: '#e9e9e9' }}>
        <Dropdown label='Add to List'>
          <div style={{ background: '#c9c9c9' }}>
            <Dropdown
              icon='calendar'
              label='Add to List'
              targetXOrigin='right'
              indicator
              padded
            >
              <div style={{ background: '#b9b9b9' }}>
                <Loader />
              </div>
            </Dropdown>
          </div>
        </Dropdown>
      </div>
    </Dropdown>
  ))
  .add('Label and indicator positioned on the right', () => {
    const itemsArray = [
      { id: 1, value: 'item-1' },
      { id: 2, value: 'item-2' },
      { id: 3, value: 'item-3' },
      { id: 4, value: 'item-4' },
      { id: 5, value: 'item-5' },
      { id: 6, value: 'item-6' }
    ]
    return (
      <div style={{ textAlign: 'right' }}>
        <Dropdown label='Find something' targetXOrigin='right' padded indicator>
          <SelectBox
            items={itemsArray}
            expanded
            lined
            width={500}
            onClick={action('onClick')}
          />
        </Dropdown>
      </div>
    )
  })
  .add('Icon only button', () => (
    <Dropdown icon='hamburger' padded>
      <div style={{ background: '#e9e9e9' }}>
        <Loader />
      </div>
    </Dropdown>
  ))
  .add('SelectBox example', () => {
    const itemsArray = [
      { id: 2, value: 'registered', selected: true },
      { id: 3, value: 'portfolio-building', selected: true },
      { id: 4, value: 'portfolio-review', selected: true },
      { id: 5, value: 'social-media-screen', selected: true },
      { id: 6, value: 'react-shortlist', selected: false }
    ]
    return (
      <Dropdown icon='add' label='This is a Dropdown' indicator padded>
        <SelectBox
          collectionLabel='List'
          items={itemsArray}
          expanded
          width={300}
          visibleItems={3}
          onSelect={action('onSelect')}
        />
      </Dropdown>
    )
  })
  .add('SelectBox example using radio buttons', () => {
    const itemsArray = [
      { id: 2, value: 'registered', selected: true },
      { id: 3, value: 'portfolio-building', selected: false },
      { id: 4, value: 'portfolio-review', selected: false },
      { id: 5, value: 'social-media-screen', selected: false },
      { id: 6, value: 'react-shortlist', selected: false }
    ]
    return (
      <Dropdown label='registered' indicator padded>
        <SelectBox
          collectionLabel='List'
          inputType='radio'
          items={itemsArray}
          hasSearch={false}
          expanded
          lined
          width={300}
          visibleItems={4}
          onSelect={action('onSelect')}
        />
      </Dropdown>
    )
  })
  .add('Tooltip display', () => (
    <Dropdown tooltip label={<Button>x</Button>}>
      Anything here
    </Dropdown>
  ))
  .add('Close Dropdown from childre', () => {
    const CloseButton = ({ closeDropdown }) => (
      <h1 onClick={closeDropdown}>Click to close!</h1>
    )
    CloseButton.defaultProps = { closeDropdown: true }

    return (
      <Dropdown tooltip label={<h1>Click to open!</h1>}>
        <CloseButton />
      </Dropdown>
    )
  })
  .add('Missing props (does component explode?)', () => <Dropdown />)
