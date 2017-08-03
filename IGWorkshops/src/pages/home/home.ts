import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private auth: AngularFireAuth) { }

  signOut() {
    this.auth.auth.signOut();
  }
}
