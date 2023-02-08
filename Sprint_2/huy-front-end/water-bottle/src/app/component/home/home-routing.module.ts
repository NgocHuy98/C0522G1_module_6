import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListBottleComponent} from './list-bottle/list-bottle.component';

import {CartComponent} from './cart/cart.component';
import {DetailComponent} from './detail/detail.component';
import {EditBottleComponent} from './edit-bottle/edit-bottle.component';


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
  {
    path: 'edit/:id', component: EditBottleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
