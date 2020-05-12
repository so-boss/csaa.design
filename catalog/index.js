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

//import { Formik, Form } from 'formik';

import * as Yup from 'yup';

const validationSchema = Yup.object()
.shape({
  name_first: Yup.string()
  .min(2, 'Too Short!')
  .max(30, 'Too Long!')
  .required('Required'),
  name_last: Yup.string()
  .min(2, 'Too Short!')
  .max(30, 'Too Long!')
  .required('Required'),
  name_full: Yup.string()
  .min(2, 'Too Short!')
  .max(70, 'Too Long!')
  .required('Required'),
  email: Yup.string()
  .email('Invalid email')
  .required('Required'),
});

const pages = [
  {
    title: "DIGITAL DESIGN",
    pages: [
      {
        path: "hideme",
        title: "hide me",
        content: pageLoader(() => import("./team/team.md")),
      }
    ]
  },
  {
    path: "/",
    title: "Team",
    content: pageLoader(() => import("./team/team.md")),
  },
  {
    title: "Principals",
    pages: [
      {
        path:"principles/alignment",
        title:"Alignment",
        content: pageLoader(() => import("./team/principles/alignment.md"))
      },
      {
        path:"principles/contrast",
        title:"Contrast",
        content: pageLoader(() => import("./team/principles/contrast.md"))
      },
      {
        path:"principles/repetition",
        title:"Repetition",
        content: pageLoader(() => import("./team/principles/repetition.md"))
      },
      {
        path:"principles/direct",
        title:"Make it Direct",
        content: pageLoader(() => import("./team/principles/direct.md"))
      },
      {
        path:"principles/stay",
        title:"Stay on the Page",
        content: pageLoader(() => import("./team/principles/stay.md"))
      },
      {
        path:"principles/Keep it Lightweight",
        title:"Lightweight",
        content: pageLoader(() => import("./team/principles/lightweight.md"))
      },
      {
        path:"principles/invitation",
        title:"Provide an Invitation",
        content: pageLoader(() => import("./team/principles/invitation.md"))
      },      {
        path:"principles/transitions",
        title:"Use Transitions",
        content: pageLoader(() => import("./team/principles/transitions.md"))
      },
      {
        path:"principles/react",
        title:"React Immediately",
        content: pageLoader(() => import("./team/principles/react.md"))
      }
    ]
  },
  {
    title: "CSAA",
    pages: [
      {
        path: "hideme",
        title: "hide me",
        content: pageLoader(() => import("./mypolicy/style/about.md")),
      }
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
    title: "MOBILITAS",
    pages: [
      {
        path: "hideme",
        title: "hide me",
        content: pageLoader(() => import("./mobilitas/style/color.md")),
      }
    ]
  },
  {
    title: "Rideshare",
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
    ]
  },
  {
    title: "WEB UI",
    pages: [
      {
        path: "hideme",
        title: "hideme",
        content: pageLoader(() => import("./ip/style/about.md"))
      }
    ]
  },
  {
    title: "Actions",
    pages: [
      {
        path: "pixel/ui/action/blocks",
        title: "Blocks",
        content: pageLoader(() => import("./pixel/uis/action_blocks.md"))
      },
      {
        path: "pixel/ui/action/links",
        title: "Links",
        content: pageLoader(() => import("./pixel/uis/action_links.md"))
      },
      {
        path: "pixel/ui/action/link_groups",
        title: "Link Groups",
        content: pageLoader(() => import("./pixel/uis/action_link_groups.md"))
      },
    ]
  },
  {
    path: "pixel/ui/blocks",
    title: "Blocks",
    content: pageLoader(() => import("./pixel/uis/blocks.md"))
  },
  {
    title: "Bubbles",
    pages: [
      {
        path: "pixel/ui/bubbles/flag",
        title: "Flag",
        content: pageLoader(() => import("./pixel/uis/flags.md"))
      },
      {
        path: "pixel/ui/bubbles/tags",
        title: "Tags",
        content: pageLoader(() => import("./pixel/uis/tags.md"))
      },
    ]
  },
  {
    title: "Fields",
    pages: [
      {
        path: "pixel/ui/fields/standalone",
        title: "Input",
        content: pageLoader(() => import("./pixel/uis/fields.md"))
      },
      {
        path: "pixel/ui/fields/groups",
        title: "Groups",
        content: pageLoader(() => import("./pixel/uis/field_groups.md"))
      },
    ]
  },
  {
    path: "pixel/ui/icons",
    title: "Icons",
    content: pageLoader(() => import("./pixel/uis/icons.md"))
  },
  {
    path: "pixel/ui/interviews",
    title: "Interviews",
    content: pageLoader(() => import("./pixel/uis/interviews.md"))
  },
  {
    path: "pixel/ui/questions",
    title: "Questions",
    content: pageLoader(() => import("./pixel/uis/questions.md"))
  },
  {
    title: "PIXEL",
    pages: [
      {
        path: "hideme",
        title: "hide me",
        content: pageLoader(() => import("./pixel/elements/block.md"))
      }
    ]
  },
  {
    title: "Elements",
    pages: [
      {
        path: "pixel/elements/block",  //path:"pixel/elements/block2", has the new tab approach
        title: "Block",
        content: pageLoader(() => import("./pixel/elements/block.md"))
      },
      {
        path: "pixel/elements/buttons",
        title: "Buttons",
        content: pageLoader(() => import("./pixel/elements/button.md"))
      },
      {
        path: "pixel/elements/field",
        title: "Field",
        content: pageLoader(() => import("./pixel/elements/field.md"))
      },
      {
        path: "pixel/elements/icon",
        title: "Icon",
        content: pageLoader(() => import("./pixel/elements/icon.md"))
      },
      {
        path: "pixel/elements/label",
        title: "Label",
        content: pageLoader(() => import("./pixel/elements/label.md"))
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
    ]
  },
  {
    title: "Wrappers",
    pages: [
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
        path:"pixel/wrappers/control",
        title:"Control",
        content: pageLoader(() => import("./pixel/wrappers/control.md"))
      },
      {
        path:"pixel/wrappers/container_wrappers",
        title:"Container Wrappers",
        content: pageLoader(() => import("./pixel/wrappers/container_wrappers.md"))
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
        path:"pixel/wrappers/ui",
        title:"UI",
        content: pageLoader(() => import("./pixel/wrappers/ui.md"))
      },
    ]
  },
  {
    title: "Containers",
    pages: [
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
        path:"pixel/containers/drawer",
        title:"Drawer",
        content: pageLoader(() => import("./pixel/containers/drawer.md"))
      },
      {
        path:"pixel/containers/form",
        title:"Form",
        content: pageLoader(() => import("./pixel/containers/form.md"))
      },
      {
        path:"pixel/containers/group",
        title:"Group",
        content: pageLoader(() => import("./pixel/containers/group.md"))
      },
      {
        path:"pixel/containers/page",
        title:"Page",
        content: pageLoader(() => import("./pixel/containers/page.md"))
      },
      {
        path:"pixel/containers/panel",
        title:"Panel",
        content: pageLoader(() => import("./pixel/containers/panel.md"))
      },
    ]
  },
  {
    title: "Style",
    pages: [
      {
        path: "essentials/dictionary/css",
        title: "Dictionaries",
        content: pageLoader(() => import("./pixel/style/dictionary/css.md"))
      },
      {
        path:"pixel/style/tokens",
        title:"CSS Tokens",
        content: pageLoader(() => import("./pixel/style/tokens.md"))
      },
      {
        path: "pixel/style/integration",
        title: "Integration",
        content: pageLoader(() => import("./pixel/style/dictionary/development.md"))
      },
    ]
  },
  {
    title: "Content & Data",
    pages: [
      {
        path: "pixel/data/entry",
        title: "Data Entry",
        content: pageLoader(() => import("./pixel/data/about.md"))
      },
      {
        path: "pixel/data/display",
        title: "Data Display",
        content: pageLoader(() => import("./pixel/data/display.md"))
      },
      {
        path: "pixel/data/formatting",
        title: "Data Formatting",
        content: pageLoader(() => import("./pixel/data/formatting.md"))
      },
      {
        path: "pixel/content",
        title: "Content",
        content: pageLoader(() => import("./pixel/content/index.md"))
      }
    ],
  },
  {
    path: "pixel/development",
    title: "Development",
    content: pageLoader(() => import("./pixel/development/index.md"))
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
      UI,
      Yup,
      validationSchema
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
