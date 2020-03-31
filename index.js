import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

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
      }
    ]
  }

];

ReactDOM.render(
  <Catalog
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
