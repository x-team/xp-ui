Just now:

```js
const date = new Date();
<Note
  avatar='https://pbs.twimg.com/profile_images/416334680598659072/-_RxK6dH_200x200.jpeg'
  date={date}
  name='Samwise Gamgee'
  text='One tiny Hobbit against all the evil the world could muster. A sane being would have given up, but Samwise burned with a magnificent madness, a glowing obsession to surmount every obstacle, to find Frodo, destroy the Ring, and cleanse Middle Earth of its festering malignancy. He knew he would try again. Fail, perhaps. And try once more. A thousand, thousand times if need be, but he would not give up the quest.'
/>
```

6 minutes ago:

```js
const date = new Date();
date.setDate(date.getDate() - 1/240);
<Note
  avatar='https://pbs.twimg.com/profile_images/416334680598659072/-_RxK6dH_200x200.jpeg'
  date={date}
  name='Samwise Gamgee'
  text='I feel like spring after winter, and sun on the leaves; and like trumpets and harps and all the songs I have ever heard!'
/>
```

No avatar 2 hours ago:

```js
const date = new Date();
date.setDate(date.getDate() - 1/12);
<Note
  date={date}
  name='Samwise Gamgee'
  text={`Do you remember the Shire, Mr. Frodo? It'll be spring soon. And the orchards will be in blossom. And the birds will be nesting in the hazel thicket. And they'll be sowing the summer barley in the lower fields... and eating the first of the strawberries with cream. Do you remember the taste of strawberries?`}
/>
```

Older than 1 day:

```js
const date = new Date('2018-04-06T14:21:23.605Z');
date.setDate(date.getDate() - 2);
<Note
  avatar='https://pbs.twimg.com/profile_images/416334680598659072/-_RxK6dH_200x200.jpeg'
  date={date}
  name='Samwise Gamgee'
  text='There, peeping among the cloud-wrack above a dark tor high up in the mountains, Sam saw a white star twinkle for a while. The beauty of it smote his heart, as he looked up out of the forsaken land, and hope returned to him. For like a shaft, clear and cold, the thought pierced him that in the end the Shadow was only a small and passing thing: there was light and high beauty for ever beyond its reach.'
/>
```

Missing props (does component explode?):

```js
<Note />
```
