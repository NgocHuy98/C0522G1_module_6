import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBottleComponent} from './list-bottle/list-bottle.component';
import {DetailComponent} from './detail/detail.component';
import {CartComponent} from './cart/cart.component';


const routes: Routes = [
  {
    path: '', component: ListBottleComponent
  },
  {
    path: 'detail/:id', component: DetailComponent
  },
  {
    path: 'cart', component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
