```hint
  Requires: ** ... **

  Props: ** ... **
```
## Basic Usage
```code|lang-jsx,span-3

```
```react|span-3
noSource: true
---

```

```code|lang-html,span-6
collapsed: true
---

```
## Variations

## Definitions
```code|lang-js,span-6
{
  actionBlock:{

  }
}
```

## Tokens
```code|lang-scss,span-6
  @mixin actionBlock {

  }
```

## Videos


## Examples
```react|plain
<ActionBlock
  lines={[
    'Auto Policy'
  ]}
/>
```
```react|plain
<ActionBlock
  lines={[
    'Auto Policy',
    'CAAS100383547'
  ]}
/>
```
```react|plain
<ActionBlock
 lines={[
   'New Vehicle',
   'Replacing 2006 Honda Accord',
 ]}
/>
```
```react|plain
<ActionBlock
  lines={[
    'New Vehicle',
    'Replacing 2006 Honda Accord',
  ]}
  indicator="Add Vehicle"
/>
```
```react|plain
<ActionBlock
  lines={[
    'New Vehicle',
    'Replacing 2006 Honda Accord',
  ]}
  indicator="arrow"
/>
```
```react|plain
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
```react|plain
<UI.Action
  id="driver_block"
  driver="Emily Swamker"
  description="Named Insured"
/>
```

```react|plain
<ActionBlock
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    'CAAS100383547',
  ]}
/>
```
```react|plain
<ActionBlock
  icon={{
    id: 'core-auto',
    size: 'l',
  }}
  lines={[
    'CAAS100383547',
    'w/ Drawer Prop (collapsed)',
  ]}
/>
```
```react|plain
<ActionBlock
  id="addDriver"
  lines={[
    'CAAS100383547',
    'w/ Drawer Prop (expanded)',
  ]}
/>
```
```react|plain
<ActionBlock
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  id="addDriver"
  lines={[
    'CAAS100383547',
    'w/ Drawer Prop (expanded) & arrow replaced by label "CANCEL"',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
  indicator="cancel"
/>
```
```react|plain
<ActionBlock
  id="addDriver"
  lines={[
    'CAAS100383547',
    'No Drawer Prop or Arrow',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
/>
```
```react|plain
<ActionBlock
  id="addDriver"
  lines={[
    'CAAS100383547',
    'No Drawer + Arrow pointing Right',
    'LINE 3: Policy Period 12/31/2018 to 12/31/2019',
  ]}
  indicator="arrow"
/>
```
```react|plain
<ActionBlock
  id="addDriver"
  lines={[
    'CAAS100383547',
    'LINE 2: No Drawer or Arrow',
    false,
    'LINE 4: Policy Period 12/31/2018 to 12/31/2019',
  ]}
/>
```
```react|plain
<ActionBlock
  icon={{
    id: 'core-auto',
    size: 'l',
  }}
  id="addDriver"
  lines={[
    'CAAS100383547',
    'No Drawer + Arrow pointing Right',
    'LINE 3: Policy Period 12/31/2018 to 12/31/2019',
    'LINE 4: Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
  ]}
  indicator="arrow"
/>
```

### Multiple Lines

```react|plain
<ActionBlock
  lines={[
    'CAAS100383547',
    'No Drawer + Arrow pointing Right',
    'LINE 3: Policy Period 12/31/2018 to 12/31/2019',
  ]}
  indicator="arrow"
/>
```
### Arrow Icon (rt align)

```react|plain
<ActionBlock
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  id="addDriver"
  lines={[
    'CAAS100383547',
    'w/ Drawer Prop (expanded) & arrow replaced by label "CANCEL"',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
  indicator="cancel"
/>
```

### with Drawer
```react|plain
<UI.Action
  id="driver_block"
  driver="Emily Swamker"
  description="Named Insured"
  drawer="expanded"
>
  <UI.Drawer id="interview">
    <UI.Question
      id="remove_driver_reason"
      driver="Emily"
    />
  </UI.Drawer>
</UI.Action>
```
```react|plain
<UI.Action
  id="vehicle_block"
  vehicle="2006 HONDA ACCORD"
  vin="KDIOPW29812934"
/>
```
```react|plain
<UI.Action
  id="vehicle_block"
  vehicle="2006 HONDA ACCORD"
  vin="KDIOPW29812934"
  drawer="expanded"
>
  <UI.Drawer id="interview">
    <UI.Question
      id="remove_driver_reason"
      driver="Emily"
    />
  </UI.Drawer>
</UI.Action>
```
```react|plain
<ActionBlock
  lines={[
    'Emily Swanker',
    'Removing driver from your policy',
  ]}
  drawer="expanded"
>
  <UI.Drawer id="interview">
    <UI.Question
      id="remove_driver_reason"
      driver="Emily"
    />
  </UI.Drawer>
</ActionBlock>
```
```react|plain
<ActionBlock
  lines={[
    'William Jones',
    'Tell us about this driver',
  ]}
  drawer="expanded"
>
  <UI.Drawer id="interview">
    <UI.Question
      id="state_licensed"
      driver="William"
    />
  </UI.Drawer>
</ActionBlock>
```


