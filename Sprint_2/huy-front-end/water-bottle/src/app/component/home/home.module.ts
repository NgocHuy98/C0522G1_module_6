import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {ListBottleComponent} from './list-bottle/list-bottle.component';


@NgModule({
  declarations: [HomeComponent, ListBottleComponent],
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