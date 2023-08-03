import {Component} from 'react'
import { SearchbarEl, SearchForm, SearchBtn, SearchFormLabel, SearchFormInput } from './Searchbar.styled'

export class Searchbar extends Component {
  state = {
  filter: '',
}

  handleChange = e => {
    const filter = e.target.value
    this.setState({ filter });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.filter)
    this.setState({ filter: '' });

  }

  render() {
    return (
    <SearchbarEl className="searchbar">
      <SearchForm className="form" onSubmit={this.onSubmit}>
        <SearchBtn type="submit" className="button">
          <SearchFormLabel className="button-label">Search</SearchFormLabel>
        </SearchBtn>
        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.filter}
        />
      </SearchForm>
    </SearchbarEl>
  );
  }
  
};
