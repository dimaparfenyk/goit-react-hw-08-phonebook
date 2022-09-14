import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, registerUser, logIn, logoutUser } from './auth-operations';

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
        [registerUser.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logoutUser.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = false;
        },
        [getCurrentUser.pending](state) {
            state.isRefreshing = true;
        },
        [getCurrentUser.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.isRefreshing = false;
            state.isLoggedIn = true;
        },
        [getCurrentUser.rejected](state) {
            state.isRefreshing = false;
        },
    }
});

export default authSlice.reducer;