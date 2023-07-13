import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import {addProductToBasket, removeProductFromBasket} from "./actions/actions";
import {Product} from "./actions/reducer";

@Component({
  selector: 'app-basket',
  template: `
    <div *ngFor="let product of products | async">
      {{ product.name }} ({{ product.quantity }}) - ${{ product.price }}
      <button (click)="removeProduct(product.id)">Remove</button>
    </div>
    <p>Total Price: ${{ getTotalPrice() | async }}</p>
    <button (click)="addProduct({ id: '123', name: 'Sample Product', price: 9.99 })">Add Product</button>
  `,
})
export class BasketComponent {
  products: Observable<Product[]>;

  constructor(private store: Store<{ basket: { products: Product[] } }>) {
    this.products = this.store.pipe(select(state => state.basket.products));
  }

  removeProduct(productId: string) {
    this.store.dispatch(removeProductFromBasket({ productId }));
  }

  addProduct(product: { id: string; name: string; price: number }) {
    this.store.dispatch(addProductToBasket({ payload: product }));
  }

  getTotalPrice(): Observable<number> {
    return this.products.pipe(
      map(products => products.reduce((total, p) => total + (p.price * p.quantity), 0))
    );
  }
}
