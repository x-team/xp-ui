// @flow

import React from 'react'

import Dropdown from './Dropdown'
import SelectBox from './SelectBox'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'
import type { Item } from './SelectBox'

const cmz = require('cmz')

const styles = {
  columnsDropdown: cmz(
    typo.formText,
    `
    & {
      background-color: ${theme.baseBright};
      border: 1px solid ${theme.lineSilver2};
      border-radius: 2px;
      padding-left: 10px;
      padding-right: 8px;
      margin-left: 22px;
    }

    & > :nth-child(2n) {
      top: calc(100% + 10px)
    }
  `
  )
}

type Props = {
  items?: Array<Item>,
  onSelect?: Function,
  width?: number,
  visibleItems?: number,
  label?: Element<*> | string
}

const ColumnsCustomizer = ({ items, onSelect, width, visibleItems, label }: Props) => {
  return (
    <Dropdown className={styles.columnsDropdown} targetXOrigin='right' label={label} indicator padded>
      <SelectBox
        items={items}
        hasSearch={false}
        size='small'
        expanded
        width={width}
        visibleItems={visibleItems}
        shouldSortItems={false}
        onSelect={onSelect}
      />
    </Dropdown>
  )
}

ColumnsCustomizer.defaultProps = {
  label: 'Columns',
  items: [],
  width: 250,
  visibleItems: 8
}

export default ColumnsCustomizer
