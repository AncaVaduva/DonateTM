import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addalarm',
  templateUrl: './addalarm.component.html',
  styleUrls: ['./addalarm.component.css']
})
export class AddalarmComponent implements OnInit {
  model:any={};
  public typesAlarm = [
    { value: 'Blodd', display: 'Cand este nevoie de sange' },
    { value: '6months', display: 'La 6 luni de la ultima donare' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
