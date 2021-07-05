import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { HeaderService } from './headerService.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bambu';

  constructor(private router:Router){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCmYhJqA6np76TfYYdG6kIkkuJTeTOK1XU",
      authDomain: "bambu-6d1e4.firebaseapp.com",
    })    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.router.navigate(['/noticias']);        
      }else{
      }
    });
    
  }

}
