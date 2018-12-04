import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AddUserPage } from '../pages/add-user/add-user';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AddPage } from '../pages/add/add';


export const firebaseConfig = {
  apiKey: "AIzaSyBhPvc8u0NopMHZ-Ha2k0e4Sr2nPhlQZ3Y",
  authDomain: "vivid-bond-223806.firebaseapp.com",
  databaseURL: "https://vivid-bond-223806.firebaseio.com",
  projectId: "vivid-bond-223806",
  storageBucket: "vivid-bond-223806.appspot.com",
  messagingSenderId: "958359535540"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    AddUserPage,
    UserDetailsPage,
    AddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
   
  ],  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    AddUserPage,
    UserDetailsPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,  
  
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FirebaseProvider
  ]
})
export class AppModule {}
