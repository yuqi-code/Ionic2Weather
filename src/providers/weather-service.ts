import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map';
import { CurrentLoc } from "../interfaces/current-loc";

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

  Load(currentLoc: CurrentLoc) {
    if(this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      // this.http.get<Response>('assets/data/data.json')
      this.http.get<Response>('/api/forecast/' + currentLoc.lat + ',' + currentLoc.lon)
        // .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    });
  }

  getWeather(currentLoc: CurrentLoc){
    this.data = null;
    return this.Load(currentLoc).then(data => {
      return data;
    })
  }
}
