import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signupData = {
    email: '',
    password: '',
    passwordRetyped: ''
  };

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private af: AngularFire) {
    this.signupData.email = this.navParams.get('email');
  }

  signup() {
    if(this.signupData.password !== this.signupData.passwordRetyped) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Your password and your re-entered password does not match each other.',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    // Firebase Signup Code
    this.af.auth.createUser({
      email: this.signupData.email,
      password: this.signupData.password
    })
    .then(auth => {
      // Could do something with the Auth-Response
      console.log(auth);
    })
    .catch(err => {
      // Handle error
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }
}