webpackJsonp([13],{785:function(e,n,a){var l=a(15),o=a(45),t=a(294).PageRenderer;t.__esModule&&(t=t.default);var u=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:a(807)}},componentWillMount:function(){},render:function(){return l.createElement(t,Object.assign({},this.props,{content:this.state.content}))}});u.__catalog_loader__=!0,e.exports=u},807:function(e,n){e.exports='### Colors inherit from two tiers: **brand** & **product**. \n\nThe brand-level colors define the primary, neutral, & extended color palettes. The product-level color system matches the tone of the product in accordance with the requirements and function of the color.\n\n## Primaries / Brand Color\nBrand color is one of the most intuitive visual elements that is used to embody product characteristics and communicate ideas. When selecting colors, it is important to understand how the brand color is used in the user interface. \n\nMobilitas uses blue as the base color. It\'s Hex value is **#14356F**. Use-cases include: call to action, key actions, operational status, & highlighting important information.\n\n```color-palette\ncolors:\n   - {name: "070 / DARK", value: "#14356f"}\n   - {name: "050 / LIGHT", value: "#047e8e"}\n   - {name: "000 / LIGHT", value: "#f7f8fa"}\n   - {name: "070 / DARK", value: "#3b4956"}\n   - {name: "100 / BLACK", value: "#0c1014"}\n```\n\n## Functional Colors\nBase palette totals **sixty colors**, including **six primary colors** and their derivative colors.\n\nFunctional color represents a clear message as well as status, such as success, error, failure, reminder, link and so on. Functional color selection need to comply with the user\'s basic understanding of color. \n\nWe suggest that the functional colors should be kept as consistent as possible under a set of product systems. Do not have too much customization to interfere with the user\'s experience.\n\n```color-palette|span-1\ncolors:\n  - {name: "00 / LIGHT", value: "#E3F3FF"}\n  - {name: "05", value: "#B9DAF3"}\n  - {name: "10", value: "#8FC2E7"}\n  - {name: "20", value: "#64A9DB"}\n  - {name: "30 / REGULAR", value: "#3A90CF"}\n  - {name: "40", value: "#3179B7"}\n  - {name: "50", value: "#27639F"}\n  - {name: "60", value: "#1E4C87"}\n  - {name: "70 / DARK", value: "#14356F"}\n  - {name: "80", value: "#132753"}\n  - {name: "90", value: "#07173D"}\n  - {name: "100", value: "#000824"}\n```\n```color-palette|span-1\ncolors:\n  - {name: "00 / OFF WHITE", value: "#F7F8FA"}\n  - {name: "05", value: "#E8E9EB"}\n  - {name: "10", value: "#D9DADB"}\n  - {name: "20", value: "#B9BFC5"}\n  - {name: "30 / LIGHT", value: "#9BA5AF"}\n  - {name: "40", value: "#808D99"}\n  - {name: "50", value: "#697683"}\n  - {name: "60", value: "#505E6D"}\n  - {name: "70 / DARK", value: "#3B4956"}\n  - {name: "80", value: "#293540"}\n  - {name: "90", value: "#19212A"}\n  - {name: "100 / BLACK", value: "#0C1014"}\n```\n```color-palette|span-1\ncolors:\n  - {name: "00", value: "#EBFFFF"}\n  - {name: "05", value: "#B2FBFB"}\n  - {name: "10", value: "#7BF8F7"}\n  - {name: "20", value: "#3BE1E3"}\n  - {name: "30", value: "#01CACF"}\n  - {name: "40", value: "#07A1AC"}\n  - {name: "50 / LIGHT LINKS", value: "#047E8E"}\n  - {name: "60", value: "#036777"}\n  - {name: "70", value: "#005364"}\n  - {name: "80", value: "#004454"}\n  - {name: "90", value: "#003848"}\n  - {name: "100", value: "#002F3D"}\n```\n```color-palette|span-1\ncolors:\n  - {name: "00", value: "#FFF5D9"}\n  - {name: "05", value: "#FFEEBF"}\n  - {name: "10", value: "#FEE7A6"}\n  - {name: "20", value: "#F9D677"}\n  - {name: "30 / REGULAR", value: "#F1C54D"}\n  - {name: "40", value: "#E2B331"}\n  - {name: "50", value: "#CE9F1D"}\n  - {name: "60", value: "#B5890F"}\n  - {name: "70 / DARK", value: "#956F07"}\n  - {name: "80", value: "#6E5203"}\n  - {name: "90", value: "#433201"}\n  - {name: "100", value: "#171100"}\n```\n```color-palette|span-1\ncolors:\n  - {name: "00", value: "#FCE3E3"}\n  - {name: "05", value: "#FECBCB"}\n  - {name: "10", value: "#FFB2B2"}\n  - {name: "20", value: "#FE8383"}\n  - {name: "30 / REGULAR", value: "#F85757"}\n  - {name: "40", value: "#E83838"}\n  - {name: "50", value: "#D42121"}\n  - {name: "60", value: "#B91111"}\n  - {name: "70 / DARK, ERROR", value: "#990707"}\n  - {name: "80", value: "#720202"}\n  - {name: "90", value: "#460000"}\n  - {name: "100", value: "#1A0000"}\n```\n```color-palette|span-1\ncolors:\n  - {name: "00 / LIGHT", value: "#D6FFF0"}\n  - {name: "05", value: "#B2F8DF"}\n  - {name: "10", value: "#90F1D0"}\n  - {name: "20", value: "#62D8AF"}\n  - {name: "30 / REGULAR", value: "#39BF8F"}\n  - {name: "40", value: "#2F9B6F"}\n  - {name: "50", value: "#267D54"}\n  - {name: "60", value: "#1E643E"}\n  - {name: "70 / DARK, SUCCESS", value: "#19512D"}\n  - {name: "80", value: "#164121"}\n  - {name: "90", value: "#143519"}\n  - {name: "100", value: "#132B14"}\n```\n\n## Neutral Colors\nMainly used in a large part of the text interface, in addition to the background, borders, dividing lines, and other scenes are also very common. Neutral color definition needs to consider the difference between dark background and light background, while incorporating the WCAG 2.0 standard. The neutral color of Mobilitasis based on transparency.\n\n```color-palette|horizontal\ncolors:\n   - {name: "WHITE", value: "#ffffff"}\n   - {name: "GREY-1 / LIGHT", value: "#f7f8fa"}\n   - {name: "GREY-2 / DARK", value: "#3b4956"}\n   - {name: "BLACK", value: "#0c1014"}\n```\nNeutral colors are colors that lacking hue, usually they are very light colors such as gray.\n'}});
//# sourceMappingURL=13.c4461064.chunk.js.map