import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { LoginComponent } from './login/login.component';
import { PhoneloginComponent } from './phonelogin/phonelogin.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { FileuploadComponent } from './fileupload/fileupload.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
const firebaseConfig = {
  apiKey: 'AIzaSyBYWiLnB5Jhg-if3_x_dgsKa-JvtE3rbjU',
  authDomain: 'oyebusy-3abc6.firebaseapp.com',
  databaseURL: 'https://oyebusy-3abc6.firebaseio.com',
  projectId: 'oyebusy-3abc6',
  storageBucket: 'oyebusy-3abc6.appspot.com',
  messagingSenderId: '937397608711',
  appId: '1:937397608711:web:84d977407332e5e33d25a2',
  measurementId: 'G-GJSDZQ5VJC'
};
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PhoneloginComponent,
    FileuploadComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,
    HttpClientModule,
    // RecaptchaModule.forRoot(),

  ],
  providers: [
    Window,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
