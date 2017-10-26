// @flow

import { PureComponent } from 'react'
import { compose, withState, onlyUpdateForKeys } from 'recompose'
import cmz from 'cmz'
import theme from '../styles/theme'
import * as typo from '../styles/typo'
import elem from '../utils/elem'

import type { Element } from 'react'

type Props = {
  title?: string,
  isTwoColumns?: boolean,
  isCollapsed?: boolean,
  toggleCollapse: Function,
  visible?: Element<*>|string,
  children?: Element<*>|string,
}

const cx = {
  twoColSection: cmz('display: flex'),
  clickable: cmz('cursor: pointer'),
  collapsed: cmz('')
}

const Root = elem.section(cmz([ typo.family.base, `
  margin: 0;
  padding: 1rem;
  font-size: 1rem;
  border-top: 1px solid ${theme.grayBorder};
  position: relative;
`]))

const Header = elem.h1(cmz([
  typo.family.smallHeading,
  cx.clickable, `
  & {
    padding-left: 10px;
  }

  .${cx.twoColSection} & {
    width: 500px;
  }

  &:hover {
    color: ${theme.blackHighlight};
  }

  &::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 22px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent silver transparent;
  }

  .${cx.collapsed} &::before {
    border-width: 5px 5px 0 5px;
    border-color: silver transparent transparent transparent;
  }

  :not(.${cx.collapsed}) &:hover::before {
    top: 20px;
  }

  .${cx.collapsed}:hover &::before {
    top: 24px;
  }
`]))

const Content = elem.div(cmz(`
  & > :first-child {
    margin-top: 0;
  }
`))

class CollapsibleSection extends PureComponent<Props> {
  static defaultProps = {
    title: '',
    isTwoColumns: false,
    isCollapsed: true,
    toggleCollapse: () => {},
    visible: null,
    children: null
  }

  render () {
    const {
      title,
      isTwoColumns,
      isCollapsed,
      toggleCollapse,
      visible,
      children
    } = this.props

    return Root(
      {
        onClick: () => isCollapsed && toggleCollapse(false),
        className: [
          isTwoColumns && cx.twoColSection,
          isCollapsed && [cx.clickable, cx.collapsed]
        ]
      },
      Header({ onClick: () => toggleCollapse(!isCollapsed) }, title),
      Content(visible, !isCollapsed && children)
    )
  }
}

export default compose(
  withState('isCollapsed', 'toggleCollapse', true),
  onlyUpdateForKeys(['isCollapsed', 'visible', 'children'])
)(CollapsibleSection)
