import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: '', component:  LoginComponent},
  {path: 'login', component:  LoginComponent},
  {path: 'noticias', component:  NoticiasComponent},
  {path: 'registro', component:  RegistroComponent},
  {path: '**', component:  ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
