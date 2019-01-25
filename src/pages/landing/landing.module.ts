import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandingPage } from './landing';
import { InitialLoaderPage } from '../initial-loader/initial-loader';
@NgModule({
  declarations: [
    LandingPage
    
  ],
  imports: [
    IonicPageModule.forChild(LandingPage),
  ],
})
export class LandingPageModule {}
