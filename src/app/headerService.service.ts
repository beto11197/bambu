import { EventEmitter } from "@angular/core"

export class HeaderService{
    
    tituloHeader = new EventEmitter<string>();
    emailUsuario = new EventEmitter<string>();

}