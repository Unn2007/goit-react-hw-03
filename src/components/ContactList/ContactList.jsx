import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import PropTypes from "prop-types";

function ContactList({ dataList, onDelete }) {
  const contactItems = dataList.map((item) => {
    return (
      <li key={item.id}>
        <Contact data={item} onDelete={onDelete} />
      </li>
    );
  });
  return <ul className={css.contactList}>{contactItems}</ul>;
}

export default ContactList;

ContactList.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),

  onDelete: PropTypes.func.isRequired,
};
