import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/models/Order';
import { OrderProducts } from 'src/app/models/OrderProducts';
import { Product } from 'src/app/models/Product';
import { OrderService } from 'src/app/services/order/order.service';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-dialog-payment',
  templateUrl: './dialog-payment.component.html',
  styleUrls: ['./dialog-payment.component.css']
})
export class DialogPaymentComponent implements OnInit {

  orderObj: Order = new Order();
  listProducts: Product[] = [];
  productOrder: OrderProducts = new OrderProducts();
  items = this.cartService.getItems();

  constructor(private _orderService: OrderService,
              private cartService: ShoppingCartService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  CreateOrder(){

    this.listProducts = this.cartService.getItems();
    this.orderObj.invoce = this.data.total;
    this.orderObj.products = this.listProducts;

    this._orderService.postOrder(this.orderObj).subscribe(response =>{
      console.log(response);
      let ref = document.getElementById('cancel')
      ref?.click();
    },
    err=> {
      alert('Something Went Wrong');
    })
  }

}
