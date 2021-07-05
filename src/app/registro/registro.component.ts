import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../headerService.service';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [RegistroService]

})

export class RegistroComponent implements OnInit {

  constructor(private headerService:HeaderService,
              private registroService:RegistroService) 
              { }

  ngOnInit(): void {
    this.headerService.tituloHeader.emit("Registro");
  }

  registro(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.registroService.registrar(email,password);
    
  }
}
