// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import CreatableSkillsSelector from './CreatableSkillsSelector'

const skills = [
  { label: 'Unreal Engine', value: 1 },
  { label: 'React Native', value: 2 },
  { label: 'React', value: 3 },
  { label: 'JavaScript', value: 4 },
  { label: 'PHP', value: 5 },
  { label: 'Ruby', value: 6 },
  { label: 'Java', value: 7 },
  { label: 'Python', value: 8 },
  { label: 'Mobile', value: 9 },
  { label: 'DevOps', value: 10 },
  { label: 'Blockchain', value: 11 },
  { label: 'Data / DBA', value: 12 },
  { label: 'QA', value: 13 }
]

const initialSkills = [
  { label: 'Ruby', value: 6 },
  { label: 'Java', value: 7 },
  { label: 'Data / DBA', value: 12 },
  { label: 'QA', value: 13 }
]

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; padding: 30px 50px; }
    ` }} />
    {children}
  </div>
)

storiesOf('Core Components|Form Components/CreatableSkillsSelector', module)
  .add('basic usage', () => (
    <Body>
      <CreatableSkillsSelector
        options={skills}
        initialSelectedSkills={initialSkills}
        onChange={selected => console.log('CreatableSkillsSelector.onChange', selected)}
      />
    </Body>
  ))

storiesOf('Core Components|Form Components/CreatableSkillsSelector/States', module)
  .add('disabled', () => (
    <Body>
      <CreatableSkillsSelector
        options={skills}
        initialSelectedSkills={initialSkills}
        disabled
      />
    </Body>
  ))
  .add('invalid', () => (
    <Body>
      <CreatableSkillsSelector
        options={skills}
        initialSelectedSkills={initialSkills}
        isInvalid
      />
    </Body>
  ))

storiesOf('Core Components|Form Components/CreatableSkillsSelector/Debug', module)
  .add('missing props', () => (
    // $FlowFixMe
    <CreatableSkillsSelector />
  ))
