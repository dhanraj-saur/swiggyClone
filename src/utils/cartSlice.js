import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        storeDetails: {},
        
    },
    reducers: {

        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state, action) => {
            state.items.length = 0
        },
        addStore: (state, action) => {
            state.storeDetails = action.payload
            // console.log(action.payload);
        }, 
    
    }
})
export const { addItem, removeItem, clearCart, addStore } = cartSlice.actions;
export default cartSlice.reducer;