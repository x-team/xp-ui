// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import SkillsSelector from './SkillsSelector'

const skills = [
  { label: 'JavaScript', value: 1 },
  { label: 'PHP', value: 2 },
  { label: 'Ruby', value: 3 },
  { label: 'Java', value: 4 },
  { label: 'Python', value: 5 },
  { label: 'Mobile', value: 6 },
  { label: 'DevOps', value: 7 },
  { label: 'Blockchain', value: 8 },
  { label: 'Data / DBA', value: 9 },
  { label: 'QA', value: 10 }
]

const applicantSkills = [
  { label: 'Ruby', value: 3 },
  { label: 'Java', value: 4 },
  { label: 'Data / DBA', value: 9 },
  { label: 'QA', value: 10 }
]

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; padding: 30px 50px; }
    ` }} />
    {children}
  </div>
)

storiesOf('Core Components|Form Components/SkillsSelector', module)
  .add('basic usage', () => (
    <Body>
      <SkillsSelector
        options={skills}
        applicantSkills={applicantSkills}
        onChange={selected => console.log('SkillsSelector.onChange', selected)}
      />
    </Body>
  ))

storiesOf('Core Components|Form Components/SkillsSelector/States', module)
  .add('disabled', () => (
    <Body>
      <SkillsSelector
        options={skills}
        applicantSkills={applicantSkills}
        disabled
      />
    </Body>
  ))
  .add('invalid', () => (
    <Body>
      <SkillsSelector
        options={skills}
        applicantSkills={applicantSkills}
        isInvalid
      />
    </Body>
  ))

storiesOf('Core Components|Form Components/SkillsSelector/Debug', module)
  .add('missing props', () => (
    // $FlowFixMe
    <SkillsSelector />
  ))
