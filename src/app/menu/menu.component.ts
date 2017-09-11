import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

import {empty} from "rxjs/Observer";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  Currentuser: any=[];
  loading = false;
  returnUrl: 'home';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService){}


logout(){

      this.authenticationService.logout();
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

}

  ngOnInit() {
    if(this.Currentuser){
      this.Currentuser = JSON.parse(localStorage.getItem('currentUser'));

    }
      else {
        this.Currentuser = empty;
    }
  }

}
