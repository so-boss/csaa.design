### Colors inherit from two tiers: **brand** & **product**. 

The brand-level colors define the primary, neutral, & extended color palettes. The product-level color system matches the tone of the product in accordance with the requirements and function of the color.

## Primaries / Brand Color
Brand color is one of the most intuitive visual elements that is used to embody product characteristics and communicate ideas. When selecting colors, it is important to understand how the brand color is used in the user interface. 

Mobilitas uses blue as the base color. It's Hex value is **#14356F**. Use-cases include: call to action, key actions, operational status, & highlighting important information.

```color-palette
colors:
   - {name: "070 / DARK", value: "#14356f"}
   - {name: "050 / LIGHT", value: "#047e8e"}
   - {name: "000 / LIGHT", value: "#f7f8fa"}
   - {name: "070 / DARK", value: "#3b4956"}
   - {name: "100 / BLACK", value: "#0c1014"}
```

## Functional Colors
Base palette totals **sixty colors**, including **six primary colors** and their derivative colors.

Functional color represents a clear message as well as status, such as success, error, failure, reminder, link and so on. Functional color selection need to comply with the user's basic understanding of color. 

We suggest that the functional colors should be kept as consistent as possible under a set of product systems. Do not have too much customization to interfere with the user's experience.

```color-palette|span-1
colors:
  - {name: "00 / LIGHT", value: "#E3F3FF"}
  - {name: "05", value: "#B9DAF3"}
  - {name: "10", value: "#8FC2E7"}
  - {name: "20", value: "#64A9DB"}
  - {name: "30 / REGULAR", value: "#3A90CF"}
  - {name: "40", value: "#3179B7"}
  - {name: "50", value: "#27639F"}
  - {name: "60", value: "#1E4C87"}
  - {name: "70 / DARK", value: "#14356F"}
  - {name: "80", value: "#132753"}
  - {name: "90", value: "#07173D"}
  - {name: "100", value: "#000824"}
```
```color-palette|span-1
colors:
  - {name: "00 / OFF WHITE", value: "#F7F8FA"}
  - {name: "05", value: "#E8E9EB"}
  - {name: "10", value: "#D9DADB"}
  - {name: "20", value: "#B9BFC5"}
  - {name: "30 / LIGHT", value: "#9BA5AF"}
  - {name: "40", value: "#808D99"}
  - {name: "50", value: "#697683"}
  - {name: "60", value: "#505E6D"}
  - {name: "70 / DARK", value: "#3B4956"}
  - {name: "80", value: "#293540"}
  - {name: "90", value: "#19212A"}
  - {name: "100 / BLACK", value: "#0C1014"}
```
```color-palette|span-1
colors:
  - {name: "00", value: "#EBFFFF"}
  - {name: "05", value: "#B2FBFB"}
  - {name: "10", value: "#7BF8F7"}
  - {name: "20", value: "#3BE1E3"}
  - {name: "30", value: "#01CACF"}
  - {name: "40", value: "#07A1AC"}
  - {name: "50 / LIGHT LINKS", value: "#047E8E"}
  - {name: "60", value: "#036777"}
  - {name: "70", value: "#005364"}
  - {name: "80", value: "#004454"}
  - {name: "90", value: "#003848"}
  - {name: "100", value: "#002F3D"}
```
```color-palette|span-1
colors:
  - {name: "00", value: "#FFF5D9"}
  - {name: "05", value: "#FFEEBF"}
  - {name: "10", value: "#FEE7A6"}
  - {name: "20", value: "#F9D677"}
  - {name: "30 / REGULAR", value: "#F1C54D"}
  - {name: "40", value: "#E2B331"}
  - {name: "50", value: "#CE9F1D"}
  - {name: "60", value: "#B5890F"}
  - {name: "70 / DARK", value: "#956F07"}
  - {name: "80", value: "#6E5203"}
  - {name: "90", value: "#433201"}
  - {name: "100", value: "#171100"}
```
```color-palette|span-1
colors:
  - {name: "00", value: "#FCE3E3"}
  - {name: "05", value: "#FECBCB"}
  - {name: "10", value: "#FFB2B2"}
  - {name: "20", value: "#FE8383"}
  - {name: "30 / REGULAR", value: "#F85757"}
  - {name: "40", value: "#E83838"}
  - {name: "50", value: "#D42121"}
  - {name: "60", value: "#B91111"}
  - {name: "70 / DARK, ERROR", value: "#990707"}
  - {name: "80", value: "#720202"}
  - {name: "90", value: "#460000"}
  - {name: "100", value: "#1A0000"}
```
```color-palette|span-1
colors:
  - {name: "00 / LIGHT", value: "#D6FFF0"}
  - {name: "05", value: "#B2F8DF"}
  - {name: "10", value: "#90F1D0"}
  - {name: "20", value: "#62D8AF"}
  - {name: "30 / REGULAR", value: "#39BF8F"}
  - {name: "40", value: "#2F9B6F"}
  - {name: "50", value: "#267D54"}
  - {name: "60", value: "#1E643E"}
  - {name: "70 / DARK, SUCCESS", value: "#19512D"}
  - {name: "80", value: "#164121"}
  - {name: "90", value: "#143519"}
  - {name: "100", value: "#132B14"}
```

## Neutral Colors
Mainly used in a large part of the text interface, in addition to the background, borders, dividing lines, and other scenes are also very common. Neutral color definition needs to consider the difference between dark background and light background, while incorporating the WCAG 2.0 standard. The neutral color of Mobilitasis based on transparency.

```color-palette|horizontal
colors:
   - {name: "WHITE", value: "#ffffff"}
   - {name: "GREY-1 / LIGHT", value: "#f7f8fa"}
   - {name: "GREY-2 / DARK", value: "#3b4956"}
   - {name: "BLACK", value: "#0c1014"}
```
Neutral colors are colors that lacking hue, usually they are very light colors such as gray.
