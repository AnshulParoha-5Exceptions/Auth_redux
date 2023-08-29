import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
        user: localStorage.getItem('user') === 'true',
    },
    reducers: {
        setUser: (state, action) => action.payload,
        clearUser: (state) => null,
        login: (state, action) => {
            state.isAuthenticated = true
            state.user = action.payload
            localStorage.setItem('isAuthenticated', 'true'); // Store the authentication status
            localStorage.setItem('user', JSON.stringify(action.payload)); // Store user data as a JSON string
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
            localStorage.removeItem('isAuthenticated'); // Remove the authentication status
            localStorage.removeItem('user');
        }
    }
});

export const { login, logout, setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;