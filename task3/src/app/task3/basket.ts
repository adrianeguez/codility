import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AddProduct, RemoveProduct } from "./actions";

type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

@Component({
  selector: "app-basket",
  template: `
    <div>
      <div>
        <label class="col-md-4">Product ID</label>
        <input type="text" id="input-product-id" #productId />
      </div>
      <div>
        <label class="col-md-4">Product Name</label>
        <input type="text" id="input-product-name" #productName />
      </div>
      <div>
        <label class="col-md-4">Product Price</label>
        <input type="number" id="input-product-price" #productPrice />
      </div>
      <div>
        <button
          (click)="
            addProduct(productId.value, productName.value, productPrice.value)
          "
          id="add-btn"
        >
          Add Product
        </button>
      </div>
      <ul class="products">
        <li
          *ngFor="let product of products | async"
          [attr.id]="'product-' + product.id"
        >
          <span>Name: {{ product.name }}</span>
          <span>Quantity: {{ product.quantity }}</span>
          <button
            [attr.id]="'remove-' + product.id"
            (click)="removeProduct(product.id)"
          >
            Remove
          </button>
        </li>
      </ul>
      <div>
        Total price: <span id="total-price">{{ totalPrice }}</span>
      </div>
    </div>
  `,
})
export class BasketComponent {
  products: Observable<Product[]>;
  totalPrice: number = 0;

  constructor(
    private _store$: Store<any>,
  ) {
    this.products = this._store$.pipe(
      select(
        (a)=> {
          console.log(a)
          return a.basket.products
        }
      )
    );

    this.products.subscribe(
      (a)=> {
        this.totalPrice = a.reduce((a,b)=> a + (b.price *b .quantity) ,0)
      }
    )
  }

  removeProduct(productId) {
    this._store$.dispatch(RemoveProduct({payload:{productId}}))
  }

  addProduct(id, name, price) {
    this._store$.dispatch(AddProduct({payload:{id,name,price}}))
  }
}
