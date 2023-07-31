export const Searchbar = ({ searchImages }) => {
  const handleChange = e => {
    this.props.searchImages(e.target.value);
  };

  return (
    <header className="searchbar">
      <form className="form">
        <button type="submit" className="button" onClick={searchImages}>
          <span className="button-label">Search</span>
        </button>
        <input
          className="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
