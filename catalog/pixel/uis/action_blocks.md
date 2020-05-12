#### Text-only Block
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"block"**'
  - Prop: 'lines'
    Type: '_array_'
```

```react|span-4
<UI.Action
  id="block"
  lines={[
    'Emily Swamker',
    'Removing driver from your policy.',
    false,
    'This element using the UI.Action id="block" syntax',
  ]}
/>
```

#### Driver Block
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"driver_block"**'
  - Prop: 'driver'
    Type: '_string_'
  - Prop: 'description'
    Type: '_string_'
```
```react|span-4
<UI.Action
  id="driver_block"
  driver="Emily Swamker"
  description="Named Insured"
/>
```

#### Vehicle Block
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"vehicle_block"**'
  - Prop: 'vehicle'
    Type: '_string_'
  - Prop: 'vin'
    Type: '_string_'
```
```react|span-4
<UI.Action
  id="vehicle_block"
  vehicle="2006 HONDA ACCORD"
  vin="KDIOPW29812934"
/>
```
