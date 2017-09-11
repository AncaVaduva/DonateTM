import { Component, OnInit } from '@angular/core';
import {AdddonatorService} from '../adddonator.service'
@Component({
  selector: 'app-adddonator',
  templateUrl: './adddonator.component.html',
  styleUrls: ['./adddonator.component.css']
})
export class AdddonatorComponent implements OnInit {
model:any={}
loading =false;
  constructor(
    private adddonatorService: AdddonatorService
  ) { }

  ngOnInit() {
  }
 adddonator(){
   this.loading=false;
    this.adddonatorService.adddonator(this.model.name, this.model.prenume,
                          this.model.age, this.model.blood, this.model.address, this.model.CNP)
      .subscribe(
        data=>{
          this.loading=false;
        },
        error => {
          this.loading =false;
   }
      )
 }
}
