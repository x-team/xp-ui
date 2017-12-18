Footer Example

```js
<Footer
  copyright="Copyright Foo Corp"
  lists={[
    <FooterList title="Foo Links" items={[
      {
        'label': 'Foo 1',
        'url': '/foo1'
      },
      {
        'label': 'Foo 2',
        'url': '/foo2'
      }
    ]}/>,
    <FooterList title="Bar Links" items={[
      {
        'label': 'Bar 1',
        'url': '/bar1'
      },
      {
        'label': 'Bar 2',
        'url': '/bar2'
      }
    ]}/>
  ]}
  brands={<FooterBrands message="Placeholder text" brands={[
    {
      title: "Foo Corp",
      image: "http://satyr.io/120x30?text=Foo+Corp",
      url: "https://example.com"
    },
    {
      title: "Bar Corp",
      image: "http://satyr.io/120x30?text=Bar+Corp",
      url: "https://example.com"
    },
  ]} />}
/>
```
