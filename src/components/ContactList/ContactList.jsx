import React from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { contactOperations, contactSelectors } from "components/redux/contacts";

import { List} from "./ContactList.styled";
import { ContactListItem } from "components/ContactItem/ContactItem";
import { useEffect } from "react";

export const ContactList = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.value);
    const contacts = useSelector(contactSelectors.getContacts);

    const filteredItems = filter
        ? contacts.filter(({ name }) => name.toLowerCase().includes(filter))
        : contacts;
    
    useEffect(() => {
        dispatch(contactOperations.getContacts())
    }, [dispatch])
    
    return (<List>
        {contacts && filteredItems.map(({ name, phone, id}) =>
            <ContactListItem
                key={id}
                id={id}
                name={name}
                phone={phone}
                />   
        )}
    </List>)
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
  
