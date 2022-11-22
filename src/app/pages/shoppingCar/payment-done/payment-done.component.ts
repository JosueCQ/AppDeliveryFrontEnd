import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-payment-done',
  templateUrl: './payment-done.component.html',
  styleUrls: ['./payment-done.component.css']
})
export class PaymentDoneComponent implements OnInit {

  constructor(private _shoppingcarService: ShoppingCartService) { }

  ngOnInit(): void {
    this._shoppingcarService.clearCart();
  }

}
