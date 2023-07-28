import { Contact } from '../contact';
import { ContactsEl } from './Contacts.styled';

const Contacts = ({ listContacts }) => {
  return (
    <ContactsEl>
      <h2>Contacts</h2>
      <ul className="list-group">
        <Contact listContacts={listContacts}></Contact>
      </ul>
    </ContactsEl>
  );
};

export { Contacts };
