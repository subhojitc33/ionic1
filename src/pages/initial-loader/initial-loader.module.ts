import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InitialLoaderPage } from './initial-loader';

@NgModule({
  declarations: [
    InitialLoaderPage,
  ],
  
  imports: [
    InitialLoaderPage,
    IonicPageModule.forChild(InitialLoaderPage),
  ],
})
export class InitialLoaderPageModule {



  public constructor() {

  }

}
