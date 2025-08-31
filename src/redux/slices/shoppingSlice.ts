import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ShoppingItem {
  id: number;
  name: string;
  quantity: number;
  category: string;
  notes?: string;
  imageUrl?: string;
  dateAdded?: string;
}

const savedLists: ShoppingItem[] = JSON.parse(localStorage.getItem("shoppingLists") || "[]");

const initialState = {
  lists: savedLists,
};

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ShoppingItem>) => {
      state.lists.push(action.payload);
      localStorage.setItem("shoppingLists", JSON.stringify(state.lists));
    },
    updateItem: (state, action: PayloadAction<ShoppingItem>) => {
      const index = state.lists.findIndex(item => item.id === action.payload.id);
      if (index !== -1) state.lists[index] = action.payload;
      localStorage.setItem("shoppingLists", JSON.stringify(state.lists));
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.lists = state.lists.filter(item => item.id !== action.payload);
      localStorage.setItem("shoppingLists", JSON.stringify(state.lists));
    },
  },
});

export const { addItem, updateItem, deleteItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;
