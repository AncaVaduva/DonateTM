import { Component, OnInit } from '@angular/core';
import {MapService} from "../map.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  centre:any=[];
  lat: number = 45.7411191;
  lng: number = 21.1814846;
  zoom:number=13;
  iconUrl:string="../../assets/donate.png";


  constructor(private  mapService: MapService) { }

  ngOnInit() {
    this.mapService.getCoordonate().subscribe(centre =>{
      this.centre=centre;

      //console.log(centre);
    })

  }


}
