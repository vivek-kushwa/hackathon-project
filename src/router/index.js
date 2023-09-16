import { PageHeader } from "layout";
import { Navigate, Route, Routes } from "react-router-dom";
import { PAGE_ICONS } from "utils/constant";
import { routes } from "./Routes";
import { PrivateRoute } from "./PrivateRoute";

const RoutesPath = () => {
  const auth=""
  return (
    <Routes>
      {auth?.role === "" ? (
        <>
          <Route path="/*" element={<PrivateRoute />} />
        </>
      ) : (
        <>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <>
                  <route.element />.
                </>
              }
            ></Route>
          ))}
          <Route path="*" element={<Navigate to="/home">Back Home</Navigate>} />
        </>
      )}
    </Routes>
  );
};

export default RoutesPath;
