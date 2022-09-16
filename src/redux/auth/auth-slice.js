import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing:false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logOut.fulfilled](state, _) {
            state.user = { name: null, email: null };
            state.isLoggedIn = false;
        },
        [authOperations.fetchCurrentUser.pending](state) {
            state.isRefreshing = true;
            state.isFetchingCurrentUser = true;
        },
        [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isRefreshing = false;
            state.isLoggedIn = true;
        },
        [authOperations.fetchCurrentUser.rejected](state) {
            state.isRefreshing = false;
        },
    }
});

export default authSlice.reducer;