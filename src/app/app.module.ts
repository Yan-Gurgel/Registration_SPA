import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ShowClientsComponent } from './clients/show-clients/show-clients.component';
import { AddEditClientsComponent } from './clients/add-edit-clients/add-edit-clients.component';
import { RegistrationApiService } from './registration-api.service';
import { HeaderComponent } from './header/header.component';
import { NavegationComponent } from './navegation/navegation.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowClientsComponent,
    AddEditClientsComponent,
    HeaderComponent,
    NavegationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RegistrationApiService],
  bootstrap: [AppComponent, ShowClientsComponent]
})
export class AppModule { }
