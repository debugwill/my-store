import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name: string;
  total: number;

  constructor(private router: Router, private route: ActivatedRoute, private cartService: CartService) {
    this.name = '';
    this.total = 0;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.total = params['total'];
    });
  }

  returnToProductList(): void {
    this.cartService.clearCartProducts();
    this.router.navigate(['']);
  }
}
