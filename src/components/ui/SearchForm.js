// @flow

import React, { PureComponent } from 'react'

import Button from './Button'
import SelectBox from './SelectBox'
import SvgIcon from './SvgIcon'
import TagsInput from './TagsInput'

import theme from '../../styles/theme'

import type { Element } from 'react'

const cmz = require('cmz')

const cx = {
  header: cmz(`
    background-color: ${theme.baseBright}
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
      border-bottom: 1px solid ${theme.lineSilver4}
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
  static defaultProps = {
    lists: [],
    onSelectList: () => {},
    onClickShowLists: () => {},
    keywords: [],
    onChangeKeywords: () => {},
    fields: [],
    onSelectField: () => {},
    onSubmit: () => {},
    openListEditorModal: () => {},
    renderApplicantsStatusFilter: null
  }

  render () {
    const {
      lists,
      onSelectList,
      onClickShowLists,
      keywords,
      onChangeKeywords,
      fields,
      onSelectField,
      onSubmit,
      openListEditorModal,
      renderApplicantsStatusFilter
     } = this.props

    return (
      <div className={cx.header}>
        <div className={cx.headerContainer}>
          <SelectBox
            placeholder='Select Lists'
            items={lists}
            width={330}
            visibleItems={3}
            hasSearch
            collectionLabel='List'
            onSelect={onSelectList}
            append={
              <Button selectbox onClick={openListEditorModal}>
                <SvgIcon icon='edit' /> Edit lists
              </Button>
            }
          />
          <Button
            className={cx.listsButton}
            type='button'
            size='large'
            raised
            onClick={onClickShowLists}
          >
            Show
          </Button>
        </div>
        <div className={cx.headerContainer}>
          <form onSubmit={onSubmit}>
            <TagsInput
              value={keywords}
              onChange={onChangeKeywords}
            />
            <div className={cx.formList}>
              <SelectBox
                placeholder='Fields'
                items={fields}
                visibleItems={3}
                hasSearch
                collectionLabel='Field'
                onSelect={onSelectField}
              />
            </div>
            <Button className={cx.formButton} type='submit' size='large' raised>
              Filter
            </Button>
          </form>
        </div>
        <div className={cx.headerContainer}>{renderApplicantsStatusFilter}</div>
      </div>
    )
  }
}

export default SearchForm
