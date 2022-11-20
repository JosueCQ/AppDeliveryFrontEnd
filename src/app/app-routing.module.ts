import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { ProductComponent } from './pages/product/product.component';
import { DialogDirectionComponent } from './pages/shoppingCar/dialog-direction/dialog-direction.component';
import { PaymentDoneComponent } from './pages/shoppingCar/payment-done/payment-done.component';
import { ScListComponent } from './pages/shoppingCar/sc-list/sc-list.component';

const routes: Routes = [
  { path: 'main' , component: MainViewComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'product/:productId' , component: ProductComponent },
  { path: 'scList' , component: ScListComponent },
  { path: 'paymentDone' , component: PaymentDoneComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
