import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import faker from 'faker'

import Text from './Text'

const StoryText = ({
  heading,
  subHeading,
  headingType,
  subHeadingType,
  content,
  isMarkdown,
  isCentered,
  hasDivider,
  isPureContent,
  required,
  level
}) => (
  <Text
    heading={text('heading', heading)}
    headingType={select('headingType', typos, headingType)}
    subHeading={text('subHeading', subHeading)}
    subHeadingType={select('subHeadingType', typos, subHeadingType)}
    level={text('level', level)}
    content={text('content', content)}
    isMarkdown={boolean('isMarkdown', isMarkdown)}
    isCentered={boolean('isCentered', isCentered)}
    hasDivider={boolean('hasDivider', hasDivider)}
    required={boolean('required', required)}
    isPureContent={boolean('isPureContent', isPureContent)}
  />
)

const typos = {
  badgeHeading: 'badgeHeading',
  baseText: 'baseText',
  divider: 'divider',
  formText: 'formText',
  heading: 'heading',
  headline: 'headline',
  labelText: 'labelText',
  mainHeading: 'mainHeading',
  sectionHeading: 'sectionHeading',
  subheading: 'subheading',
}

const typosLenght = Object.keys(typos)
const typosHeadingTypeIndex = faker.random.number(typosLenght.length - 1)
const typosSubHeadingTypeIndex = faker.random.number(typosLenght.length - 1)

const fakeHeading = faker.lorem.sentence()
const fakeHeadingType = typosLenght[typosHeadingTypeIndex]
const fakeSubHeading = faker.lorem.sentence()
const fakeSubHeadingType = typosLenght[typosSubHeadingTypeIndex]
const fakeLevel = faker.lorem.sentence()
const fakeContent = faker.lorem.paragraphs()
const fakeIsCentered = faker.random.boolean()
const fakeHasDivider = faker.random.boolean()
const fakeRequired = faker.random.boolean()
const fakeIsPureContent = false

storiesOf('UI Components/Text', module)
  .add('showcase (use knobs)', () => (
    <StoryText
      heading={fakeHeading}
      headingType={fakeHeadingType}
      subHeading={fakeSubHeading}
      subHeadingType={fakeSubHeadingType}
      level={fakeLevel}
      content={fakeContent}
      isCentered={fakeIsCentered}
      hasDivider={fakeHasDivider}
      required={fakeRequired}
      isPureContent={fakeIsPureContent}
    />
  ), {
    notes: {
      markdown: `
# About the props

## content

This prop allows string and JSX.

## headingType and subHeading

The examples provided in knobs comes from \`typo\` object:

\`import typo from '../../styles/typo'\`

See here: [Typography](http://localhost:9001/?selectedKind=UI%20Components%2FTypography)
      `
    }
  })

storiesOf('UI Components/Text/Demos', module)
  .add('heading', () => (
    <StoryText
      heading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
    />
  ))
  .add('heading with divider', () => (
    <StoryText
      heading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      hasDivider
    />
  ))
  .add('heading with divider and no content', () => (
    <StoryText heading='Your roadmap to X-Team' hasDivider />
  ))
  .add('heading with center align', () => (
    <StoryText
      heading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      isCentered
    />
  ))
  .add('heading with center align and divider', () => (
    <StoryText
      heading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      isCentered
      hasDivider
    />
  ))
  .add('heading and sub heading with divider', () => (
    <StoryText
      heading='Your roadmap to X-Team'
      subHeading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      hasDivider
    />
  ))
  .add('sub heading', () => (
    <StoryText
      subHeading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
    />
  ))
  .add('sub Heading with center align', () => (
    <StoryText
      subHeading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      isCentered
    />
  ))
  .add('sub Heading with divider', () => (
    <StoryText
      subHeading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      hasDivider
    />
  ))
  .add('sub Heading with level', () => (
    <StoryText
      subHeading='Your roadmap to X-Team'
      level='Level 7'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
    />
  ))
  .add('sub Heading with level and center align', () => (
    <StoryText
      subHeading='Your roadmap to X-Team'
      level='Level 7'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      isCentered
    />
  ))
  .add('without Heading and Sub Heading with divider', () => (
    <StoryText
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      hasDivider
    />
  ))
  .add('without Heading and Sub Heading with isCentered align', () => (
    <StoryText
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      isCentered
      hasDivider
    />
  ))
  .add('pure content with no wrappers around', () => (
    <StoryText content='Just a sample text' isPureContent />
  ))
  .add('required', () => <StoryText content='Just a required text' required />)
  .add('pure content with no wrappers around and Required', () => (
    <StoryText content='Just a required text' isPureContent required />
  ))
  .add('content with HTML tags', () => (
    <StoryText content={(
      <div>
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <h5>H5</h5>
        <hr />
        <em>Emphasized text</em><br />
        <strong>Strong text</strong><br />
        <code>A piece of computer code</code><br />
        <samp>Sample output from a computer program</samp><br />
        <kbd>Keyboard Text</kbd><br />
        <var>Variable Code</var><br />
        <mark>Mark</mark> <br />
        <b>Bold Text</b> <br />
        <i>italic Text</i> <br />
        <a href='https://www.google.com' target='_blank'>Link</a>
        <p><strong>Paragraph:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque vestibulum sem id cursus. Fusce nec consequat erat. Praesent convallis aliquet augue, vel lacinia urna pretium eu. Morbi accumsan neque sit amet feugiat molestie. Aliquam erat volutpat. Cras quis dapibus risus. Proin luctus hendrerit semper. Donec finibus hendrerit ante at egestas.</p>
      </div>
    )} />
  ))
  .add('content with Markdown', () => (
    <StoryText isMarkdown content={`# Time to show off.

It\'s great getting to know you! After you sign up, X-Teamers from our community review profiles and send invitations to those they see standing out.

### Lorem Ipsum

Due to high demand, we send out a limited number of invites each month, meaning we can't guarantee you'll hear from us about an interview.

Some things that will help you stand out:

- Experience working on large scale projects with a significant user base.
- Strong written and spoken English.
- A LinkedIn profile that details the projects you've worked on.
- Availability for long-term fulltime contracts (the average contract duration is 10 months).

This is _**custom content**_ btw`} />
  ), {
    knobs: {
      timestamps: true,
      escapeHTML: false
    }
  })

storiesOf('UI Components/Text/Debug', module)
  .add('missing props (does component explode?)', () => (
    <Text />
  ))
