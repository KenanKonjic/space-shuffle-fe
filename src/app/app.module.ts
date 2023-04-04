import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRideComponent } from './create-ride/create-ride.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import { HomeComponent } from './home/home.component';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { SidenavComponent } from './admin-panel/sidenav/sidenav.component';
import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';
import { StatisticsComponent } from './admin-panel/statistics/statistics.component';
import { UsersComponent } from './admin-panel/users/users.component';
import { RidesComponent } from './admin-panel/rides/rides.component';
import { HistoryComponent } from './admin-panel/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRideComponent,
    HomeComponent,
    HeaderComponent,
    AdminPanelComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    UsersComponent,
    RidesComponent,
    HistoryComponent
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
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
