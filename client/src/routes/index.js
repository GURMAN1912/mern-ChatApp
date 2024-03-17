import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";


import DashboardLayout from "../layouts/dashboard";
import MainLayout from "../layouts/main/index"

import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";

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
      path:"/auth",
      element:<MainLayout/>,
      children:[
        {element :<Login/>, path:"login"},
        {element :<Register/>, path:"register"},
        {element :<ResetPassword/>, path:"reset-password"},
        {element:<NewPassword/> ,path:"new-password"}
      ]
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "setting", element: <Settings /> },
        { path: "groups", element: <Group /> },
        { path: "calls", element: <Call /> },
        
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
const Login=Loadable(
  lazy(() => import("../pages/auth/Login")),
);
const Register=Loadable(
  lazy(()=>import("../pages/auth/Register"))
)
const ResetPassword=Loadable(
  lazy(()=>import("../pages/auth/ResetPassword"))
)
const NewPassword=Loadable(
  lazy(()=>import("../pages/auth/NewPassword")) 
)
const Group=Loadable(
  lazy(()=>import("../pages/dashboard/Groups")) 
)
const Call=Loadable(
  lazy(()=>import('../pages/dashboard/Call'))
)
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
