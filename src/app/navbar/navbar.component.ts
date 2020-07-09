import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any = null;
  constructor(public route: Router) {
    firebase.auth().onAuthStateChanged( (user) => {
      if(user){
        this.user = user;
      }
      else{
        this.user = null;
      }
    });
  }

  ngOnInit(): void {
  }
  signout(){

    if (this.user){
      firebase.auth().signOut();
      this.route.navigateByUrl('login');
    }
  }

}
