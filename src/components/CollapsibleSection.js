// @flow

import React, { PureComponent } from 'react'
import { compose, withState, onlyUpdateForKeys } from 'recompose'
import theme from '../styles/theme'
import * as typo from '../styles/typo'
import elem from '../utils/elem'

import SvgIcon from './SvgIcon'

import type { Element } from 'react'
import type { Icon } from './SvgIcon'

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
  clickable: cmz('cursor: pointer')
}

const Root = elem.section(cmz(
  typo.family.base, `
  & {
    margin: 0
    padding: 32px 16px
    border-top: 1px solid ${theme.lineSilver4}
    position: relative
  }

  &:first-child {
    border-top: 1px solid transparent
  }
`))

const Header = elem.h1(cmz(
  typo.family.smallHeading,
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
    color: ${theme.baseDarker}
  }
`))

const IconWrapper = elem.div(cmz(`
  & {
    position: absolute
    top: 34px
    right: 10px
  }

  & > svg {
    width: 12px
    height: 12px
  }
`))

const Content = elem.div(cmz(`
  .${cx.twoColSection} & {
    width: calc(100% - 200px)
  }

  & > :only-child,
  & > :nth-child(2) {
    margin-top: 16px
  }

  .${cx.twoColSection} & > :only-child,
  .${cx.clickable} & > :only-child {
    margin-top: 0
  }
`))

const Visible = elem.div(cmz(`
  & {
    padding-top: 8px
  }

  .${cx.twoColSection} & {
    padding: 0 80px 0 0
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
    padding: 0 80px 0 32px
  }

  .${cx.twoColSection} & {
    padding: 0 80px 0 0
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

    const iconName: Icon = isCollapsed ? 'plus' : 'minus'

    return (title !== '' && children) ? Root(
      {
        onClick: () => isCollapsed && handleToggleCollapse(false),
        className: [
          isTwoColumns && cx.twoColSection,
          isCollapsed && cx.clickable
        ]
      },
      Header(
        {
          onClick: () => handleToggleCollapse(!isCollapsed)
        },
        title
      ),
      IconWrapper(<SvgIcon icon={iconName} />),
      ContentBlock
    ) : null
  }
}

export default compose(
  withState('isCollapsed', 'handleToggleCollapse', true),
  onlyUpdateForKeys(['isCollapsed', 'visible', 'children'])
)(CollapsibleSection)
