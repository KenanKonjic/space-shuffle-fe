import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRideComponent } from './create-ride/create-ride.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { MatSelectModule } from '@angular/material/select';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { SidenavComponent } from './admin-panel/sidenav/sidenav.component';
import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';
import { StatisticsComponent } from './admin-panel/statistics/statistics.component';
import { UsersComponent } from './admin-panel/users/users.component';
import { RidesComponent } from './admin-panel/rides/rides.component';
import { HistoryComponent } from './admin-panel/history/history.component';
import { ChooseRideComponent } from './choose-ride/choose-ride.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SignupComponent } from './signup/signup.component';
import { ChooseRoleComponent } from './choose-role/choose-role.component';
import { RideService } from './services/ride.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {PoppupComponent} from "./poppup/poppup.component";
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './auth-guard/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    CreateRideComponent,
    HomeComponent,
    AdminPanelComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    UsersComponent,
    RidesComponent,
    HistoryComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ChooseRideComponent,
    ChooseRoleComponent,
    UserProfileComponent,
    PoppupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    NgOptimizedImage,
    HttpClientModule,
    CommonModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
  ],
  providers: [UserService, RideService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
