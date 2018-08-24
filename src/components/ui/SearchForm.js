// @flow

import React, { PureComponent } from 'react'

import Button from './Button'
import SelectBox from './SelectBox'
import SvgIcon from './SvgIcon'
import TagsInput from './TagsInput'

// import theme from '../../styles/theme'

import type { Element } from 'react'

const cmz = require('cmz')

const cx = {
  header: cmz(`
    background-color: silver
  `),
  headerContainer: cmz(`
    & {
      padding: 30px 60px
    }
    &:empty {
      padding: 0
    }
    &:first-of-type {
      display: flex
      align-items: center
      border-bottom: 1px solid silver
    }
    &:last-of-type {
      padding-top: 0
    }
    &:first-of-type > div {
      display: inline-block
    }
  `),
  listsButton: cmz(`
    width: 100px
    height: 50px
    margin-left: 10px
  `),
  formList: cmz(`
    display: inline-block
    width: 50%
    margin-top: 20px
  `),
  formButton: cmz(`
    display: block
    width: 100%
    height: 35px
    margin-top: 20px
    padding: 0 24px
  `)
}

type Props = {
  // onSubmit: Function,
  // children: Element<*>|string
}

class SearchForm extends PureComponent<Props> {
  render () {
    // const { onSubmit, children } = this.props

    return (
      <div className={cx.header}>
        <div className={cx.headerContainer}>
          <SelectBox
            placeholder='Select Lists'
            items={[]/*this.mapListsToItems()*/}
            width={330}
            visibleItems={3}
            hasSearch
            collectionLabel='List'
            onSelect={()=>{}/*this.handleSelectList*/}
            append={
              <Button selectbox onClick={()=>{}/*this.openListEditorModal*/}>
                <SvgIcon icon='edit' /> Edit lists
              </Button>
            }
          />
          <Button
            className={cx.listsButton}
            type='button'
            size='large'
            raised
            onClick={()=>{}/*this.handleClickShowLists*/}
          >
            Show
          </Button>
        </div>
        <div className={cx.headerContainer}>
          <form onSubmit={()=>{}/*this.handleSubmit*/}>
            <TagsInput />
            <div className={cx.formList}>
              <SelectBox
                placeholder='Fields'
                items={[]/*this.mapFieldsToItems()*/}
                visibleItems={3}
                hasSearch
                collectionLabel='Field'
                onSelect={()=>{}/*this.handleSelectField*/}
              />
            </div>
            <Button className={cx.formButton} type='submit' size='large' raised>
              Filter
            </Button>
          </form>
        </div>
        <div className={cx.headerContainer}>{/*this.renderApplicantsStatusFilter*/}</div>
      </div>
    )
  }
}

export default SearchForm
