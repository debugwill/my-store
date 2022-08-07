import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: Product[] = [];

  constructor() { }

  getCartProducts(): Product[] {
    return this.cartProducts;
  }

  addProductToCart(product: Product): Product[] {
    if(this.productAlreadyAdded(product.id)) {
      const productIndex = this.cartProducts.findIndex(p => p.id === product.id);
      this.cartProducts[productIndex].quantity += product.quantity;
    } else {
      this.cartProducts.push(product);
    }
    return this.cartProducts;
  }

  updateQuantity(productId: number, newQuantity: number): Product[] {
    const productIndex = this.cartProducts.findIndex(p => p.id === productId);
    this.cartProducts[productIndex].quantity = newQuantity;
    return this.cartProducts;
  }

  clearCartProducts(): Product[] {
    this.cartProducts = [];
    return this.cartProducts;
  }

  private productAlreadyAdded(id: number): boolean {
    const isAdded = this.cartProducts.some(product => {
      if (product.id === id) return true;
      else return false;
    });
    return isAdded;
  }
}
