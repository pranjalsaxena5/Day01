import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WindowService } from './../services/window.service';

import { RecaptchaModule } from 'ng-recaptcha';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// declare global {
//   interface Window { recaptchaVerifier: any;
//     confirmationResult: any; }
// }

export class PhoneNumber{
  country: string;
  area: string;
  prefix: string;
  line: string;

  constructor() {
  }
  get e164(){
    const num = this.country + this.area + this.prefix + this.line;
    return `+${num}`;
  }
}
@Component({
  selector: 'app-phonelogin',
  templateUrl: './phonelogin.component.html',
  styleUrls: ['./phonelogin.component.css']
})

export class PhoneloginComponent implements OnInit {
  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  user: any;
  constructor(private win: WindowService, public route: Router) {}
  ngOnInit(): void {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
    // this.phoneNumber.area = 'Hello';
  }
sendLoginCode(){
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
    .then( (result) => {
      this.windowRef.confirmationResult = result;
      console.log(result);
    }).catch( (Err) => {
      console.log(Err);
    });
  }
verifyLoginCode(){
    this.windowRef.confirmationResult.confirm(this.verificationCode).then( (result) => {
      this.user = result.user;
    }).catch( (Err) => {
      console.log(Err);
    });
    this.route.navigateByUrl('userhome');
  }
}

