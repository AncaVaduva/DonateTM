
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(email:string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({email:email, password: password }),{headers: this.getHeaders()})
      .map((res: Response) => {
        // login successful if there's a jwt token in the response
        let user = res.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user.user));
        }
        else{
          localStorage.setItem('currentUser', JSON.stringify({success:user.succes, message: user.message}) );
        }

      });

  }
  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
