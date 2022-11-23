import { Component, OnInit } from '@angular/core';
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

  product: Product | undefined;
  nameProduct: string | undefined;
  branchProduct: String | undefined;
  priceProduct: Number | undefined;
  prdddd:Product[] | undefined;
  productId: Number | undefined

  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private cartService: ShoppingCartService,
              private _productService: ProductService) { }

  ngOnInit() {
    
    this._productService.getAll().subscribe(data => (this.prdddd = data));
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.productId = productIdFromRoute;
  
    // Find the product that correspond with the id provided in route.
    //this.product = products.find(product => product.id === productIdFromRoute);
    
    this._productService.getProductByID(productIdFromRoute).subscribe(data => (this.product=data))
    this.nameProduct = this.product?.name;
    this.branchProduct = this.product?.branch;
    this.priceProduct = this.product?.price;
  }

  openDialog(product: Product) {
    this.cartService.addToCart(product);
    this.dialog.open(DialogProductComponent, {
      data: {
          name: this.nameProduct,
          branch: this.branchProduct,
          price: this.priceProduct,
          idProduct: this.productId,
      }
    });
  }
}