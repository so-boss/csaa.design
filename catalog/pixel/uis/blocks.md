#### Custom Text Block: Two Lines
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"twoLiner"**'
  - Prop: 'lines'
    Type: '_array_'
```

```react|span-4
<UI.Block
  id="twoLiner"
  lines={[
    'New Vehicle',
    'Replacing 2006 Honda Accord',
  ]}
/>
```

#### Custom Text Block: Three Lines
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"threeLiner"**'
  - Prop: 'lines'
    Type: '_array_'
```

```react|span-4
<UI.Block
  id="threeLiner"
  lines={[
    'CAA9111929292',
    'Auto Policy',
    'Policy Period: 2018-2019',
  ]}
/>
```

#### Custom Text Block: Four Lines
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"FourLiner"**'
  - Prop: 'lines'
    Type: '_array_'
```

```react|span-4
<UI.Block
  id="fourLiner"
  lines={[
    'CAA9111929292',
    'Auto Policy',
    'Policy Period: 2018-2019',
    'A one-time payment was made in December 2018. Paid up through next year.',
  ]}
/>
```
