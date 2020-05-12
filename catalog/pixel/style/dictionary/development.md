# PIXEL: Design Dictionary
> *Style once, use everywhere.*

A *Design Dictionary* uses design definitions to **define styles** once and use those styles on any platform or language. It provides a single place to create and edit your styles, and exports these properties to all the places you need - iOS, Android, CSS, JS, HTML, sketch files, style documentation, etc. It is available as a CLI through npm, but can also be used like any normal node module if you want to extend its functionality.

When you are managing user experiences, it can be quite challenging to keep styles consistent and synchronized across multiple development platforms and devices.  At the same time, designers, developers, PMs and others must be able to have consistent and up-to-date style documentation to enable effective work and communication.  Even then, mistakes inevitably happen and the design may not be implemented accurately.  StyleDictionary solves this by automatically generating style definitions across all platforms from a single source - removing roadblocks, errors, and inefficiencies across your workflow.

Dictionary doesn't force your app to work within its paradigm or have opinions on how you design, develop, and structure your app's code. It simply provides you with SDKs for use in your existing codebases. Your generated Dictionary builds are **libraries not frameworks** — they are intended to complement, but not replace, your design workflow.

### Requirements
1. Node & Npm
2. Current version of Chrome.
Everything else should be handled on install.

Webserver runs on port 80. Sometimes port 80 can be an issue, requiring admin rights. Changing the webserver port, should not break anything.

### Setup & Run
1. Clone codebae from > https://github.com/aaa-ncnu-ie/pixel-design-dictionary.git
2. Run > "npm install"
4. Run > "npm run dictionary"
5. Browser will auto launch & auto navigate to > "http://127.0.0.1/styleguide/"

Terminating the webservers shouldn't be problematic; if they do not self-terminate when closing the process:
Run > "killall -9 node"



**NOTE**:
The pilot integration with PBE is underway.

### About Design Definitions
In a design system, people often use special entities called “design definitions” to store their “design decisions”. These entities are in the shape of key/value pairs, saved in specific file formats (usually JSON or YAML). These files are later used as input files, processed and transformed to generate different output files, with different formats, to be included and consumed by other projects and codebases.

This, for example, is how some design definition are used as Sass variables in the declaration of the styles for the <Button/> component:

```code
lang: scss
---
.button {
    position: relative;
    display: block;
    width: 100%;
    min-height: $definition-button-height;
    margin: 0;
    padding: $definition-spacing-sm $definition-spacing-xxlg;
    border-radius: $definition-button-border-radius;
    text-align: center;
}

// variants

.button--stroke {
    border: $definition-button-border-width solid currentColor;
    background: transparent;
}

.button--monochrome {
    border: $definition-button-border-width solid $definition-colour-gray;
    background: #fff;
    color: $definition-colour-black;
}

// and other variants here
```

## The Basics
__PIXEL's Design Dictionary has three parts:__
1. [Style properties](properties.md), organized in JSON files
1. Static assets (e.g. fonts, icons, images, sounds, etc.), organized into folders
1. [Configuration](config.md), defining the transformation of the properties and assets for each output platform

__What a style dictionary does:__
1. Transforms style properties and assets into platform specific deliverables
1. Creates human readable artifacts (e.g. documentation, design libraries, etc)

__Things you can build with a style dictionary:__
1. Styling files for any platform or language
1. Images and graphics
1. Sketch files
1. Documentation website
1. _Literally anything you want styles or style data in_

** Raw values are transformed and formatted to meet the needs of any platform. **

The Design Dictionary's framework is fully extensible and modular so you can create any type of file from a style dictionary.
If there is a new language, platform, or file type you need, you can easily extend the style dictionary framework to create the necessary files.

***

Let's say we have a couple web apps, plus native iOS & Android applications. Instead of each development effort being responsible for translating and implmenting design rules, we let the style dictionary be the single source of truth. But, we can't stop there.
1. The web developers have decided to only use colors defined as *hsla* & formatted as Sass variables in an **.scss** file.
2. While iOS development standards call for colors to be deinfed using **rgba** & formatted as **.json**
3. Finally, Android, wanting to be on the bleeding edge, defines colors using the **8 Digit Hex (AARRGGBB)** formatted as **.xml**.

> Instead of hard coding this information in each platform/format, Design Dictionary will consume that single source of truth and output files for each platform.

## Configuration Driven
A config file defines what executes and what to output when the style dictionary builds.

By default, Design Dictionary looks for a `config.json` file in the root of your package. You can also specify a custom location when you use the CLI. If you want a custom build system using the npm module, you can specify a custom location for a configuration file or use a plain Javascript object.

## config.json
 Here is a quick example:
```code
lang: json
---
{
  "source": ["properties/**/*.json"],
  "platforms": {
    "scss": {
      "transformGroup": "scss",
      "prefix": "sd",
      "buildPath": "build/scss/",
      "files": [{
        "destination": "_variables.scss",
        "format": "scss/variables"
      }],
      "actions": ["copy_assets"]
    },
    "android": {
      "transforms": ["attribute/cti", "name/cti/snake", "color/hex", "size/remToSp", "size/remToDp"],
      "buildPath": "build/android/src/main/res/values/",
      "files": [{
        "destination": "style_dictionary_colors.xml",
        "format": "android/colors"
      }]
    }
  }
}
```
***

## Classification
#### Category - Type - Item - Subitem - State

![](.README_images/19b096bc.png)

This classification is simply based on the nesting of the properties inside the JSON files. If we look at this code, for example:

```code
lang: json
---
{
  "button": {
    "border": {
      "width": {
        "value": "1px"
      }
    }
  }
}
```

when we process it via the build command the resulting JSON is this:

```code
lang: json
---
{
  "button": {
    "border": {
      "width": {
        "name": "button-border-width",
        "value": "1px",
        "original": {
          "value": "1px"
        },
        "attributes": {
          "category": "button",
          "type": "border",
          "item": "width"
        },
        "path": [
          "button",
          "border",
          "width"
        ]
      }
    }
  }
}
```
As you can see, the order in the nesting of the source JSON is automatically interpreted as logical tree/structure, and it’s used to build the name of the properties (e.g. ``$button-border-width`` and ``BUTTON_BORDER_WIDTH`` in this example) but also to associate them a set of predefined “CTI” attributes.

While working with Design Dictionary, you will find this implicit CTI classification consistently across many helpers and functions.

---

Every attribute that you associate to a property in a source JSON file is transparently and automatically passed down along the transformations and will appear in the output files.

For example, if you write this declaration:

```code
lang: json
---
{
  "button": {
    "meta": {
      "description": "design definitions for the button component"
    },
    "border": {
      "width": {
        "value": "1px",
        "documentation": {
          "comment": "the width of the border"
        }
      }
    }
  }
}
```

the generated JSON file is this:

```code
lang: json
---
{
  "button": {
    "meta": {
      "description": "design definitions for the button component"
    },
    "border": {
      "width": {
        "value": "1px",
        "documentation": {
          "comment": "the width of the border"
        },
        "original": {...},
        "name": "button-border-width",
        "attributes": {...},
        "path": [...]
      }
    }
  }
}
```
As you can see, whatever you add in term of extra attributes to the original JSON files is preserved and passed down during the build process (of course, if the format of the generated file supports this kind of representation).

This means two important things: first, you can use it to associate meta-information to your definitions (for example, I use it to add documentation, comments and notes to them, to be shown in the style guide); second, you can create custom actions or transforms in your build process, where you can use these extra attributes to selectively decide if/how to process the values.

One last cool thing: if you simply add a ``comment`` property to a value, this is automatically added as a comment in the exported Scss file (actually, all the file formats that support comments):

```code
lang: json
---
{
  "button": {
    "border": {
      "width": {
        "value": "1px",
        "comment": "this is a comment"
      }
    }
  }
}
```

will generate

```code
lang: scss
---
$button-border-width: 1px; // this is a comment
```

***

## The generated design definition files
So when the dictionary builds, what are the final results? How do the generated design definition files look like? Well, here they are.

This is the output as Scss file for the web platform:

```code
lang: scss
---
// ./dist/web/brand#1/definitions.scss

$def-alias-color-brand-primary: #3B5998;
$def-alias-color-brand-secondary: #4267B2;
$def-avatar-size-xxsm: 36px;
...
```

This the ES6 JavaScript format file:

```code
lang: scss
---
// ./dist/web/brand#1/definitions.es6.js
export const DEF_ALIAS_COLOR_BRAND_PRIMARY = '#3B5998';
export const DEF_ALIAS_COLOR_BRAND_SECONDARY = '#4267B2';
export const DEF_AVATAR_SIZE_XXSM = '36px';
...
```

And this the flat JSON file:

```code
lang: json
---
// ./dist/web/brand#1/definitions.json
[
  {
    "value": "#3B5998",
    "type": "color",
    "comment": "this is a comment",
    "original": {
      "value": "#3B5998",
      "type": "color",
      "comment": "this is a comment"
    },
    "name": "definition-alias-color-brand-primary",
    "attributes": {
      "category": "alias",
      "type": "color",
      "item": "brand",
      "subitem": "primary"
    },
    "path": [
      "alias",
      "color",
      "brand",
      "primary"
    ]
  },
  {
    "value": "#4267B2",
    "type": "color",
    "comment": "this one is a comment too",
    "original": {
      "value": "#4267B2",
      "type": "color",
      "comment": "this one is a comment too"
    },
    "name": "definition-alias-color-brand-secondary",
    "attributes": {
      "category": "alias",
      "type": "color",
      "item": "brand",
      "subitem": "secondary"
    },
    "path": [
      "alias",
      "color",
      "brand",
      "secondary"
    ]
  },
  {
    "value": "36px",
    "original": {
      "value": "36px"
    },
    "name": "definition-avatar-size-xxsm",
    "attributes": {
      "category": "avatar",
      "type": "size",
      "item": "xxsm"
    },
    "path": [
      "avatar",
      "size",
      "xxsm"
    ]
  },
  ...
]
```

As you can see, the flat JSON file exposes all the extra properties and meta-informations attached to the design definition properties, and makes the design definitions ready to be further consumed/processed by other tools (eg. a style guide, like in our case) in a very simple and straightforward way.

Similarly, for the native platforms, this is the output format for iOS:

```code
lang: js
---
// ./dist/ios/brand#1/definitions-all.plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>defAliasColorBrandPrimary</key><string>#3B5998</string>
    <key>defAliasColorBrandSecondary</key><string>#4267B2</string>
    <key>defAvatarSizeXxsm</key><string>36pt</string>
    ...
</dict>
```

And this is the output for Android:

```code
lang: js
---
// ./dist/android/brand#1/definitions-all.xml
<?xml version="1.0" encoding="UTF-8"?>
<resources>
    <color name="def_alias_color_brand_primary">#3B5998</color>
    <color name="def_alias_color_brand_secondary">#4267B2</color>
    <item name="def_avatar_size_xxsm" type="dimen">36dp</item>    ...
</resources>
```

As you can see, for the native platforms I have converted the px values to pt/dp, while I have left the color values expressed in hex format. This is because both our iOS and Android application projects have already in place custom functions that can read hex values from PLIST and XML “style” files. Of course, this format is very specific to us, and you may need completely different formats. Before starting, I suggest you to speak with your iOS/Android developers and agree on which one is the best format for them (this may require the creation of custom formats/transforms/templates, as discussed above).
