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

  productStorage: Product = new Product();
  productID: number | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any
              ) { 
    this.productStorage = this.data.product;
    //console.log(this.product?.id)
    //this.productID = data.idProduct;
    //console.log(this.data.name);
    //this._productService.getProductByID(this.data.idProduct).subscribe(dataP =>(this.product=dataP))
  }

  ngOnInit(): void {
    console.log(this.data)
  }

}
