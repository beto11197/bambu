import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HeaderService } from './headerService.service';
import { RegistroComponent } from './registro/registro.component';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './noticias/noticias.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoticiasComponent,
    ErrorComponent,
    HeaderComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeaderService,NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
