import { Component, OnInit } from '@angular/core';
import {SearchdonatorService} from '../searchdonator.service'
import {map} from "rxjs/operator/map";
@Component({
  selector: 'app-searchdonator',
  templateUrl: './searchdonator.component.html',
  styleUrls: ['./searchdonator.component.css']
})
export class SearchdonatorComponent implements OnInit {
model:any={};
dataDonator:any=[];
  constructor(private searchDonatorService: SearchdonatorService ) { }

  ngOnInit() {
  }
  searchdonator(){
    this.searchDonatorService.searchdonator(this.model.CNP)
      .subscribe(
        data =>{
              this.dataDonator =data;
              console.log(this.dataDonator);
        },
        error =>{

    }
      )
  }

}
