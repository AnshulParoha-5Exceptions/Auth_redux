import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

// Check if isAuthenticated is stored in local storage
const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

// Parse the stored user data from local storage
let storedUserData = null;
try {
    storedUserData = JSON.parse(localStorage.getItem('user'));
} catch (error) {
    console.error('Error parsing stored user data:', error);
}

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
        auth: {
            isAuthenticated,
            user: storedUserData,
        }
    },
});
