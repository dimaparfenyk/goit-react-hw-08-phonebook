import { ListItem,SubText, Text, Button} from "components/ContactList/ContactList.styled"
import { useDispatch} from 'react-redux';
import {  removeContact} from 'redux/contacts/contacts-operation'

export const ContactListItem = ({ name, number, id}) => { 
    const dispatch = useDispatch();
   
    return(<ListItem >
                <SubText>{name}:</SubText>
                <Text>{number}</Text>
        <Button
            type='button'
            onClick={() => dispatch(removeContact(id))}>Удалить
        </Button>  
            </ListItem>)
}