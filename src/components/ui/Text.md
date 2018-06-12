Empty Text example :
```js
<Text />
```

Text example (Heading):

```js
<Text
  heading="Your roadmap to X-Team"
  content="Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you."
/>
```

Text example (Heading with divider):

```js
<Text
  heading="Your roadmap to X-Team"
  content="Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you."
  hasDivider={true}
/>
```

Text example (Heading with divider and no content):

```js
<Text
  heading="Your roadmap to X-Team"
  hasDivider={true}
/>
```

Text example (Heading with Center Align):

```js
<Text
  heading="Your roadmap to X-Team"
  content="Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you."
  isCentered={true}
/>
```

Text example (Heading with Center Align and divider):

```js
<Text
  heading="Your roadmap to X-Team"
  content="Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you."
  isCentered={true}
  hasDivider={true}
/>
```

Text example (Sub Heading):

```js
<Text
  subHeading="Your roadmap to X-Team"
  content="Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you."
/>
```

Text example (Sub Heading with Center Align):

```js
<Text
  subHeading="Your roadmap to X-Team"
  content="Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you."
  isCentered={true}
/>
```

Text example (Sub Heading with divider):

```js
<Text
  subHeading="Your roadmap to X-Team"
  content="Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you."
  hasDivider={true}
/>
```

Text example (Sub Heading with Level):

```js
<Text
  subHeading="Your roadmap to X-Team"
  level="Level 7"
  content="Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you."
/>
```

Text example (Sub Heading with Level and Center Align):

```js
<Text
  subHeading="Your roadmap to X-Team"
  level="Level 7"
  content="Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you."
  isCentered={true}
/>
```

Text example (Without Heading and Sub Heading with divider):

```js
<Text
  content="Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you."
  hasDivider={true}
/>
```

Text example (Without Heading and Sub Heading with isCentered align):

```js
<Text
  content="Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you."
  isCentered={true}
  hasDivider={true}
/>
```

Text example (Pure content with no wrappers around):

```js
<Text content="Just a sample text" isPureContent />
```

Text example (content as HTML):

```js
<Text
  content={
    <div>
      <div>Many <strong>developers</strong> who came before you started right here and went on to do some of the <em>best</em> work of their career.</div>
      <div>That same <b>opportunity</b> begins now for <strong><a href='#'>you</a></strong>.</div>
    </div>
  }
/>
```
