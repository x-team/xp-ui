Standard use:

```js
<ApplicantScreen>
  <Text
    content={`We’d love to start to get to know more about you. Please fill out these quick questions so we can introduce you to an Ambassador who will work with you 1-on-1 to get qualified to become an X-Teamer.`}
    isPureContent
  />
</ApplicantScreen>
```

With Milestones injected:

```js
<ApplicantScreen>
  <MilestonesScreen
    level={1}
    cta={<Button>Click here to go to next step</Button>}
  >
    <Text
      heading="So it begins."
      content="Let’s kick things off with a warmup. To proceed, click the button below to download a short programming challenge. You can bookmark this page for later access."
    />
  </MilestonesScreen>
</ApplicantScreen>
```
