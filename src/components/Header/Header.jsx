import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from './Header.module.css';


const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
}

const Header = () => {
  return (
    <div>
      <h2>Auth</h2>
      <nav className={s.navigation}>
        <NavLink className={setActiveClass} to="/">Home</NavLink>
        <NavLink className={setActiveClass} to="/contacts">Contacts</NavLink>
        <NavLink className={setActiveClass} to="/login">Login</NavLink>
        <NavLink className={setActiveClass} to="/register">Register</NavLink>
      </nav>
    </div>
  );
};
export default Header;