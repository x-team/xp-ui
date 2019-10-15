// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import faker from 'faker'

import JobDetails from './JobDetails'

const nameSample = faker.name.jobTitle()
const skillsSample = faker.random.words(faker.random.number(10)).split(' ').join(',')
const descriptionSample = `${faker.lorem.paragraph()}

# Heading 1 (converted to h2)

${faker.lorem.paragraph()}

${faker.lorem.paragraph()}

## Heading 2 (converted to h3)

Unordered list:

- ${faker.lorem.sentence()}
- ${faker.lorem.sentence()}
- ${faker.lorem.sentence()}
- ${faker.lorem.sentence()}
- ${faker.lorem.sentence()}

Ordered list:

1. ${faker.lorem.sentence()}
1. ${faker.lorem.sentence()}
1. ${faker.lorem.sentence()}
1. ${faker.lorem.sentence()}
1. ${faker.lorem.sentence()}

Span elements:

[This is an anchor text](${faker.internet.url()}), \`This is a span of code\` **Strong text using double asterisk**, __Strong text using double underscore__, *Italic text using single asterisk*, _Italic text using single underscore_, ~~Strikethrough text using double tilde~~

Code block:

\`\`\`
true +
  true(
    // -> 2
    true + true
  ) *
    (true + true) -
  true; // -> 3

// This is a very long piece of text inside the code block just to demonstrate how code blocks doesn't wraps text and instead creates horizontal scrolling
\`\`\`

Blockquote:

> ## This is a header.
>
> 1.   This is the first list item.
> 2.   This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");
>
> ${faker.lorem.paragraph()}
> ${faker.lorem.paragraph()}
`

storiesOf('UI Components/XP-Registration/JobDetails', module)
  .add('default', () => (
    <JobDetails
      name={text('Name', nameSample)}
      skills={text('Skills', skillsSample)}
      description={text('Description', descriptionSample)}
    />
  ))

storiesOf('UI Components/XP-Registration/JobDetails/Debug', module)
  .add('missing props (does component explode?)', () => (
    <JobDetails />
  ))
