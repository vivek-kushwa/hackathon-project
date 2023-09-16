import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./Routes";

export function PrivateRoute() {
  console.log("Private Route");
  return (
    <Routes>
      {routes.map((route) => (
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
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
