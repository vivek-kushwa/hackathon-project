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
  {
    path: "/profile",
    element: lazy(() => import("pages/Profile")),
  },
  {
    path: "/jobs",
    element: lazy(() => import("pages/Jobs")),
  },
];

export const privateRoutes = [
  {
    path: "/profile",
    element: lazy(() => import("pages/Profile")),
  },
  {
    path: "/jobs",
    element: lazy(() => import("pages/Jobs")),
  },
];
