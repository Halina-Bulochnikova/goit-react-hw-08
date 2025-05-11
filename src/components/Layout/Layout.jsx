import { Outlet } from "react-router-dom";
import { lazy } from "react";

const AppBar = lazy(() => import("../AppBar/AppBar"));

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
export default Layout;
