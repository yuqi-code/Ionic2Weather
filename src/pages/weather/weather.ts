import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Refresher } from 'ionic-angular';
import { WeatherServiceProvider } from "../../providers/weather-service";

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  theWeather: any = {};
  currentData: any = {};
  day1: any = {};
  day2: any = {};
  day3: any = {};
  loader: LoadingController;
  refresher: Refresher;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public weatherService: WeatherServiceProvider,
              public loadingCtl: LoadingController) {
    let loader = this.loadingCtl.create({
      content: "Loading weather data...",
      duration: 3000
    });

    this.weatherService.getWeather().then(theResult => {
      this.theWeather = theResult;
      this.currentData = this.theWeather.currently;
      this.day1 = this.theWeather.daily.data[0];
      this.day2 = this.theWeather.daily.data[1];
      this.day3 = this.theWeather.daily.data[2];

      loader.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }

  doRefresh(refresher){
    setTimeout(() => {
      refresher.complete();
    }, 2000)
  }
}
