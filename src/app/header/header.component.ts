import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../headerService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titulo:string;
  email:string;

  constructor(private headerService:HeaderService) { 
    this.headerService.tituloHeader.subscribe(
      (titulo:string) => this.titulo = titulo
    )

    this.headerService.emailUsuario.subscribe(
      (email:string) => this.email = email
    )
  }

  ngOnInit(): void {
  }

}
