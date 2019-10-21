import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from './Footer'
import FooterList from './FooterList'
import FooterBrands from './FooterBrands'

storiesOf('UI Components|Footer', module)
  .add('basic usage', () => (
    <Footer
      copyright='2017 © All rights reserved. X-Company Pty Ltd.'
      lists={[
        <FooterList title='Company' items={[
          {
            label: 'Home',
            url: '/',
            mobileOnly: true
          },
          {
            label: 'Blog',
            url: '/blog',
            mobileOnly: true
          },
          {
            label: 'About Us',
            url: '/about'
          },
          {
            label: 'Our Work',
            url: '/portfolio'
          },
          {
            label: 'Unleash',
            url: '/unleash'
          },
          {
            label: 'X-Outpost',
            url: '/xo'
          },
          {
            label: 'Our Developers',
            url: '/our-developers'
          }
        ]} />,
        <FooterList title='Resources' items={[
          {
            label: 'Resource 1',
            url: '/res1'
          },
          {
            label: 'Resource 2',
            url: '/res2'
          }
        ]} />,
        <FooterList title='Hire Developers' items={[
          {
            label: 'Developer 1',
            url: '/dev1'
          },
          {
            label: 'Developer 2',
            url: '/dev2'
          }
        ]} />,
        <FooterList title='Connect' items={[
          {
            label: 'Blog',
            url: '/blog'
          },
          {
            label: 'Twitter',
            url: '/twitter'
          },
          {
            label: 'Facebook',
            url: '/facebook'
          },
          {
            label: 'Linked',
            url: '/linkedin'
          }
        ]} />
      ]}
      brands={
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
            }
          ]}
        />
      }
    />
  ))

storiesOf('UI Components|Footer/Debug', module)
  .add('missing props (does component explode?)', () => <Footer />)
