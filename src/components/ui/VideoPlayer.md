Regular video, source is provided only, video is set to its original sizes:

```js
<VideoPlayer src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'} />
```

Loop set, custom width and custom height set:

```js
<VideoPlayer
  src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
  width={640}
  height={360}
  loop={true}
/>
```

Muted set, custom width and custom height set:

```js
<VideoPlayer
  src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
  width={640}
  height={360}
  muted={true}
/>
```

Poster set, custom width and custom height set:

```js
<VideoPlayer
  src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
  width={640}
  height={360}
  poster={'http://www.hdfbcover.com/randomcovers/covers/never-stop-dreaming-quote-fb-cover.jpg'}
/>
```

No preload, custom width and custom height set:

```js
<VideoPlayer
  src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
  width={640}
  height={360}
  preload={'none'}
/>
```

No controls, custom width and custom height set:

```js
<VideoPlayer
  src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
  width={640}
  height={360}
  showControls={false}
/>
```

Visible controls, custom width and custom height set:

```js
<VideoPlayer
  src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
  width={640}
  height={360}
/>
```

Visible controls, custom width set / auto height:

```js
<VideoPlayer
  src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
  width={640}
/>
```

Visible controls, custom height set / auto width:

```js
<VideoPlayer
  src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
  height={360}
/>
```

Embedded video, visible controls:

```js
<VideoPlayer
  src={'https://www.youtube.com/embed/R6NUFRNEai4'}
  embedded
  width={640}
  height={360}
/>
```

Embedded video, hidden controls:

```js
<VideoPlayer
  src={'https://www.youtube.com/embed/R6NUFRNEai4'}
  embedded
  width={640}
  height={360}
  showControls={false}
/>
```

Missing props (does component explodes?):

```js
<VideoPlayer />
```
