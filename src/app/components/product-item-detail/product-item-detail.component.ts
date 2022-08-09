import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  productId: number;
  product: Product;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService
  ) {
    this.product = new Product();
    this.productId = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
    });
    this.productService.getProducts().subscribe(data => {
      this.product = data.find(p => p.id === this.productId) as Product;
    });
    console.log(this.productId);
    console.log(this.product);
  }

}
