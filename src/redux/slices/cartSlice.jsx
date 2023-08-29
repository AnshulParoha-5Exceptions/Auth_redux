import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    return savedCart ? savedCart : [];
  };
  
  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadCartFromLocalStorage(),
        totalPrice: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            state.items.push(newItem);
            state.totalPrice += newItem.price;
            saveCartToLocalStorage(state.items);
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const itemToRemove = state.items.find(item => item.id === itemId);
            if (itemToRemove) {
                state.items = state.items.filter(item => item.id !== itemId);
                state.totalPrice -= itemToRemove.price;
                saveCartToLocalStorage(state.items);
            }
        },
        clearAll: (state) => {
            state.items = [];
            state.totalPrice = 0;
            saveCartToLocalStorage([]);
        },

    }
});

export const { addItem, removeItem, clearAll } = cartSlice.actions;
export default cartSlice.reducer;
