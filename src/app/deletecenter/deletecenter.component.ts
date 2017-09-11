import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DeletecenterService} from "../deletecenter.service";


@Component({
  selector: 'app-deletecenter',
  templateUrl: './deletecenter.component.html',
  styleUrls: ['./deletecenter.component.css']
})
export class DeletecenterComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: 'map';
  dataLL:any=[];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private deletecenterservice: DeletecenterService) {
  }

  ngOnInit() {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


  }
  deleteCenter() {
    this.loading = true;
    this.deletecenterservice.deleteCenter(this.model.namecenterD)
      .subscribe(
        data => {
          this.loading=false
          this.router.navigate([this.returnUrl]);

        },
        error => {

          this.loading = false;
        });
  }


}
