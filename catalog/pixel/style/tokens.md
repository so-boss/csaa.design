## Typography
```code|lang-scss,span-4
@mixin font size { ... }
```
```html|span-2,no-source,plain,light
<div>Returns font-size property with a default value set.</div>
```

```code|lang-scss,span-2
@mixin font size, xs { ... }
```
```code|lang-js,span-2
mixins.font(mixin, 'size', 'xs');
```
```html|span-2,no-source,plain,light
<div>
  Returns font sizing token matching size.
  <br><b style="color:#00529A; font-size:12px; text-transform:uppercase;">xs, s, m, l, xl</b>
</div>
```

```code|lang-scss,span-4
@mixin font weight { ... }
```
```html|span-2,no-source,plain,light
<div>Returns font-weight property with default value set.</div>
```

```code|lang-scss,span-2
@mixin font weight, light { ... }
```
```code|lang-js,span-2
mixins.font(mixin, 'weight', 'light');
```
```html|span-2,no-source,plain,light
<div>
  Returns font weight token matching specified weight.
  <br><b style="color:#00529A; font-size:12px; text-transform:uppercase;">light, normal, bold</b>
</div>
```

```code|lang-scss,span-2
@mixin font color, saber { ... }
```
```code|lang-js,span-2
mixins.font(mixin, 'color', 'saber');
```
```html|span-2,no-source,plain,light
<div>Returns font color token matching specified color name.</div>
```

```code|lang-scss,span-2
@mixin line 1, flag { ... }
```
```code|lang-js,span-2
mixins.line(mixin, 'line', 1, 'flag');
```
```html|span-2,no-source,plain,light
<div>
  Returns font tokens for lines found in the various block implementations.
  <br><b style="color:#00529A; font-size:12px; text-transform:uppercase;">flag, tag</b>
  <br><b style="color:red; font-size:10px;">REFACTORING</b>
</div>
```

## Theming
```code|lang-scss,span-2
@mixin themes { ... }
       themes, flag { ... }
```
```code|lang-js,span-2
mixins.themes(mixin, 'flag');
```
```html|span-2,no-source,plain,light
<div>Returns all themes, with ampersand by default, connecting each to surrounding context. If you pass an element tag, it will bind each theme to that element.</div>
```

```code|lang-scss,span-2
@mixin theme redLeader { ... }
             redLeader, flag { ... }
```
```code|lang-js,span-2
mixins.theme(mixin, 'redLeader', 'flag');
```
```html|span-2,no-source,plain,light
<div>Returns all themes, with ampersand by default, connecting each to surrounding context. If you pass an element tag, it will bind each theme to that element.</div>
```


## <Block />
```code|lang-scss,span-2
@mixin block_col_1 { ... }
       block_col_1 s { ... }
```
```code|lang-js,span-2
mixins.block_col_1(mixin, 's');
```
```html|span-2,no-source,plain,light
<div>
  Returns Blocks first column tokens. Specify size to avoid generating all sizes.
  <br><b style="color:#00529A; font-size:12px; text-transform:uppercase;">s, m, l</b>
</div>
```

```code|lang-scss,span-2
@mixin block_col_2 { ... }
```
```code|lang-js,span-2
mixins.block_col_2(mixin);
```
```html|span-2,no-source,plain,light
<div>Returns Block's second column tokens.</div>
```

```code|lang-scss,span-2
@mixin block_col_3 { ... }
```
```code|lang-js,span-2
mixins.block_col_3(mixin);
```
```html|span-2,no-source,plain,light
<div>Returns Block's third column tokens.</div>
```


## <Page />
```code|lang-scss,span-2
@mixin page { ... }
```
```code|lang-js,span-2
mixins.page(mixin);
```
```html|span-2,no-source,plain,light
<div>Returns Page's complete token structure. Containers return two wrappers down (with header/body/footer).</div>
```

```code|lang-scss,span-2
@mixin page_header { ... }
```
```code|lang-js,span-2
mixins.page_header(mixin);
```
```html|span-2,no-source,plain,light
<div>Returns Page's header tokens.</div>
```

```code|lang-scss,span-2
@mixin page_body { ... }
```
```code|lang-js,span-2
mixins.page_body(mixin);
```
```html|span-2,no-source,plain,light
<div>Returns Page's body tokens.</div>
```

```code|lang-scss,span-2
@mixin page_footer { ... }
```
```code|lang-js,span-2
mixins.page_footer(mixin);
```
```html|span-2,no-source,plain,light
<div>Returns Page's footer tokens.</div>
```


## <Drawer />
```code|lang-scss,span-2
@mixin drawer { ... }
```
```code|lang-js,span-2
mixins.drawer(mixin);
```
```html|span-2,no-source,plain,light
<div>Returns Drawer's complete token structure. Containers return two wrappers down (with header/body/footer).</div>
```

```code|lang-scss,span-2
@mixin drawer_header { ... }
```
```code|lang-js,span-2
mixins.drawer_header(mixin);
```
```html|span-2,no-source,plain,light
<div>
  Returns Drawer's header tokens.
  <br><b style="color:red; font-size:10px;">REFACTORING</b>
</div>
```

```code|lang-scss,span-2
@mixin drawer_footer { ... }
```
```code|lang-js,span-2
mixins.drawer_footer(mixin);
```
```html|span-2,no-source,plain,light
<div>
  Returns Drawer's footer tokens.
  <br><b style="color:red; font-size:10px;">REFACTORING</b>
</div>
```


## <Group />
```code|lang-scss,span-2
@mixin group { ... }
```
```code|lang-js,span-2
mixins.group(mixin);
```
```html|span-2,no-source,plain,light
<div>Returns Group's complete token structure. Containers return two wrappers down (with header/body/footer).</div>
```

```code|lang-scss,span-2
@mixin group_header { ... }
```
```code|lang-js,span-2
mixins.group_header(mixin);
```
```html|span-2,no-source,plain,light
<div>Returns Groups's header tokens.</div>
```


## <Button />
```code|lang-scss,span-2
@mixin button { ... }
```
```code|lang-js,span-2
mixins.button(mixin);
```
```html|span-2,no-source,plain,light
<div>Returns Button's complete token structure. Only applies to the actual HTML button and not wrapper Action.</div>
```

```code|lang-scss,span-2
@mixin button_primary { ... }
```
```code|lang-js,span-2
mixins.button_primary(mixin);
```
```html|span-2,no-source,plain,light
<div>
  Returns primary Button's tokens, including all :states.
  <br><b style="color:red; font-size:10px; text-transform:uppercase">reconsidering</b>
</div>
```

```code|lang-scss,span-2
@mixin button_secondary { ... }
```
```code|lang-js,span-2
mixins.button_secondary(mixin);
```
```html|span-2,no-source,plain,light
<div>
  Returns secondary Button's tokens, including all :states.
  <br><b style="color:red; font-size:10px; text-transform:uppercase">reconsidering</b>
</div>
```


## <Action />
```code|lang-scss,span-2
@mixin action { ... }
```
```code|lang-js,span-2
mixins.action(mixin);
```
```html|span-2,no-source,plain,light
<div>
  Returns tokens that establish positioning & display properties.
  <br><b style="color:red; font-size:10px; text-transform:uppercase">refactoring</b>
</div>
```

```code|lang-scss,span-2
@mixin action text { ... }
```
```code|lang-js,span-2
mixins.action(mixin, 'text');
```
```html|span-2,no-source,plain,light
<div>
  Poorly relates to Action. Used as text tokenizer.
  <br><b style="color:red; font-size:10px; text-transform:uppercase">refactoring</b>
</div>
```

```code|lang-scss,span-2
@mixin action_link { ... }
```
```code|lang-js,span-2
mixins.action_link(mixin);
```
```html|span-2,no-source,plain,light
<div>
  Returns ActionLink's tokens. Refers to proceeding token for text styles.
  <br><b style="color:red; font-size:10px; text-transform:uppercase">refactoring</b>
</div>
```

```code|lang-scss,span-2
@mixin action_button { ... }
```
```code|lang-js,span-2
mixins.action_button(mixin);
```
```html|span-2,no-source,plain,light
<div>
  Returns ActionButton's tokens. Refers to action text token for text styles.
  <br><b style="color:red; font-size:10px; text-transform:uppercase">refactoring</b>
</div>
```


## <Flag />
```code|lang-scss,span-2
@mixin flag { ... }
```
```code|lang-js,span-2
mixins.flag(mixin);
```
```html|span-2,no-source,plain,light
<div>Returns Flag version from bubble config including tokens & full structure.</div>
```


## <Tag />
```code|lang-scss,span-2
@mixin tag { ... }
```
```code|lang-js,span-2
mixins.tag(mixin);
```
```html|span-2,no-source,plain,light
<div>Returns Tag version from bubble config including tokens & full structure.</div>
```

```code|lang-scss,span-2
@mixin bubble tag{ ... }
```
```code|lang-js,span-2
mixins.bubble(mixin, 'tag');
```
```html|span-2,no-source,plain,light
<div>
  Returns tokens & structure for Flags and Tags.
  <br><b style="color:red; font-size:10px; text-transform:uppercase">refactoring</b>
</div>
```


## <Wrapper />
```code|lang-scss,span-2
@mixin wrapper { ... }
```
```code|lang-js,span-2
mixins.wrapper(mixin);
```
```html|span-2,no-source,plain,light
<div>Returns tokens that establish positioning and display properties.</div>
```
