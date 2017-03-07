import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginData = {
    email: '',
    password: ''
  }
  constructor(private navCtrl: NavController, private af: AngularFire, private toastCtrl: ToastController) { }

  login() {
    // Login Code her
    this.af.auth.login({
      email: this.loginData.email,
      password: this.loginData.password
    }, {
      method: AuthMethods.Password,
      provider: AuthProviders.Password
    })
    .then(auth => {
      // Do custom things with auth
    })
    .catch(err => {
      // Handle error
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 1000
      });
      toast.present();
    });
  }

  signup() {
    this.navCtrl.push(SignupPage, { email: this.loginData.email });
  }
}