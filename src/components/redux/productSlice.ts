import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

import { Product } from '../redux/typeProduct';

//Defining our initialState's type
type initialStateType = {
  productList: Product[];
  itemCount: number;
  cart: Product[]
};

const productList: Product[] = [
  {
    id: 1,
    name: '1984',
    price: 100,
  },
  {
    id: 2,
    name: "Harry Potter and the Philosopher's Stone",
    price: 200,
  },
  {
    id: 3,
    name: 'The Lord of the Rings',
    price: 300,
  },
  {
    id: 4,
    name: 'The Dune',
    price: 400,
  },
  {
    id: 5,
    name: 'The Lord King',
    price: 500,
  },
  {
    id: 6,
    name: 'The Lord King',
    price: 600,
  },
];
const itemCount: number =0;
const cart: Product[] = [];

const initialState: initialStateType = {
    productList,
    itemCount,
    cart
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    
  },
});

// To able to use reducers we need to export them.
// export const { addNewBook, updateBook, deleteBook } = bookSlice.actions;

//Selector to access bookList state.
// export const selectBookList = (state: RootState) => state.book.bookList;
export const selectProductList = (state: RootState) => state.product.productList;
export default productSlice.reducer;