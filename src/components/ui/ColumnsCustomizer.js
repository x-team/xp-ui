// @flow

import React, { PureComponent } from 'react';

import Dropdown from './Dropdown';
import SelectBox from './SelectBox';

import theme from '../../styles/theme';
import typo from '../../styles/typo';

import type { Element } from 'react';

const cmz = require('cmz');

const styles = {
  columnsDropdown: cmz(
    typo.formText,
    `
    & { 
      background-color: ${theme.baseBright};
      border: 1px solid ${theme.lineSilver2};
      color: ${theme.typoHighlightOnDarkBackground};
      font-weight: normal;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: subpixel-antialiased;
      border-radius: 2px;
      padding-left: 10px;
      padding-right: 8px;
      width: 110px;
    }

    & > :nth-child(2n) {
      right: 140px;
      top: 45px;
    }
  `
  ),
};

type Props = {
  items?: Array<Item>,
  onSelect?: Function,
  width?: number,
  visibleItems?: number,
  label?: Element<*> | string
};

class ColumnsCustomizer extends PureComponent<Props, State> {
  static defaultProps = {
    label: '',
    items: []
  };

  render() {
    const {
      items,
      onSelect,
      width,
      visibleItems,
      label
    } = this.props;

    return (
      <Dropdown className={styles.columnsDropdown} label={label} indicator padded>
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
    );
  }
}

export default ColumnsCustomizer;