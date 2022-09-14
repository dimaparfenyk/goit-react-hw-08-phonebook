import { createSlice } from '@reduxjs/toolkit';
import {
    getContacts,
    addContact,
    removeContact
} from './contacts-operation';

const initialState = {
    contacts: [],
    isRefresh: false,
    isLoading:false,
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    extrareducers: {
        [getContacts.pending]({ isLoading }) {
            isLoading = true;
        },
        [getContacts.fulfilled](state, { payload }) {
            state.contacts = payload;
            state.isLoading = false;
        },
        [getContacts.rejected]({ isLoading }) {
            isLoading = false;
        },

        [addContact.pending]({ isRefresh }) {
            isRefresh = true;
        },
        [addContact.fulfilled](state, {payload}) {
            state.contacts.push(payload);
            state.isRefresh=false
        },
        [addContact.rejected]({ isRefresh }) {
            isRefresh = false;
        },

        [removeContact.fulfilled](state, { payload }){
             state.contacts = state.contacts.filter(({ id }) => id !== payload);
        }
    }
});

export default contactSlice.reducer;
