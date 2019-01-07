import { HttpClient } from '@angular/common/http';
// import  { Http } from "@angular/http";

import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map';

/*
  Generated class for the WeatherServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherServiceProvider {
  data: any = null;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherServiceProvider Provider');
  }

  Load() {
    if(this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get<Response>('assets/data/data.json')
        // .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  getWeather(){
    return this.Load().then(data => {
      return data;
    })
  }
}
