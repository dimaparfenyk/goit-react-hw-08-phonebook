import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { List } from './ContactList.styled';
import { ContactListItem } from 'components/ContactItem/ContactItem';
import { contactsSelectors } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactOperations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactsList = filteredContacts();

  return (
    contacts && (
      < List >
                {filteredContactsList.map(({ id, name, number }) => {
                    return (<ContactListItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                    />)
                })}
            </List>
        ));
};
