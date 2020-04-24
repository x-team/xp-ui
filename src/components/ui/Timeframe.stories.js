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
    <Timeframe startDate='2000-05-23' endDate='2010-12-01' />
  ))

storiesOf('Core Components|Form Components/Timeframe/Debug', module)
  .add('fixed width wrapper', () => (
    <FixedWidth>
      <Timeframe />
    </FixedWidth>
  ))
  .add('with end date but set "Still working there"', () => (
    <Timeframe startDate='2000-05-23' endDate='2010-12-01' noEndDate />
  ))
  .add('without end date defined', () => (
    <Timeframe startDate='2000-05-23' />
  ))
  .add('with end year date smaller than start year date', () => (
    <Timeframe startDate='2000-05-23' endDate='1990-05-23' />
  ))
  .add('with end month date smaller than start month date', () => (
    <Timeframe startDate='2000-10-23' endDate='2000-01-23' />
  ))
  .add('missing props', () => (
    <Timeframe />
  ))
