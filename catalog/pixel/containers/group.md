Groups let you create collections from a set of elements. They allow buttons to transform into complex segmented controls. When used in an <Interview>, they even provide out of the box functionality for carousel like behavior.
```hint
  Requires: **Container**

  Props: **type, children**
```

## Basic Usage
```code|lang-jsx,span-3
<Group id='1' type='step'>
  {{
  header: (
    <Title>Please enter the following information:</Title>
  ),
  body: (
    <form>
      <input placeholder='First Name' />
      <input placeholder='Last Name' />
    </form>
  ),
}}
</Group>
```
```react|span-3
noSource: true
---
<Group id='1' type='step'>
  {{
  header: (
    <Title>Please enter the following information:</Title>
  ),
  body: (
    <form>
      <input placeholder='First Name' />
      <input placeholder='Last Name' />
    </form>
  ),
}}
</Group>
```
```code|lang-html,span-6
collapsed: true
---
<group id="1" type="step">
  <wrapper>
    <wrapper type="header">
      <wrapper type="title">
→ →     <title>Please enter the following information:</title>
      </wrapper>
    </wrapper>
    </wrapper>
    <wrapper type="body">
→ →   <form>
→ → →   <input placeholder="First Name">
→ → →   <input placeholder="Last Name">
→ →   </form>
    </wrapper>
  </wrapper>
</group>
```

## Variations
**Simple Text vs JSX**
Container slots easily adapt between accepting simple text strings and HTML/JSX structure. Strings don't require any more syntax than a couple quote ticks. Header strings auto transform into titles (read up on this).
```code|lang-jsx,span-3
<Group id='1' type='step'>
  {{
    header: 'Why are you removing Emily from your policy?',
    body: 'select reason',
  }}
</Group>
```
```react|span-3
noSource: true
---
<Group id='1' type='step'>
  {{
    header: 'Why are you removing Emily from your policy?',
    body: 'select reason',
  }}
</Group>
```
```code|lang-html,span-6
collapsed: true
---
<group id=“1” type=“step”>
  <wrapper>
    <wrapper type=“header”>
→ →   <wrapper type=“title”>
→ → → → <title>Why are you removing Emily from your policy?</title>
→ →   </wrapper>
    </wrapper>
→ → <wrapper type=“body”>select reason</wrapper>
  </wrapper>
</group>
```

## Definitions
```code|lang-js,span-6
{
  group:{
    header:{
      title:{
        margin:'0px 0px 16px 0px',
      },
    },
  }
}
```

## Tokens
```code|lang-scss,span-6

@mixin group {
  @mixin group_header;
}
```

## Videos

## Examples

