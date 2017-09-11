import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";

@Injectable()
export class AddcenterService {

  constructor(private http:Http) { }

  addcenter(namecenter:string, address:string, phone:string){
    return this.http.post('/api/addcenter', JSON.stringify({namecenter:namecenter, address:address, phone:phone}), {headers: this.getHeaders()})
      .map((res: Response) => {
        // login successful if there's a jwt token in the response
         res => res.json();
      });

  }

  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
