import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [2,3],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    cleartCart: () => {
      state.items = [];
    },
  },
});

export const { addItems, removeItem, cleartCart } = cartSlice.actions;
export default cartSlice.reducer;
