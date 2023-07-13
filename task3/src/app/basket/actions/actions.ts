import { createAction, props } from '@ngrx/store';

export const addProductToBasket = createAction(
  '[Basket] Add Product to Basket',
  props<{ payload: { id: string; name: string; price: number } }>()
);

export const removeProductFromBasket = createAction(
  '[Basket] Remove Product from Basket',
  props<{ productId: string }>()
);
