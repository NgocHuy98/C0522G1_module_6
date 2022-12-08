import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBottleComponent} from './list-bottle/list-bottle.component';


const routes: Routes = [
  {
    path: '', component: ListBottleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
