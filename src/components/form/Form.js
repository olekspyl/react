import { FormEl } from './Form.styled';
import { getContacts } from 'redux/selectores';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const Form = ({ getFormData }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: e.target.name.value.trim(),
      number: e.target.number.value.trim(),
    };

    const existedContactName = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    const existedContactNumber = contacts.find(
      contact => contact.number === data.number
    );

    const filteredContact = contacts.filter(
      contact => contact.number === data.number
    );

    if (!existedContactName && !existedContactNumber) {
      dispatch(addContact(data));
    } else if (existedContactNumber) {
      window.alert(
        `This number has already saved in the phonebook as ${filteredContact[0].name}`
      );
    } else {
      alert('Contact has already saved in the phonebook');
    }
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <h1>Phonebook</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="name"
          aria-describedby="nameHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Number
        </label>
        <input
          type="tel"
          className="form-control"
          id="number"
          aria-describedby="nameHelp"
          name="number"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add to contact list
      </button>
    </FormEl>
  );
};
