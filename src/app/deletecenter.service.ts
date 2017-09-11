import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class DeletecenterService {

  constructor(private http :Http) { }
  deleteCenter( namecenter :string){
    return this.http.post('/api/deletecenter', JSON.stringify({namecenter: namecenter}), {headers: this.getHeaders()})
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
