import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateRideComponent} from "./create-ride/create-ride.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'create-ride',
    component: CreateRideComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
