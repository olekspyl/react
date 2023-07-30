import { Contact } from '../contact';
import { ContactsEl } from './Contacts.styled';

const Contacts = ({ listContacts, onDeleteClick }) => {
  return (
    <ContactsEl>
      <h2>Contacts</h2>
      <ul className="list-group">
        <Contact
          listContacts={listContacts}
          onDeleteClick={onDeleteClick}
        ></Contact>
      </ul>
    </ContactsEl>
  );
};

export { Contacts };
