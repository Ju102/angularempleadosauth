import { NgModule, provideBrowserGlobalErrorListeners, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './components/login.component/login.component';
import { HomeComponent } from './components/home.component/home.component';
import { HeaderComponent } from './components/header.component/header.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ProfileComponent } from './components/profile.component/profile.component';
import { SubordinatesComponent } from './components/subordinates.component/subordinates.component';
import { EmpleadosService } from './services/empleados.service';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

@NgModule({
  declarations: [
    App,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    SubordinatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    EmpleadosService,
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [App]
})
export class AppModule { }

registerLocaleData(localeEs, 'es-ES');
