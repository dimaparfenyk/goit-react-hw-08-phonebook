import { ListItem,SubText, Text, Button} from "components/ContactList/ContactList.styled"
import { useDispatch, useSelector } from 'react-redux';
import { contactOperations, contactSelectors } from "components/redux/contacts";

export const ContactListItem = ({ name, phone, id}) => { 
    const dispatch = useDispatch();
    // const contacts = useSelector(contactSelectors.getContacts);
    
    return(<ListItem >
                <SubText>{name}:</SubText>
                <Text>{phone}</Text>
        <Button
            type='button'
            onClick={() => dispatch(contactOperations.removeContact(id))}>Удалить
        </Button>  
            </ListItem>)
}