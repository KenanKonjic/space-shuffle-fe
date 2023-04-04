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
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import { ChooseRideComponent } from './choose-ride/choose-ride.component';
import { ChooseRideComponent } from './choose-ride/choose-ride.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import { LoginComponent } from './login/login.component';
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    CreateRideComponent,
    HomeComponent,
    HeaderComponent,
    ChooseRideComponent,
    HeaderComponent,
    HeaderComponent,
    ChooseRideComponent
    LoginComponent
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
    MatTableModule,
    MatIconModule
    MatToolbarModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule{ }
