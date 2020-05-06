import React from "react";
import ReactDOM from "react-dom";
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
      // TODO FIND OUT HOW TO WRITE COMPONENT IN CATALOGUE {
      //   path: "ip/style/components/dropdown",
      //   title: "Dropdown",
      //   content: pageLoader(() => import("./ip/style/dropdown.md"))
      // }
    ]
  },
  {
    title: "Pixel",
    pages:[
      {
        path:"pixel/elements/block",
        title:"Block",
        content: pageLoader(() => import("./pixel/elements/block.md"))
      },
      {
        path:"pixel/wrappers/action",
        title:"Action",
        content: pageLoader(() => import("./pixel/wrappers/action.md"))
      },
      {
        path:"pixel/wrappers/actionBlock",
        title:"Action Block",
        content: pageLoader(() => import("./pixel/wrappers/actionBlock.md"))
      },
      {
        path:"pixel/wrappers/actionButton",
        title:"Action Button",
        content: pageLoader(() => import("./pixel/wrappers/actionButton.md"))
      },
      {
        path:"pixel/wrappers/actionLink",
        title:"Action Link",
        content: pageLoader(() => import("./pixel/wrappers/actionLink.md"))
      },
      {
        path:"pixel/containers/drawer",
        title:"Drawer",
        content: pageLoader(() => import("./pixel/containers/drawer.md"))
      },
      {
        path:"pixel/containers/page",
        title:"Page",
        content: pageLoader(() => import("./pixel/containers/page.md"))
      },
      {
        path:"pixel/style/tokens",
        title:"Tokens",
        content: pageLoader(() => import("./pixel/style/tokens.md"))
      }
    ]
  },
  {
    title: "Essentials",
    pages: [
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
