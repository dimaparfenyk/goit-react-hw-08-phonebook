import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk('contacts/getContacts',
    async () => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        console.log(error);
    }
    });

    export const addContact = createAsyncThunk('contacts/newContact',
    async newContact => {
    try {
        const { data } = await axios.post('/contacts', newContact);
        return data;
    } catch (error) {
        console.log(error);
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
