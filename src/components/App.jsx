import { Component } from "react";
import { Form } from "./form";
import { Contacts } from "./contacts";
import { Filter } from "./filter";
import { nanoid } from 'nanoid';


class App extends Component {
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  name: '',
   number: '',
  filter: '',
  }
  
  getFormData = (data) => {
    const newContact = { ...data, id: nanoid() };
    return this.setState(prevState => ({contacts: [newContact, ...prevState.contacts]}))
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  } 



  
  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact => contact.name.includes(filter));
    return (
      <>
        <Form getFormData={this.getFormData}></Form>
        <Filter handleFilterChange={this.handleFilterChange} value={filter}></Filter>
        <Contacts listContacts={filteredContacts}></Contacts>      
        </>
        
      );
  }
};

export { App };