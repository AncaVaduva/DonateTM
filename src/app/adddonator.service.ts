import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class AdddonatorService {

  constructor(private  http:Http) { }

  adddonator(name:string, prenume:string, age:number, blood:string, address:string, CNP: number){
    return this.http.post('/api/adddonator',
      JSON.stringify({name:name, prenume:prenume, age:age, blood:blood, address:address,CNP:CNP}),
      {headers:this.getHeaders()})
        .map(res =>res.json());

  }
  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
