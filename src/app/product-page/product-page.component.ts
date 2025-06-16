import { ProductService } from './../services/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-page',
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit{
  private router = inject(Router);

  private ProductService!: ProductService;

  products: Product[]=[];

  ngOnInit(): void {
    this.ProductService=new ProductService();
    this.products=this.ProductService.getList();
  }

  onEdit(product:Product): void{
    this.router.navigate(['product', 'form', product.id]);
  }

  onView(product:Product): void {
    this.router.navigate(['product', 'view', product.id]);
  }


}
