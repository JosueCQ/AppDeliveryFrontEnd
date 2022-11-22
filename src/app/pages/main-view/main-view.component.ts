import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  products = products;
  proD!: Observable<Product[]>;
  prdddd:Product | undefined;
  
  constructor() {
   }

  ngOnInit(): void {

    //console.log(this._productService.getAll());
    
    //this.getAllSolesBonos()

    //this.proD = this._productService.getAll();
    
  }
  //private _productService:ProductService

  /*getAllSolesBonos() {
    this._productService.getAll().subscribe( (response: any) => {
      this.proD = response;
    });
  }*/
}
