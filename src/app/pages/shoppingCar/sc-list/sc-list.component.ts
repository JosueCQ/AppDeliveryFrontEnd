import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderProducts } from 'src/app/models/OrderProducts';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';
import { DialogDirectionComponent } from '../dialog-direction/dialog-direction.component';
import { DialogPaymentComponent } from '../dialog-payment/dialog-payment.component';

@Component({
  selector: 'app-sc-list',
  templateUrl: './sc-list.component.html',
  styleUrls: ['./sc-list.component.css']
})
export class ScListComponent implements OnInit {

  items = this.cartService.getItems();
  orderPrice: number = 0;
  orderEnvio: number = 0;
  orderTotal: number = 0;
  listProducts: OrderProducts[] = [];
  productOrder: OrderProducts = new OrderProducts();

  constructor(private cartService: ShoppingCartService,
              public dialog: MatDialog) { }

  ngOnInit(): void {

    for(var index in this.items){
      this.orderPrice = this.orderPrice + this.items[index].price;
      //this.productOrder.productID = this.items[index].id;
      //this.listProducts.push(this.productOrder);
    }

    this.orderTotal = this.orderPrice + this.orderEnvio;
  }

  openDialogDirection(): void {
    const dialogRef = this.dialog.open(DialogDirectionComponent, {
      data: {envio: this.orderEnvio},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.orderEnvio = result;
      this.orderTotal = this.orderPrice + this.orderEnvio;
    });
  }

  openDialogPayment(): void {
    const dialogRef = this.dialog.open(DialogPaymentComponent, {
      data: {
        precio: this.orderPrice,
        envio: this.orderEnvio,
        total: this.orderTotal,
        lista: this.items,
      },
    });
  }
}
