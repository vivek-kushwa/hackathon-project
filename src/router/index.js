import { PageHeader } from "layout";
import { Navigate, Route, Routes } from "react-router-dom";
import { PAGE_ICONS } from "utils/constant";
import { routes } from "./Routes";

const RoutesPath = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <>
              {/* <PageHeader
                PageTitle={"Courses"}
                PageIcon={PAGE_ICONS["Courses"]}
              /> */}
              <route.element />.
            </>
          }
        ></Route>
      ))}
    </Routes>
  );
};

export default RoutesPath;
