// flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import DataGrid from './DataGrid'

const Body = ({ children }) => (
  <div style={{ height: '100vh', padding: '0 50px' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      body { margin: 0; }
    ` }} />
    {children}
  </div>
)

storiesOf('UI Components/DataGrid', module)
  .add('default', () => (
    <Body>
      <DataGrid
      />
    </Body>
  ))
  .add('loading', () => (
    <Body>
      <DataGrid
        isLoading
      />
    </Body>
  ))

storiesOf('UI Components/DataGrid/Debug', module)
  .add('missing props (does component explode?)', () => (
    <DataGrid />
  ))
