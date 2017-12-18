Basic:
```js
<CollapsibleSection
  title="Consectetur suscipit alias velit magni tenetur veritatis sed fuga"
  visible=<p>This paragraph is always visible. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat.</p>
>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
</CollapsibleSection>
```

Basic without visible element:
```js
<CollapsibleSection
  title="Consectetur suscipit alias velit magni tenetur veritatis sed fuga"
>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
</CollapsibleSection>
```

Two columns:
```js
<CollapsibleSection
  title="Consectetur suscipit alias velit magni tenetur veritatis sed fuga"
  isTwoColumns
  visible=<p>This paragraph is always visible. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat.</p>
>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
</CollapsibleSection>
```

Hide visible element on expand:
```js
<CollapsibleSection
  title="Consectetur suscipit alias velit magni tenetur veritatis sed fuga"
  isTwoColumns
  toggleVisible
  visible=<p>This paragraph is always visible. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat.</p>
>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
</CollapsibleSection>
```

Basic with many items:
```js
<div>
  <CollapsibleSection
    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
  </CollapsibleSection>
  <CollapsibleSection
    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
  </CollapsibleSection>
  <CollapsibleSection
    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
  </CollapsibleSection>
  <CollapsibleSection
    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
  </CollapsibleSection>
  <CollapsibleSection
    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
  </CollapsibleSection>
</div>
```

Missing props (does component explode?):

```
<CollapsibleSection />
```
