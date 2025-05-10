import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectUser } from "../../redux/auth/selectors";

const setActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("USER:", user);
  return (
    <div>
      <h2>Auth</h2>
      {isLoggedIn && user?.name && <h2>{user.name}</h2>}
      <nav className={s.navigation}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/contacts">
          Contacts
        </NavLink>
        {!isLoggedIn && (
        <>
          <NavLink className={setActiveClass} to="/login">
            Login
          </NavLink>
          <NavLink className={setActiveClass} to="/register">
            Register
          </NavLink>
        </>
        )}
      </nav>
    </div>
  );
};

export default Header;
