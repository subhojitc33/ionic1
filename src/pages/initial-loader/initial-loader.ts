import { Component, Input} from '@angular/core';
import { IonicPage,LoadingController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-initial-loader',
  templateUrl: 'initial-loader.html',
})
export class InitialLoaderPage {
  @Input('progress') progress:Number;
  constructor(private loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitialLoaderPage');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
  }
  
}
