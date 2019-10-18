import React from 'react'
import { storiesOf } from '@storybook/react'

import FooterBrands from './FooterBrands'

storiesOf('UI Components|Footer/FooterBrands', module)
  .add('basic usage', () => (
    <FooterBrands
      message="Trusted by the world's leading brands since 2006"
      brands={[
        {
          title: 'Foo Corp',
          image: 'http://satyr.io/120x30?text=Foo+Corp',
          url: 'https://example.com'
        },
        {
          title: 'Bar Corp',
          image: 'http://satyr.io/120x30?text=Bar+Corp',
          url: 'https://example.com'
        },
        {
          title: 'Baz Corp',
          image: 'http://satyr.io/120x30?text=Baz+Corp',
          url: 'https://example.com'
        },
        {
          title: 'Quux Corp',
          image: 'http://satyr.io/120x30?text=Quux+Corp',
          url: 'https://example.com'
        }
      ]}
    />
  ))

storiesOf('UI Components|Footer/FooterBrands/Debug', module)
  .add('missing props (does component explode?)', () => <FooterBrands />)
