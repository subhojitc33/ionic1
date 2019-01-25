import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { OAuth, DataService } from 'forcejs';

import { LandingPage } from '../landing/landing';
declare var window: any;
@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  
  slides = [
    { 
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number",
      image: "../assets/imgs/logo.png",
    },
    {  
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK ",
      image: "../assets/imgs/logo.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling ",
      image: "../assets/imgs/logo.png",
    }
  ];
  public constructor(public navCtrl: NavController) {

  }
  gotoInitialnLoading() {
    console.log('navigate');
    this.navCtrl.push(LandingPage);
  }
  initiateLogin (){
  
    console.log('Login started');
    let oauth = OAuth.createInstance();
    oauth.login()
      .then(oauthResult => {
        console.log(oauthResult);
        this.gotoInitialnLoading();
      });

  
    
 
  }

}