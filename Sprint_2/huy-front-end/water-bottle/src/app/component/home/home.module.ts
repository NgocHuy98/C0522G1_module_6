import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {ListBottleComponent} from './list-bottle/list-bottle.component';
import {DetailComponent} from './detail/detail.component';
import {CartComponent} from './cart/cart.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListBottleComponent,
    DetailComponent,
    CartComponent
  ],
  exports: [
    HomeComponent
  ],

  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
