import React from 'react'
import { storiesOf } from '@storybook/react'

import TwoColumnsLayout from './TwoColumnsLayout'
import AdminScreen from './AdminScreen'

const sampleSidebar = Array(50).fill('Anything goes in the sidebar body').map((each, i) => <p key={`sidebar-${i}`}>{each}</p>)
const sampleContent = Array(50).fill('Anything goes in the content body').map((each, i) => <p key={`content-${i}`}>{each}</p>)

storiesOf('UI Components/TwoColumnsLayout', module)
  .add('composed in AdminScreen', () => (
    <div>
      <style dangerouslySetInnerHTML={{__html: `
        body { margin: 0; }
      `}} />
      <AdminScreen
        header={<div style={{ height: '100%', background: 'white', boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)', textAlign: 'center' }}>XHeader is not available at auto-ui</div>}
      >
        <TwoColumnsLayout
          sidebar={sampleSidebar}
          sidebarHeading='Filters'
          content={sampleContent}
          contentHeading='Search'
        />
      </AdminScreen>
    </div>
  ))
  .add('missing props (does component explode?)', () => <TwoColumnsLayout />)
