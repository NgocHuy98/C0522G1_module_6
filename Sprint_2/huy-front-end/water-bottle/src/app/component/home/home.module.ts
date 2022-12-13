import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {ListBottleComponent} from './list-bottle/list-bottle.component';
import {DetailComponent} from './detail/detail.component';
import {CartComponent} from './cart/cart.component';
import {LoginComponent} from '../decentralization/login/login.component';
import {SubscribeComponent} from './subscribe/subscribe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    ListBottleComponent,
    DetailComponent,
    CartComponent,
    SubscribeComponent
  ],
  exports: [
    HomeComponent
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule {
}
