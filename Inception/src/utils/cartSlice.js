import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[],
    },
    reducers: {
        //reducer funtions
        addItem: (state,action)=>{
            //mutating the state here (directly modifying)
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            state.items.pop();
        }, 
        clearCart: (state) =>{
            state.items.length = 0;
        },
    },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;