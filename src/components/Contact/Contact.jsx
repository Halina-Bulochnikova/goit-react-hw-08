import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.contactItem}>
      <div className={s.contatcCard}>
        <span className={s.nameNumber}>
          <FaUserAlt className={s.contactElem} size="16" />{" "}
          <p className={s.name}>{name} </p>
        </span>
        <span className={s.nameNumber}>
          <FaPhone className={s.contactElem} size="16" />{" "}
          <p className={s.name}>{number} </p>
        </span>
      </div>
      <button className={s.deleteButton} onClick={handleDelete}>
        DELETE
      </button>
    </li>
  );
};

export default Contact;
