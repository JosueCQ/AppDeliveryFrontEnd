import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, products } from 'src/app/models/Product';

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.css']
})
export class DialogProductComponent implements OnInit {

  //product: Product | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    //this.product = data.dataProduct;
  }

  ngOnInit(): void {
  }

}
