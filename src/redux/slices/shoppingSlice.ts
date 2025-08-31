import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShoppingItem {
  id: number;
  name: string;
  quantity: number;
  category: string;
  notes?: string;
  imageUrl?: string;
}

interface ShoppingState {
  items: ShoppingItem[];
}

const initialState: ShoppingState = {
  items: [],
};

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ShoppingItem[]>) {
      state.items = action.payload;
    },
    addItem(state, action: PayloadAction<ShoppingItem>) {
      state.items.push(action.payload);
    },
    updateItem(state, action: PayloadAction<ShoppingItem>) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) state.items[index] = action.payload;
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { setItems, addItem, updateItem, deleteItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;
