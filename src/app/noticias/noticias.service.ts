import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class NewsApiService{
    constructor(private _http:HttpClient){}

    //newsURL
    newsApiUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=dc881a8994d543608d460a7b83b55110";
    strUrl:string;

    topHeading():Observable<any>{
        return this._http.get(this.newsApiUrl);
    }

    getNoticias(pais:string,tema:string){
        this.strUrl = "https://newsapi.org/v2/top-headlines?country="+pais+"&category="+tema+"&apiKey=dc881a8994d543608d460a7b83b55110";
        return this._http.get(this.strUrl);
    }


}