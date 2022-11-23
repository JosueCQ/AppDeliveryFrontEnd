import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MatDividerModule } from "@angular/material/divider";
import {FlexLayoutModule} from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { MainViewComponent } from './pages/main-view/main-view.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { DialogProductComponent } from './pages/product/dialog-product/dialog-product.component';
import { ScListComponent } from './pages/shoppingCar/sc-list/sc-list.component';
import { DialogDirectionComponent } from './pages/shoppingCar/dialog-direction/dialog-direction.component';
import { DialogPaymentComponent } from './pages/shoppingCar/dialog-payment/dialog-payment.component';
import { PaymentDoneComponent } from './pages/shoppingCar/payment-done/payment-done.component';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProductComponent,
    DialogProductComponent,
    ScListComponent,
    DialogDirectionComponent,
    DialogPaymentComponent,
    PaymentDoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    //MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatDividerModule,
    MatGridListModule,
    //RouterModule,
    MatTableModule,
    //MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    //MatTabsModule
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
