import { Outlet } from "react-router-dom";
import { lazy } from "react";
import s from './Layout.module.css';

const AppBar = lazy(() => import("../AppBar/AppBar"));

const Layout = () => {
  return (
    <div className={s.layot}>
      <AppBar />
      <Outlet />
    </div>
  );
};
export default Layout;
