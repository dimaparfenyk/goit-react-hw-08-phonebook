import { useState } from "react";
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operation';
import {contactsSelectors} from 'redux/contacts/contacts-selectors'

import { Button, Container, Label, FormInput} from "./ContactForm.styled";

export function ContactForm() {
    const [ name, setName ] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(contactsSelectors.getContacts);
    const dispatch = useDispatch();
   
    // const nameInputId = nanoid();
    // const phoneInputId = nanoid();
  
   const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNumber = e => setNumber(e.currentTarget.value);

    const handleSubmit= e => {
        e.preventDefault();
        
         const newContact = { name, number };
      if (
         contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
      ) {
         return (`Контакт с именем ${name} уже существует`);
      }
      dispatch(addContact(newContact));
      setName('');
      setNumber('');
   };

    // const setContact = value => {
    //     if (contacts.every(({ name }) =>
    //         name.toLowerCase() !== value.name.toLowerCase())) {
    //         dispatch(contactOperations.addContact(value))
    //     } else {
    //         alert(`${value.name} is already in contacts`);
    //     }
    // };
    
    return (
            <form onSubmit={handleSubmit}>
                <Container>
                <Label >Name
                    <FormInput
                        type="text"
                        name="name"
                       
                        value={name}
                        onChange={onChangeName}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label >Number
                    <FormInput
                        type="tel"
                        name="number"
                        value={number}
                        onChange={onChangeNumber}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <Button type="submit"> Add Contact </Button>     
            </Container>
            </form>
        );
}; 

