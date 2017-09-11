import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class SearchdonatorService {

  constructor(private http:Http) { }
  searchdonator(CNP: number){
    return this.http.post('/api/searchdonator',
    JSON.stringify({CNP:CNP}),{headers:this.getHeaders()} )
      .map(res => res.json())
  }
  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}
