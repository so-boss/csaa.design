Drawers are almost always attached to an <ActionBlock>. They are meant to reveal relevant, form based/interactive content, on request. Coupled with a secondary drawer, they function together, providing an intuitive mechanism for follow up.  Both have carefully curated motion sequences, that together, manage the speed at which  content is presented. All motion in Pixel, along with the <Drawer>, carefully follow the natural rules of physics.
```hint
  Requires: **Container**

  Props: **type, children**
```

## Basic Usage
```code|lang-jsx,span-3
<Drawer>
  {{
    body:(
      <Wrapper>
        <Group type='question'>
          {{
            header: (
              <Title>Why are you removing Emily from your policy?</Title>
            ),
            body: 'select reason',
          }}
        </Group>
      </Wrapper>
    ),
    footer:(
      <React.Fragment>
        <ActionLink>Back</ActionLink>
        <ActionButton>Save</ActionButton>
      </React.Fragment>
    ),
  }}
</Drawer>
```
```react|span-3
noSource: true
---
<Drawer>
  {{
    body:(
      <Wrapper>
        <Group type='question'>
          {{
            header: (
              <Title>Why are you removing Emily from your policy?</Title>
            ),
            body: 'select reason',
          }}
        </Group>
      </Wrapper>
    ),
    footer:(
      <React.Fragment>
        <ActionLink>Back</ActionLink>
        <ActionButton>Save</ActionButton>
      </React.Fragment>
    ),
  }}
</Drawer>
```
```code|lang-html,span-6
collapsed: true
---
<drawer type="primary">
  <wrapper>
    <wrapper type="body">
      <wrapper>
        <group id="1">
          <wrapper>
            <wrapper type="header">
              <wrapper type="title">
                  <title>Why are you removing Emily from your policy?</title>
              </wrapper>
            </wrapper>
            <wrapper type="body">select reason</wrapper>
          </wrapper>
        </group>
      </wrapper>
    </wrapper>
    <wrapper type="footer">
      <action type="link">
        <thing>Back</thing>
      </action>
      <action type="button" theme="primary">
        <button type="button">Save</button>
      </action>
    </wrapper>
  </wrapper>
</drawer>
```

## Variations
**All three Slots**
Containers don't typically utilize all three sections, but here they do.
```code|lang-jsx,span-3

<Drawer>
  {{
    header:'This automatically gets wrapped by a Title',
    body:(
      <div>Or you can pass html</div>
    ),
    footer:(
      <React.Fragment>
        <ActionLink>Back</ActionLink>
        <ActionButton>Save</ActionButton>
      </React.Fragment>
    ),
  }}
</Drawer>
```
```react|span-3
noSource: true
---
<Drawer>
  {{
    header:'This automatically gets wrapped by a Title',
    body:(
      <div>Or you can pass html</div>
    ),
    footer:(
      <React.Fragment>
        <ActionLink>Back</ActionLink>
        <ActionButton>Save</ActionButton>
      </React.Fragment>
    ),
  }}
</Drawer>
```

## Definitions
```code|lang-js,span-6
{
  drawer:{
    border:{
      radius:'0 0 3px 3px',
    },
    padding:'0 48px 0 48px',
    header:{
      padding:{
        top: '40px',
      },
    },
    body:{
      padding:'40px 0 40px 0',
    },
    footer: {
      height:{
        min:'64px',
      },
      border:{
        position:{
          offset:'-48px'
        }
      }
    },
  }
}
```

## Tokens
```code|lang-scss,span-6
@mixin drawer {
  // → → returns <drawer> → <wrapper> → <wrapper> context

  @mixin drawer_header {
    // → → returns <wrapper type='header'> context
  }

  @mixin drawer_body {
    // → → returns <wrapper type='body'> context
  }

  @mixin drawer_footer {
    // → → returns <wrapper type='footer'> context

    & > action[type] {
      &:last-child {
        @mixin flex right;
      }
    }
  }
}
```

## Videos

## Examples

