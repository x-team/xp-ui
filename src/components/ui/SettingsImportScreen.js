// @flow
/* global SyntheticEvent, HTMLInputElement */

import React, { Fragment, Component } from 'react'

import { size } from '../../utils/helpers'

import Text from './Text'
import Button from './Button'
import InputField from '../forms/InputField'
import ErrorBox from './ErrorBox'

import type { Element } from 'react'

const cmz = require('cmz')

const cx = {
  main: cmz(`
    & {
      display: flex
      flex-direction: column
      text-align: left
    }

    & > * {
      margin: 0 0 20px
    }
  `),

  button: cmz(`
    align-self: flex-start
  `),

  error: cmz(`
    font-size: 0.8em
    font-weight: bold
    margin: 0
  `)
}

type Props = {
  status: string,
  selectedList: {
    id: number,
    name: string
  },
  emailsList: string,
  validEmails: Array<*>,
  invalidEmails: Array<*>,
  response: {
    validProfileEmails: Array<*>,
    invalidProfileEmails: Array<*>
  },
  error: string,
  handleListOfEmailsChange: (event: SyntheticEvent<HTMLInputElement>) => void,
  handleImport: () => void,
  handleNewImport: () => void,
  children: Element<typeof Component>
}

const IMPORT_EMAILS_STATES = {
  VALIDATING: 'VALIDATING',
  VALIDATED: 'VALIDATED',
  IMPORTING: 'IMPORTING',
  IMPORTED: 'IMPORTED'
}

const SettingsImportScreen = ({
  status,
  selectedList,
  emailsList,
  validEmails,
  invalidEmails,
  response,
  error,
  handleListOfEmailsChange,
  handleImport,
  handleNewImport,
  children: ListsSelectorContainer
}: Props) => {
  const getDefaultRender = () => {
    const { id } = selectedList
    const disableImport = id === 0 || size(validEmails) === 0 || size(invalidEmails) > 0 || status === IMPORT_EMAILS_STATES.VALIDATING
    return (
      <Fragment>
        {ListsSelectorContainer}
        <InputField
          name='listOfEmails'
          type='textarea'
          placeholder='Newline separated list of emails'
          rows={6}
          onChange={handleListOfEmailsChange}
          defaultValue={emailsList}
        />
        {status === IMPORT_EMAILS_STATES.VALIDATED && size(invalidEmails) > 0 && (
          <ErrorBox
            errors={{
              name: 'Please check the input, some emails might be invalid.',
              failed: invalidEmails.map(email => (
                <p key={email} className={cx.error}>
                  {email}
                </p>
              ))
            }}
          />
        )}
        <Button disabled={disableImport} onClick={handleImport} className={cx.button}>
          Import
        </Button>
      </Fragment>
    )
  }

  const getImportingRender = () => {
    const name = selectedList.name
    return (
      <div>
        <h3>
          Importing to the List: <u>{name}</u>
        </h3>
        {size(validEmails) > 0 && (
          <Fragment>
            <h4>Emails being processed:</h4>
            <ul>{validEmails.map(email => <li key={email}>{email}</li>)}</ul>
          </Fragment>
        )}
      </div>
    )
  }

  const getImportedRender = () => {
    const { name } = selectedList
    const { validProfileEmails, invalidProfileEmails } = response
    return !error ? (
      <div>
        <h3>
          Imported to the List: <u>{name}</u>
        </h3>
        {size(validProfileEmails) > 0 && (
          <Fragment>
            <h4>Successufuly added to the list:</h4>
            <ul>{validProfileEmails.map(email => <li key={email}>{email}</li>)}</ul>
          </Fragment>
        )}
        {size(invalidProfileEmails) > 0 && (
          <Fragment>
            <h4>Failed to add to the list:</h4>
            <ul>{invalidProfileEmails.map(email => <li key={email}>{email}</li>)}</ul>
          </Fragment>
        )}
        <Button outlined onClick={handleNewImport} className={cx.button}>
          Import a new set of emails
        </Button>
      </div>
    ) : (
      <ErrorBox
        errors={{
          name: `Failed to import emails to the list: ${name}`,
          failed: error
        }}
      />
    )
  }

  const switchRender = () => {
    switch (status) {
      case IMPORT_EMAILS_STATES.IMPORTING:
        return getImportingRender()
      case IMPORT_EMAILS_STATES.IMPORTED:
        return getImportedRender()
      default:
        return getDefaultRender()
    }
  }

  return ListsSelectorContainer ? (
    <div className={cx.main}>
      <Text
        heading='Import'
        content='Import profiles to a List as &quot;Accepted&quot; via a newline separated list of emails.'
        hasDivider
        isCentered
      />
      {switchRender()}
    </div>
  ) : null
}

SettingsImportScreen.defaultProps = {
  status: '',
  selectedList: {
    id: 0,
    name: ''
  },
  emailsList: '',
  validEmails: [],
  invalidEmails: [],
  response: {}
}

export default SettingsImportScreen
