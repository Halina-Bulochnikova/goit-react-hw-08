import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const setActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
      <nav className={s.navigation}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
        <NavLink className={setActiveClass} to="/contacts">
          Contacts
          </NavLink>
        )}
      </nav>
    );
};

export default Navigation;