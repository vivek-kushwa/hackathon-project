import { Loader } from "components";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const LazyApp = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <>
      <Suspense fallback={<Loader />}>
         <LazyApp />
      </Suspense>
   </>
);

reportWebVitals();
