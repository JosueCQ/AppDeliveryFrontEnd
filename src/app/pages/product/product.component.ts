import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogProductComponent } from './dialog-product/dialog-product.component';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from 'src/app/models/Product';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product();
  nameProduct: string | undefined;
  branchProduct: String = "";
  priceProduct: Number | undefined;
  prdddd:Product[]= [];
  productId: Number = 0;
  productCode: String ="";

  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private cartService: ShoppingCartService,
              private _productService: ProductService) { }

  ngOnInit() {
    
    const routeParams = this.route.snapshot.paramMap;
    console.log(routeParams);
    const productIdFromRoute = String(routeParams.get('id'));

    console.log(productIdFromRoute);
    
    this._productService.getProductByCode(productIdFromRoute).subscribe(data => (this.product=data))
  }

  openDialog(product: Product) {

    this.cartService.addToCart(product);
    this.dialog.open(DialogProductComponent, {
      data: {
          //name: this.nameProduct,
          //branch: this.branchProduct,
          //price: this.priceProduct,
          product: this.product,
      }
    });
  }
}