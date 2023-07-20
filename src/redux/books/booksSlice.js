import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 's83qpQ58gwNYNK6SH0hz';

const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseUrl}/apps/${appId}/books`);
    return response.data;
  } catch (error) {
    return rejectWithValue('Something went wrong with fetching books', error);
  }
});

const addBook = createAsyncThunk('books/addBook', async (newBook, { rejectWithValue }) => {
  try {
    await axios.post(`${baseUrl}/apps/${appId}/books`, newBook);
    return newBook;
  } catch (error) {
    return rejectWithValue('Something went wrong with adding new book', error);
  }
});

const removeBook = createAsyncThunk('books/removeBook', async (itemId, { rejectWithValue }) => {
  try {
    await axios.delete(`${baseUrl}/apps/${appId}/books/${itemId}`);
    return itemId;
  } catch (error) {
    return rejectWithValue('Something went wrong with removing book', error);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        const newBook = action.payload;
        state.books.push(newBook);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const bookId = action.payload;
        state.books = state.books.filter((book) => book.item_id !== bookId);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export { fetchBooks, addBook, removeBook };
export default booksSlice.reducer;
