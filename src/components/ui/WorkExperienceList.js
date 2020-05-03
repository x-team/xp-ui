// @flow
import React, { PureComponent } from 'react'
import WorkExperienceCard, { WorkExperienceCardProps } from './WorkExperienceCard'
import SvgIcon from '../ui/SvgIcon'

import theme from '../../styles/theme'
import { typeface } from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  item: cmz(
    `
      & {
        margin: 0 0 24px 0
      }

      &:last-child {
        margin: 0
      }
    `
  ),

  button: cmz(
    typeface.text,
    `
      & {
        display: flex
        align-items: center
        cursor: pointer
        margin: 49px 0
      }

      & span {
        margin: 0 0 0 16px
        font-size: 20px
        color: ${theme.baseTuna}
      }

      &:hover span {
        text-decoration: underline
      }
    `
  )
}

type Props = {
  list?: Array<WorkExperienceCardProps>
}

class WorkExperienceList extends PureComponent<Props> {
  static defaultProps = {
    list: []
  }

  render () {
    const { list } = this.props

    console.log(list)

    return (
      <div className={cx.wrapper}>
        <div className={cx.list}>
          {
            list.map((experience, i) => {
              return (
                <div className={cx.item} key={i}>
                  <WorkExperienceCard {...experience} />
                </div>
              )
            })
          }
        </div>

        <div className={cx.button}>
          <SvgIcon icon='circleplus' color='monochrome' />
          <span>Add another work experience...</span>
        </div>

      </div>
    )
  }
}

export default WorkExperienceList
