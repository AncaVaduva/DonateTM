import { Component, OnInit } from '@angular/core';
import {AddusersService} from "../addusers.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: 'addusers';
  dataLL:any=[];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private addusersService: AddusersService) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


  }

  addusers() {
    this.loading = true;
    this.addusersService.addusers(this.model.name, this.model.email, this.model.password)
      .subscribe(
        data => {
          this.loading = false;
          //this.router.navigate([this.returnUrl]);

        },
        error => {

          this.loading = false;
        });
  }


}
