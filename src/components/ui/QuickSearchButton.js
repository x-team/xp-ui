// @flow

import React from 'react'

import SvgIcon from './SvgIcon'

import theme from '../../styles/theme'

const cmz = require('cmz')

type Props = {
  onClick: () => void
};

const container = cmz(`
  & {
    height: 44px
    width: 44px
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    margin-left: auto
    margin-right: 10px

    background: ${theme.baseBrighter}
    border: 1px solid ${theme.lineSilver2}
    border-radius: 50%
  }

  & svg {
    display: block
  }
`)

const QuickSearchButton = ({ onClick }: Props) => (
  <div className={container} onClick={onClick} data-testid='xpui-quickSearchButton'>
    <SvgIcon color='grayscarpaflow' icon='magnifier' hover='default' />
  </div>
)

QuickSearchButton.defaultProps = {
  onClick: () => {}
}

export default QuickSearchButton
