import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { lazy } from "react";

const Contact = lazy(() => import("../Contact/Contact"));

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={s.contaktList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}
export default ContactList;
