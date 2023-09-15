const { lazy } = require("react");

export const routes = [
  {
    path: "/components",
    element: lazy(() => import("pages/Components")),
  },
];
