import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalQuantity: 0, changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.changed = true;
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
      state.changed = true;
      state.items[itemIndex].quantity++;
      state.items[itemIndex].total += state.items[itemIndex].price;
      state.totalQuantity++;
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.changed = true;
      if (state.items[itemIndex].quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        state.items[itemIndex].quantity--;
        state.items[itemIndex].total -= state.items[itemIndex].price;
      }
      state.totalQuantity--;
    },
    removeItem(state, action) {
      state.changed = true;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
