webpackJsonp([11],{786:function(n,e,t){var i=t(15),a=t(45),o=t(294).PageRenderer;o.__esModule&&(o=o.default);var s=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(808)}},componentWillMount:function(){},render:function(){return i.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});s.__catalog_loader__=!0,n.exports=s},808:function(n,e){n.exports='### Type is an essential part of a design system.\n\nText is the major channel for users to understand application content and complete their work, and a well designed font system will greatly enhance the user\'s reading experience and work efficiency. \n\nMobilitas typography is based on the design principle of "dynamic order" combined with the law of natural logarithm and temperament. We strongly recommend it since it has become an industry standard. The font system for a visual system is composed, mainly of:\n1. Family\n2. Base Font Size\n3. Scale & Line Height\n4. Weight\n5. Color\n\n## Font Size\nOur **base font size is 18px** to ensure the best user reading efficiency on most common monitors based on display screen reading distance (50 cm) and optimal reading angle (0.3).\n```image\nplain: true\nspan: 6\nsrc: "/styleguide/screenreading.png"\n```\n\n```type\n{\n  "font": "\'Roboto\', sans-serif",\n  "color": "#0c1014",\n  "headings": [\n    { "label": "XXL / LARGEST", "value": 48 },\n    { "label": "XL / EXTRA LARGE", "value": 28 },\n    { "label": "L / LARGE", "value": 18 },\n    { "label": "M / MEDIUM", "value": 17 },\n    { "label": "S / SMALL", "value": 16 },\n    { "label": "XS / SMALLEST", "value": 14 }\n  ],\n  "paragraphs": [\n    { \n        "label": "BODY", \n        "value": "18/28", \n        "font": "\'Roboto\', sans-serif", \n    }\n  ]\n}\n```\n\n## Line Height / Scale\nThe font scale and line height determine the beauty of the dynamics and order of a font system. Font scale refers to a series of font with different sizes. Line height can be understood as an invisible box wrapped outside the font.\n```image\nplain: true\nspan: 6\nsrc: "/styleguide/fontscale.png"\n```\n```table\nspan: 3\ncolumns:\n    - Size\n    - Font Size\n    - Line Height (x1.75)\nrows:\n  - Size: \'XS\'\n    Font Size: 14px\n    Line Height (x1.75): 24.50px\n  - Size: \'S\'    \n    Font Size: 16px\n    Line Height (x1.75): 28.00px\n  - Size: \'M\'    \n    Font Size: 17px\n    Line Height (x1.75): 29.75px\n  - Size: \'L\'    \n    Font Size: 18px\n    Line Height (x1.75): 31.50px\n  - Size: \'XL\'    \n    Font Size: 28px\n    Line Height (x1.75): 49.00px\n  - Size: \'XXL\'    \n    Font Size: 48px\n    Line Height (x1.75): 84.00px\n```\n```hint|span-3,hint\nOur recommended **base font size is 18px**, and its corresponding **line height is 1.75X**.\n```\n\n## Weight\nThe choice of font weight is also based on the principles of order, stability, and restraint. In most cases, **medium** & **semibold** should be adequate.\n```table\nspan: 3\ncolumns:\n    - Name\n    - Weight\nrows:\n  - Name: \'Medium\'\n    Weight: 500\n  - Name: \'Semibold\'\n    Weight: 600\n```\n\n## Color\nText will be difficult to read if it is too close to the background color. To achieve barrier-free design, we follow the WCAG standard, which maintains an AAA level of contrast ratio, i.e. 7:1 or more between body text, title, and background color.\n```image\nplain: true\nspan: 6\nsrc: "/styleguide/contrastfont.png"\n```\n'}});
//# sourceMappingURL=11.846fc574.chunk.js.map