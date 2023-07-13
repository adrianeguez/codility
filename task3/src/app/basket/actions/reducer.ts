import { createReducer, on } from '@ngrx/store';
import {addProductToBasket, removeProductFromBasket} from "./actions";

export interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface BasketState {
  products: Product[];
}

const initialState: BasketState = {
  products: [],
};

export const basketReducer = createReducer(
  initialState,
  on(addProductToBasket, (state, action) => {
    const existingProduct = state.products.find(p => p.id === action.payload.id);
    if (existingProduct) {
      return {
        ...state,
        products: state.products.map(p => p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p),
      };
    }
    const newProduct = {
      id: action.payload.id,
      name: action.payload.name,
      quantity: 1,
      price: action.payload.price,
    };
    return {
      ...state,
      products: [...state.products, newProduct],
    };
  }),
  on(removeProductFromBasket, (state, action) => {
    const existingProduct = state.products.find(p => p.id === action.productId);
    if (existingProduct) {
      if (existingProduct.quantity === 1) {
        return {
          ...state,
          products: state.products.filter(p => p.id !== action.productId),
        };
      } else {
        return {
          ...state,
          products: state.products.map(p => p.id === action.productId ? { ...p, quantity: p.quantity - 1 } : p),
        };
      }
    }
    return state;
  })
);
