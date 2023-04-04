import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateRideComponent} from "./create-ride/create-ride.component";
import {HomeComponent} from "./home/home.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {ChooseRideComponent} from "./choose-ride/choose-ride.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ChooseRoleComponent} from "./choose-role/choose-role.component";

const routes: Routes = [
  {
    path: 'create-ride',
    component: CreateRideComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent

  {
    path: 'choose-ride',
    component: ChooseRideComponent,
  },

    {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'choose-role',
    component: ChooseRoleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
