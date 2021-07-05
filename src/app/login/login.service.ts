import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase';
import { HeaderService } from "../headerService.service";


@Injectable()
export class LoginService{
    
    token: string;
    constructor(private router: Router,
                private headerService: HeaderService){}


    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email,password).
        then(
            response => {
                firebase.auth().currentUser?.getIdToken().then(
                    token=> {
                        console.log(token);
                        this.token = token;
                        this.router.navigate(['/noticias']);        
                    }
                )
                console.log(response.user?.email);
                const email = response.user?.email
            }, error => {
                alert(error)
            }
        )
    }

    getIdToken(){
        return this.token;
    }
}