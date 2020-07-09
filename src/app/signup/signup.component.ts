import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message: string = '';

  emailVerified: false;
  userError;
  myForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email,  Validators.required]],
      phone: ['', [Validators.minLength(8), Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
   }
  onSubmit(form){

    firebase.auth().createUserWithEmailAndPassword(form.value.email, form.value.password).then((response) => {
      console.log(response);
      const x = Math.floor(Math.random() * 1000);
      response.user.updateProfile({
        displayName: form.value.firstName + ' ' + form.value.lastName,
        photoURL: 'https://www.api.adorable.io/avatar/' + x,
      });
      firebase.firestore().collection("users").doc(response.user.uid).set({
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        phone: form.value.phone,
      }).then(() => {
        this.message = 'You have been successfully signed up!';
      }).catch((error) => {
        console.log(error);
      });

    }).catch((error) => {
      console.log(error);
      this.userError = error;
    });

    this.sendVerification();
  }
  sendVerification(){
    firebase.auth().onAuthStateChanged( (user) =>{
      console.log(user);
      user.sendEmailVerification().then( () => {
        console.log("Email Sent!");
      }).catch( (err) => {
        console.log(err);
      });
    });
  }
ngOnInit(): void {}



}
