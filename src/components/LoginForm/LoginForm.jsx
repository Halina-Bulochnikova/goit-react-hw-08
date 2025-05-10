import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const ContactFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Неправильний формат")
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 20 символів")
      .trim()
      .required("Поле обов'язкове"),

    password: Yup.string()
      .min(6, "Мінімум 8 символів")
      .max(50, "Максимум 20 символів")
      .trim()
      .required("Поле обов'язкове"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(loginThunk(values));
  };
  return (
    <div>
      <Formik
        validationSchema={ContactFormSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.formBlock}>
          <label className={s.label}>
            <span>Email</span>
            <Field className={s.field} type="email" name="email"></Field>
            <ErrorMessage className={s.error} name="email" component="div" />
          </label>

          <label className={s.label}>
            <span>Password</span>
            <Field className={s.field} type="password" name="password"></Field>
            <ErrorMessage className={s.error} name="password" component="div" />
          </label>
       
        <Link className="text-lg text-center" to="/register">
          Спочатку зареєструйся
        </Link>
        <button className={s.link} type="submit">
          Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
