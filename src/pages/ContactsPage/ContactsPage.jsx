import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return <div>ContactsPage</div>;
};

export default ContactsPage;
