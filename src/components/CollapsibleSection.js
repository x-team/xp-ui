// @flow

import { PureComponent } from 'react'
import { compose, withState, onlyUpdateForKeys } from 'recompose'
import theme from '../styles/theme'
import * as typo from '../styles/typo'
import elem from '../utils/elem'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  title?: string,
  isTwoColumns?: boolean,
  toggleVisible?: boolean,
  isCollapsed?: boolean,
  handleToggleCollapse: Function,
  visible?: Element<*>|string,
  children?: Element<*>|string,
}

const cx = {
  twoColSection: cmz('display: flex'),

  clickable: cmz('cursor: pointer'),

  arrow: cmz(`
    &::before {
      content: ''
      position: absolute
      right: 1rem
      top: 2rem
      width: 0
      height: 0
      border-style: solid
    }
  `),

  arrowDown: cmz(`
    &::before {
      border-width: 0 5px 5px 5px
      border-color: transparent transparent silver transparent
    }
  `),

  arrowUp: cmz(`
    &::before {
      border-width: 5px 5px 0 5px
      border-color: silver transparent transparent transparent
    }
  `)
}

const Root = elem.section(cmz(
  typo.family.base, `
  margin: 0
  padding: 2rem 1rem
  font-size: 1rem
  border-top: 1px solid ${theme.lightGrayBorder}
  position: relative
`))

const Header = elem.h1(cmz(
  typo.family.smallHeading,
  cx.arrow,
  cx.clickable, `
  & {
    letter-spacing: normal
    text-transform: initial
  }

  .${cx.twoColSection} & {
    width: 200px
  }

  &:hover {
    color: ${theme.blackHighlight}
  }

  &:hover::before {
    transform: translateY(-1px)
  }

  .${cx.clickable}:hover &::before {
    transform: translateY(1px)
  }
`))

const Content = elem.div(cmz(`
  .${cx.twoColSection} & {
    width: calc(100% - 200px)
  }

  & > :first-child {
    margin-top: 0
  }
`))

class CollapsibleSection extends PureComponent<Props> {
  static defaultProps = {
    title: '',
    isTwoColumns: false,
    toggleVisible: false,
    isCollapsed: true,
    handleToggleCollapse: () => {},
    visible: null,
    children: null
  }

  render () {
    const {
      title,
      isTwoColumns,
      toggleVisible,
      isCollapsed,
      handleToggleCollapse,
      visible,
      children
    } = this.props

    return Root(
      {
        onClick: () => isCollapsed && handleToggleCollapse(false),
        className: [
          isTwoColumns && cx.twoColSection,
          isCollapsed && cx.clickable
        ]
      },
      Header(
        {
          onClick: () => handleToggleCollapse(!isCollapsed),
          className: isCollapsed ? cx.arrowUp : cx.arrowDown
        },
        title
      ),
      Content(
        (isCollapsed || (!isCollapsed && !toggleVisible)) && visible,
        !isCollapsed && children
      )
    )
  }
}

export default compose(
  withState('isCollapsed', 'handleToggleCollapse', true),
  onlyUpdateForKeys(['isCollapsed', 'visible', 'children'])
)(CollapsibleSection)
