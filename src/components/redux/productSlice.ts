import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

import { typeItemCart,typeProduct } from '../redux/typeProduct';

//Defining our initialState's type
type initialStateType = {
  productList: typeProduct[];
  itemCount: number;
  carts: typeItemCart[]
};

const productList: typeProduct[] = [
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
const carts: typeItemCart[] = [];

const initialState: initialStateType = {
    productList,
    itemCount,
    carts
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addCart:(state, action: PayloadAction<typeProduct>)=>{
      let  foundIndex = state.carts.findIndex(x => x.id === action.payload.id);

      if(foundIndex === -1){

        let cart= {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
          totalunitprice: action.payload.price
        }
        state.carts.push(cart)
        state.itemCount+=1
       
      }else{
        state.carts.forEach(function(item){
          if(item.id === action.payload.id){
            item.quantity = item.quantity+1;
            item.totalunitprice = item.totalunitprice+item.price;
          }
        })
        state.itemCount+=1
      }
    
    },
    incrementQuantity: (state,action:PayloadAction<typeItemCart>)=>{
      state.carts.forEach(function(item){
        if(item.id === action.payload.id){
          item.quantity = item.quantity+1;
          item.totalunitprice = item.totalunitprice+item.price;
        }
      })
      state.itemCount+=1
    },
    decrementQuantity: (state, action:PayloadAction<typeItemCart>)=>{
      state.carts.forEach(function(item){
        if(item.id === action.payload.id){
          item.quantity = item.quantity-1;
          item.totalunitprice = item.totalunitprice-item.price;
        }
      })
      state.itemCount-=1
    }
  },
});

// To able to use reducers we need to export them.
// export const { addNewBook, updateBook, deleteBook } = bookSlice.actions;

//Selector to access bookList state.
// export const selectBookList = (state: RootState) => state.book.bookList;
export const selectProductList = (state: RootState) => state.product.productList;
export const selectCartItem = (state: RootState) => state.product.carts;
export const { addCart,incrementQuantity,decrementQuantity } = productSlice.actions;
export default productSlice.reducer;