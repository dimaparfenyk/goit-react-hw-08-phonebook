import { useEffect} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operation';
import { List} from "./ContactList.styled";
import { ContactListItem } from "components/ContactItem/ContactItem";


export const ContactList = () => {
const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts =  ()=>{
      const normalizedFilter = filter.toLowerCase();
      
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
 }
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

ContactList.proptype = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
  ),
};
  
