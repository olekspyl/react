import { Component } from "react";
import { Form } from "./form";
import { Contacts } from "./contacts";
import { Filter } from "./filter";
import { nanoid } from 'nanoid';


const KEY_STORAGE='contact'

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


  addContact = (data) => {
    const { contacts } = this.state;
    const newContact = { ...data, id: nanoid() };
    const existedContactName = contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
    const existedContactNumber = contacts.find(contact => contact.number === newContact.number);
    const filteredContact = contacts.filter(contact => contact.number === newContact.number);
    
    localStorage.setItem(KEY_STORAGE, JSON.stringify(newContact));

    if (!existedContactName && !existedContactNumber) {
          return this.setState(prevState => ({contacts: [newContact, ...prevState.contacts]}))
    } else if (existedContactNumber) {
      window.alert(`This number has already saved in the phonebook as ${filteredContact[0].name}`)
           }
     else {
      alert('Contact has already saved in the phonebook')
    }
  }

  filterContacts = (e) => {
    this.setState({ filter: e.target.value });
  } 

  deleteContact = (id) => {
    const { contacts } = this.state;
    const idx = contacts.findIndex(contact => contact.id === id);
    contacts.splice(idx, 1);
    this.setState({ contacts: this.state.contacts });
   }

  
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact => contact.name.includes(filter));

    localStorage.setItem(KEY_STORAGE, JSON.stringify(contacts));

    return (
      <>
        <Form getFormData={this.addContact}></Form>
        <Filter handleFilterChange={this.filterContacts} value={filter}></Filter>
        <Contacts listContacts={filteredContacts} onDeleteClick={this.deleteContact}></Contacts>      
        </>
        
      );
  }
};

export { App };