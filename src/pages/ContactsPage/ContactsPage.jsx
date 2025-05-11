import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import { lazy } from "react";

const ContactList = lazy(() =>
  import("../../components/ContactList/ContactList")
);
const ContactForm = lazy(() =>
  import("../../components/ContactForm/ContactForm.jsx")
);
const SearchBox = lazy(() =>
  import("../../components/SearchBox/SearchBox.jsx")
);

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
