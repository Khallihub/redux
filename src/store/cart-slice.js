import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
        state.items[itemIndex].total += action.payload.price;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity++;
    },
    increaseQuantity(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items[itemIndex].quantity++;
      state.items[itemIndex].total += state.items[itemIndex].price;
      state.totalQuantity++;
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (state.items[itemIndex].quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        state.items[itemIndex].quantity--;
        state.items[itemIndex].total -= state.items[itemIndex].price;
      }
        state.totalQuantity--;
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});



export const cartActions = cartSlice.actions;
export default cartSlice.reducer;


