import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'

import SelectBox from './SelectBox'
import Button from './Button'
import SvgIcon from './SvgIcon'

const sizes = {
  Default: '',
  Small: 'small'
}

storiesOf('UI Components/SelectBox', module)
  .add('simple view for Add to List', () => {
    const itemsArray = [
      {
        id: 2,
        value: 'registered',
        selected: true
      },
      {
        id: 3,
        value: 'portfolio-building',
        selected: true
      },
      {
        id: 4,
        value: 'portfolio-review',
        selected: true
      },
      {
        id: 5,
        value: 'social-media-screen',
        selected: true
      },
      {
        id: 6,
        value: 'react-shortlist',
        selected: false
      }
    ]

    return (
      <SelectBox
        collectionLabel='list'
        lined
        items={itemsArray}
        width={300}
        visibleItems={3}
        onSelect={action('onSelect')}
        onCreateNew={action('onCreateNew')}
        size={select('Size', sizes, sizes.Default)}
      />
    )
  })
  .add('simple view for Search module with close dropdown on item click (default behavior)', () => {
    const itemsArray = [
      {
        id: 2,
        value: 'registered'
      },
      {
        id: 3,
        value: 'portfolio-building'
      },
      {
        id: 4,
        value: 'portfolio-review'
      },
      {
        id: 5,
        value: 'social-media-screen'
      },
      {
        id: 6,
        value: 'react-shortlist'
      }
    ]

    return (
      <SelectBox
        placeholder='Select Lists'
        collectionLabel='list'
        items={itemsArray}
        width={330}
        visibleItems={4}
        append={(
          <Button selectbox>
            <SvgIcon icon='edit' /> Edit Lists
          </Button>
        )}
        onClick={action('onClick')}
        size={select('Size', sizes, sizes.Default)}
      />
    )
  })
  .add('simple view for Search module without close dropdown on item click', () => {
    const itemsArray = [
      {
        id: 2,
        value: 'registered'
      },
      {
        id: 3,
        value: 'portfolio-building'
      },
      {
        id: 4,
        value: 'portfolio-review'
      },
      {
        id: 5,
        value: 'social-media-screen'
      },
      {
        id: 6,
        value: 'react-shortlist'
      }
    ]

    return (
      <SelectBox
        placeholder='Select Lists'
        collectionLabel='list'
        items={itemsArray}
        width={330}
        visibleItems={4}
        append={(
          <Button selectbox>
            <SvgIcon icon='edit' /> Edit Lists
          </Button>
        )}
        onClick={action('onClick')}
        closeDropdown={false}
        size={select('Size', sizes, sizes.Default)}
      />
    )
  })
  .add('simple view for Search module with close dropdown on item click and one selected', () => {
    const itemsArray = [
      {
        id: 2,
        value: 'registered'
      },
      {
        id: 3,
        value: 'portfolio-building',
        selected: true
      },
      {
        id: 4,
        value: 'portfolio-review'
      },
      {
        id: 5,
        value: 'social-media-screen'
      },
      {
        id: 6,
        value: 'react-shortlist'
      }
    ]

    return (
      <SelectBox
        placeholder='Select Lists'
        collectionLabel='list'
        items={itemsArray}
        width={330}
        visibleItems={4}
        append={(
          <Button selectbox>
            <SvgIcon icon='edit' /> Edit Lists
          </Button>
        )}
        onClick={action('onClick')}
        size={select('Size', sizes, sizes.Default)}
      />
    )
  })
  .add('simple view for Search module without close dropdown one selected', () => {
    const itemsArray = [
      {
        id: 2,
        value: 'registered',
        selected: true
      },
      {
        id: 3,
        value: 'portfolio-building'
      },
      {
        id: 4,
        value: 'portfolio-review'
      },
      {
        id: 5,
        value: 'social-media-screen'
      },
      {
        id: 6,
        value: 'react-shortlist'
      }
    ]

    return (
      <SelectBox
        placeholder='Select Lists'
        collectionLabel='list'
        items={itemsArray}
        width={330}
        visibleItems={4}
        append={(
          <Button selectbox>
            <SvgIcon icon='edit' /> Edit Lists
          </Button>
        )}
        onClick={action('onClick')}
        closeDropdown={false}
        size={select('Size', sizes, sizes.Default)}
      />
    )
  })
  .add('simple view, selectable with many selected', () => {
    const itemsArray = [
      {
        id: 2,
        value: 'registered',
        selected: true
      },
      {
        id: 3,
        value: 'portfolio-building',
        selected: true
      },
      {
        id: 4,
        value: 'portfolio-review',
        selected: true
      },
      {
        id: 5,
        value: 'social-media-screen',
        selected: true
      },
      {
        id: 6,
        value: 'react-shortlist',
        selected: true
      }
    ]

    return (
      <SelectBox
        placeholder='Select Lists'
        collectionLabel='list'
        items={itemsArray}
        width={330}
        visibleItems={4}
        append={(
          <Button selectbox>
            <SvgIcon icon='edit' /> Edit Lists
          </Button>
        )}
        onSelect={action('onSelect')}
        size={select('Size', sizes, sizes.Default)}
      />
    )
  })
  .add('complete view for Edit Lists', () => {
    const itemsArray = [
      {
        id: 2,
        value: 'registered'
      },
      {
        id: 3,
        value: 'portfolio-building'
      },
      {
        id: 4,
        value: 'portfolio-review'
      },
      {
        id: 5,
        value: 'social-media-screen'
      },
      {
        id: 6,
        value: 'react-shortlist'
      }
    ]

    return (
      <SelectBox
        collectionLabel='list'
        items={itemsArray}
        expanded
        onSelect={action('onSelect')}
        onEdit={action('onEdit')}
        onArchive={action('onArchive')}
        onDelete={action('onDelete')}
        onCreateNew={action('onCreateNew')}
        size={select('Size', sizes, sizes.Default)}
      />
    )
  })
  .add('example without auto-focus on search field', () => <SelectBox autoFocus={false} size={select('Size', sizes, sizes.Default)} />)
  .add('example of all items states', () => {
    const itemsArray = [
      {
        id: 2,
        value: 'unselected'
      },
      {
        id: 3,
        value: 'selected',
        selected: true
      },
      {
        id: 4,
        value: '(un)selecting',
        status: 'selecting'
      },
      {
        id: 5,
        value: 'editing (no changes yet)',
        editing: 'editing (no changes yet)',
        status: 'editing'
      },
      {
        id: 6,
        value: 'editing',
        editing: 'editing (this is changed but not yet saved)',
        status: 'editing'
      },
      {
        id: 7,
        value: 'saving edition',
        status: 'saving'
      },
      {
        id: 8,
        value: 'edited',
        status: 'edited'
      },
      {
        id: 9,
        value: 'creating this',
        status: 'creating'
      },
      {
        id: 10,
        value: 'created',
        status: 'created'
      },
      {
        id: 11,
        value: 'confirm delete',
        status: 'confirm'
      },
      {
        id: 12,
        value: 'deleting',
        status: 'deleting'
      },
      {
        id: 13,
        value: 'deleted',
        status: 'deleted'
      },
      {
        id: 14,
        value: 'dismissed',
        status: 'dismissed'
      },
      {
        id: 15,
        value: 'archiving',
        status: 'archiving'
      },
      {
        id: 16,
        value: 'archived',
        status: 'archived'
      },
      {
        id: 17,
        value: 'unarchiving',
        status: 'unarchiving'
      },
      {
        id: 18,
        value: 'unarchived',
        status: 'unarchived'
      }
    ]

    return (
      <div>
        <SelectBox
          collectionLabel='stuff'
          items={itemsArray}
          lined
          expanded
          onSelect={action('onSelect')}
          onEdit={action('onEdit')}
          onArchive={action('onArchive')}
          onDelete={action('onDelete')}
          onCreateNew={action('onCreateNew')}
          dismissTimeout={99999}
          size={select('Size', sizes, sizes.Default)}
        />

        <hr />

        <p>All states but missing all methods (the strings showcased below are the 'item.value')</p>
        <SelectBox
          collectionLabel='stuff'
          items={itemsArray}
          lined
          expanded
          size={select('Size', sizes, sizes.Default)}
        />
      </div>
    )
  })
  .add('"searching" and "creating" use cases', () => (
    <div>
      <p>Empty list and no search provided. The "create new" button should be hidden:</p>
      <SelectBox
        collectionLabel='entry'
        expanded
        onCreateNew={action('onCreateNew')}
        size={select('Size', sizes, sizes.Default)}
      />

      <p>Empty list and search is provided. Nothing is found on search. The "create new" button should should be visible:</p>
      <SelectBox
        collectionLabel='entry'
        search='wat?'
        expanded
        onCreateNew={action('onCreateNew')}
        size={select('Size', sizes, sizes.Default)}
      />

      <p>Valid list and search is provided. Nothing is found on search. The "create new" button should be visible:</p>
      <SelectBox
        collectionLabel='entry'
        search='wat?'
        items={[
          { id: 1, value: 'entry' },
          { id: 2, value: 'entry another entry' },
          { id: 3, value: 'justtoentrymakesure' }
        ]}
        expanded
        onCreateNew={action('onCreateNew')}
        size={select('Size', sizes, sizes.Default)}
      />

      <p>Valid list and search is provided. Some results are found on search, but none of them matches exactly with search string. The "create new" button should be visible:</p>
      <SelectBox
        collectionLabel='entry'
        search='ent'
        items={[
          { id: 1, value: 'entry' },
          { id: 2, value: 'entry another entry' },
          { id: 3, value: 'justtoentrymakesure' }
        ]}
        expanded
        onCreateNew={action('onCreateNew')}
        size={select('Size', sizes, sizes.Default)}
      />

      <p>Valid list and search is provided. One result is found on search, but don't match exactly with the search string. The "create new" button should be visible:</p>
      <SelectBox
        collectionLabel='entry'
        search='another'
        items={[
          { id: 1, value: 'entry' },
          { id: 2, value: 'entry another entry' },
          { id: 3, value: 'justtoentrymakesure' }
        ]}
        expanded
        onCreateNew={action('onCreateNew')}
        size={select('Size', sizes, sizes.Default)}
      />

      <p>Valid list and search is provided. At least one of the items in the search result matches exactly with search string. The "create new" button should be hidden:</p>
      <SelectBox
        collectionLabel='entry'
        search='entry'
        items={[
          { id: 1, value: 'entry' },
          { id: 2, value: 'entry another entry' },
          { id: 3, value: 'justtoentrymakesure' }
        ]}
        expanded
        onCreateNew={action('onCreateNew')}
        size={select('Size', sizes, sizes.Default)}
      />

      <p>A new item is being created right after something was searched. The "create new" button should be hidden:</p>
      <SelectBox
        collectionLabel='entry'
        search='entr'
        items={[
          { id: 1, value: 'entry' },
          { id: 2, value: 'entry another entry' },
          { id: 3, value: 'justtoentrymakesure' },
          { id: 4, value: 'entr', status: 'creating' }
        ]}
        expanded
        onCreateNew={action('onCreateNew')}
        size={select('Size', sizes, sizes.Default)}
      />

      <p>A new item is being created while nothing is being searched. The "create new" button should be hidden:</p>
      <SelectBox
        collectionLabel='entry'
        items={[
          { id: 1, value: 'entry' },
          { id: 2, value: 'entry another entry' },
          { id: 3, value: 'justtoentrymakesure' },
          { id: 4, value: 'entr', status: 'creating' }
        ]}
        expanded
        onCreateNew={action('onCreateNew')}
        size={select('Size', sizes, sizes.Default)}
      />

      <p>In all searching and creating situations. If the method "onCreateNew" is forgotten or invalid, the "create new" button will be always hidden and items with "creating" status will have fallback to default render:</p>
      <SelectBox
        collectionLabel='entry'
        search='ent'
        items={[
          { id: 1, value: 'entry' },
          { id: 2, value: 'entry another entry' },
          { id: 3, value: 'justtoentrymakesure' },
          { id: 4, value: 'entr', status: 'creating' }
        ]}
        expanded
        size={select('Size', sizes, sizes.Default)}
      />
    </div>
  ))
  .add('"hasSearch", "expanded" and "placeholder" props use cases', () => {
    const itemsArray = [
      { id: 1, value: 'entry' },
      { id: 2, value: 'entry another entry' },
      { id: 3, value: 'justtoentrymakesure' },
      { id: 4, value: 'entr', status: 'creating' }
    ]

    const casesMatrix = [
      [false, true],
      [false, true, 'Custom placeholder'],
      [false, false],
      [false, false, 'Custom placeholder'],
      [true, true],
      [true, true, 'Custom placeholder'],
      [true, false],
      [true, false, 'Custom placeholder']
    ]

    return (
      <div>
        {casesMatrix.map(i => (
          <div key={i}>
            <h3>
              hasSearch: {i[0].toString()}
              <br />
              expanded: {i[1].toString()}
              <br />
              placeholder: {(i[2] && i[2].toString()) || '<undefined>'}
            </h3>
            <SelectBox
              items={itemsArray}
              hasSearch={i[0]}
              expanded={i[1]}
              placeholder={i[2]}
              size={select('Size', sizes, sizes.Default)}
            />
          </div>
        ))}
      </div>
    )
  })
  .add('fixed height', () => (
    <SelectBox
      expanded
      visibleItems={4}
      size={select('Size', sizes, sizes.Default)}
    />
  ))
  .add('width variations', () => {
    const longString = 'super long entry just for testing purpose I dont think anyone should use such a long text in here but just in case let see how it looks'
    const longStringWithoutSpaces = longString.replace(/\s/g,'')
    const sampleListLongContents = [
      { id: 1, value: longString },
      { id: 2, value: longStringWithoutSpaces }
    ]
    const sampleListShortContents = [
      { id: 1, value: 'yo!' },
      { id: 2, value: 'hey' },
      { id: 3, value: 'ho!' }
    ]
    const sampleListWithAllStatesAndLongContents = [
      { id: 2, value: longStringWithoutSpaces },
      { id: 3, value: longStringWithoutSpaces, selected: true },
      { id: 4, value: longStringWithoutSpaces, status: 'selecting' },
      { id: 5, value: `${longStringWithoutSpaces} (no changes yet)`, editing: `${longStringWithoutSpaces} (no changes yet)`, status: 'editing' },
      { id: 6, value: longStringWithoutSpaces, editing: `${longStringWithoutSpaces} (this is changed but not yet saved)`, status: 'editing' },
      { id: 7, value: longStringWithoutSpaces, status: 'saving' },
      { id: 8, value: longStringWithoutSpaces, status: 'edited' },
      { id: 9, value: longStringWithoutSpaces, status: 'creating' },
      { id: 10, value: longStringWithoutSpaces, status: 'created' },
      { id: 11, value: longStringWithoutSpaces, status: 'confirm' },
      { id: 12, value: longStringWithoutSpaces, status: 'deleting' },
      { id: 13, value: longStringWithoutSpaces, status: 'deleted' },
      { id: 14, value: longStringWithoutSpaces, status: 'dismissed' },
      { id: 15, value: longStringWithoutSpaces, status: 'archiving' },
      { id: 16, value: longStringWithoutSpaces, status: 'archived' },
      { id: 17, value: longStringWithoutSpaces, status: 'unarchiving' },
      { id: 18, value: longStringWithoutSpaces, status: 'unarchived' }
    ]
    return (
      <div>
        <p>With <b>long</b> content<br />Width = <b>undefined</b> (default to 100%)</p>
        <SelectBox
          items={sampleListLongContents}
          expanded
        />
        <p>With <b>short</b> content<br />Width = <b>undefined</b> (default to 100%)</p>
        <SelectBox
          items={sampleListShortContents}
          expanded
        />
        <p>With <b>long</b> content<br />Width = <b>250</b></p>
        <SelectBox
          items={sampleListLongContents}
          width={250}
          expanded
        />
        <p>With <b>short</b> content<br />Width = <b>250</b></p>
        <SelectBox
          items={sampleListShortContents}
          width={250}
          expanded
        />
        <p>With <b>long</b> content at all possible items statuses<br />Width = <b>400</b></p>
        <SelectBox
          items={sampleListWithAllStatesAndLongContents}
          width={500}
          expanded
          onSelect={action('onSelect')}
          onEdit={action('onEdit')}
          onArchive={action('onArchive')}
          onDelete={action('onDelete')}
          onCreateNew={action('onCreateNew')}
          dismissTimeout={99999}
        />
        <p>Creating <b>long</b> content<br />Width = <b>400</b></p>
        <SelectBox
          items={sampleListWithAllStatesAndLongContents}
          search='asuperlongentryjustfortestingpurposeIdontthinkanyoneshouldusesuchalongtextinherebutjustincaseletseehowitlooks'
          width={500}
          expanded
          onCreateNew={action('onCreateNew')}
          dismissTimeout={99999}
        />
      </div>
    )
  })
  .add('missing props (does component explode?)', () => <SelectBox />)
