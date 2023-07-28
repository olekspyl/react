import { FilterEl } from './Filter.styled';

const Filter = ({ handleFilterChange, filter }) => {
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
        onChange={handleFilterChange}
      ></input>
    </FilterEl>
  );
};

export { Filter };
