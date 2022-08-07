import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();
    this.total = this.calculateCartTotal();
  }

  updateCart(product: Product): void {
    this.cartService.updateQuantity(product.id, product.quantity);
    this.total = this.calculateCartTotal();
  }

  private calculateCartTotal(): number {
    let cartTotal = 0;
    for (let product of this.cartProducts) {
      cartTotal += product.price * product.quantity;
    }
    return cartTotal;
  }

}
