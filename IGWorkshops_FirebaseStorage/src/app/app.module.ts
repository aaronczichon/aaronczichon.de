import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AngularFireModule } from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { ImageProvider } from '../providers/image-provider';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    Camera,
    ImageProvider
    ]
})
export class AppModule {}
