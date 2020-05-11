import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';

import { FooterComponent } from './shared/footer/footer.component';
// import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';
import { LoginComponent } from './login/login.component';

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
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
