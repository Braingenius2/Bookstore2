import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return state.filter((book) => book.Id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
