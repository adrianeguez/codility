import { createAction, props } from "@ngrx/store";

const ADD_PRODUCT_TO_BASKET = "ADD_PRODUCT_TO_BASKET";
const REMOVE_PRODUCT_FROM_BASKET = "REMOVE_PRODUCT_FROM_BASKET";


type AddProductToBasketPayload = {
  payload: {
    id: string,
    name: string,
    price: number
  }
}

type RemoveProductToBasketPayload = {
  payload: {
    productId: string,
  }
}
type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

type StoreState = {
  basket:{
    products: Product[]
  }
}

export const AddProduct = createAction(ADD_PRODUCT_TO_BASKET, props<AddProductToBasketPayload>());
export const RemoveProduct = createAction(REMOVE_PRODUCT_FROM_BASKET, props<RemoveProductToBasketPayload>());










