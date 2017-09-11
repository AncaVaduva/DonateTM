import { Injectable } from '@angular/core';
import  {Http} from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class MapService {

  constructor(private  http:Http) {}
    getCoordonate(){
      return this.http.get('/api/map')
        .map(res => res.json());

    }
}
