import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from '../headerService.service';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]

})
export class LoginComponent implements OnInit {

  constructor(private headerService:HeaderService,
              private loginService:LoginService,
              private router:Router) { }

  ngOnInit(): void {
    this.headerService.tituloHeader.emit("Login");
  }

  login(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email,password);
  }

  registro(){
    this.router.navigate(['/registro']);        
  }

}
