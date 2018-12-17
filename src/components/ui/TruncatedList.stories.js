// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import TruncatedList from './TruncatedList'
import Button from './Button'
import XIcon from './XIcon'

storiesOf('UI Components/TruncatedList', module)
  .addParameters({
    info: {
      header: true,
      text: `
        TruncatedList is an invisible component that receives a list of anything
        and creates truncation effect on it.
        `
    }
  })
  .add(
    'show 4 visible `XIcon`s components of 13 total, with increments of 2, custom view more item, not inserted',
    () => {
      const items = Array(13).fill(<XIcon />)
      return (
        <TruncatedList
          items={items}
          visible={4}
          increment={2}
          viewMore={(amount, action) => (
            <Button
              rounded
              raised
              outlined
              color='silver'
              onClick={action}
            >
              {`+${amount} more of ${items.length}`}
            </Button>
          )}
        />
      )
    }
  )
  .add(
    'show 6 visible `XIcon`s components of 30 total, with increments of 6, with inserted custom view more item',
    () => {
      const items = Array(30).fill(<XIcon />)
      return (
        <TruncatedList
          items={items}
          visible={6}
          increment={6}
          inserted
          viewMore={(amount, action) => (
            <Button rounded raised outlined color='silver' onClick={action}>
              {`+${amount} more of ${items.length}`}
            </Button>
          )}
        />
      )
    }
  )
  .add(
    'show 5 visible `XIcon`s components of 6 total, but with custom show more item inserted in the first visible count',
    () => {
      const items = Array(6).fill(<XIcon />)
      return (
        <TruncatedList
          items={items}
          visible={5}
          inserted
          viewMore={(amount, action) => (
            <Button rounded raised outlined onClick={action}>
              {`+${amount} more of ${items.length}`}
            </Button>
          )}
        />
      )
    }
  )
  .add('show 5 visible `XIcon`s components of 4 total', () => {
    const items = Array(4).fill(<XIcon />)
    return <TruncatedList items={items} visible={5} />
  })
  .add('show 5 visible `XIcon`s components of 5 total', () => {
    const items = Array(5).fill(<XIcon />)
    return <TruncatedList items={items} visible={5} />
  })
  .add('show 5 visible `XIcon`s components of 6 total', () => {
    const items = Array(6).fill(<XIcon />)
    return <TruncatedList items={items} visible={5} />
  })
  .add('show 5 visible `XIcon`s components of 24 total', () => {
    const items = Array(24).fill(<XIcon />)
    return <TruncatedList items={items} visible={5} />
  })
  .add('show 8 visible numbers of 11 total', () =>
    (
      <TruncatedList items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} visible={8} />
    )
  )
  .add('show all items numbers of 11 total', () =>
    (
      <TruncatedList showAll items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} />
    )
  )
  .add('missing props (does component explode?)', () => <TruncatedList />)
