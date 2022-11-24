import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { Product, products } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  prdddd:Product[] | undefined;
  
  constructor(private _productService: ProductService) {
   }

  ngOnInit(): void {

    this._productService.getAll().subscribe(data => (this.prdddd = data));    
  }
}
