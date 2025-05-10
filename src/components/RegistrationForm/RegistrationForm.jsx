import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Мінімум 2 символи")
      .max(50, "Максимум 20 символів")
      .trim()
      .required("Поле обов'язкове"),
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
    dispatch(registerThunk(values));
  };
  return (
    <Formik
      validationSchema={ContactFormSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={s.formBlock}>
        <label className={s.label}>
          <span className={s.labelText}>Name</span>
          <Field className={s.field} type="name" name="name"></Field>
          <ErrorMessage className={s.error} name="name" component="div" />
        </label>

        <label className={s.label}>
          <span className={s.labelText}>Email</span>
          <Field className={s.field} type="email" name="email"></Field>
          <ErrorMessage className={s.error} name="email" component="div" />
        </label>

        <label className={s.label}>
          <span className={s.labelText}>Password</span>
          <Field className={s.field} type="password" name="password"></Field>
          <ErrorMessage className={s.error} name="password" component="div" />
        </label>
     
      <Link className={s.link} to="/login">
        Ти вже зареєстрований
      </Link>
      <button className={s.formButton} type="submit">
        Register
        </button>
      </Form>
    </Formik> 
  );
};

export default RegistrationForm;
