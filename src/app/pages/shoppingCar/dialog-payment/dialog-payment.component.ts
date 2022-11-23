import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/models/Order';
import { OrderProducts } from 'src/app/models/OrderProducts';
import { OrderService } from 'src/app/services/order/order.service';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-dialog-payment',
  templateUrl: './dialog-payment.component.html',
  styleUrls: ['./dialog-payment.component.css']
})
export class DialogPaymentComponent implements OnInit {

  orderObj: Order = new Order();
  listProducts: OrderProducts[] = [];
  productOrder: OrderProducts = new OrderProducts();
  items = this.cartService.getItems();

  constructor(private _orderService: OrderService,
              private cartService: ShoppingCartService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  CreateOrder(){
    //this.productOrder.productID=1;
    //this.productOrder.quantity=2;
    //this.listProducts.push(this.productOrder);

    for(var index in this.items){
      this.productOrder.productID = this.items[1].id;
      this.productOrder.quantity =1;
      this.listProducts.push(this.productOrder);
    }

    this.orderObj.price = this.data.precio;
    this.orderObj.envio = this.data.envio;
    this.orderObj.total = this.data.total;
    this.orderObj.status = "Pendiente";
    this.orderObj.products = this.listProducts;

    this._orderService.create(this.orderObj).subscribe(response =>{
      console.log(response);
      //alert('Bono created Successfully')
      let ref = document.getElementById('cancel')
      ref?.click();
      //this.formValue.reset();
      //this.getAllSolesBonos();
    },
    err=> {
      alert('Something Went Wrong');
    })
  }

}
