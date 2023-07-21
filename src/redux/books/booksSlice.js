import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  isLoading: false,
  error: null,
};

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 's83qpQ58gwNYNK6SH0hz';

const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseUrl}/apps/${appId}/books`);
    const transformedData = Object.keys(response.data).map((itemId) => ({
      ...response.data[itemId][0],
      item_id: itemId,
    }));
    return transformedData;
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
        state.books = [...state.books, ...action.payload];
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
