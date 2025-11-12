import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
            // action.payload represents item that we've passed as parameter in product component
        },
        
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
            // means state should retain those items whose id is not mentioned in remove function
        }
    }
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
