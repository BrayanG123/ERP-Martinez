import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';

import { FooterComponent } from './shared/footer/footer.component';
// import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';


import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    // PagesComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    APP_ROUTES,
    
    BrowserModule,
    FormsModule,    //lo necesitaba para el login
    PagesModule,
    HttpClientModule,
    CommonModule,     //Para los ngFor, ngIF, etc
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
