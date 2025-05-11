import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectToken } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  if (!isLoggedIn && !token) {
    toast.error("This is private page for logged users");
    return <Navigate to="/login" />;
  }
  return children;
};
export default PrivateRoute;
