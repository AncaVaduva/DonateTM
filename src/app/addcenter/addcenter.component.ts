///<reference path="../../../node_modules/@types/googlemaps/index.d.ts"/>
import {Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {AddcenterService} from "../addcenter.service";



@Component({
  selector: 'app-addcenter',
  templateUrl: './addcenter.component.html',
  styleUrls: ['./addcenter.component.css']
})
export class AddcenterComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: 'map';
  dataLL:any=[];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private addcenterservice: AddcenterService) {
  }

  ngOnInit() {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


  }

  addcenter() {
    this.loading = true;
    this.addcenterservice.addcenter(this.model.namecenter, this.model.address, this.model.phone)
      .subscribe(
        data => {
          this.loading=false
          //this.router.navigate([this.returnUrl]);


        },
        error => {

          this.loading = false;
        });
  }


}

