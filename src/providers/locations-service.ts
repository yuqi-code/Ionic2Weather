import { Injectable } from '@angular/core';
import { WeatherLocation } from "../interfaces/weather-location";
import { WeatherPage } from "../pages/weather/weather";

/*
  Generated class for the LocationsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationsServiceProvider {
  locations: Array<WeatherLocation>;

  constructor() {
    this.locations = [
      { title: 'Cape Canaveral, FL', component: WeatherPage, icon: 'pin', loc: { lat: 28.3922, lon: -80.6077 } },
      { title: 'San Francisco, CA', component: WeatherPage, icon: 'pin', loc: { lat: 37.7749, lon: -122.4194 } },
      { title: 'Vancouver, BC', component: WeatherPage, icon: 'pin', loc: { lat: 49.2827, lon: -123.1207 } },
      { title: 'Madison, WI', component: WeatherPage, icon: 'pin', loc: { lat: 43.0742365, lon: -89.381011899 } }
    ];
  }

  getLocations(){
    return Promise.resolve(this.locations);
  }

  removeLocation(loc: WeatherLocation){
    let index = this.locations.indexOf(loc);
    if(index != -1){
      this.locations.splice(index, 1);
    }
  }

  addLocation(loc: WeatherLocation){
    this.locations.push(loc);
  }
}
