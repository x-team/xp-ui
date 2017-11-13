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

  icon: cmz(`
    &::before {
      content: ''
      position: absolute
      right: 1rem
      top: 2.7rem
      width: 10px
      height: 0
      border: 1px solid ${theme.red}
    }

    &::after {
      content: ''
      position: absolute
      right: calc(1rem + 5px)
      top: calc(2.7rem - 5px)
      width: 0
      height: 10px
      border: 1px solid ${theme.red}
    }
  `),

  iconLess: cmz(`
    &::after {
      content: none
    }
  `)
}

const Root = elem.section(cmz(
  typo.family.base, `
  & {
    margin: 0
    padding: 2rem 1rem
    font-size: 1rem
    border-top: 1px solid ${theme.lightGrayBorder}
    position: relative
  }

  &:first-child {
    border: none
  }
`))

const Header = elem.h1(cmz(
  typo.family.smallHeading,
  cx.icon,
  cx.clickable, `
  & {
    letter-spacing: normal
    text-transform: initial
    margin: 0
    line-height: 1.4
  }

  .${cx.twoColSection} & {
    width: 200px
  }

  &:hover {
    color: ${theme.blackHighlight}
  }
`))

const Content = elem.div(cmz(`
  .${cx.twoColSection} & {
    width: calc(100% - 200px)
  }

  & > :only-child,
  & > :nth-child(2) {
    margin-top: 1em
  }

  .${cx.twoColSection} & > :only-child,
  .${cx.clickable} & > :only-child {
    margin-top: 0
  }
`))

const Visible = elem.div(cmz(`
  & {
    padding-top: 0.5em
  }

  .${cx.twoColSection} & {
    padding: 0 5em 0 0
  }

  & > :first-child {
    margin-top: 0
  }

  & > :last-child {
    margin-bottom: 0
  }
`))

const Children = elem.div(cmz(`
  & {
    padding: 0 5em 0 2em
  }

  .${cx.twoColSection} & {
    padding: 0 5em 0 0
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

    const ContentBlock = (visible || children) && Content(
      (visible && (isCollapsed || (!isCollapsed && !toggleVisible))) && Visible(visible),
      !isCollapsed && Children(children)
    )

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
          className: !isCollapsed && cx.iconLess
        },
        title
      ),
      ContentBlock
    )
  }
}

export default compose(
  withState('isCollapsed', 'handleToggleCollapse', true),
  onlyUpdateForKeys(['isCollapsed', 'visible', 'children'])
)(CollapsibleSection)
