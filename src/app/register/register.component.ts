import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model:any ={}
  constructor(private registerService : RegisterService) { }

  ngOnInit() {
  }
  register(){
  this.registerService.register(this.model.name, this.model.email, this.model.password)
    .subscribe(
      data=> {

      },
      error =>{

      }
    )

  }
}
