import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
   set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
   },
   unset() {
      axios.defaults.headers.common.Authorization = '';
   },
};

export const registerUser = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const logIn = createAsyncThunk('auth/login', async user => {
    try {
        const { data } = await axios.post('/users/login', user);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const logoutUser = createAsyncThunk('auth/logout', async user => {
    try {
        const { data } = await axios.post('/users/logout', user);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const getCurrentUser = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

         if (persistedToken === null) {
         return thunkAPI.rejectWithValue();
        };

        token.set(persistedToken);
    
    try {
        const { data } = await axios.get('/users/current');
        return data;
    } catch (error) {
        console.log(error);
    }
});


