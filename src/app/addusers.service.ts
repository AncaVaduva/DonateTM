import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class AddusersService {

  constructor(private http: Http) {}

  addusers(name: string, email: string, password: string) {
    return this.http.post('/api/register',
      JSON.stringify({name: name, email: email, password: password, role:'admin_judet' }),
      {headers: this.getHeaders()})
      .map(res => res.json());
  }

  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}
