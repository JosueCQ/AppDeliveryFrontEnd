import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, products } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.css']
})
export class DialogProductComponent implements OnInit {

  product: Product | undefined;
  productID: number | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private _productService: ProductService) { 
    //this.product = data.dataProduct;
    this.productID = data.idProduct;
    this._productService.getProductByID(this.data.idProduct).subscribe(dataP =>(this.product=dataP))
  }

  ngOnInit(): void {
  }

}
