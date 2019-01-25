import { Component } from '@angular/core';
// RxJS
import { ReplaySubject } from "rxjs/ReplaySubject";
import { ArrayObservable } from "rxjs/observable/ArrayObservable";
import { IonicPage, Nav,NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { InitialLoaderPage } from '../initial-loader/initial-loader';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html', 
})

     

export class LandingPage {
  public loadProgress: number = 0;
  loading:any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController,
    private menu: MenuController) {
   this.loadOtherFiles();
  }
  
  loadOtherFiles(){
    this.loading = this.loadingCtrl.create({
      content: 'Fetching configuration from the server...',
      spinner: 'crescent',
      duration:5000
    });
    this.loading.present();
   
 

  }
  
}
