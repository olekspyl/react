import { useState } from 'react';
import {
  SearchbarEl,
  SearchForm,
  SearchBtn,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    const filter = e.target.value;
    setFilter(filter);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(filter);
    setFilter('');
  };

  return (
    <SearchbarEl className="searchbar">
      <SearchForm className="form" onSubmit={onSubmitForm}>
        <SearchBtn type="submit" className="button">
          <SearchFormLabel className="button-label">Search</SearchFormLabel>
        </SearchBtn>
        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={filter}
        />
      </SearchForm>
    </SearchbarEl>
  );
};
