import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter"; 
import { Container, Box } from "components/App.styled";

export default function ContactPage() {

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
}