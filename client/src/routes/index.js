import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";


import DashboardLayout from "../layouts/dashboard";


import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import Setting from "../pages/dashboard/Setting";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "setting", element: <Settings /> },
        
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
//dynamic loading using lazy
const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);
const Settings = Loadable(
  lazy(() => import("../pages/dashboard/Setting")),
);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
