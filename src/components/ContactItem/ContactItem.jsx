import PropTypes from 'prop-types';
import { ListItem, Button,SubText, Text } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactOperations';

export const ContactListItem = ({ name, number, id}) => { 
    const dispatch = useDispatch();
   
    return(<ListItem >
                <SubText>{name}:</SubText>
                <Text>{number}</Text>
        <Button
            type='button'
            onClick={() => dispatch(deleteContact(id))}>Удалить
        </Button>  
            </ListItem>)
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
