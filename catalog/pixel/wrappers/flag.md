```hint
  Requires: **Block**

  Props: **theme, label or children**
```
## Basic Usage
```code|lang-jsx,span-3
<Flag theme='yoda'>
  Active
</Flag>
```
```react|span-3
noSource: true
---
<Flag theme='yoda'>
  Active
</Flag>
```

```code|lang-html,span-6
collapsed: true
---
<flag theme="yoda">
  <block>
    <wrapper>
      <wrapper></wrapper>
      <wrapper>
        <thing>Active</thing>
      </wrapper>
      <wrapper></wrapper>
    </wrapper>
  </block>
</flag>
```

## Variations
**Embedding Flags**
Add a <Flag> to the <ActionBlock>'s third column by specifying
  - flag.**THEME**
  - flag.**LABEL**

```code|lang-jsx,span-3
<Block
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019'
  ]}

  flag={{
    theme:'c3po',
    label:'Inactive'
  }}

/>
```
```react|span-3
noSource: true
---
<Block
  lines={[
    'CAAS100383547',
    'Policy Period 12/31/2018 to 12/31/2019'
  ]}
  flag={{
    theme:'c3po',
    label:'Inactive'
  }}
/>
```

Or, you can add one or more <Flag>s to (line three || four) by passing an array instead of a string.
  - line[2][0].**ELEMENT** = **'flag'**
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
          label:'Pending'
       }

     ]
  ]}
/>
```
```react|span-3
noSource: true
---
<Block
  lines={[
    '2015 Lexus ES',
    'Replacing 2006 Honda Accord',
     [
       {
          element:'flag',
          theme:'saber',
          label:'Pending'
       }
     ]
  ]}
/>
```


## Definitions
```code|lang-js,span-6
{
  flag:{
    padding:'0 16px 0 16px',
    height:'32px',
    border:{
      radius:'100px',
    },
    margin:'0 0 0 8px',
  }
}
```

## Tokens
```code|lang-scss,span-6
@mixin flag {
  // → → returns <flag> context

  @mixin themes;

  & block {
    > wrapper {
      > wrapper {
        @mixin block_col_2 {
          & > thing:nth-child(1) {
             @mixin line 1, flag;
          }
        };
      }
    }
  }
}
```

## Videos


## Examples
