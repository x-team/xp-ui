// flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, array, boolean } from '@storybook/addon-knobs'

import Email from './Email'

const currentData = new Date()

storiesOf('UI Components|Email', module)
  .add('basic usage', () => (
    <Email
      subject='RE: opportunity'
      from='john@johnson.com'
      to={'talent@x-team.com'}
      createdAt={currentData}
      body='Body message'
    />
  ))
  .add('to several recipients', () => (
    <Email
      subject='RE: opportunity'
      from='john@johnson.com'
      to={['talent@x-team.com', 'caleb.brown@x-team.com', 'paul.mccrodden@x-team.com', 'talent@x-team.com', 'caleb.brown@x-team.com', 'paul.mccrodden@x-team.com']}
      createdAt={currentData}
      body='Body message'
    />
  ))
  .add('really long subject', () => (
    <Email
      subject='Really really really really really really really really really really really really long subject'
      from='john@johnson.com'
      to={'talent@x-team.com'}
      createdAt={currentData}
      body='Body message'
    />
  ))
  .add('parent element with fixed width at 800px', () => (
    <div style={{ width: 800 }}>
      <Email
        subject='RE: opportunity'
        from='john@johnson.com'
        to={'talent@x-team.com'}
        createdAt={currentData}
        body='Body message'
      />
    </div>
  ))
  .add('parent element with fixed width at 800px, long subject and several recipients', () => (
    <div style={{ width: 800 }}>
      <Email
        subject='Really really really really really really really really really really really really long subject'
        from='john@johnson.com'
        to={['talent@x-team.com', 'caleb.brown@x-team.com', 'paul.mccrodden@x-team.com', 'talent@x-team.com', 'caleb.brown@x-team.com', 'paul.mccrodden@x-team.com']}
        createdAt={currentData}
        body='Body message'
      />
    </div>
  ))
  .add('parent element with fixed width at 500px', () => (
    <div style={{ width: 500 }}>
      <Email
        subject='RE: opportunity'
        from='john@johnson.com'
        to={'talent@x-team.com'}
        createdAt={currentData}
        body='Body message'
      />
    </div>
  ))
  .add('parent element with fixed width at 500px, long subject and several recipients', () => (
    <div style={{ width: 500 }}>
      <Email
        subject='Really really really really really really really really really really really really long subject'
        from='john@johnson.com'
        to={['talent@x-team.com', 'caleb.brown@x-team.com', 'paul.mccrodden@x-team.com', 'talent@x-team.com', 'caleb.brown@x-team.com', 'paul.mccrodden@x-team.com']}
        createdAt={currentData}
        body='Body message'
      />
    </div>
  ))
  .add('parent element with fixed width at 200px', () => (
    <div style={{ width: 200 }}>
      <Email
        subject='RE: opportunity'
        from='john@johnson.com'
        to={'talent@x-team.com'}
        createdAt={currentData}
        body='Body message'
      />
    </div>
  ))
  .add('parent element with fixed width at 200px, long subject and several recipients', () => (
    <div style={{ width: 200 }}>
      <Email
        subject='Really really really really really really really really really really really really long subject'
        from='john@johnson.com'
        to={['talent@x-team.com', 'caleb.brown@x-team.com', 'paul.mccrodden@x-team.com', 'talent@x-team.com', 'caleb.brown@x-team.com', 'paul.mccrodden@x-team.com']}
        createdAt={currentData}
        body='Body message'
      />
    </div>
  ))
  .add('initial open body', () => (
    <Email
      subject='RE: opportunity'
      from='john@johnson.com'
      to={'talent@x-team.com'}
      createdAt={currentData}
      body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus molestie purus sed suscipit. Duis non ultricies velit, eu laoreet augue. Nullam turpis massa, scelerisque at tempus eu, placerat vitae orci. Nam at sem pellentesque, viverra risus id, volutpat nisl. In hac habitasse platea dictumst. Integer et dignissim eros. Quisque vel sem vel magna congue consectetur ac vel ex. Pellentesque pulvinar congue lacinia. Sed finibus ex non lorem sodales, ac pulvinar urna placerat. Aenean vel sodales libero, ac egestas velit. Nulla turpis dolor, dapibus ut diam sed, aliquam vestibulum nibh. In a ullamcorper libero. Pellentesque mattis, dui in molestie cursus, est risus convallis ligula, nec hendrerit sem odio eu elit. Aliquam sapien lacus, tincidunt rhoncus malesuada at, finibus non dolor. Pellentesque interdum nibh eu tempor pretium.'
      initialOpen
    />
  ))
  .add('initial open body and content with linebreaks', () => (
    <Email
      subject='RE: opportunity'
      from='john@johnson.com'
      to={'talent@x-team.com'}
      createdAt={currentData}
      body={`Greeting!

Facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio.

Best regards,
X-Team`}
      initialOpen
    />
  ))
  .add('HTML body test', () => (
    <Email
      subject='HTML E-mail test'
      from='john@johnson.com'
      to={'talent@x-team.com'}
      createdAt={currentData}
      // eslint-disable-next-line no-irregular-whitespace
      body={(`<font size="6">Sans Serif Huge Text</font><div><font size="4">Sans Serif Big Text</font></div><div>Sans Serif Normal Text</div><div><font size="1">Sans Serif Small Text</font></div><div><b>Bold Text</b></div><div><i>Italics Text</i></div><div><u>Underlined Text</u></div><div><span style="background-color:rgb(255,255,255)"><font color="#0000ff">Blue Text</font></span></div><div><span style="background-color:rgb(255,255,0)"><font color="#ff0000"><b>Bold + Yellow bg + Red Text</b></font></span></div><div style="text-align:center">Center Aligned Text</div><div style="text-align:right">Right Aligned Text</div><div style="text-align:left"><div style="text-align:left"><div style="text-align:left"><ol> <li>One</li><li>Two</li><li>Three</li></ol><div><br/></div><div> <ul> <li>A</li><li>B</li><li>C</li></ul> <div>Quote:</div><div><br/></div></div><blockquote style="margin:0px 0px 0px 40px;border:none;padding:0px"> <blockquote style="margin:0px 0px 0px 0.8ex;border-left:1px solid rgb(204,204,204);padding-left:1ex" class="gmail_quote front-blockquote">“I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.”<br/>- Abraham Lincoln</blockquote> <div><br/></div></blockquote>Emoji: 😀<br/><div><br/></div><div><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Link test: Click here to go to Google</a></div><div><br/></div><div>Good bye!</div><div><br/></div>`)}
      initialOpen
    />
  ))
  .add('just now', () => {
    return (
      <Email
        subject='Just Now'
        from='test@x-team.com'
        to={['test1@x-team.com', 'test2@x-team.com']}
        body={'body text'}
        createdAt={currentData}
      />
    )
  })
  .add('5 minutes ago', () => {
    const emailDate = new Date()
    emailDate.setMinutes(emailDate.getMinutes() - 5)
    return (
      <Email
        subject='5 minutes ago'
        from='test@x-team.com'
        to={['test1@x-team.com', 'test2@x-team.com']}
        body={'body text'}
        createdAt={emailDate}
      />
    )
  })
  .add('3 hours ago', () => {
    const emailDate = new Date()
    emailDate.setHours(emailDate.getHours() - 3)

    return (
      <Email
        subject='3 hours ago'
        from='test@x-team.com'
        to={['test1@x-team.com', 'test2@x-team.com']}
        body={'body text'}
        createdAt={emailDate}
      />
    )
  })
  .add('1 day ago', () => {
    const emailDate = new Date()
    emailDate.setDate(emailDate.getDate() - 1)
    return (
      <Email
        subject='1 day ago'
        from='test@x-team.com'
        to={['test1@x-team.com', 'test2@x-team.com']}
        body={'body text'}
        createdAt={emailDate}
      />
    )
  })
  .add('5 days ago', () => {
    const emailDate = new Date()
    emailDate.setDate(emailDate.getDate() - 5)
    return (
      <Email
        subject='5 days ago'
        from='test@x-team.com'
        to={['test1@x-team.com', 'test2@x-team.com']}
        body={'body text'}
        createdAt={emailDate}
      />
    )
  })
  .add('with knobs', () => (
    <Email
      subject={text('Subject', 'KNOBS Test')}
      from={text('From', 'knobs@x-team.com')}
      to={array('To', ['test1@x-team.com', 'test2@x-team.com'], ', ')}
      body={text('Body', 'body text')}
      initialOpen={boolean('Initial Open', false)}
    />
  ))

storiesOf('UI Components|Email/Debug', module)
  .add('missing props (does component explode?)', () => <Email />)
