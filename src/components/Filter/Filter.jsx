import { useDispatch } from 'react-redux'
import {contactSlice} from 'redux/contacts/contacts-slice';
import {Input,Label} from "./Filter.styled";

export const Filter = () => {
    const dispatch = useDispatch();
    
    const handleChangeFilter = e => {
    dispatch(contactSlice.actions.filteredContact(e.currentTarget.value))
    };

    return (<Label>Find contacts by name
        <Input
            type="text"
            name='filter'
            onChange={handleChangeFilter}
        />
    </Label>);
};

