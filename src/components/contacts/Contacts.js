import { Contact } from '../contact';
import { ContactsEl } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectores';

const Contacts = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      {!contacts.length && <p>Sorry, but you don't have any contacts</p>}
      <ContactsEl>
        <h2>Contacts</h2>
        <ul className="list-group">
          <Contact />
        </ul>
      </ContactsEl>
    </>
  );
};

export { Contacts };
