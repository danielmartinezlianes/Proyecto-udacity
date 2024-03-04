import { Injectable } from '@angular/core';
import { Producto } from './model/Producto';
@Injectable({
  providedIn: 'root'
})
export class CartlistService {
  cart:Producto[]=[];
  constructor() { }

  getCart() {
    return this.cart;
  }

  addToCart(product) {
    this.cart.push(product);
    return this.cart;
  }
  removeToCart(product) {
    const index = this.cart.findIndex(item => item.id === product.id);

    if (index !== -1) {
      this.cart.splice(index, 1);
    }
    return this.cart;
  }
  clearCart() {
    this.cart = [];
    return this.cart;
  }
}
