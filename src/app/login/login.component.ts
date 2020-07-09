import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  myForm: FormGroup;
  message: string = '';
  userError: any;

  constructor(public fb: FormBuilder, public router: Router) {
    this.myForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    })

   }

  ngOnInit(): void {
  }


  onSubmit(form){
  firebase.auth().signInWithEmailAndPassword(form.value.email, form.value.password).then( (user) => {
    console.log(user);

    if (user.user.emailVerified){
      firebase.auth().signInWithEmailAndPassword(form.value.email, form.value.password).then( () => {
        this.message = "You've logged in successfully";
      }).catch( (err) => {
        console.log(err);
      });
    } else if(user){
      firebase.auth().signOut();
      alert('Please verify your email!');
    }
    this.router.navigateByUrl('/userhome');
  }).catch( (err) => {
    this.userError = err;
    console.log(err);

  });
  }
}
