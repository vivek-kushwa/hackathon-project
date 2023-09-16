const { lazy } = require("react");

export const routes = [
  {
    path: "/components",
    element: lazy(() => import("pages/Components")),
  },
  {
    path: "/login",
    element: lazy(() => import("pages/Login")),
  },
  {
    path: "/sign-up",
    element: lazy(() => import("pages/SignUp")),
  },
];
