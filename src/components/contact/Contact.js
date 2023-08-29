import { useDispatch, useSelector } from 'react-redux';
import { OneContact } from './Contact.styled';
import { getContacts, getFilter } from 'redux/selectores';
import { deleteContact } from 'redux/contactsSlice';

const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log(contacts);
  console.log(filter);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  // const filteredContacts = [];
  const onDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  return filteredContacts.map(({ id, name, number }) => {
    return (
      <OneContact key={id} className="list-group-item">
        <p>{name}</p>
        <span>{number}</span>
        <button
          onClick={() => onDeleteClick(id)}
          type="button"
          className="btn btn-dark"
        >
          Delete
        </button>
      </OneContact>
    );
  });
};

export { Contact };
