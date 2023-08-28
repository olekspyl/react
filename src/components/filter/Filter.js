import { useDispatch, useSelector } from 'react-redux';
import { FilterEl } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectores';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterContacts = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterEl className="mb-3">
      <label htmlFor="filter" className="form-label">
        Find contact by name
      </label>
      <input
        type="text"
        name="filter"
        className="form-control"
        id="filter"
        value={filter}
        aria-describedby="filterHelp"
        onChange={filterContacts}
      ></input>
    </FilterEl>
  );
};

export { Filter };
