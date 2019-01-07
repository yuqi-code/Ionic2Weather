import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { WeatherPage } from "../pages/weather/weather";
import { LocationsPage } from "../pages/locations/locations";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WeatherServiceProvider } from '../providers/weather-service';
import { GeocodeServiceProvider } from '../providers/geocode-service';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    WeatherPage,
    LocationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WeatherPage,
    LocationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherServiceProvider,
    GeocodeServiceProvider
  ]
})
export class AppModule {}
