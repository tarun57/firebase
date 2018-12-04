import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AddUserPage } from '../add-user/add-user';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  f:FormGroup;
  value:any;
  myemail:any;
  mypassword:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,
    public afAuth : AngularFireAuth ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }

  submit(){
   
     this.afAuth.auth.signInWithEmailAndPassword(this.myemail,this.mypassword);
     this.navCtrl.setRoot(AddUserPage);
   
  }
}
  