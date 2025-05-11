import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AuthNav.module.css";

const setActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthNav = () => {
    return (
      <div className={s.authNavigation}>
        <NavLink className={setActiveClass} to="/login">
          Login
        </NavLink>
        <NavLink className={setActiveClass} to="/register">
          Register
        </NavLink>
      </div>
    );
};

export default AuthNav;
