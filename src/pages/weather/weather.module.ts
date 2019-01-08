import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeatherPage } from './weather';
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    WeatherPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(WeatherPage),
  ],
})
export class WeatherPageModule {}
