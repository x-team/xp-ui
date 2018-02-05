// @flow

import React, { PureComponent } from 'react'
import { compose, withState, onlyUpdateForKeys } from 'recompose'

import elem from '../../utils/elem'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import SvgIcon from './SvgIcon'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  title?: string,
  isTwoColumns?: boolean,
  toggleVisible?: boolean,
  isCollapsed?: boolean,
  handleToggleCollapse: Function,
  visible?: Element<*>|string,
  small?: boolean,
  children?: Element<*>|string,
}

const cx = {
  twoColSection: cmz('display: flex'),
  clickable: cmz('cursor: pointer'),
  small: cmz('display: inline-block')
}

const Root = elem.section(cmz(
  typo.baseText, `
  & {
    margin: 0
    padding: 32px 16px
    border-top: 1px solid ${theme.lineSilver4}
    position: relative
  }

  &.${cx.small} {
    padding: 0
    border: none
    flex: 1
  }

  &:first-child {
    border-top: 1px solid transparent
  }
`))

const Header = elem.h1(cmz(`
  & {
    margin: 0
    padding-right: 24px
  }

  .${cx.twoColSection} & {
    width: 200px
  }

  .${cx.small} & {

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
    cursor: pointer
    width: 12px
    height: 12px
    display: block
  }

  .${cx.small} & {
    top: 0
  }

  & > svg {
    width: 12px
    height: 12px
    display: block
  }
`))

const Content = elem.div(cmz(`
  .${cx.twoColSection} & {
    width: calc(100% - 200px)
  }

  & p {
    line-height: 36px
  }

  & > :only-child,
  & > :nth-child(2) {
    margin-top: 16px
  }

  .${cx.twoColSection} & > :only-child,
  .${cx.small} & > :only-child,
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
    small: false,
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
      small,
      children
    } = this.props

    const ContentBlock = (visible || children) && Content(
      (visible && (isCollapsed || (!isCollapsed && !toggleVisible))) && Visible(visible),
      !isCollapsed && Children(children)
    )

    const IconBlock = children && IconWrapper(
      {
        onClick: () => children ? handleToggleCollapse(!isCollapsed) : null
      },
      <SvgIcon icon={isCollapsed ? 'plus' : 'minus'} />
    )

    return title !== '' ? Root(
      {
        onClick: () => (children && isCollapsed) ? handleToggleCollapse(false) : null,
        className: [
          isTwoColumns && cx.twoColSection,
          small && cx.small,
          isCollapsed && children && cx.clickable
        ]
      },
      Header(
        {
          onClick: () => children ? handleToggleCollapse(!isCollapsed) : null,
          className: [
            children && cx.clickable,
            small ? typo.badgeHeading : typo.sectionHeading
          ]
        },
        title
      ),
      IconBlock,
      ContentBlock
    ) : null
  }
}

export default compose(
  withState('isCollapsed', 'handleToggleCollapse', true),
  onlyUpdateForKeys(['isCollapsed', 'visible', 'children'])
)(CollapsibleSection)
