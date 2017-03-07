import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';

import { AngularFire } from 'angularfire2';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, private af: AngularFire) {
    this.af.auth.subscribe(auth => {
      if (!auth)
        this.rootPage = LoginPage;
      else
        this.rootPage = HomePage;
    });
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
