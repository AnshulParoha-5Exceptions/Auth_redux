import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from '../../counter/counterSlice';
import todoReducer from '../../todoList/todoSlice';
import authReducer from '../slices/authSlice';
import cartReducer from '../slices/cartSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    auth: authReducer,
    cart: cartReducer
});

export default rootReducer;