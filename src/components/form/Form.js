import { useState } from 'react';
import { FormEl } from './Form.styled';

export const Form = ({ getFormData }) => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  const data = { name, number };

  const handleSubmit = e => {
    e.preventDefault();
    getFormData(data);
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else {
      setNumber(e.target.value);
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
          onChange={handleChange}
          value={name}
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
          onChange={handleChange}
          value={number}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add to contact list
      </button>
    </FormEl>
  );
};
