import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GeocodeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeocodeServiceProvider {
  data: any;
  apikey: String = 'YOUR-API-KEY-HERE';

  constructor(public http: HttpClient) {
    console.log('Hello GeocodeServiceProvider Provider');

    this.data  = null;
  }

  getLatLong(address: string){
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
  }
}
