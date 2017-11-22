Default usage:

```js
<Roadmap>
  <section className="roadmap-level">
    <RoadmapLevel
      icon="head"
      heading="The challenge"
      level={1}
      body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, fuga suscipit rem voluptatibus sunt sapiente. Molestiae aliquam at libero repellat, asperiores, recusandae, praesentium ratione officia molestias nobis temporibus ipsam, repudiandae!"
      isActive
    />
    <RoadmapTimelineElement isDone />
  </section>

  <section className="roadmap-level">
    <RoadmapLevel
      icon="webcam"
      heading="Take the stage"
      level={2}
      body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, fuga suscipit rem voluptatibus sunt sapiente. Molestiae aliquam at libero repellat, asperiores, recusandae, praesentium ratione officia molestias nobis temporibus ipsam, repudiandae!"
    />
    <RoadmapTimelineElement />
  </section>

  <section className="roadmap-level">
    <RoadmapLevel
      icon="message"
      heading="Time to show off"
      level={3}
      body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, fuga suscipit rem voluptatibus sunt sapiente. Molestiae aliquam at libero repellat, asperiores, recusandae, praesentium ratione officia molestias nobis temporibus ipsam, repudiandae!"
    />
    <RoadmapTimelineElement />
  </section>

  <section className="roadmap-level">
    <RoadmapLevel
      icon="terminal"
      heading="Show us the code!"
      level={4}
      body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, fuga suscipit rem voluptatibus sunt sapiente. Molestiae aliquam at libero repellat, asperiores, recusandae, praesentium ratione officia molestias nobis temporibus ipsam, repudiandae!"
    />
    <RoadmapTimelineElement />
  </section>

  <section className="roadmap-level">
    <RoadmapLevel
      icon="diamond"
      heading="Being shortlisted"
      level={5}
      body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, fuga suscipit rem voluptatibus sunt sapiente. Molestiae aliquam at libero repellat, asperiores, recusandae, praesentium ratione officia molestias nobis temporibus ipsam, repudiandae!"
    />
    <RoadmapTimelineElement />
  </section>

  <section className="roadmap-level">
    <RoadmapLevel
      icon="talking"
      heading="Partner match-up and interviews"
      level={6}
      body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, fuga suscipit rem voluptatibus sunt sapiente. Molestiae aliquam at libero repellat, asperiores, recusandae, praesentium ratione officia molestias nobis temporibus ipsam, repudiandae!"
    />
    <RoadmapTimelineElement />
  </section>

  <section className="roadmap-level">
    <RoadmapLevel
      icon="trophy"
      heading="Final level: you're in."
      level={7}
      body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, fuga suscipit rem voluptatibus sunt sapiente. Molestiae aliquam at libero repellat, asperiores, recusandae, praesentium ratione officia molestias nobis temporibus ipsam, repudiandae!"
      isCentered
      cta={{
        label: `Let's do this.`,
        handle: () => alert('You made it 🎉!!!')
      }}
    />
    <RoadmapTimelineElement />
  </section>
</Roadmap>
```
