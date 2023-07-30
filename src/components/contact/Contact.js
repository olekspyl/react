import { OneContact } from './Contact.styled';

const Contact = ({ listContacts, onDeleteClick }) => {
  return listContacts.map(({ id, name, number }) => {
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
