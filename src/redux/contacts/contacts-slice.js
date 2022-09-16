import { createSlice } from '@reduxjs/toolkit';
import {
    fetchContacts,
    addContact,
    removeContact
} from './contacts-operation';

const initialState = {
    contacts: [],
    filter: '',
    isRefreshing: false,
    isLoading:false,
}

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,

      reducers: {
    filteredContact: (state, action) => {
      state.filter = action.payload;
    },
    },
      
    extrareducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, { payload }) {
            state.contacts = payload;
            state.isLoading = false;
        },
        [fetchContacts.rejected](state) {
            state.isLoading = false;
        },

        [addContact.pending](state) {
            state.isRefreshing = true;
            state.isLoading = true;
        },
        [addContact.fulfilled](state, {payload}) {
            state.contacts.push(payload);
            state.isLoading = true;
            state.isRefreshing = false;
        },
        [addContact.rejected](state) {
            state.isRefreshing = false;
        },

        [removeContact.fulfilled](state, { payload }){
             state.contacts = state.contacts.filter(({ id }) => id !== payload);
        }
    }
});

