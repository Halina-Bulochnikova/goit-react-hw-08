import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";


const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error("Ця сторінка тільки для залогованих");
    }
  }, [isLoggedIn]);

  return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
