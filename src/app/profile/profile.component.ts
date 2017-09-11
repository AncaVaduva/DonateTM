import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {empty} from "rxjs/Observer";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
model:any={};
  Currentuser: any=[];
  constructor() { }

  ngOnInit() {
    if(this.Currentuser){
      this.Currentuser = JSON.parse(localStorage.getItem('currentUser'));

    }
    else {
      this.Currentuser = empty;
    }
  }
  toggleReadOnly(){

    this.isReadOnly = !this.isReadOnly;
    var fieldElement = <HTMLInputElement>document.getElementById('inputReadonly_add');
    console.log(fieldElement);
    if (this.isReadOnly){
      fieldElement.readOnly = true;
      this.inputReadonly_add = "it's readonly now";
    }
    else{
      fieldElement.readOnly = false;
      this.inputReadonly_add = "feel free to edit";
    }
  }

  private isReadOnly:boolean=false;
  private inputReadonly_add:string="tezt";
}
