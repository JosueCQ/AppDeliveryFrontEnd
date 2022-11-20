import { Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Product, products } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  products = products;
  //proD!: Observable<Product>;
  //products: Product[] | undefined;
  //productList: Product[] | undefined;
  //products = this.productService.getAll();

  constructor() { }

  ngOnInit(): void {
    
  }

}
