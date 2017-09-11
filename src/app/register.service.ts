import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class RegisterService {

  constructor(private http:Http) {

  }
  register( name: string, email:string,password:string){
    return this.http.post('/api/register',JSON.stringify({name:name, email:email,
                                                          password:password}),
      {headers:this.getHeaders()})
      .map(res => res.json())
  }
  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
