// @flow

import React, { PureComponent } from 'react'

import SvgIcon from './SvgIcon'

import theme from '../styles/theme'
import * as typo from '../styles/typo'

const cmz = require('cmz')

type Level = {
  label: string,
  icon: string,
  handleClick(): void
}

type State = {
  currentLevel: number
}

type Props = {
  /** Currently active milestone */
  level: number,
  levels: Array<Level>
}

const styles = {
  milestones: cmz(`
    margin: 0 auto;
    padding: 2em 0 3em;
    list-style: none;
    position: relative;
    display: flex;
    justify-content: space-between;
  `),

  milestone: cmz(`
    & {
      text-align: center;
      position: relative;
      width: 100%;
    }

    &:before {
      content: '';
      height: .1em;
      background-color: ${theme.offwhite};
      position: absolute;
      z-index: 1;
      width: 100%;
      left: -50%;
      top: 50%;
      transform: translateY(-50%);
      transition: all .25s ease-out;
    }

    &:after {
      content: '';
      height: .1em;
      background-color: ${theme.red};
      position: absolute;
      z-index: 1;
      width: 0;
      left: -50%;
      top: 50%;
      transform: translateY(-50%);
      transition: all .25s ease-out;
    }

    &:first-child:before {
      display: none;
    }

    &:first-child:after {
      display: none;
    }

    &.isComplete + &.isCurrent:after {
      width: 100%;
    }

    &.isComplete + &.isComplete:after {
      width: 100%;
    }
  `),

  icon: cmz(`
    & {
      position: relative;
      display: inline-block;
      width: 1.2em;
      height: 1.2em;
      background-color: ${theme.white};
      border: 2px solid ${theme.offwhite};
      border-radius: 50%;
      padding: .5em;
      max-width: 100%;
      transition: all .25s ease-out;
      z-index: 10;
      cursor: pointer;
    }

    .isCurrent & {
      background-color: ${theme.red};
      border-color: transparent;
    }

    .isComplete & {
      background-color: ${theme.white};
      border: 2px solid ${theme.red};
    }

    & > svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 35%;
      height: 35%;
    }
  `),

  label: cmz(
    typo.family.base, `
    display: block;
    text-transform: uppercase;
    font-size: .8em;
    font-weight: 400;
    color: ${theme.black};
    position: absolute;
    padding-top: .2em;
    width: 100%;
    transition: all .25s ease-out;
  `)
}

class Milestones extends PureComponent<Props, State> {
  static defaultProps = {
    level: 1
  }

  state = {
    currentLevel: this.props.level
  }

  getCurrentState = (levelIndex: number) => {
    const { currentLevel } = this.state
    let state = 'normal'

    const stateMap = {
      normal: {
        statusClassName: '',
        iconColor: 'monochrome'
      },
      completed: {
        statusClassName: 'isComplete',
        iconColor: 'default'
      },
      current: {
        statusClassName: 'isCurrent',
        iconColor: 'inverted'
      }
    }

    if (levelIndex === currentLevel) {
      state = 'current'
    } else if (levelIndex < currentLevel) {
      state = 'completed'
    }

    return stateMap[state]
  }

  handleChangeMilestone = (level: Level, newLevel: number) => () => {
    this.setState({ currentLevel: newLevel })
    if (typeof level.handleClick === 'function') level.handleClick()
  }

  renderMilestone = (level: Level, index: number) => {
    const currentState = this.getCurrentState(index)
    const label = level.label || `Level ${index}`

    return (
      <li key={index} className={`${styles.milestone} ${currentState.statusClassName}`}>
        <div className={styles.icon} onClick={this.handleChangeMilestone(level, index)}>
          <SvgIcon icon={level.icon} color={currentState.iconColor} />
        </div>
        <span className={styles.label}>{label}</span>
      </li>
    )
  }

  render () {
    const { levels } = this.props

    if (!levels || !levels.length) return null

    return (
      <ul className={styles.milestones}>
        {levels.map((level, index) => this.renderMilestone(level, index + 1))}
      </ul>
    )
  }
}

export default Milestones
