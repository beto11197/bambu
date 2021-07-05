import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../headerService.service';
import firebase from 'firebase';
import { Router } from '@angular/router';
import { NewsApiService } from './noticias.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  pais="mx";
  tema="general";
  noticias:any=[];

  constructor(private headerService:HeaderService,
              private router:Router,
              private newsService:NewsApiService) { }

  ngOnInit(): void {
    this.headerService.tituloHeader.emit("Noticias");

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const emailUser = user.email?.toString()
        this.headerService.emailUsuario.emit(emailUser);
      }else{
        this.router.navigate(['/']);        
      }
    });

    this.newsService.getNoticias(this.pais,this.tema).subscribe((result)=>{
      this.noticias = result;
      this.noticias = this.noticias.articles;
      console.log(this.noticias)
    })
    


  }

  filtroPais(event:Event){
    this.pais = (<HTMLOptionElement>event.target).value;
    console.log("tema: " + this.tema + "pais: "+ this.pais);
    this.newsService.getNoticias(this.pais,this.tema).subscribe((result)=>{
      this.noticias = result;
      this.noticias = this.noticias.articles;
      console.log(this.noticias)
    })

  }

  filtroTema(event:Event){
    this.tema = (<HTMLOptionElement>event.target).value;
    console.log("tema: " + this.tema + "pais: "+ this.pais);
    this.newsService.getNoticias(this.pais,this.tema).subscribe((result)=>{
      this.noticias = result;
      this.noticias = this.noticias.articles;
      console.log(this.noticias)
    })

  }

  getdataf(item:string){
    console.log(item)
  }

  

  

}
