import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={s.userMenu}>
      <span className={s.userName}>Ласкаво просимо, {user.name}</span>
      <button
        onClick={() => dispatch(logoutThunk())}
        className={s.logoutBtn}
        size="small"
        variant="contained"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
