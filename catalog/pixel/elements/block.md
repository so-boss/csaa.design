A core element for displaying informational records & headers. The **<Block>** has a strict set of rules governing it's three column, opt-in, layout. Blocks adapt to many contexts.
```hint
  Requires: **Wrapper, Action, Thing, Icon, Flag, Tag**

  Props: **icon, lines, indicator, flag, tag**
```

## Basic Usage
```code|lang-jsx,span-3
<Block
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
  ]}
/>
```
```code|lang-html,span-3
<block>
  <wrapper>
    <wrapper></wrapper>
    <wrapper>
      <thing>CAAS100383547</thing>
      <thing>Policy Period 12/31/2018 to 12/31/2019</thing>
      <thing>This policy has ONE vehicle insured.</thing>
    </wrapper>
    <wrapper></wrapper>
  </wrapper>
</block>
```

## Variants
**Additional Lines**
Add up to four lines of text. Multi-line text should go on line 4.
```code|lang-jsx,span-6
<Block
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
    'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
  ]}
/>
```

**Indicators**

**Icons**
Add an icon for additional visual relevance but specifying:
  - icon.**ID**
  - icon.**SIZE**

```code|lang-jsx,span-3
<Block
  icon={{
    id:'core-auto',
    size:'m',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
/>
```
```react|span-3
<Block
  icon={{
    id:'core-auto',
    size:'m',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
/>
```

**Flag**
Add Flag to the third column by specifying
  - flag.**THEME**
  - icon.**LABEL**

```code|lang-jsx,span-3
<Block
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
  flag={{
    theme:'c3po',
    label:'Inactive',
  }}
/>
```
```react|span-3
<Block
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
  flag={{
    theme:'c3po',
    label:'Inactive',
  }}
/>
```

Add one or more **Flags** to line three OR four by passing an array instead of a string.
  - line[2][0].**ELEMENT** = 'flag'
  - line[2][0].**THEME**
  - line[2][0].**LABEL**

```code|lang-jsx,span-3
<Block
  lines={[
    '2015 Lexus ES',
    'Replacing 2006 Honda Accord',
    [
      {
        element:'flag',
        theme:'saber',
        label:'Pending',
      },
    ],
  ]}
/>
```
```react|span-3
<Block
  lines={[
    '2015 Lexus ES',
    'Replacing 2006 Honda Accord',
    [
      {
        element:'flag',
        theme:'saber',
        label:'Pending',
      },
    ],
  ]}
/>
```

**Tag**
Add one or more **Tags** to line three OR line four by passing an array instead of a string. Tags, **unlike Flags**, can only go on line three OR four.
  - line[2][0].**ELEMENT** = 'tag'
  - line[2][0].**ICON**
  - line[2][0].**LABEL**

```code|lang-jsx,span-3
<Block
  lines={[
    '2015 Lexus ES',
    'Replacing 2006 Honda Accord',
    [
      {
        element:'tag',
        icon:'core-auto',
        label:'Pending',
      },
    ],
  ]}
/>
```
```react|span-3
<Block
  lines={[
    '2015 Lexus ES',
    'Replacing 2006 Honda Accord',
    [
      {
        element:'tag',
        icon:'core-auto',
        label:'Pending',
      },
    ],
  ]}
/>
```

**Flags & Tags**
Add a mixture of **Flags** & **Tags** to line three OR four. Currently there are no designs that require this functionality, so it is **discouraged**.
  - line[2][0].**ELEMENT** = 'flag'
  - line[2][0].**THEME**
  - line[2][0].**LABEL**
    PLUS
  - line[2][0].**ELEMENT** = 'tag'
  - line[2][0].**ICON**
  - line[2][0].**LABEL**

```code|lang-jsx,span-3
<Block
  lines={[
    '2015 Lexus ES',
    'Replacing 2006 Honda Accord',
    [
      {
        element:'flag',
        theme:'saber',
        label:'Pending',
      },
      {
        element:'tag',
        icon:'core-auto',
        label:'Pending',
      },
    ],
  ]}
/>
```
```react|span-3
<Block
  lines={[
    '2015 Lexus ES',
    'Replacing 2006 Honda Accord',
    [
      {
        element:'flag',
        theme:'saber',
        label:'Pending',
      },
      {
        element:'tag',
        icon:'core-auto',
        label:'Pending',
      },
    ],
  ]}
/>
```

**Fully Loaded**
Blocks are very capable and were designed to function with minimal amount of information (single line of text) or with a maximum amount of information. These capabilities afford designers the ability to show data by many different dimensions.
  - ICON
  - LINES
  - TAGs
  - FLAGs

```code|lang-jsx,span-3
<Block
  icon={{
    id:'pixel-core-auto',
    size:'m',
  }}
  lines={[
    '2016 Ford Explorer',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
    [
      {
        element:'tag',
        icon:'core-auto',
        label:'CAAS100383547',
      },
    ]
  ]}
  flag={{
    theme:'saber',
    label:'Active',
  }}
/>
```
```react|span-3
<Block
  icon={{
    id:'pixel-core-auto',
    size:'m',
  }}
  lines={[
    '2016 Ford Explorer',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
    [
      {
        element:'tag',
        icon:'core-auto',
        label:'CAAS100383547',
      },
    ]
  ]}
  flag={{
    theme:'saber',
    label:'Active',
  }}
/>
```


## Definitions
```code|lang-js,span-6
{
  block:{
    col_1: {
      width:{
        xs: '24px',
        s: '40px',
        m: '64px',
        l: '88px',
      },
    },
    col_2: {

    },
    col_3: {
      width:{
        min:'40px',
      },
      margin:'0 0 0 8px',
      padding:'0 0 0 0',
    },
    line: {
      margin: '0 0 8px 0',
    },
  },
}
```

## Tokens
```code|lang-scss,span-6
  @mixin block {

  }
```

## Videos
```html|span-2,plain,noSource
<div>Blocks are everywhere</div>
<iframe width="200" height="150" src="https://www.youtube.com/embed/chJoG4Dn7Qo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
```html|span-2,plain,noSource
<div>Layout Concepts</div>
<iframe width="200" height="150" src="https://www.youtube.com/embed/v81S0i7DnK8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
```html|span-2,plain,noSource
<div>Column Three</div>
<iframe width="200" height="150" src="https://www.youtube.com/embed/alJV2A6tX3g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
```html|span-2,plain,noSource
<div>Technically...</div>
<iframe width="200" height="150" src="https://www.youtube.com/embed/WY3x3y2ulro" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
```html|span-2,plain,noSource
<div>Where Icons Go</div>
<iframe width="200" height="150" src="https://www.youtube.com/embed/9-ABAldnEsc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

## Examples
```react|plain
<Block
  lines={[
    'Line One',
  ]}
/>
```
```react|plain
<Block
  lines={[
    'CAAS100383547',
  ]}
/>
```
```react|plain
<Block
  lines={[
    'Line One',
    'Line Two',
  ]}
/>
```
```react|plain
<Block
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2017 to 12/31/2018',
  ]}
/>
```
```react|plain
<Block
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2017 to 12/31/2018',
  ]}
  flag={{
    theme: 'bb8',
    label: 'Pending',
  }}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2017 to 12/31/2018',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2017 to 12/31/2018',
  ]}
  flag={{
    theme: 'yoda',
    label: 'Active',
  }}
/>
```
```react|plain
<Block
  lines={[
    'Line One',
    'Line Two',
    ' ',
    'Line Four',
  ]}
/>
```
```react|plain
<Block
  lines={[
    'CAAS100383547',
    'Second line about this and that',
    ' ',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    'CAAS100383547',
    'Second line about this and that',
    ' ',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    '2015 Lexus ES',
    'Replacing 2006 Honda Accord',
    [
      {
        element: 'flag',
        theme: 'saber',
        label: 'Pending',
      },
    ],
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    '2015 Lexus ES',
    'Replacing 2006 Honda Accord',
    [
      {
        element: 'tag',
        icon: 'core-auto',
        label: 'CAAS100383547',
      },
      {
        element: 'flag',
        theme: 'c3po',
        label: 'Policy Expired',
      },
    ],
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    '2015 Lexus ES',
    'Replacing 2006 Honda Accord',
    [
      {
        element: 'flag',
        theme: 'saber',
        label: 'Pending',
      },
      {
        element: 'tag',
        icon: 'core-auto',
        label: 'CAAS100383547',
      },
    ],
  ]}
/>
```
```react|plain
<Block
  lines={[
    'Line One',
    'Line Two',
    'Line Three',
    'Line Four',
  ]}
/>
```
```react|plain
<Block
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
    'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
    'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
    [
      {
        element: 'tag',
        icon: 'core-auto',
        label: 'CAAS100383547',
      },
    ],
  ]}
  flag={{
    theme: 'saber',
    label: 'Active',
  }}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
    'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
  ]}
  flag={{
    theme: 'c3po',
    label: 'Inactive',
  }}
/>
```

### Block (vs Action > Block)
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 's',
  }}
  lines={[
    'CAAS100383547',
  ]}
/>
```
```react|plain
<Block
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
<Block
  icon={{
    id: 'core-auto',
    size: 'l',
  }}
  lines={[
    'CAAS100383547',
  ]}
/>
```
```react|plain
<Block
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 's',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'l',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
/>
```
```react|plain
<Block
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 's',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'l',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
  ]}
/>
```
```react|plain
<Block
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
    'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 's',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
    'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    'This policy has ONE vehicle insured.',
    'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
  ]}
/>
```
```react|plain
<Block
  icon={{
    id: 'core-auto',
    size: 'l',
  }}
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019',
    false,
    'Line 4 is for multi-line text except if line 4 is two lines it should be on line 3.',
  ]}
/>
```

## UI.BLOCK
```react|plain
<UI.Block
  id="twoLiner"
  lines={[
    'New Vehicle',
    'Replacing 2006 Honda Accord',
  ]}
/>
```
```react|plain
<UI.Block id="twoLiner_with_flag"/>

```
```react|plain
<UI.Block
  id="threeLiner"
  lines={[
    'CAA9111929292',
    'Auto Policy',
    'Policy Period: 2018-2019',
  ]}
/>
```
```react|plain
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

