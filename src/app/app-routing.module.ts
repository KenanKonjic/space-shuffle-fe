import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRideComponent } from './create-ride/create-ride.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ChooseRideComponent } from './choose-ride/choose-ride.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChooseRoleComponent } from './choose-role/choose-role.component';
import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';
import { RidesComponent } from './admin-panel/rides/rides.component';
import { UsersComponent } from './admin-panel/users/users.component';
import { StatisticsComponent } from './admin-panel/statistics/statistics.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth-guard/auth.guard';
import { AdminAuthGuard } from './auth-guard/admin-auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [LoginAuthGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'create-ride',
    component: CreateRideComponent,
    canActivate: [AuthGuard],
  },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'admin-panel',
    component: DashboardComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'choose-ride',
    component: ChooseRideComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'choose-role',
    component: ChooseRoleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminAuthGuard],
  },
  { path: 'rides', component: RidesComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
