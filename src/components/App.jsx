import {ContactForm} from "./ContactForm/ContactForm";
import {ContactList} from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, Box } from "./App.styled";

export const App = () => {

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
    
      <h2>Contacts</h2>
      <Box>
        <Filter/>
        <ContactList/>
      </Box>
    </Container>
  );
};

 