import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateRideComponent} from "./create-ride/create-ride.component";
import {HomeComponent} from "./home/home.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {ChooseRideComponent} from "./choose-ride/choose-ride.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ChooseRoleComponent} from "./choose-role/choose-role.component";
import {DashboardComponent} from "./admin-panel/dashboard/dashboard.component";
import {RidesComponent} from "./admin-panel/rides/rides.component";
import {UsersComponent} from "./admin-panel/users/users.component";
import {StatisticsComponent} from "./admin-panel/statistics/statistics.component";

const routes: Routes = [
  {
    path: 'create-ride',
    component: CreateRideComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin-panel',
    component: DashboardComponent
  },

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
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full',
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'rides',
    component:RidesComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'statistics',
    component:StatisticsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
