import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AngularFireModule } from 'angularfire2';

var config = {
    apiKey: "<YOUR-API-KEY>",
    authDomain: "<YOUR-DOMAIN>.firebaseapp.com",
    databaseURL: "https://<YOUR-PROJECT-NAME>.firebaseio.com",
    storageBucket: "<YOUR-PROJECT-NAME>.appspot.com",
    messagingSenderId: "<YOUR-SENDER-ID>"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
