import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async () => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        console.log(error);
    }
    });

    export const addContact = createAsyncThunk('contacts/addContact',
    async (contact, thunkAPI) => {
    try {
        const { data } = await axios.post('/contacts', contact);
        thunkAPI.dispatch(fetchContacts());
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
        });
    
    export const removeContact = createAsyncThunk('contacts/removeContact',
    async id => {
    try {
        await axios.delete(`/contacts/${id}`);
        return id;
    } catch (error) {
        console.log(error);
    }
    });
