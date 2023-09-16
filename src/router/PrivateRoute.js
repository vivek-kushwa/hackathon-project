import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, routes } from "./Routes";

export function PrivateRoute() {
  console.log("Private Route");
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <>
              {/* <Header /> */}
              <route.element />
            </>
          }
        ></Route>
      ))}
      <Route path="*" element={<Navigate to="/jobs" />} />
    </Routes>
  );
}
