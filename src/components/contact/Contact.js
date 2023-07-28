import { OneContact } from './Contact.styled';

const Contact = ({ listContacts }) => {
  return listContacts.map(({ id, name, number }) => {
    return (
      <OneContact key={id} className="list-group-item">
        <p>{name}</p>
        <span>{number}</span>
      </OneContact>
    );
  });
};

export { Contact };
