import s from "./App.module.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { refreshUserThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const Layout = lazy(() => import("../Layout/Layout"));
const PrivateRoute = lazy(() => import("../PrivateRoute/PrivateRoute"));
const RestrictedRoute = lazy(() =>
  import("../RestrictedRoute/RestrictedRoute")
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div className={s.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute component={<HomePage />} redirectTo="/" />
            }
          ></Route>

          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          ></Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>

        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="/register" element={<RegistrationPage />}></Route>
      </Routes>
    </div>
  );
};
export default App;
