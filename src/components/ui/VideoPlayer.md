Regular video, source is provided only, video is set to its original sizes:

```js
<VideoPlayer src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'} />
```

Poster set:

```js
<VideoPlayer
  src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
  width={560}
  poster={'http://www.hdfbcover.com/randomcovers/covers/never-stop-dreaming-quote-fb-cover.jpg'}
/>
```

No controls, custom width and custom height set:

```js
<VideoPlayer
  src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
  width={560}
  height={320}
  showControls={false}
/>
```

Visible controls, custom width and custom height set:

```js
<VideoPlayer
  src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
  width={540}
  height={320}
/>
```

Visible controls, custom height set / auto width:

```js
<VideoPlayer
  src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
  height={320}
/>
```

Visible controls, custom width set / auto height:

```js
<VideoPlayer
  src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
  width={560}
/>
```

Embedded video, visible controls:

```js
<VideoPlayer
  src={'https://www.youtube.com/embed/R6NUFRNEai4'}
  embedded
  width={560}
  height={315}
/>
```

Embedded video, hidden controls:

```js
<VideoPlayer
  src={'https://www.youtube.com/embed/R6NUFRNEai4'}
  embedded
  width={560}
  height={315}
  showControls={false}
/>
```

Missing props (does component explodes?):

```js
<VideoPlayer />
```
