// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import Timeframe from './Timeframe'

const FixedWidth = ({ children }) => (
  <div style={{ padding: '50px 20px 0' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0 auto; max-width: 500px; width: 100%; }
    ` }} />
    {children}
  </div>
)

storiesOf('Core Components|Form Components/Timeframe', module)
  .add('basic usage', () => (
    <Timeframe
      startDate={new Date('2000-05-23')}
      endDate={new Date('2010-12-01')}
      onChange={output => console.log(output)}
    />
  ))

storiesOf('Core Components|Form Components/Timeframe/States', module)
  .add('disabled', () => (
    <Timeframe
      startDate={new Date('2000-05-23')}
      endDate={new Date('2010-12-01')}
      onChange={output => console.log(output)}
      disabled
    />
  ))
  .add('invalid', () => (
    <Timeframe
      startDate={new Date('2000-05-23')}
      endDate={new Date('2010-12-01')}
      onChange={output => console.log(output)}
      isInvalid
    />
  ))

storiesOf('Core Components|Form Components/Timeframe/Debug', module)
  .add('fixed width wrapper', () => (
    <FixedWidth>
      <Timeframe />
    </FixedWidth>
  ))
  .add('with end date but set "Still working there"', () => (
    <Timeframe
      startDate={new Date('2000-05-23')}
      endDate={new Date('2010-12-01')}
      noEndDate
    />
  ))
  .add('without end date defined', () => (
    <Timeframe
      startDate={new Date('2000-05-23')}
    />
  ))
  .add('with end year date smaller than start year date', () => (
    <Timeframe
      startDate={new Date('2000-05-23')}
      endDate={new Date('1990-05-23')}
    />
  ))
  .add('with end month date smaller than start month date', () => (
    <Timeframe
      startDate={new Date('2000-10-23')}
      endDate={new Date('2000-01-23')}
    />
  ))
  .add('disabled state', () => (
    <Timeframe
      startDate={new Date('2000-05-23')}
      endDate={new Date('2010-12-01')}
      noEndDate
      disabled
    />
  ))
  .add('invalid dates', () => (
    <Timeframe
      startDate={new Date('invalid')}
      endDate={new Date('invalid')}
    />
  ))
  .add('missing props', () => (
    <Timeframe />
  ))
