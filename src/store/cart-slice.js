import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-practice-f018a-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
        dispatch(
            uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!",
            })
        );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
