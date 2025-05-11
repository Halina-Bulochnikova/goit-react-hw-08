import s from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { lazy } from "react";

const Navigation = lazy(() => import('../Navigation/Navigation'));
const AuthNav = lazy(() => import('../AuthNav/AuthNav'));
const UserMenu = lazy(() => import('../UserMenu/UserMenu'));

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
