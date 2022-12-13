import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeModule} from './component/home/home.module';
import {DecentralizationRoutingModule} from './component/decentralization/decentralization-routing.module';


const routes: Routes = [
  {
    path: '', loadChildren: () => HomeModule,
  },
  {
    path: 'login', loadChildren: () => DecentralizationRoutingModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
