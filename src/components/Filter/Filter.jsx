import { useDispatch } from 'react-redux';
import { contactsSlice } from 'redux/contacts/contactsSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e =>
    dispatch(contactsSlice.actions.filteredContact(e.currentTarget.value));

  return (<Label>Find contacts by name
        <Input
            type="text"
            name='filter'
            onChange={handleChangeFilter}
        />
    </Label>);
};
