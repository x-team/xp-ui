import React from 'react'
import { storiesOf } from '@storybook/react'

import CollapsibleSection from './CollapsibleSection'

storiesOf('UI Components/CollapsibleSection', module)
  .add('basic', () => (
    <CollapsibleSection
      title='Consectetur suscipit alias velit magni tenetur veritatis sed fuga'
      visible={
        <p>
          This paragraph is always visible. Ipsa recusandae sequi, dicta
          laboriosam rerum ad ex voluptatibus nostrum fugiat.
        </p>
      }
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
        fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
        veritatis sed fuga.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
        fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
        veritatis sed fuga.
      </p>
    </CollapsibleSection>
  ))
  .add('basic without visible element', () => (
    <CollapsibleSection title='Consectetur suscipit alias velit magni tenetur veritatis sed fuga'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
        fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
        veritatis sed fuga.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
        fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
        veritatis sed fuga.
      </p>
    </CollapsibleSection>
  ))
  .add('expanded', () => (
    <CollapsibleSection
      title='Consectetur suscipit alias velit magni tenetur veritatis sed fuga'
      isCollapsed={false}
      visible={
        <p>
          This paragraph is always visible. Ipsa recusandae sequi, dicta
          laboriosam rerum ad ex voluptatibus nostrum fugiat.
        </p>
      }
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
        fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
        veritatis sed fuga.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
        fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
        veritatis sed fuga.
      </p>
    </CollapsibleSection>
  ))
  .add('two columns', () => (
    <CollapsibleSection
      title='Consectetur suscipit alias velit magni tenetur veritatis sed fuga'
      isTwoColumns
      visible={
        <p>
          This paragraph is always visible. Ipsa recusandae sequi, dicta
          laboriosam rerum ad ex voluptatibus nostrum fugiat.
        </p>
      }
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
        fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
        veritatis sed fuga.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
        fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
        veritatis sed fuga.
      </p>
    </CollapsibleSection>
  ))
  .add('hide visible element on expand', () => (
    <CollapsibleSection
      title='Consectetur suscipit alias velit magni tenetur veritatis sed fuga'
      isTwoColumns
      toggleVisible
      visible={
        <p>
          This paragraph is always visible. Ipsa recusandae sequi, dicta
          laboriosam rerum ad ex voluptatibus nostrum fugiat.
        </p>
      }
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
        fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
        veritatis sed fuga.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
        fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
        veritatis sed fuga.
      </p>
    </CollapsibleSection>
  ))
  .add('basic with many items', () => (
    <div>
      <CollapsibleSection title='Lorem ipsum dolor sit amet, consectetur adipisicing elit?'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
          fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
          veritatis sed fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
          fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
          veritatis sed fuga.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title='Lorem ipsum dolor sit amet, consectetur adipisicing elit?'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
          fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
          veritatis sed fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
          fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
          veritatis sed fuga.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title='Lorem ipsum dolor sit amet, consectetur adipisicing elit?'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
          fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
          veritatis sed fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
          fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
          veritatis sed fuga.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title='Lorem ipsum dolor sit amet, consectetur adipisicing elit?'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
          fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
          veritatis sed fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
          fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
          veritatis sed fuga.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title='Lorem ipsum dolor sit amet, consectetur adipisicing elit?'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
          fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
          veritatis sed fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
          fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
          veritatis sed fuga.
        </p>
      </CollapsibleSection>
    </div>
  ))
  .add('small display with content', () => (
    <CollapsibleSection
      title='Consectetur suscipit alias velit magni tenetur veritatis sed fuga'
      visible={
        <p>
          This paragraph is always visible. Ipsa recusandae sequi, dicta
          laboriosam rerum ad ex voluptatibus nostrum fugiat.
        </p>
      }
      small
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
        fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
        veritatis sed fuga.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum
        fugiat, quae voluptates consectetur suscipit alias velit magni tenetur
        veritatis sed fuga.
      </p>
    </CollapsibleSection>
  ))
  .add('small display without content', () => (
    <CollapsibleSection
      title='Consectetur suscipit alias velit magni tenetur veritatis sed fuga'
      visible={
        <p>
          This paragraph is always visible. Ipsa recusandae sequi, dicta
          laboriosam rerum ad ex voluptatibus nostrum fugiat.
        </p>
      }
      small
    />
  ))
  .add('missing props (does component explode?)', () => <CollapsibleSection />)
