import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  file;
  imgSrc: string = "https://alscofirstaid.com.au/wp-content/uploads/2014/01/placeholder-150x150.png";
  constructor() { }

  ngOnInit(): void {
  }
  upload(){
    var storage = firebase.storage();
    firebase.auth().onAuthStateChanged( (response) => {
      storage.ref('users/' + response.uid + '/profile.jpg').put(this.file).then( () => {
        console.log('Uploaded!');
      }).catch( (err) => {
        console.log(err.message);
      });
      if (response){
        firebase.storage().ref('users/' + response.uid + '/profile.jpg').getDownloadURL().then( url => {
          this.imgSrc = url;
        });
      }
    });
   }
   chooseFile(event){
    this.file = event.target.files[0];
    }
}
