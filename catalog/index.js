import React from "react";
import ReactDOM from "react-dom";
import './ip/style/Buttons/buttons.css'
import './ip/style/Badges/badges.css'
import './ip/style/dropdown.css'
import './ip/style/Buttons/IconButton/IconButton.css'
import './ip/style/Buttons/Links/links.css'
import './index.css';
import { Catalog, pageLoader } from "catalog";
import { Nav } from './mypolicy/style/Nav/nav.md'
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
import './ant/antd.css';
import './globals.css';
import './pixel/sprite.63d98036.svg'

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

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
  // {
  //   title: "DIGITAL DESIGN",
  //   pages: [
  //     {
  //       path: "hideme",
  //       title: "hide me",
  //       content: pageLoader(() => import("./team/team.md")),
  //     }
  //   ]
  // },
  {
    path: "/",
    title: "Design",
    content: pageLoader(() => import("./design/overview.md"))
  },
  // {
  //   title: "Design",
  //   pages: [
  //     {
  //       hideFromMenu: true,
  //       path: "design/overview",
  //       title: "Digital Design Ecosystem",
  //       content: pageLoader(() => import("./design/overview.md"))
  //     },
  //     {
  //       path: "get-started/design",
  //       title: "Design",
  //       content: pageLoader(() => import("./guidelines/accessibility.js"))
  //     },
  //     {
  //       path: "get-started/develop",
  //       title: "Develop",
  //       content: pageLoader(() => import("./guidelines/accessibility.js"))
  //     }
  //   ]
  // },
  {
    title: "Guidelines",
    pages: [
      // {
      //   path: "guidelines/accessibility",
      //   title: "Accessibility",
      //   content: pageLoader(() => import("./guidelines/accessibility.md"))
      // },
      {
        path: "guidelines/color",
        title: "Color",
        content: pageLoader(() => import("./guidelines/color.js"))
      },
      // {
      //   path: "guidelines/content",
      //   title: "Content",
      //   content: pageLoader(() => import("./guidelines/content.md"))
      // },
      {
        path: "guidelines/icons",
        title: "Icons",
        content: pageLoader(() => import("./guidelines/iconography.md"))
      },
      // {
      //   path: "guidelines/grid",
      //   title: "Grid",
      //   content: pageLoader(() => import("./guidelines/grid.md"))
      // },
      {
        path: "guidelines/responsive.md",
        title: "Responsive",
        content: pageLoader(() => import("./guidelines/responsive.md"))
      },
      {
        path: "guidelines/typography",
        title: "Typography",
        content: pageLoader(() => import("./guidelines/typography.md"))
      }
    ]
  },
  // {
  //   title: "Team",
  //   pages: [
  //     {
  //       path: "team/members",
  //       title: "Designers",
  //       content: pageLoader(() => import("./team/profiles.md"))
  //     },
  //     {
  //       path: "team/roles",
  //       title: "Assignments",
  //       content: pageLoader(() => import("./team/roles.md"))
  //     },
  //     {
  //       path: "team/capabilities",
  //       title: "Service Menu",
  //       content: pageLoader(() => import("./team/capabilities.md"))
  //     },
  //   ]
  // },
  // {
  //   title: "Principals",
  //   pages: [
  //     {
  //       path: "team/principles/alignment",
  //       title: "Alignment",
  //       content: pageLoader(() => import("./team/principles/alignment.md"))
  //     },
  //     {
  //       path: "team/principles/contrast",
  //       title: "Contrast",
  //       content: pageLoader(() => import("./team/principles/contrast.md"))
  //     },
  //     {
  //       path: "team/principles/repetition",
  //       title: "Repetition",
  //       content: pageLoader(() => import("./team/principles/repetition.md"))
  //     },
  //     {
  //       path: "team/principles/direct",
  //       title: "Make it Direct",
  //       content: pageLoader(() => import("./team/principles/direct.md"))
  //     },
  //     {
  //       path: "team/principles/stay",
  //       title: "Stay on the Page",
  //       content: pageLoader(() => import("./team/principles/stay.md"))
  //     },
  //     {
  //       path: "team/principles/Keep it Lightweight",
  //       title: "Lightweight",
  //       content: pageLoader(() => import("./team/principles/lightweight.md"))
  //     },
  //     {
  //       path: "team/principles/invitation",
  //       title: "Provide an Invitation",
  //       content: pageLoader(() => import("./team/principles/invitation.md"))
  //     }, {
  //       path: "team/principles/transitions",
  //       title: "Use Transitions",
  //       content: pageLoader(() => import("./team/principles/transitions.md"))
  //     },
  //     {
  //       path: "team/principles/react",
  //       title: "React Immediately",
  //       content: pageLoader(() => import("./team/principles/react.md"))
  //     }
  //   ]
  // },
  // {
  //   path: "/team/gallery",
  //   title: "Gallery",
  //   content: pageLoader(() => import("./team/gallery.md")),
  // },
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
        hideFromMenu: true,
        content: pageLoader(() => import("./mypolicy/style/about.md"))
      },
      {
        path: "mypolicy/style/guide",
        title: "Styleguide",
        content: pageLoader(() => import("./mypolicy/style/styleguide.js"))
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
      },
      {
        path: "mypolicy/style/Nav/nav.md",
        title: "Navigation",
        content: pageLoader(() => import("./mypolicy/style/Nav/nav.md"))
      }

    ]
  },
  {
    title: "Insurance Portal",
    pages: [
      {
        path: "ip/about",
        hideFromMenu: true,
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
        path: "ip/legacy",
        title: "> > Legacy",
        content: pageLoader(() => import("./ip/style/color.md"))
      },
      {
        path: "ip/legacy/messages",
        title: "Messages",
        content: pageLoader(() => import("./ip/style/messages.md"))
      },
      {
        path: "ip/legacy/dropdown",
        title: "Dropdown",
        content: pageLoader(() => import("./ip/style/dropdown.md"))
      },
      {
        path: "ip/legacy/Buttons/buttons",
        title: "Button",
        content: pageLoader(() => import("./ip/style/Buttons/buttons.md"))
      },
      {
        path: "ip/legacy/Buttons/IconButton/iconButton",
        title: "Icon Button",
        content: pageLoader(() => import("./ip/style/Buttons/IconButton/iconButton.md"))
      },
      {
        path: "ip/legacy/Buttons/Links/links",
        title: "Links",
        content: pageLoader(() => import("./ip/style/Buttons/Links/links.md"))
      },
      {
        path: "ip/legacy/Badges/badges.md",
        title: "Badges",
        content: pageLoader(() => import("./ip/style/Badges/badges.md"))
      },
      {
        path: "ip/legacy/brand.md",
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
        path: "pixel/elements",
        title: "Overview",
        hideFromMenu: true,
        content: pageLoader(() => import("./pixel/elements/index.md"))
      },
      {
        path: "pixel/elements/block",  //path:"pixel/elements/block2", has the new tab approach
        title: "<Block />",
        content: pageLoader(() => import("./pixel/elements/block.md"))
      },
      {
        path:"pixel/elements/block2",
        title: "<BlockALT />",
        content: pageLoader(() => import("./pixel/elements/block.js"))
      },
      {
        path: "pixel/elements/buttons",
        title: "<Buttons />",
        content: pageLoader(() => import("./pixel/elements/button.md"))
      },
      {
        path: "pixel/elements/field",
        title: "<Field />",
        content: pageLoader(() => import("./pixel/elements/field.md"))
      },
      {
        path: "pixel/elements/icon",
        title: "<Icon />",
        content: pageLoader(() => import("./pixel/elements/icon.md"))
      },
      {
        path: "pixel/elements/label",
        title: "<Label />",
        content: pageLoader(() => import("./pixel/elements/label.md"))
      },
      {
        path: "pixel/elements/thing",
        title: "<Thing />",
        content: pageLoader(() => import("./pixel/elements/thing.md"))
      },
      {
        path: "pixel/elements/title",
        title: "<Title />",
        content: pageLoader(() => import("./pixel/elements/title.md"))
      },
    ]
  },
  {
    title: "Wrappers",
    pages: [
      {
        path: "pixel/wrappers",
        title: "Overview",
        hideFromMenu: true,
        content: pageLoader(() => import("./pixel/wrappers/index.md"))
      },
      {
        path: "pixel/wrappers/action",
        title: "<Action />",
        content: pageLoader(() => import("./pixel/wrappers/action.md"))
      },
      {
        path: "pixel/wrappers/actionBlock",
        title: "<ActionBlock />",
        content: pageLoader(() => import("./pixel/wrappers/actionBlock.md"))
      },
      {
        path: "pixel/wrappers/actionButton",
        title: "<ActionButton />",
        content: pageLoader(() => import("./pixel/wrappers/actionButton.md"))
      },
      {
        path: "pixel/wrappers/actionLink",
        title: "<ActionLink />",
        content: pageLoader(() => import("./pixel/wrappers/actionLink.md"))
      },
      // {
      //   path:"pixel/wrappers/control",
      //   title:"Control",
      //   content: pageLoader(() => import("./pixel/wrappers/control.md"))
      // },
      // {
      //   path:"pixel/wrappers/container_wrappers",
      //   title:"Container Wrappers",
      //   content: pageLoader(() => import("./pixel/wrappers/container_wrappers.md"))
      // },
      {
        path: "pixel/wrappers/flag",
        title: "<Flag />",
        content: pageLoader(() => import("./pixel/wrappers/flag.md"))
      },
      {
        path: "pixel/wrappers/tag",
        title: "<Tag />",
        content: pageLoader(() => import("./pixel/wrappers/tag.md"))
      },
      {
        path: "pixel/wrappers/ui",
        title: "<UI />",
        content: pageLoader(() => import("./pixel/wrappers/ui.md"))
      },
    ]
  },
  {
    title: "Containers",
    pages: [
      {
        path: "pixel/containers",
        title: "Overview",
        hideFromMenu: true,
        content: pageLoader(() => import("./pixel/containers/index.md"))
      },
      {
        path: "pixel/containers/app",
        title: "<App />",
        content: pageLoader(() => import("./pixel/containers/app.md"))
      },
      {
        path: "pixel/containers/card",
        title: "<Card />",
        content: pageLoader(() => import("./pixel/containers/card.md"))
      },
      {
        path: "pixel/containers/drawer",
        title: "<Drawer />",
        content: pageLoader(() => import("./pixel/containers/drawer.md"))
      },
      {
        path: "pixel/containers/form",
        title: "<Form />",
        content: pageLoader(() => import("./pixel/containers/form.md"))
      },
      {
        path: "pixel/containers/group",
        title: "<Group />",
        content: pageLoader(() => import("./pixel/containers/group.md"))
      },
      {
        path: "pixel/containers/page",
        title: "<Page />",
        content: pageLoader(() => import("./pixel/containers/page.md"))
      },
      // {
      //   path:"pixel/containers/panel",
      //   title:"<Panel />",
      //   content: pageLoader(() => import("./pixel/containers/panel.md"))
      // },
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
        path: "pixel/style/tokens",
        title: "CSS Tokens",
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
        path: "pixel/data",
        title: "> > Data",
        content: pageLoader(() => import("./pixel/data/about.md"))
      },
      {
        path: "pixel/data/entry",
        title: "Input",
        content: pageLoader(() => import("./pixel/data/about.md"))
      },
      {
        path: "pixel/data/display",
        title: "Output / Display",
        content: pageLoader(() => import("./pixel/data/display.md"))
      },
      {
        path: "pixel/data/formatting",
        title: "Formatting",
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
      validationSchema,
      jQuery
    }}
    title="CSAA"
    theme={{
      pageHeadingBackground: "#00529A",
      brandColor: "#00529A",
      sidebarColorText: "#00529A",
      sidebarColorTextActive: "#ED1C2E",
      linkColor: "#ED1C2E"
    }}
    scripts={["/js/nav.js"]}
    logoSrc="/aaa-logo.svg"
    useBrowserHistory={true}
    pages={pages}
  />,
  document.getElementById("catalog")
);
