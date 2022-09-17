import { Container, Box  } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function ContactsPage() {
  return (
    <>
      <Container>
        <h2>Phonebook</h2>
        <ContactForm />
      <h3>Contacts</h3>
        <Box>
        <Filter />
          <ContactList />
          </Box>
      </Container>
    </>
  );
}
