import React from 'react'
import { storiesOf } from '@storybook/react'

import InlineEditor from './InlineEditor'
import InputField from '../forms/InputField'

storiesOf('UI Components/InlineEditor', module)
  .add('with InputField usage:', () => (
    <InlineEditor
      editor={({ onValueChange, value }) => (
        <InputField
          label="Example"
          autoFocus
          onChange={event => onValueChange(event.target.value)}
          value={value}
        />
      )}
      presenter={({ value, activateEditingMode }) => (
        <div
          onClick={activateEditingMode}
          style={{ cursor: 'pointer' }}
        >
          <p>{value}</p>
        </div>
      )}
      value="This is a sample text. Click on me to edit me!"
    />
  ))

  .add('missing props (does component explode?)', () => (
    <InlineEditor />
  ))
  