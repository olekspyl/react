import { Component } from 'react';
import { FormEl } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getFormData({ ...this.state });
    this.resetInput();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormEl onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            value={number}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add to contact list
        </button>
      </FormEl>
    );
  }
}

export { Form };
