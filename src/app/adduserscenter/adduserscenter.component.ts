import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-adduserscenter',
  templateUrl: './adduserscenter.component.html',
  styleUrls: ['./adduserscenter.component.css']
})
export class AdduserscenterComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: 'adduserscenter';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService){}


  ngOnInit() {

  }

  adduserscenter() {}
}

