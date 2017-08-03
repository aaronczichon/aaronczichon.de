import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, private afAuth: AngularFireAuth, private statusBar: StatusBar, private splashscreen: SplashScreen) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth)
        this.rootPage = LoginPage;
      else
        this.rootPage = HomePage;
    });
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashscreen.hide();
    });
  }
}
