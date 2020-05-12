import React from "react";
import ReactDOM from "react-dom";
import './ip/style/Buttons/buttons.css'
import './ip/style/Badges/badges.css'
import './ip/style/Buttons/IconButton/IconButton.css'
import './ip/style/Buttons/Links/links.css'
import './index.css';
import { Catalog, pageLoader } from "catalog";
import {
  // ELEMENTS
  Block,
  Title,
  Button,
  Icon,
  Thing,
  Field,

  // WRAPPERS
  Wrapper,
  WrapperContext,
  Action,
  ActionBlock,
  ActionButton,
  ActionLink,
  Flag,
  Tag,
  Input,
  InputSelect,
  Inputs,
  Label,
  Message,
  Interview,

  //CONTAINERS
  Container,
  Drawer,
  Group,
  Page,
  UI
} from "./pixel/module";
import './pixel/module.css';
import './pixel/globals.css';
import './pixel/sprite.63d98036.svg'

const pages = [
  {
    path: "/",
    title: "Digital Design Team",
    content: pageLoader(() => import("./csaa.md"))
  },
  {
    title: "Mobilitas",
    pages: [
      {
        path: "mobilitas/style/color",
        title: "Color",
        content: pageLoader(() => import("./mobilitas/style/color.md"))
      },
      {
        path: "mobilitas/style/typography",
        title: "Typography",
        content: pageLoader(() => import("./mobilitas/style/typography.md"))
      },
      {
        path: "mobilitas/style/icons",
        title: "Icons",
        content: pageLoader(() => import("./mobilitas/style/icons.md"))
      },
      {
        path: "mobilitas/style/icon-library",
        title: "Icon Library",
        content: pageLoader(() => import("./mobilitas/style/icon-library.js"))
      },
    ]
  },
  {
    title: "MyPolicy",
    pages: [
      {
        path: "mypolicy/style/about",
        title: "About",
        content: pageLoader(() => import("./mypolicy/style/about.md"))
      },
      {
        path: "mypolicy/style/color",
        title: "Color",
        content: pageLoader(() => import("./mypolicy/style/color.md"))
      },
      {
        path: "mypolicy/style/typography",
        title: "Typography",
        content: pageLoader(() => import("./mypolicy/style/typography.md"))
      }
    ]
  },
  {
    title: "Insurance Portal",
    pages: [
      {
        path: "ip/style/about",
        title: "About",
        content: pageLoader(() => import("./ip/style/about.md"))
      },
      {
        path: "ip/style/color",
        title: "Color",
        content: pageLoader(() => import("./ip/style/color.md"))
      },
      {
        path: "ip/style/typography",
        title: "Typography",
        content: pageLoader(() => import("./ip/style/typography.md"))
      },
      {
        path: "ip/style/messages",
        title: "Messages",
        content: pageLoader(() => import("./ip/style/messages.md"))
      },
      {
        path: "ip/style/dropdown",
        title: "Dropdown",
        content: pageLoader(() => import("./ip/style/dropdown.md"))
      },
      {
        path: "ip/style/Buttons/buttons",
        title: "Button",
        content: pageLoader(() => import("./ip/style/Buttons/buttons.md"))
      },
      {
        path: "ip/style/Buttons/IconButton/iconButton",
        title: "Icon Button",
        content: pageLoader(() => import("./ip/style/Buttons/IconButton/iconButton.md"))
      },
      {
        path: "ip/style/Buttons/Links/links",
        title: "Links",
        content: pageLoader(() => import("./ip/style/Buttons/Links/links.md"))
      },
      {
        path: "ip/style/Badges",
        title: "Badges",
        content: pageLoader(() => import("./ip/style/Badges/badges.md"))
      },
      {
        path: "ip/style/brand",
        title: "Brand",
        content: pageLoader(() => import("./ip/style/brand.md"))
      }
    ]
  },
  {
    title: "Principals",
    pages: [
      {
        path:"principles/alignment",
        title:"Alignment",
        content: pageLoader(() => import("./principles/alignment.md"))
      },
      {
        path:"principles/contrast",
        title:"Contrast",
        content: pageLoader(() => import("./principles/contrast.md"))
      },
      {
        path:"principles/repetition",
        title:"Repetition",
        content: pageLoader(() => import("./principles/repetition.md"))
      },
      {
        path:"principles/direct",
        title:"Make it Direct",
        content: pageLoader(() => import("./principles/direct.md"))
      },
      {
        path:"principles/stay",
        title:"Stay on the Page",
        content: pageLoader(() => import("./principles/stay.md"))
      },
      {
        path:"principles/Keep it Lightweight",
        title:"Lightweight",
        content: pageLoader(() => import("./principles/lightweight.md"))
      },
      {
        path:"principles/invitation",
        title:"Provide an Invitation",
        content: pageLoader(() => import("./principles/invitation.md"))
      },      {
        path:"principles/transitions",
        title:"Use Transitions",
        content: pageLoader(() => import("./principles/transitions.md"))
      },
      {
        path:"principles/react",
        title:"React Immediately",
        content: pageLoader(() => import("./principles/react.md"))
      }
    ]
  },
  {
    title: "Global Rules",
    pages: [
      {
        path: "rules/dataentry",
        title: "Data Entry",
        content: pageLoader(() => import("./ip/style/about.md"))
      },
      {
        path: "rules/dataentry",
        title: "Data Display",
        content: pageLoader(() => import("./ip/style/about.md"))
      },
      {
        path: "rules/dataentry",
        title: "Data Formatting",
        content: pageLoader(() => import("./ip/style/about.md"))
      },
      {
        path: "rules/dataentry",
        title: "Copywriting",
        content: pageLoader(() => import("./ip/style/about.md"))
      }

    ]
  },
  {
    title: "PIXEL",
    pages: [
      {
        path: "hideme",
        title: "hideme",
        content: pageLoader(() => import("./ip/style/about.md"))
      }
    ]
  },
  {
    title: "Elements",
    pages: [
      {
        path: "pixel/elements/block",  //path:"pixel/elements/block2", has the new tab approach
        title: "‣ Block",
        content: pageLoader(() => import("./pixel/elements/block.md"))
      },
      {
        path: "pixel/elements/buttons",
        title: "Buttons",
        content: pageLoader(() => import("./pixel/elements/button.md"))
      },
      {
        path: "pixel/elements/icon",
        title: "Icon",
        content: pageLoader(() => import("./pixel/elements/icon.md"))
      },
      {
        path: "pixel/elements/thing",
        title: "Thing",
        content: pageLoader(() => import("./pixel/elements/thing.md"))
      },
      {
        path: "pixel/elements/title",
        title: "Title",
        content: pageLoader(() => import("./pixel/elements/title.md"))
      },
      {
        path: "pixel/elements/field",
        title: "Field",
        content: pageLoader(() => import("./pixel/elements/field.md"))
      },
      {
        path: "pixel/elements/label",
        title: "Label",
        content: pageLoader(() => import("./pixel/elements/label.md"))
      },
    ]
  },
  {
    title: "Containers",
    pages: [
      {
        path:"pixel/containers/drawer",
        title:"⅓ Drawer",
        content: pageLoader(() => import("./pixel/containers/drawer.md"))
      },
      {
        path:"pixel/containers/group",
        title:"‣ Group",
        content: pageLoader(() => import("./pixel/containers/group.md"))
      },
      {
        path:"pixel/containers/page",
        title:"‣ Page",
        content: pageLoader(() => import("./pixel/containers/page.md"))
      },
      {
        path:"pixel/containers/app",
        title:"App",
        content: pageLoader(() => import("./pixel/containers/app.md"))
      },
      {
        path:"pixel/containers/card",
        title:"Card",
        content: pageLoader(() => import("./pixel/containers/card.md"))
      },
      {
        path:"pixel/containers/form",
        title:"Form",
        content: pageLoader(() => import("./pixel/containers/form.md"))
      },
      {
        path:"pixel/containers/panel",
        title:"Panel",
        content: pageLoader(() => import("./pixel/containers/panel.md"))
      },
      {
        path:"pixel/containers/ui",
        title:"¾ UI",
        content: pageLoader(() => import("./pixel/containers/ui.md"))
      }
    ]
  },
  {
    title: "Wrapper",
    pages: [
      {
        path:"pixel/wrappers/action",
        title:"‣ Action",
        content: pageLoader(() => import("./pixel/wrappers/action.md"))
      },
      {
        path:"pixel/wrappers/actionBlock",
        title:"‣ Action Block",
        content: pageLoader(() => import("./pixel/wrappers/actionBlock.md"))
      },
      {
        path:"pixel/wrappers/actionButton",
        title:"‣ Action Button",
        content: pageLoader(() => import("./pixel/wrappers/actionButton.md"))
      },
      {
        path:"pixel/wrappers/actionLink",
        title:"‣ Action Link",
        content: pageLoader(() => import("./pixel/wrappers/actionLink.md"))
      },
      {
        path:"pixel/wrappers/flag",
        title:"Flag",
        content: pageLoader(() => import("./pixel/wrappers/flag.md"))
      },
      {
        path:"pixel/wrappers/tag",
        title:"Tag",
        content: pageLoader(() => import("./pixel/wrappers/tag.md"))
      },
      {
        path:"pixel/wrappers/control",
        title:"Control",
        content: pageLoader(() => import("./pixel/wrappers/control.md"))
      },
      {
        path:"pixel/wrappers/container_wrappers",
        title:"Container Wrappers",
        content: pageLoader(() => import("./pixel/wrappers/container_wrappers.md"))
      },
    ]
  },
  {
    title: "Style",
    pages: [
      {
        path:"pixel/style/tokens",
        title:"Tokens",
        content: pageLoader(() => import("./pixel/style/tokens.md"))
      },
      {
        path: "essentials/dictionary/dev",
        title: "Development",
        content: pageLoader(() => import("./essentials/dictionary/development.md"))
      },
      {
        path: "essentials/dictionary/css",
        title: "CSS Variables",
        content: pageLoader(() => import("./essentials/dictionary/css.md"))
      }
    ]
  }
];

ReactDOM.render(
  <Catalog
    styles={[
      "/pixel/globals.css",
      "/pixel/module.css"
    ]}
    imports={{
      // ELEMENTS
      Block,
      Title,
      Button,
      Icon,
      Thing,
      Field,

      // WRAPPERS
      Wrapper,
      WrapperContext,
      Action,
      ActionBlock,
      ActionButton,
      ActionLink,
      Flag,
      Tag,
      Input,
      InputSelect,
      Inputs,
      Label,
      Message,
      Interview,

      //CONTAINERS
      Container,
      Drawer,
      Group,
      Page,
      UI
    }}
    title="CSAA"
    theme={{
        pageHeadingBackground:"#00529A",
        brandColor:"#00529A",
        sidebarColorText:"#00529A",
        sidebarColorTextActive:"#ED1C2E",
        linkColor:"#ED1C2E"
    }}
    logoSrc="/aaa-logo.svg"
    useBrowserHistory={true}
    pages={pages}
  />,
  document.getElementById("catalog")
);
