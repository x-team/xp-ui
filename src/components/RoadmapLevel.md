Basic:

```
<RoadmapLevel
  icon="head"
  heading="lorem ipsum 1"
  level={1}
  body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, fuga suscipit rem voluptatibus sunt sapiente. Molestiae aliquam at libero repellat, asperiores, recusandae, praesentium ratione officia molestias nobis temporibus ipsam, repudiandae!"
/>
```

Active state:

```
<RoadmapLevel
  icon="head"
  heading="lorem ipsum 1"
  level={1}
  body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, fuga suscipit rem voluptatibus sunt sapiente. Molestiae aliquam at libero repellat, asperiores, recusandae, praesentium ratione officia molestias nobis temporibus ipsam, repudiandae!"
  isActive
/>
```

Centered state:

```
<RoadmapLevel
  icon="head"
  heading="lorem ipsum 1"
  level={1}
  body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, fuga suscipit rem voluptatibus sunt sapiente. Molestiae aliquam at libero repellat, asperiores, recusandae, praesentium ratione officia molestias nobis temporibus ipsam, repudiandae!"
  isCentered
  cta={{
    label: 'Let\'s do this.',
    handle: () => alert('CTA clicked!')
  }}
/>
```

Missing props (does component explode?):

```
<RoadmapLevel />
```
